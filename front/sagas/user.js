import axios from "axios";
import { all ,fork,takeLatest,delay,put,call} from "redux-saga/effects";
import { LOAD_MY_INFO_REQUEST,LOAD_MY_INFO_SUCCESS,LOAD_MY_INFO_FAILURE,LOG_IN_SUCCESS,SIGN_UP_SUCCESS,SIGN_UP_REQUEST,FOLLOW_FAILURE,FOLLOW_REQUEST,FOLLOW_SUCCESS,LOG_IN_FAILURE,LOG_IN_REQUEST,LOG_OUT_FAILURE,LOG_OUT_REQUEST,LOG_OUT_SUCCESS,SIGN_UP_FAILURE, UNFOLLOW_REQUEST, UNFOLLOW_FAILURE, UNFOLLOW_SUCCESS, CHANGE_NICKNAME_REQUEST, CHANGE_NICKNAME_FAILURE, CHANGE_NICKNAME_SUCCESS, LOAD_FOLLOWERS_REQUEST, LOAD_FOLLOWINGS_REQUEST, LOAD_FOLLOWERS_SUCCESS, LOAD_FOLLOWERS_FAILURE, LOAD_FOLLOWINGS_SUCCESS, LOAD_FOLLOWINGS_FAILURE, REMOVE_FOLLOWER_REQUEST, REMOVE_FOLLOWER_SUCCESS, REMOVE_FOLLOWER_FAILURE, LOAD_USER_REQUEST, LOAD_USER_SUCCESS, LOAD_USER_FAILURE } from "../reducers/user";



function removeFollowerAPI(data) {
    console.log('팔로워삭제데이터')
    console.log(data)
    return axios.delete(`/user/follower/${data}`);
}

function* removeFollower(action) {
    try {
        console.log('saga removeFollowerAPI')
        const result = yield call(removeFollowerAPI,action.data)

        yield put({

            type: REMOVE_FOLLOWER_SUCCESS,
            data: result.data
        
        })
    } catch (err) {

        yield put({

            type: REMOVE_FOLLOWER_FAILURE,
            error: err.response.data
        })
    }
}

function loadFollowersAPI(data) {
    return axios.get('/user/followers',data);
}

function* loadFollowers(action) {
    try {
        console.log('saga followers')
        const result = yield call(loadFollowersAPI,action.data)

        yield put({

            type: LOAD_FOLLOWERS_SUCCESS,
            data: result.data
        
        })
    } catch (err) {

        yield put({

            type: LOAD_FOLLOWERS_FAILURE,
            error: err.response.data
        })
    }
}

function loadFollowingsAPI(data) {
    return axios.get('/user/followings',data);
}

function* loadFollowings(action) {
    try {
        console.log('saga followings')
        const result = yield call(loadFollowingsAPI,action.data)

        yield put({

            type: LOAD_FOLLOWINGS_SUCCESS,
            data: result.data
        
        })
    } catch (err) {

        yield put({

            type: LOAD_FOLLOWINGS_FAILURE,
            error: err.response.data
        })
    }
}


function changeNicknameAPI(data) {
    return axios.patch('/user/nickname',{nickname:data});
}

function* changeNickname(action) {
    try {
        console.log('saga nickname')
        const result = yield call(changeNicknameAPI,action.data)

        yield put({

            type: CHANGE_NICKNAME_SUCCESS,
            data: result.data
        
        })
    } catch (err) {

        yield put({

            type: CHANGE_NICKNAME_FAILURE,
            error: err.response.data
        })
    }
}
function loadUserAPI(data) {
    return axios.get(`/user/${data}`);
}

function* loadUser(action) {
    try {
        console.log('saga loadUserAPI')
        const result = yield call(loadUserAPI,action.data)

        yield put({

            type: LOAD_USER_SUCCESS,
            data: result.data
        
        })
    } catch (err) {

        yield put({

            type: LOAD_USER_FAILURE,
            error: err.response.data
        })
    }

}


function loadMyInfoAPI() {
    return axios.get('/user');
}

