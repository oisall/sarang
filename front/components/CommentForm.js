import React, { useCallback, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { Form, Button, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { ADD_COMMENT_REQUEST } from "../reducers/post";

const CommentForm = ({ post }) => {
    const dispatch = useDispatch();
    const id = useSelector((state) => state.user.me?.id);
    const {addCommentDone,addCommentLoading} = useSelector((state) => state.post);
    // const [commentText,onChnageCommentText] = useInput('');
    const [commentText, setCommentText] = useState('');

    const onChnageCommentText = useCallback((e) => {
        setCommentText(e.target.value)
    }, [])

    useEffect(()=>{

        if(addCommentDone){
            setCommentText('');
        }
    },[addCommentDone])

    const onSubmitComment = useCallback(() => {
     
        dispatch({
            type: ADD_COMMENT_REQUEST,
            data: { content: commentText, postId: post.id, userId: id }
        })

    }, [commentText, id])

    return (
        <Form onFinish={onSubmitComment}>
            <Form.Item>
                <Input.TextArea
                    value={commentText}
                    onChange={onChnageCommentText}
                    rows={4}
                />
                <Button 
                
                style={{position:'absolute',right:0,bottom:-40,zIndex:1}}
                loading={addCommentLoading}
                type='primary' htmlType='submit'>삐약</Button>


            </Form.Item>
        </Form>
    )
}

CommentForm.prototype = {
    post: PropTypes.object.isRequired
}
export default CommentForm;