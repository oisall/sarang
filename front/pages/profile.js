import React, { useCallback, useEffect, useState } from 'react';
import AppLayout from '../components/AppLayout';
import Head from 'next/head';
import NicknameEditForm from '../components/NicknameEditForm';
import FollowingsList from '../components/FollowingsList';
import { useDispatch, useSelector } from 'react-redux';
import {LOAD_FOLLOWERS_REQUEST, LOAD_FOLLOWINGS_REQUEST} from '../reducers/user'
import Router from 'next/router';
import useSWR from 'swr';
import axios from 'axios';
import { LOAD_MY_INFO_REQUEST } from '../reducers/user';
import wrapper from '../store/configureStore';
import { backUrl } from '../config/config';
import { END } from 'redux-saga';

const fetcher=(url)=>axios.get(url,{withCredentials:true}).then((result)=>result.data);

const Profile = () => {
    const dispatch = useDispatch();

    const {me} = useSelector((state)=>state.user);
    const [followersLimit,setFollowersLimit] =useState(3);
    const [followingsLimit,setFollowingsLimit] =useState(3);

    const { data: followersData, error: followerError } = useSWR(`${backUrl}/user/followers?limit=${followersLimit}`, fetcher);
    const { data: followingsData, error: followingError } = useSWR(`${backUrl}/user/followings?limit=${followingsLimit}`, fetcher);


useEffect(()=>{
    if(!(me&& me.id)){
        Router.push('/');
    }

},[me&&me.id])

const loadMoreFollowings = useCallback(()=>{
    setFollowingsLimit((prev)=>prev+3);
},[])
const loadMoreFollowers = useCallback(()=>{
    setFollowersLimit((prev)=>prev+3);
},[])

if(!me){
    return '내정보 로딩중';
}

if(followerError || followingError){
    console.error(followerError||followingError);
    return <div>팔로잉/팔로워 로딩 중 에러가 발생합니다.</div>
}

    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <title>My Profile | Pick-Me</title>
            </Head>
            <AppLayout>
                <NicknameEditForm/>
                <FollowingsList header="팔로잉" data={followingsData} onClickMore={loadMoreFollowings} loading={!followingsData && !followingError}/>
                <FollowingsList header="팔로워" data={followersData} onClickMore={loadMoreFollowers} loading={!followersData && !followerError}/>
            </AppLayout>
        </>

    );

};

export const getServerSideProps = wrapper.getServerSideProps( store =>async({req,res,params}) =>{
    console.log('getServerSideProps start');

    const cookie = req ? req.headers.cookie : '';
    axios.defaults.headers.Cookie = '';
    if (req && cookie) {
      axios.defaults.headers.Cookie = cookie;
    }
    store.dispatch({
      type: LOAD_MY_INFO_REQUEST,
    });
    store.dispatch(END);
    console.log('getServerSideProps end');
    await store.sagaTask.toPromise();
  });
  
export default Profile;