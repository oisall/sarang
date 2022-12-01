import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AppLayout from "../components/AppLayout";
import PostCard from "../components/PostCard";
import PostForm from "../components/PostForm";
import { LOAD_POSTS_REQUEST } from "../reducers/post";
import {LOAD_MY_INFO_REQUEST} from "../reducers/user"
import wrapper from "../store/configureStore";
import {END} from 'redux-saga'
import axios from "axios";



const Home = () => {
    const dispatch = useDispatch();
    const { me } = useSelector((state) => state.user);
    const { mainPosts, hasMorePost,loadPostsLoading,retweetError } = useSelector((state) => state.post);
    
    
    useEffect(()=>{
        if(retweetError){
            alert(retweetError)
        }
    },[retweetError])
    
    useEffect(() => {
        function onScroll() {
            console.log(window.scrollY, document.documentElement.clientHeight, document.documentElement.scrollHeight)
            if (window.scrollY + document.documentElement.clientHeight > document.documentElement.scrollHeight-300) {
            
                if (hasMorePost && !loadPostsLoading) {
                    const lastId = mainPosts[mainPosts.length-1]?.id;
                    dispatch({
                        type: LOAD_POSTS_REQUEST,
                        lastId,
                    })
                }
            }
        }
        window.addEventListener('scroll', onScroll);
        
        return () => {
            window.removeEventListener('scroll', onScroll)
        }
    }, [hasMorePost,loadPostsLoading,mainPosts])
    
    
    return (
        <AppLayout>
            {me && <PostForm />}
            {mainPosts.map((post) => <PostCard key={post.id} post={post} />)}
        </AppLayout>

    );
}




export const getServerSideProps = wrapper.getServerSideProps((store)=>async({req,res})=>{
    
    console.log('컨텍스트')
    const cookie = req ? req.headers.cookie :'';
    axios.defaults.headers.Cookie='';
    if(req && cookie){

        axios.defaults.headers.Cookie = cookie;
    }
    
    store.dispatch({
        type:LOAD_MY_INFO_REQUEST,
    })
    
    store.dispatch({
        type: LOAD_POSTS_REQUEST,
    });

    store.dispatch(END);
    
    await store.sagaTask.toPromise();

})

export default Home;