function* loadMyInfo() {
    try {
        console.log('saga user')
        const result = yield call(loadMyInfoAPI)

        yield put({

            type: LOAD_MY_INFO_SUCCESS,
            data: result.data
        
        })
    } catch (err) {

        yield put({

            type: LOAD_MY_INFO_FAILURE,
            error: err.response.data
        })
    }

}

function logInAPI(data) {
    return axios.post('/user/login',data);
}

function* logIn(action) {
    try {
        console.log('saga login')
        const result = yield call(logInAPI,action.data)

        yield put({

            type: LOG_IN_SUCCESS,
            data: result.data
        
        })
    } catch (err) {

        yield put({

            type: LOG_IN_FAILURE,
            error: err.response.data
        })
    }

}


function logOutAPI() {

    return axios.post('/user/logout')
}

function* logOut() {
    try {

        yield call(logOutAPI)

        yield put({

            type: LOG_OUT_SUCCESS,
            // data: result.data
        })
    } catch (err) {

        yield put({

            type: LOG_OUT_FAILURE,
            error: err.response.data
        })
    }
}

function signUpAPI(data) {
    return axios.post('/user',data)
}

function* signUp(action) {
    try {

        const result = yield call(signUpAPI,action.data);
        console.log(result);

        yield put({

            type: SIGN_UP_SUCCESS,
            // data: result.data
        })
    } catch (err) {

        yield put({

            type: SIGN_UP_FAILURE,
            error: err.response.data
        })
    }
}

function followAPI(data) {
    return axios.patch(`/user/${data}/follow`)
}

function* follow(action) {
    try {

        const result = yield call(followAPI,action.data)
        
     
     
        yield put({

            type: FOLLOW_SUCCESS,
            data:  result.data,
             

        });

    } catch (err) {

        yield put({

            type: FOLLOW_FAILURE,
            data: err.response.data
        })
    }
}


function unfollowAPI(data) {
    return axios.delete(`/user/${data}/follow`)
}

function* unfollow(action) {
    try {

        const result = yield call(unfollowAPI,action.data)


        yield put({

            type: UNFOLLOW_SUCCESS,
            data:  result.data,
             

        });

    } catch (err) {

        yield put({

            type: UNFOLLOW_FAILURE,
            data: err.response.data
        })
    }
}

function* watchRmoveFollower() {
    yield takeLatest(REMOVE_FOLLOWER_REQUEST, removeFollower);
}

function* watchLoadFollowers() {
    yield takeLatest(LOAD_FOLLOWERS_REQUEST, loadFollowers);
}

function* watchLoadFollowings() {
    yield takeLatest(LOAD_FOLLOWINGS_REQUEST, loadFollowings);
}

function* watchChangeNickname() {
    yield takeLatest(CHANGE_NICKNAME_REQUEST, changeNickname);
}

function* watchLoadMyInfo() {
    yield takeLatest(LOAD_MY_INFO_REQUEST, loadMyInfo);
}

function* watchLoadUser() {
    yield takeLatest(LOAD_USER_REQUEST, loadUser);
}

function* watchFollow() {
    yield takeLatest(FOLLOW_REQUEST, follow);
}
function* watchUnfollow() {
    yield takeLatest(UNFOLLOW_REQUEST, unfollow);
}



function* watchLogIn() {
    yield takeLatest(LOG_IN_REQUEST, logIn);
}

function* watchLogOut() {
    yield takeLatest(LOG_OUT_REQUEST,logOut);
}

function* watchSignUp() {
    yield takeLatest(SIGN_UP_REQUEST,signUp);
}

export default function* userSaga(){
    yield all([

        fork(watchRmoveFollower),
        fork(watchLoadFollowers),
        fork(watchLoadFollowings),
        fork(watchChangeNickname),
        fork(watchLoadMyInfo),
        fork(watchLoadUser),
        fork(watchFollow),
        fork(watchUnfollow),
        fork(watchLogIn),
        fork(watchLogOut),
        fork(watchSignUp),

    ])
}