import { Card,Comment, List,Button, Popover, Avatar } from "antd";
import React, { useCallback, useEffect, useState } from "react";
import { RetweetOutlined, MessageOutlined, HeartOutlined, EllipsisOutlined, HeartTwoTone } from '@ant-design/icons';
import { useDispatch, useSelector } from "react-redux";
import PropTypes from 'prop-types';
import PostImages from "./PostImages";
import CommentForm from "./CommentForm";
import PostCardContent from "./PostCardContent";
import { REMOVE_POST_REQUEST,LIKE_POST_REQUEST,UNLIKE_POST_REQUEST ,RETWEET_REQUEST, RETWEET_FAILURE} from "../reducers/post";
import FollowButton from "./FollowButton";
import Link from "next/link";
import moment from 'moment'


moment.locale('ko');

const PostCard = ({ post }) => {
    const dispatch = useDispatch();
    const {removePostLoading} = useSelector((state)=>state.post);
    
    const id = useSelector((state) => state.user.me?.id);

    const [commentFormOpened, setCommentFormOpened] = useState(false);



    const onLike = useCallback(() => {
        if(!id){
            alert('로그인이 필요합니다.')
        }
        return  dispatch({
            type:LIKE_POST_REQUEST,
            data: post.id,
        })
    }, [id])
    const onUnlike = useCallback(() => {
        if(!id){
            alert('로그인이 필요합니다.')
        }
        return   dispatch({
            type:UNLIKE_POST_REQUEST,
            data: post.id,
        })
    }, [id])

    const onToggleCOmment = useCallback(() => {
        setCommentFormOpened((prev) => !prev)
    }, [])

const onRemovePost=useCallback(()=>{
    if(!id){
        alert('로그인이 필요합니다.')
    }
    return dispatch({
        type:REMOVE_POST_REQUEST,
        data:post.id
    })
},[])

const liked = post.Likers.find((v)=>v.id===id);

const onRetweet = useCallback(()=>{
    if(!id){
        alert('로그인이 필요합니다.')
    }
    return dispatch({
        type:RETWEET_REQUEST,
        data:post.id

    })
},[id])
    return (
        <div style={{ marginTop: 10 }}>
            <Card
                cover={post.Images[0] && <PostImages images={post.Images} />}
                actions={[
                    <RetweetOutlined key='retweet' onClick={onRetweet}/>,


                    liked&&liked
                        ? <HeartTwoTone twoToneColor="#eb2f96" key="heart" onClick={onUnlike} />
                        : <HeartOutlined key='heart'onClick={onLike} />,

                    <MessageOutlined key='commnet' onClick={onToggleCOmment} />,
                    <Popover key='more' content={(
                        <Button.Group>
                            {id && post.User.id === id ?
                                <>
                                    <Button>수정</Button>
                                    <Button 
                                    onClick={onRemovePost}
                                    loading={removePostLoading}
                                    type='danger'>삭제</Button>
                                </>
                                : <Button>신고</Button>}

                        </Button.Group>
                    )}>
                        <EllipsisOutlined />
                    </Popover>
                ]}
                title={post.RetweetId ? `${post.User.nickname}님이 리트윗하셨습니다`: null}
                extra={id&&<FollowButton post={post}/>}
            >
                {post.RetweetId && post.RetweetId
                    ?(
                        <Card
                        cover={post.Retweet.Images[0] && <PostImages images={post.Retweet.Images} />}
                        >
                            <div style={{float:'right'}}>{moment(post.createdAt).format('YYYY.MM.DD')}</div>
                                 <Card.Meta
                        avatar={(
                        <Link href={`/user/${post.Retweet.User.id}`}>
                            <a><Avatar>{post.User.nickname[0]}</Avatar></a>
                        </Link>
                        )}
                        title={post.User.nickname}
                        description={<PostCardContent postData={post.Retweet.content}/>}
                         />
                        </Card>
                    )
                    :(
<>
<div style={{float:'right'}}>{moment(post.createdAt).format('YYYY.MM.DD')}</div>

                        <Card.Meta
                        avatar={(
                            <Link href={`/user/${post.User.id}`}>
                                <a><Avatar>{post.User.nickname[0]}</Avatar></a>
                            </Link>
                            )}
                        title={post.User.nickname}
                        description={<PostCardContent postData={post.content}/>} />
</>
                    )

                
                }
  
            </Card>
            {commentFormOpened && (
                <div>
                   <CommentForm post={post}/>
                   <List
                   header={`${post.Comments.length}개의 댓글`}
                   itemLayout="horizontal"
                   dataSource={post.Comments}
                   renderItem={(item)=>(
                    <li>
                        <Comment
                        author={item.User&&item.User.nickname}

                        avatar={(
                            <Link href={`/user/${item.User.id}`}>
                                <a><Avatar>{item.User.nickname[0]}</Avatar></a>
                            </Link>
                            )}

                 
                        content={item.content}
                        />
                           
                    </li>
                   )}
                   />

                </div>)}
            {/* <CommentForm/>
    <Comments/> */}
        </div >
    )

}


PostCard.propTypes = {
    post: PropTypes.shape({
        id: PropTypes.number,
        User: PropTypes.object,
        content: PropTypes.string,
        createAt: PropTypes.string,
        Comments: PropTypes.arrayOf(PropTypes.object),
        Images: PropTypes.arrayOf(PropTypes.object),
        Likers: PropTypes.arrayOf(PropTypes.object),
        Retweetid:PropTypes.number,
        Retweet:PropTypes.objectOf(PropTypes.any),
    }).isRequired
}

export default PostCard;