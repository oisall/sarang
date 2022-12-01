import axios from "axios";
import { all, delay, put, fork, takeLatest, throttle,call } from "redux-saga/effects";
import {LIKE_POST_REQUEST,UNLIKE_POST_REQUEST, generateDummyPost,REMOVE_POST_SUCCESS,ADD_POST_SUCCESS, ADD_POST_FAILURE, ADD_POST_REQUEST, ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE, REMOVE_POST_REQUEST, LOAD_POSTS_REQUEST, LOAD_POSTS_SUCCESS, LOAD_POSTS_FAILURE, LIKE_POST_SUCCESS, LIKE_POST_FAILURE, UNLIKE_POST_SUCCESS, UNLIKE_POST_FAILURE, UPLOAD_IMAGES_REQUEST, UPLOAD_IMAGES_SUCCESS, UPLOAD_IMAGES_FAILURE, RETWEET_REQUEST, RETWEET_SUCCESS, RETWEET_FAILURE, LOAD_POST_REQUEST, LOAD_POST_SUCCESS, LOAD_POST_FAILURE, LOAD_USER_POSTS_REQUEST, LOAD_HASHTAG_POSTS_REQUEST, LOAD_USER_POSTS_SUCCESS, LOAD_USER_POSTS_FAILURE, LOAD_HASHTAG_POSTS_SUCCESS, LOAD_HASHTAG_POSTS_FAILURE } from "../reducers/post";
import { ADD_POST_TO_ME, FOLLOW_FAILURE, FOLLOW_REQUEST, FOLLOW_SUCCESS, REMOVE_POST_OF_ME, UNFOLLOW_FAILURE, UNFOLLOW_REQUEST, UNFOLLOW_SUCCESS } from '../reducers/user';

function likePostAPI(data) {
    return axios.patch(`/post/${data}/like`)
}

function* likePost(action) {
    try {

        const result = yield call(likePostAPI,action.data)
   

        console.log(action.data+'data 뭐야 씨발')

        yield put({

            type: LIKE_POST_SUCCESS,
            data: result.data,

        });

    } catch (err) {

        yield put({

            type: LIKE_POST_FAILURE,
            error: err.response.data
        })
    }
}


function unlikePostAPI(data) {
    return axios.delete(`/post/${data}/like`)
}

function* unlikePost(action) {
    try {

        const result = yield call(unlikePostAPI,action.data)
   

        console.log(action.data+'data 뭐야 씨발')

        yield put({

            type: UNLIKE_POST_SUCCESS,
            data: result.data,

        });

    } catch (err) {

        yield put({

            type: UNLIKE_POST_FAILURE,
            error: err.response.data
        })
    }
}


function loadPostAPI(data) {
    return axios.get(`/post/${data}`)
}

function* loadPost(action) {
    try {

        const result = yield call(loadPostAPI,action.data)
   



        yield put({

            type: LOAD_POST_SUCCESS,
            data: result.data,

        });

    } catch (err) {

        yield put({

            type: LOAD_POST_FAILURE,
            error: err.response.data
        })
    }
}

function loadPostsAPI(lastId) {
    return axios.get(`/posts?lastId=${lastId || 0}`)
}

function* loadPosts(action) {
    try {

        const result = yield call(loadPostsAPI,action.lastId)
   

        console.log(result+'lastId 뭐야 씨발')

        yield put({

            type: LOAD_POSTS_SUCCESS,
            data: result.data,

        });

    } catch (err) {

        yield put({

            type: LOAD_POSTS_FAILURE,
            error: err.response.data
        })
    }
}


function userPostsAPI(data,lastId) {
    return axios.get(`/user/${data}/posts?lastId=${lastId || 0}`)
}

function* userPosts(action) {
    try {

        const result = yield call(userPostsAPI,action.data,action.lastId)
   

        console.log(result+'lastId 뭐야 씨발')

        yield put({

            type: LOAD_USER_POSTS_SUCCESS,
            data: result.data,

        });

    } catch (err) {

        yield put({

            type: LOAD_USER_POSTS_FAILURE,
            error: err.response.data
        })
    }
}


function hashtagPostsAPI(data,lastId) {
    return axios.get(`/hashtag/${encodeURIComponent(data)}?lastId=${lastId || 0}`)
}

function* hashtagPosts(action) {
    try {

        const result = yield call(hashtagPostsAPI,action.data,action.lastId)
   

        console.log(result+'lastId 뭐야 씨발')

        yield put({

            type: LOAD_HASHTAG_POSTS_SUCCESS,
            data: result.data,

        });

    } catch (err) {

        yield put({

            type: LOAD_HASHTAG_POSTS_FAILURE,
            error: err.response.data
        })
    }
}


