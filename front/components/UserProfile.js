import React, { useCallback } from "react";
import { Card, Avatar, Button } from 'antd';
import {useDispatch, useSelector} from 'react-redux';
import { logoutRequestAction } from "../reducers/user";
import Link from "next/link";

const UserProfile = () => {
    const dispatch = useDispatch();
    const {me,logOutLoading} = useSelector((state)=>state.user);
const onLogOut = useCallback(()=>{
    dispatch(logoutRequestAction());
})

    return (
        <Card
            actions={[
                <div key="twit"><Link href={`/user/${me.id}`}><a>짹쨱<br />{me.Posts.length}</a></Link></div>,
                <div key="followings"><Link href={'/profile'}><a>followings<br />{me.Followings.length}</a></Link></div>,
                <div key="followers"><Link href={'/profile'}><a>followers<br />{me.Followers.length}</a></Link></div>,
            ]}
        >
            <Card.Meta
                title={me.nickname}
                avatar={(
                    <Link href={`/user/${me.id}`} prefetch={false}>
                        <a><Avatar>{me.nickname[0]}</Avatar></a>
                    </Link>
                    )}
            />
            <Button onClick={onLogOut} loading={logOutLoading}>로그아웃</Button>
        </Card>


    );
}



export default UserProfile;