// function loadPostAPI(data) {
//     return axios.get('/post', data)
// }

// function* loadPost(action) {
//     try {

//         const result = yield call(loadPostAPI,action.data)
   

//         console.log(action.data+'data 뭐야 씨발')

//         yield put({

//             type: LOAD_POSTS_SUCCESS,
//             data: result.data,

//         });

//     } catch (err) {

//         yield put({

//             type: LOAD_POSTS_FAILURE,
//             data: err.response.data
//         })
//     }
// }




function addPostAPI(data) {
    return axios.post('/post', data)
}

function* addPost(action) {
    try {

        const result = yield call(addPostAPI,action.data)
        
        console.log(action.data)
        yield put({

            type: ADD_POST_SUCCESS,
            data: result.data,

        });

        yield put({
            type: ADD_POST_TO_ME, 
            data:result.data.id
        })
    } catch (err) {

        yield put({

            type: ADD_POST_FAILURE,
            error: err.response.data
        })
    }
}



function removePostAPI(data) {
    return axios.delete(`/post/${data}`)
}

function* removePost(action) {
    try {

        const result = yield call(removePostAPI,action.data)
       
        yield put({

            type: REMOVE_POST_SUCCESS,
            data: result.data
        });

        yield put({
            type: REMOVE_POST_OF_ME, 
            data:action.data
        })
    } catch (err) {
        console.error(err)
        yield put({

            type: REMOVE_POST_FAILURE,
            error: err.response.data
        })
    }
}



function addCommentAPI(data) {
    return axios.post(`/post/${data.postId}/comment`, data)
}

function* addComment(action) {
    try {

        const result = yield call(addCommentAPI,action.data)
  
        console.log('코멘트')
        console.log(result)
        yield put({

            type: ADD_COMMENT_SUCCESS,
            data: result.data
        })
    } catch (err) {

        yield put({

            type: ADD_COMMENT_FAILURE,
            error: err.response.data
        })
    }

}

function uploadImagesAPI(data) {
    return axios.post('/post/images', data)
}

function* uploadImages(action) {
    try {

        const result = yield call(uploadImagesAPI,action.data)
  
        console.log('코멘트')
        console.log(result)

        yield put({

            type: UPLOAD_IMAGES_SUCCESS,
            data: result.data
        })
    } catch (err) {

        yield put({

            type: UPLOAD_IMAGES_FAILURE,
            error: err.response.data
        })
    }

}


function retweetAPI(data) {
    return axios.post(`/post/${data}/retweet`)
}

function* retweet(action) {
    try {

        const result = yield call(retweetAPI,action.data)
  
        console.log('코멘트')
        console.log(result)

        yield put({

            type: RETWEET_SUCCESS,
            data: result.data
        })
    } catch (err) {

        yield put({

            type: RETWEET_FAILURE,
            error: err.response.data
        })
    }

}

function* watchRetweet() {
    yield takeLatest(RETWEET_REQUEST, retweet);
}

function* watchUploadImages() {
    yield takeLatest(UPLOAD_IMAGES_REQUEST, uploadImages);
}

function* watchLikePost() {
    yield takeLatest(LIKE_POST_REQUEST, likePost);
}
function* watchUnlikePost() {
    yield takeLatest(UNLIKE_POST_REQUEST, unlikePost);
}


function* watchAddPost() {
    yield takeLatest(ADD_POST_REQUEST, addPost);
}
// function* watchLoadPost() {
//     yield throttle(5000,LOAD_POSTS_REQUEST, loadPost);
// }
function* watchLoadPosts() {
    yield throttle(5000,LOAD_POSTS_REQUEST, loadPosts);
}
function* watchLoadPost() {
    yield throttle(5000,LOAD_POST_REQUEST, loadPost);
}
function* watchUserLoadPosts() {
    yield throttle(5000,LOAD_USER_POSTS_REQUEST, userPosts);
}
function* watchHashtagLoadPosts() {
    yield throttle(5000,LOAD_HASHTAG_POSTS_REQUEST, hashtagPosts);
}
function* watchRemovePost() {
    yield takeLatest(REMOVE_POST_REQUEST, removePost);
}

function* watchAddComment() {
    yield takeLatest(ADD_COMMENT_REQUEST, addComment);
}


export default function* postSaga() {
    yield all([
        fork(watchUploadImages),
        fork(watchRetweet),
        fork(watchAddPost),
        fork(watchLikePost),
        fork(watchUnlikePost),

        // fork(watchLoadPost),
        fork(watchLoadPosts),
        fork(watchUserLoadPosts),
        fork(watchHashtagLoadPosts),
        fork(watchLoadPost),
        fork(watchRemovePost),
        fork(watchAddComment),
    ])
}