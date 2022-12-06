module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./config/config.js":
/*!**************************!*\
  !*** ./config/config.js ***!
  \**************************/
/*! exports provided: backUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "backUrl", function() { return backUrl; });
const backUrl = 'https://api.bitfrommind.com';

/***/ }),

/***/ "./node_modules/antd/dist/antd.css":
/*!*****************************************!*\
  !*** ./node_modules/antd/dist/antd.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/dist/antd.css */ "./node_modules/antd/dist/antd.css");
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _store_configureStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/configureStore */ "./store/configureStore.js");
var _jsxFileName = "C:\\Dev\\next_react_node\\front\\pages\\_app.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;





const PickMe = ({
  Component
}) => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, __jsx("meta", {
    charSet: "utf-8",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }), __jsx("title", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }, "PICK-ME")), __jsx(Component, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }));
};
PickMe.propTypes = {
  Component: prop_types__WEBPACK_IMPORTED_MODULE_1__["PropTypes"].elementType.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (_store_configureStore__WEBPACK_IMPORTED_MODULE_4__["default"].withRedux(PickMe));

/***/ }),

/***/ "./reducers/index.js":
/*!***************************!*\
  !*** ./reducers/index.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user */ "./reducers/user.js");
/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./post */ "./reducers/post.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_3__);




const rootReducer = (state, action) => {
  switch (action.type) {
    case next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__["HYDRATE"]:
      console.log('HYDRATE', action);
      return action.payload;
    default:
      {
        const combineReducer = Object(redux__WEBPACK_IMPORTED_MODULE_3__["combineReducers"])({
          user: _user__WEBPACK_IMPORTED_MODULE_1__["default"],
          post: _post__WEBPACK_IMPORTED_MODULE_2__["default"]
        });
        return combineReducer(state, action);
      }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (rootReducer);

/***/ }),

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: initialState, RETWEET_REQUEST, RETWEET_SUCCESS, RETWEET_FAILURE, UPLOAD_IMAGES_REQUEST, UPLOAD_IMAGES_SUCCESS, UPLOAD_IMAGES_FAILURE, LIKE_POST_REQUEST, LIKE_POST_SUCCESS, LIKE_POST_FAILURE, UNLIKE_POST_REQUEST, UNLIKE_POST_SUCCESS, UNLIKE_POST_FAILURE, LOAD_POSTS_REQUEST, LOAD_POSTS_SUCCESS, LOAD_POSTS_FAILURE, LOAD_USER_POSTS_REQUEST, LOAD_USER_POSTS_SUCCESS, LOAD_USER_POSTS_FAILURE, LOAD_HASHTAG_POSTS_REQUEST, LOAD_HASHTAG_POSTS_SUCCESS, LOAD_HASHTAG_POSTS_FAILURE, LOAD_POST_REQUEST, LOAD_POST_SUCCESS, LOAD_POST_FAILURE, ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE, REMOVE_POST_REQUEST, REMOVE_POST_SUCCESS, REMOVE_POST_FAILURE, ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE, REMOVE_IMAGE, addPost, addComment, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RETWEET_REQUEST", function() { return RETWEET_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RETWEET_SUCCESS", function() { return RETWEET_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RETWEET_FAILURE", function() { return RETWEET_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPLOAD_IMAGES_REQUEST", function() { return UPLOAD_IMAGES_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPLOAD_IMAGES_SUCCESS", function() { return UPLOAD_IMAGES_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPLOAD_IMAGES_FAILURE", function() { return UPLOAD_IMAGES_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIKE_POST_REQUEST", function() { return LIKE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIKE_POST_SUCCESS", function() { return LIKE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIKE_POST_FAILURE", function() { return LIKE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNLIKE_POST_REQUEST", function() { return UNLIKE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNLIKE_POST_SUCCESS", function() { return UNLIKE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNLIKE_POST_FAILURE", function() { return UNLIKE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POSTS_REQUEST", function() { return LOAD_POSTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POSTS_SUCCESS", function() { return LOAD_POSTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POSTS_FAILURE", function() { return LOAD_POSTS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_POSTS_REQUEST", function() { return LOAD_USER_POSTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_POSTS_SUCCESS", function() { return LOAD_USER_POSTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_POSTS_FAILURE", function() { return LOAD_USER_POSTS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_HASHTAG_POSTS_REQUEST", function() { return LOAD_HASHTAG_POSTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_HASHTAG_POSTS_SUCCESS", function() { return LOAD_HASHTAG_POSTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_HASHTAG_POSTS_FAILURE", function() { return LOAD_HASHTAG_POSTS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POST_REQUEST", function() { return LOAD_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POST_SUCCESS", function() { return LOAD_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POST_FAILURE", function() { return LOAD_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_REQUEST", function() { return ADD_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_SUCCESS", function() { return ADD_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_FAILURE", function() { return ADD_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_REQUEST", function() { return REMOVE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_SUCCESS", function() { return REMOVE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_FAILURE", function() { return REMOVE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_REQUEST", function() { return ADD_COMMENT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_SUCCESS", function() { return ADD_COMMENT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_FAILURE", function() { return ADD_COMMENT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_IMAGE", function() { return REMOVE_IMAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPost", function() { return addPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addComment", function() { return addComment; });
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shortid */ "shortid");
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(shortid__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user */ "./reducers/user.js");
/* harmony import */ var _util_produce__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/produce */ "./util/produce.js");



const initialState = {
  mainPosts: [],
  imagePaths: [],
  addPostLoading: false,
  addPostDone: false,
  addPostError: null,
  likePostLoading: false,
  likePostDone: false,
  likePostError: null,
  unlikePostLoading: false,
  unlikePostDone: false,
  unlikePostError: null,
  loadPostsLoading: false,
  loadPostsDone: false,
  loadPostsError: null,
  loadPostLoading: false,
  loadPostDone: false,
  loadPostError: null,
  removePostLoading: false,
  removePostDone: false,
  removePostError: null,
  addCommentLoading: false,
  addCommentDone: false,
  addCommentError: null,
  uploadImagesLoading: false,
  uploadImagesDone: false,
  uploadImagesError: null,
  retweetLoading: false,
  retweetDone: false,
  retweetError: null,
  hasMorePost: true,
  singlePost: null
};
const RETWEET_REQUEST = 'RETWEET_REQUEST';
const RETWEET_SUCCESS = 'RETWEET_SUCCESS';
const RETWEET_FAILURE = 'RETWEET_FAILURE';
const UPLOAD_IMAGES_REQUEST = 'UPLOAD_IMAGES_REQUEST';
const UPLOAD_IMAGES_SUCCESS = 'UPLOAD_IMAGES_SUCCESS';
const UPLOAD_IMAGES_FAILURE = 'UPLOAD_IMAGES_FAILURE';
const LIKE_POST_REQUEST = 'LIKE_POST_REQUEST';
const LIKE_POST_SUCCESS = 'LIKE_POST_SUCCESS';
const LIKE_POST_FAILURE = 'LIKE_POST_FAILURE';
const UNLIKE_POST_REQUEST = 'UNLIKE_POST_REQUEST';
const UNLIKE_POST_SUCCESS = 'UNLIKE_POST_SUCCESS';
const UNLIKE_POST_FAILURE = 'UNLIKE_POST_FAILURE';
const LOAD_POSTS_REQUEST = 'LOAD_POSTS_REQUEST';
const LOAD_POSTS_SUCCESS = 'LOAD_POSTS_SUCCESS';
const LOAD_POSTS_FAILURE = 'LOAD_POSTS_FAILURE';
const LOAD_USER_POSTS_REQUEST = 'LOAD_USER_POSTS_REQUEST';
const LOAD_USER_POSTS_SUCCESS = 'LOAD_USER_POSTS_SUCCESS';
const LOAD_USER_POSTS_FAILURE = 'LOAD_USER_POSTS_FAILURE';
const LOAD_HASHTAG_POSTS_REQUEST = 'LOAD_HASHTAG_POSTS_REQUEST';
const LOAD_HASHTAG_POSTS_SUCCESS = 'LOAD_HASHTAG_POSTS_SUCCESS';
const LOAD_HASHTAG_POSTS_FAILURE = 'LOAD_HASHTAG_POSTS_FAILURE';
const LOAD_POST_REQUEST = 'LOAD_POST_REQUEST';
const LOAD_POST_SUCCESS = 'LOAD_POST_SUCCESS';
const LOAD_POST_FAILURE = 'LOAD_POST_FAILURE';
const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
const ADD_POST_FAILURE = 'ADD_POST_FAILURE';
const REMOVE_POST_REQUEST = 'REMOVE_POST_REQUEST';
const REMOVE_POST_SUCCESS = 'REMOVE_POST_SUCCESS';
const REMOVE_POST_FAILURE = 'REMOVE_POST_FAILURE';
const ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';
const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
const ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE';
const REMOVE_IMAGE = 'REMOVE_IMAGE';
const addPost = data => ({
  type: ADD_POST_REQUEST,
  data
});
const addComment = data => ({
  type: ADD_COMMENT_REQUEST,
  data
});
const reducer = (state = initialState, action) => {
  return Object(_util_produce__WEBPACK_IMPORTED_MODULE_2__["default"])(state, draft => {
    switch (action.type) {
      case REMOVE_IMAGE:
        draft.imagePaths = draft.imagePaths.filter((v, i) => i !== action.data);
        break;
      case RETWEET_REQUEST:
        draft.retweetLoading = true;
        draft.retweetDone = false;
        draft.retweetError = null;
        break;
      case RETWEET_SUCCESS:
        console.log('성공');
        draft.mainPosts.unshift(action.data);
        draft.retweetLoading = false;
        draft.retweetDone = true;
        break;
      case RETWEET_FAILURE:
        draft.retweetLoading = false;
        draft.retweetError = action.error;
        break;
      case UPLOAD_IMAGES_REQUEST:
        draft.uploadImagesLoading = true;
        draft.uploadImagesDone = false;
        draft.uploadImagesError = null;
        break;
      case UPLOAD_IMAGES_SUCCESS:
        draft.imagePaths = draft.imagePaths.concat(action.data);
        console.log('성공');
        draft.uploadImagesLoading = false;
        draft.uploadImagesDone = true;
        break;
      case UPLOAD_IMAGES_FAILURE:
        draft.uploadImagesLoading = false;
        draft.uploadImagesError = action.error;
        break;
      case LIKE_POST_REQUEST:
        draft.likePostLoading = true;
        draft.likePostDone = false;
        draft.likePostError = null;
        break;
      case LIKE_POST_SUCCESS:
        {
          console.log('성공');
          const post = draft.mainPosts.find(v => v.id === action.data.PostId);
          post.Likers.push({
            id: action.data.UserId
          });
          draft.likePostLoading = false;
          draft.likePostDone = true;
          break;
        }
      case LIKE_POST_FAILURE:
        draft.likePostLoading = false;
        draft.likePostError = action.error;
        break;
      case UNLIKE_POST_REQUEST:
        draft.unlikePostLoading = true;
        draft.unlikePostDone = false;
        draft.unlikePostError = null;
        break;
      case UNLIKE_POST_SUCCESS:
        const post = draft.mainPosts.find(v => v.id === action.data.PostId);
        post.Likers = post.Likers.filter(v => v.id !== action.data.UserId);
        console.log('성공');
        draft.unlikePostLoading = false;
        draft.unlikePostDone = true;
        break;
      case UNLIKE_POST_FAILURE:
        draft.unlikePostLoading = false;
        draft.unlikePostError = action.error;
        break;
      case LOAD_POST_REQUEST:
        draft.loadPostLoading = true;
        draft.loadPostDone = false;
        draft.loadPostError = null;
        break;
      case LOAD_POST_SUCCESS:
        console.log('성공');
        draft.singlePost = action.data;
        draft.loadPostLoading = false;
        draft.loadPostDone = true;
        break;
      case LOAD_POST_FAILURE:
        draft.loadPostLoading = false;
        draft.loadPostError = action.error;
        break;
      case LOAD_POSTS_REQUEST:
      case LOAD_USER_POSTS_REQUEST:
      case LOAD_HASHTAG_POSTS_REQUEST:
        draft.loadPostsLoading = true;
        draft.loadPostsDone = false;
        draft.loadPostsError = null;
        break;
      case LOAD_POSTS_SUCCESS:
      case LOAD_USER_POSTS_SUCCESS:
      case LOAD_HASHTAG_POSTS_SUCCESS:
        console.log('성공');
        draft.mainPosts = draft.mainPosts.concat(action.data);
        draft.loadPostsLoading = false;
        draft.loadPostsDone = true;
        draft.hasMorePost = action.data.length === 10;
        break;
      case LOAD_POSTS_FAILURE:
      case LOAD_USER_POSTS_FAILURE:
      case LOAD_HASHTAG_POSTS_FAILURE:
        draft.loadPostsLoading = false;
        draft.loadPostsError = action.error;
        break;
      case ADD_POST_REQUEST:
        draft.addPostLoading = true;
        draft.addPostDone = false;
        draft.addPostError = null;
        break;
      case ADD_POST_SUCCESS:
        draft.imagePaths = [];
        draft.mainPosts.unshift(action.data);
        draft.addPostLoading = false;
        draft.addPostDone = true;
        break;
      case ADD_POST_FAILURE:
        draft.addPostLoading = false;
        draft.addPostError = action.error;
        break;
      case REMOVE_POST_REQUEST:
        draft.removePostLoading = true;
        draft.removePostDone = false;
        draft.removePostError = null;
        break;
      case REMOVE_POST_SUCCESS:
        draft.mainPosts = draft.mainPosts.filter(v => v.id !== action.data.PostId);
        draft.removePostLoading = false;
        draft.removePostDone = true;
        break;
      case REMOVE_POST_FAILURE:
        draft.removePostLoading = false;
        draft.removePostError = action.error;
        break;
      case ADD_COMMENT_REQUEST:
        draft.addCommentLoading = true;
        draft.addCommentDone = false;
        draft.addCommentError = null;
        break;
      case ADD_COMMENT_SUCCESS:
        {
          const post = draft.mainPosts.find(v => v.id === action.data.PostId);
          post.Comments.unshift(action.data);
          draft.addCommentLoading = false;
          draft.addCommentDone = true;
          break;
        }
      case ADD_COMMENT_FAILURE:
        draft.addCommentLoading = false;
        draft.addCommentError = action.error;
        break;
      default:
        break;
    }
  });
};
/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./reducers/user.js":
/*!**************************!*\
  !*** ./reducers/user.js ***!
  \**************************/
/*! exports provided: initialState, LOAD_MY_INFO_REQUEST, LOAD_MY_INFO_SUCCESS, LOAD_MY_INFO_FAILURE, LOAD_USER_REQUEST, LOAD_USER_SUCCESS, LOAD_USER_FAILURE, LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE, LOG_OUT_REQUEST, LOG_OUT_SUCCESS, LOG_OUT_FAILURE, SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE, CHANGE_NICKNAME_REQUEST, CHANGE_NICKNAME_SUCCESS, CHANGE_NICKNAME_FAILURE, LOAD_FOLLOWINGS_REQUEST, LOAD_FOLLOWINGS_SUCCESS, LOAD_FOLLOWINGS_FAILURE, LOAD_FOLLOWERS_REQUEST, LOAD_FOLLOWERS_SUCCESS, LOAD_FOLLOWERS_FAILURE, REMOVE_FOLLOWER_REQUEST, REMOVE_FOLLOWER_SUCCESS, REMOVE_FOLLOWER_FAILURE, FOLLOW_REQUEST, FOLLOW_SUCCESS, FOLLOW_FAILURE, UNFOLLOW_REQUEST, UNFOLLOW_SUCCESS, UNFOLLOW_FAILURE, ADD_POST_TO_ME, REMOVE_POST_OF_ME, loginRequestAction, logoutRequestAction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_MY_INFO_REQUEST", function() { return LOAD_MY_INFO_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_MY_INFO_SUCCESS", function() { return LOAD_MY_INFO_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_MY_INFO_FAILURE", function() { return LOAD_MY_INFO_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_REQUEST", function() { return LOAD_USER_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_SUCCESS", function() { return LOAD_USER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_FAILURE", function() { return LOAD_USER_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_REQUEST", function() { return LOG_IN_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_SUCCESS", function() { return LOG_IN_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_FAILURE", function() { return LOG_IN_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_REQUEST", function() { return LOG_OUT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_SUCCESS", function() { return LOG_OUT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_FAILURE", function() { return LOG_OUT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_REQUEST", function() { return SIGN_UP_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_SUCCESS", function() { return SIGN_UP_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_FAILURE", function() { return SIGN_UP_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_NICKNAME_REQUEST", function() { return CHANGE_NICKNAME_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_NICKNAME_SUCCESS", function() { return CHANGE_NICKNAME_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_NICKNAME_FAILURE", function() { return CHANGE_NICKNAME_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_FOLLOWINGS_REQUEST", function() { return LOAD_FOLLOWINGS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_FOLLOWINGS_SUCCESS", function() { return LOAD_FOLLOWINGS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_FOLLOWINGS_FAILURE", function() { return LOAD_FOLLOWINGS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_FOLLOWERS_REQUEST", function() { return LOAD_FOLLOWERS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_FOLLOWERS_SUCCESS", function() { return LOAD_FOLLOWERS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_FOLLOWERS_FAILURE", function() { return LOAD_FOLLOWERS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_FOLLOWER_REQUEST", function() { return REMOVE_FOLLOWER_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_FOLLOWER_SUCCESS", function() { return REMOVE_FOLLOWER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_FOLLOWER_FAILURE", function() { return REMOVE_FOLLOWER_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOLLOW_REQUEST", function() { return FOLLOW_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOLLOW_SUCCESS", function() { return FOLLOW_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOLLOW_FAILURE", function() { return FOLLOW_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNFOLLOW_REQUEST", function() { return UNFOLLOW_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNFOLLOW_SUCCESS", function() { return UNFOLLOW_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNFOLLOW_FAILURE", function() { return UNFOLLOW_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_TO_ME", function() { return ADD_POST_TO_ME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_OF_ME", function() { return REMOVE_POST_OF_ME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginRequestAction", function() { return loginRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logoutRequestAction", function() { return logoutRequestAction; });
/* harmony import */ var _util_produce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/produce */ "./util/produce.js");

const initialState = {
  loadMyInfoLoading: false,
  loadMyInfoDone: false,
  loadMyInfoError: null,
  loadFollowersLoading: false,
  loadFollowersDone: false,
  loadFollowersError: null,
  loadFollowingsLoading: false,
  loadFollowingsDone: false,
  loadFollowingsError: null,
  removeFollowerLoading: false,
  removeFollowerDone: false,
  removeFollowerError: null,
  followLoading: false,
  followDone: false,
  followError: null,
  unfollowLoading: false,
  unfollowDone: false,
  unfollowError: null,
  logInLoading: false,
  logInDone: false,
  logInError: null,
  logOutLoading: false,
  logOutDone: false,
  logOutError: null,
  signUpLoading: false,
  signUpDone: false,
  signUpFailure: null,
  changeNicknameLoading: false,
  changeNicknameDone: false,
  changeNicknameFailure: null,
  changeNicknameError: null,
  me: null,
  signUpData: {},
  loginData: {},
  userInfo: null
};
const LOAD_MY_INFO_REQUEST = 'LOAD_MY_INFO_REQUEST';
const LOAD_MY_INFO_SUCCESS = 'LOAD_MY_INFO_SUCCESS';
const LOAD_MY_INFO_FAILURE = 'LOAD_MY_INFO_FAILURE';
const LOAD_USER_REQUEST = 'LOAD_USER_REQUEST';
const LOAD_USER_SUCCESS = 'LOAD_USER_SUCCESS';
const LOAD_USER_FAILURE = 'LOAD_USER_FAILURE';
const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
const LOG_IN_FAILURE = 'LOG_IN_FAILURE';
const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';
const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';
const CHANGE_NICKNAME_REQUEST = 'CHANGE_NICKNAME_REQUEST';
const CHANGE_NICKNAME_SUCCESS = 'CHANGE_NICKNAME_SUCCESS';
const CHANGE_NICKNAME_FAILURE = 'CHANGE_NICKNAME_FAILURE';
const LOAD_FOLLOWINGS_REQUEST = 'LOAD_FOLLOWINGS_REQUEST';
const LOAD_FOLLOWINGS_SUCCESS = 'LOAD_FOLLOWINGS_SUCCESS';
const LOAD_FOLLOWINGS_FAILURE = 'LOAD_FOLLOWINGS_FAILURE';
const LOAD_FOLLOWERS_REQUEST = 'LOAD_FOLLOWWERS_REQUEST';
const LOAD_FOLLOWERS_SUCCESS = 'LOAD_FOLLOWWERS_SUCCESS';
const LOAD_FOLLOWERS_FAILURE = 'LOAD_FOLLOWWERS_FAILURE';
const REMOVE_FOLLOWER_REQUEST = 'REMOVE_FOLLOWER_REQUEST';
const REMOVE_FOLLOWER_SUCCESS = 'REMOVE_FOLLOWER_SUCCESS';
const REMOVE_FOLLOWER_FAILURE = 'REMOVE_FOLLOWER_FAILURE';
const FOLLOW_REQUEST = 'FOLLOW_REQUEST';
const FOLLOW_SUCCESS = 'FOLLOW_SUCCESS';
const FOLLOW_FAILURE = 'FOLLOW_FAILURE';
const UNFOLLOW_REQUEST = 'UNFOLLOW_REQUEST';
const UNFOLLOW_SUCCESS = 'UNFOLLOW_SUCCESS';
const UNFOLLOW_FAILURE = 'UNFOLLOW_FAILURE';
const ADD_POST_TO_ME = 'ADD_POST_TO_ME';
const REMOVE_POST_OF_ME = 'REMOVE_POST_OF_ME';
const loginRequestAction = data => {
  return {
    type: LOG_IN_REQUEST,
    data
  };
};
const logoutRequestAction = () => {
  return {
    type: LOG_OUT_REQUEST
  };
};
const reducer = (state = initialState, action) => {
  return Object(_util_produce__WEBPACK_IMPORTED_MODULE_0__["default"])(state, draft => {
    switch (action.type) {
      case REMOVE_FOLLOWER_REQUEST:
        draft.removeFollowerLoading = true;
        draft.removeFollowerError = null;
        ``;
        draft.removeFollowerDone = false;
        break;
      case REMOVE_FOLLOWER_SUCCESS:
        draft.removeFollowerLoading = false;
        draft.removeFollowerDone = true;
        draft.me.Followers = draft.me.Followers.filter(v => v.id !== action.data.UserId);
        break;
      case REMOVE_FOLLOWER_FAILURE:
        draft.removeFollowerLoading = false;
        draft.removeFollowerError = action.error;
        break;
      case LOAD_FOLLOWINGS_REQUEST:
        draft.loadFollowingsLoading = true;
        draft.loadFollowingsError = null;
        ``;
        draft.loadFollowingsDone = false;
        break;
      case LOAD_FOLLOWINGS_SUCCESS:
        draft.loadFollowingsLoading = false;
        draft.loadFollowingsDone = true;
        draft.me.Followings = action.data;
        break;
      case LOAD_FOLLOWINGS_FAILURE:
        draft.loadFollowingsLoading = false;
        draft.loadFollowingsError = action.error;
        break;
      case LOAD_FOLLOWERS_REQUEST:
        draft.loadFollowersLoading = true;
        draft.loadFollowersError = null;
        ``;
        draft.loadFollowersDone = false;
        break;
      case LOAD_FOLLOWERS_SUCCESS:
        draft.loadFollowersLoading = false;
        draft.loadFollowersDone = true;
        draft.me.Followers = action.data;
        break;
      case LOAD_FOLLOWERS_FAILURE:
        draft.loadFollowersLoading = false;
        draft.loadFollowersError = action.error;
        break;
      case LOAD_MY_INFO_REQUEST:
        draft.loadMyInfoLoading = true;
        draft.loadMyInfoError = null;
        draft.loadMyInfoDone = false;
        break;
      case LOAD_MY_INFO_SUCCESS:
        draft.loadMyInfoLoading = false;
        draft.loadMyInfoDone = true;
        draft.me = action.data;
        break;
      case LOAD_MY_INFO_FAILURE:
        draft.loadMyInfoLoading = false;
        draft.loadMyInfoError = action.error;
        break;
      case LOAD_USER_REQUEST:
        draft.loadUserLoading = true;
        draft.loadUserError = null;
        draft.loadUserDone = false;
        break;
      case LOAD_USER_SUCCESS:
        draft.loadUserLoading = false;
        draft.loadUserDone = true;
        draft.userInfo = action.data;
        break;
      case LOAD_USER_FAILURE:
        draft.loadUserLoading = false;
        draft.loadMyInfoError = action.error;
        break;
      case FOLLOW_REQUEST:
        draft.followLoading = true;
        draft.followError = null;
        draft.followDone = false;
        break;
      case FOLLOW_SUCCESS:
        draft.followLoading = false;
        draft.followDone = true;
        draft.me.Followings.push({
          id: action.data.UserId
        });
        break;
      case FOLLOW_FAILURE:
        draft.followLoading = false;
        draft.followError = action.error;
        break;
      case UNFOLLOW_REQUEST:
        draft.unfollowLoading = true;
        draft.unfollowError = null;
        draft.unfollowDone = false;
        break;
      case UNFOLLOW_SUCCESS:
        draft.unfollowLoading = false;
        draft.unfollowDone = true;
        draft.me.Followings = draft.me.Followings.filter(v => v.id !== action.data.UserId);
        break;
      case UNFOLLOW_FAILURE:
        draft.unfollowLoading = false;
        draft.unfollowError = action.error;
        break;
      case LOG_IN_REQUEST:
        draft.logInLoading = true;
        draft.logInError = null;
        draft.logInDone = false;
        break;
      case LOG_IN_SUCCESS:
        draft.logInLoading = false;
        draft.logInDone = true;
        draft.me = action.data;
        break;
      case LOG_IN_FAILURE:
        draft.logInLoading = false;
        draft.logInError = action.error;
        break;
      case LOG_OUT_REQUEST:
        draft.logOutLoading = true;
        draft.logOutDone = false;
        draft.logOutError = null;
        break;
      case LOG_OUT_SUCCESS:
        draft.logOutLoading = false;
        draft.me = null;
        draft.logOutDone = true;
        break;
      case LOG_OUT_FAILURE:
        draft.logOutLoading = false;
        draft.logOutError = action.error;
        break;
      case SIGN_UP_REQUEST:
        draft.signUpLoading = true;
        draft.signUpDone = false;
        draft.signUpError = null;
        break;
      case SIGN_UP_SUCCESS:
        draft.signUpLoading = false;
        draft.signUpDone = true;
        break;
      case SIGN_UP_FAILURE:
        draft.signUpLoading = false;
        draft.signUpError = action.error;
        break;
      case CHANGE_NICKNAME_REQUEST:
        draft.changeNicknameLoading = true;
        draft.changeNicknameDone = false;
        draft.changeNicknameError = null;
        break;
      case CHANGE_NICKNAME_SUCCESS:
        draft.me.nickname = action.data.nickname;
        draft.changeNicknameLoading = false;
        draft.changeNicknameDone = true;
        break;
      case CHANGE_NICKNAME_FAILURE:
        draft.changeNicknameLoading = false;
        draft.changeNicknameError = action.error;
        break;
      case ADD_POST_TO_ME:
        draft.me.Posts.unshift({
          id: action.data
        });
        break;
      case REMOVE_POST_OF_ME:
        draft.me.Posts = draft.me.Posts.filter(v => v.id !== action.data);
        break;
      default:
        break;
    }
  });
};
/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./sagas/index.js":
/*!************************!*\
  !*** ./sagas/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rootSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./post */ "./sagas/post.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user */ "./sagas/user.js");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config/config */ "./config/config.js");





axios__WEBPACK_IMPORTED_MODULE_1___default.a.defaults.baseURL = _config_config__WEBPACK_IMPORTED_MODULE_4__["backUrl"];
axios__WEBPACK_IMPORTED_MODULE_1___default.a.defaults.withCredentials = true;
function* rootSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(_user__WEBPACK_IMPORTED_MODULE_3__["default"]), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(_post__WEBPACK_IMPORTED_MODULE_2__["default"])]);
}

/***/ }),

/***/ "./sagas/post.js":
/*!***********************!*\
  !*** ./sagas/post.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return postSaga; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");




function likePostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.patch(`/post/${data}/like`);
}
function* likePost(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(likePostAPI, action.data);
    console.log(action.data + 'data 뭐야 씨발');
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LIKE_POST_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LIKE_POST_FAILURE"],
      error: err.response.data
    });
  }
}
function unlikePostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.delete(`/post/${data}/like`);
}
function* unlikePost(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(unlikePostAPI, action.data);
    console.log(action.data + 'data 뭐야 씨발');
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["UNLIKE_POST_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["UNLIKE_POST_FAILURE"],
      error: err.response.data
    });
  }
}
function loadPostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`/post/${data}`);
}
function* loadPost(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(loadPostAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_POST_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_POST_FAILURE"],
      error: err.response.data
    });
  }
}
function loadPostsAPI(lastId) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`/posts?lastId=${lastId || 0}`);
}
function* loadPosts(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(loadPostsAPI, action.lastId);
    console.log(result + 'lastId 뭐야 씨발');
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_POSTS_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_POSTS_FAILURE"],
      error: err.response.data
    });
  }
}
function userPostsAPI(data, lastId) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`/user/${data}/posts?lastId=${lastId || 0}`);
}
function* userPosts(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(userPostsAPI, action.data, action.lastId);
    console.log(result + 'lastId 뭐야 씨발');
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_USER_POSTS_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_USER_POSTS_FAILURE"],
      error: err.response.data
    });
  }
}
function hashtagPostsAPI(data, lastId) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`/hashtag/${encodeURIComponent(data)}?lastId=${lastId || 0}`);
}
function* hashtagPosts(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(hashtagPostsAPI, action.data, action.lastId);
    console.log(result + 'lastId 뭐야 씨발');
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_HASHTAG_POSTS_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_HASHTAG_POSTS_FAILURE"],
      error: err.response.data
    });
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
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/post', data);
}
function* addPost(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(addPostAPI, action.data);
    console.log(action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_POST_SUCCESS"],
      data: result.data
    });
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["ADD_POST_TO_ME"],
      data: result.data.id
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_POST_FAILURE"],
      error: err.response.data
    });
  }
}
function removePostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.delete(`/post/${data}`);
}
function* removePost(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(removePostAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["REMOVE_POST_SUCCESS"],
      data: result.data
    });
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["REMOVE_POST_OF_ME"],
      data: action.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: REMOVE_POST_FAILURE,
      error: err.response.data
    });
  }
}
function addCommentAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(`/post/${data.postId}/comment`, data);
}
function* addComment(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(addCommentAPI, action.data);
    console.log('코멘트');
    console.log(result);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_COMMENT_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_COMMENT_FAILURE"],
      error: err.response.data
    });
  }
}
function uploadImagesAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/post/images', data);
}
function* uploadImages(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(uploadImagesAPI, action.data);
    console.log('코멘트');
    console.log(result);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["UPLOAD_IMAGES_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["UPLOAD_IMAGES_FAILURE"],
      error: err.response.data
    });
  }
}
function retweetAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(`/post/${data}/retweet`);
}
function* retweet(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(retweetAPI, action.data);
    console.log('코멘트');
    console.log(result);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["RETWEET_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["RETWEET_FAILURE"],
      error: err.response.data
    });
  }
}
function* watchRetweet() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["RETWEET_REQUEST"], retweet);
}
function* watchUploadImages() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["UPLOAD_IMAGES_REQUEST"], uploadImages);
}
function* watchLikePost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["LIKE_POST_REQUEST"], likePost);
}
function* watchUnlikePost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["UNLIKE_POST_REQUEST"], unlikePost);
}
function* watchAddPost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_POST_REQUEST"], addPost);
}
// function* watchLoadPost() {
//     yield throttle(5000,LOAD_POSTS_REQUEST, loadPost);
// }
function* watchLoadPosts() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["throttle"])(5000, _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_POSTS_REQUEST"], loadPosts);
}
function* watchLoadPost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["throttle"])(5000, _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_POST_REQUEST"], loadPost);
}
function* watchUserLoadPosts() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["throttle"])(5000, _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_USER_POSTS_REQUEST"], userPosts);
}
function* watchHashtagLoadPosts() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["throttle"])(5000, _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_HASHTAG_POSTS_REQUEST"], hashtagPosts);
}
function* watchRemovePost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["REMOVE_POST_REQUEST"], removePost);
}
function* watchAddComment() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_COMMENT_REQUEST"], addComment);
}
function* postSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchUploadImages), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchRetweet), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchAddPost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLikePost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchUnlikePost),
  // fork(watchLoadPost),
  Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLoadPosts), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchUserLoadPosts), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchHashtagLoadPosts), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLoadPost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchRemovePost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchAddComment)]);
}

/***/ }),

/***/ "./sagas/user.js":
/*!***********************!*\
  !*** ./sagas/user.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return userSaga; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");



function removeFollowerAPI(data) {
  console.log('팔로워삭제데이터');
  console.log(data);
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.delete(`/user/follower/${data}`);
}
function* removeFollower(action) {
  try {
    console.log('saga removeFollowerAPI');
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(removeFollowerAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["REMOVE_FOLLOWER_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["REMOVE_FOLLOWER_FAILURE"],
      error: err.response.data
    });
  }
}
function loadFollowersAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('/user/followers', data);
}
function* loadFollowers(action) {
  try {
    console.log('saga followers');
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(loadFollowersAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_FOLLOWERS_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_FOLLOWERS_FAILURE"],
      error: err.response.data
    });
  }
}
function loadFollowingsAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('/user/followings', data);
}
function* loadFollowings(action) {
  try {
    console.log('saga followings');
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(loadFollowingsAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_FOLLOWINGS_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_FOLLOWINGS_FAILURE"],
      error: err.response.data
    });
  }
}
function changeNicknameAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.patch('/user/nickname', {
    nickname: data
  });
}
function* changeNickname(action) {
  try {
    console.log('saga nickname');
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(changeNicknameAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["CHANGE_NICKNAME_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["CHANGE_NICKNAME_FAILURE"],
      error: err.response.data
    });
  }
}
function loadUserAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`/user/${data}`);
}
function* loadUser(action) {
  try {
    console.log('saga loadUserAPI');
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(loadUserAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_USER_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_USER_FAILURE"],
      error: err.response.data
    });
  }
}
function loadMyInfoAPI() {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('/user');
}
function* loadMyInfo() {
  try {
    console.log('saga user');
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(loadMyInfoAPI);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_MY_INFO_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_MY_INFO_FAILURE"],
      error: err.response.data
    });
  }
}
function logInAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/user/login', data);
}
function* logIn(action) {
  try {
    console.log('saga login');
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(logInAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_FAILURE"],
      error: err.response.data
    });
  }
}
function logOutAPI() {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/user/logout');
}
function* logOut() {
  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(logOutAPI);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_OUT_SUCCESS"]
      // data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_OUT_FAILURE"],
      error: err.response.data
    });
  }
}
function signUpAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/user', data);
}
function* signUp(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(signUpAPI, action.data);
    console.log(result);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["SIGN_UP_SUCCESS"]
      // data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["SIGN_UP_FAILURE"],
      error: err.response.data
    });
  }
}
function followAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.patch(`/user/${data}/follow`);
}
function* follow(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(followAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["FOLLOW_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["FOLLOW_FAILURE"],
      data: err.response.data
    });
  }
}
function unfollowAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.delete(`/user/${data}/follow`);
}
function* unfollow(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(unfollowAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["UNFOLLOW_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["UNFOLLOW_FAILURE"],
      data: err.response.data
    });
  }
}
function* watchRmoveFollower() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["REMOVE_FOLLOWER_REQUEST"], removeFollower);
}
function* watchLoadFollowers() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_FOLLOWERS_REQUEST"], loadFollowers);
}
function* watchLoadFollowings() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_FOLLOWINGS_REQUEST"], loadFollowings);
}
function* watchChangeNickname() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["CHANGE_NICKNAME_REQUEST"], changeNickname);
}
function* watchLoadMyInfo() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_MY_INFO_REQUEST"], loadMyInfo);
}
function* watchLoadUser() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_USER_REQUEST"], loadUser);
}
function* watchFollow() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["FOLLOW_REQUEST"], follow);
}
function* watchUnfollow() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["UNFOLLOW_REQUEST"], unfollow);
}
function* watchLogIn() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_REQUEST"], logIn);
}
function* watchLogOut() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_OUT_REQUEST"], logOut);
}
function* watchSignUp() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["SIGN_UP_REQUEST"], signUp);
}
function* userSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchRmoveFollower), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLoadFollowers), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLoadFollowings), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchChangeNickname), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLoadMyInfo), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLoadUser), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchFollow), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchUnfollow), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLogIn), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLogOut), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchSignUp)]);
}

/***/ }),

/***/ "./store/configureStore.js":
/*!*********************************!*\
  !*** ./store/configureStore.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers */ "./reducers/index.js");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _redux_saga_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @redux-saga/core */ "@redux-saga/core");
/* harmony import */ var _redux_saga_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_redux_saga_core__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _sagas__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../sagas */ "./sagas/index.js");






const configureStore = () => {
  const sagaMiddleWare = _redux_saga_core__WEBPACK_IMPORTED_MODULE_4___default()();
  const middlewares = [sagaMiddleWare];
  const enhancer = process.NODE_ENV === 'production' ? Object(redux__WEBPACK_IMPORTED_MODULE_1__["compose"])(Object(redux__WEBPACK_IMPORTED_MODULE_1__["applyMiddleware"])(...middlewares)) : Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_1__["applyMiddleware"])(...middlewares));
  const store = Object(redux__WEBPACK_IMPORTED_MODULE_1__["createStore"])(_reducers__WEBPACK_IMPORTED_MODULE_2__["default"], enhancer);
  store.sagaTask = sagaMiddleWare.run(_sagas__WEBPACK_IMPORTED_MODULE_5__["default"]);
  return store;
};
const wrapper = Object(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__["createWrapper"])(configureStore, {
  debug: true
});
/* harmony default export */ __webpack_exports__["default"] = (wrapper);

/***/ }),

/***/ "./util/produce.js":
/*!*************************!*\
  !*** ./util/produce.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "immer");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = ((...args) => {
  Object(immer__WEBPACK_IMPORTED_MODULE_0__["enableES5"])();
  return Object(immer__WEBPACK_IMPORTED_MODULE_0__["produce"])(...args);
});

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "@redux-saga/core":
/*!***********************************!*\
  !*** external "@redux-saga/core" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@redux-saga/core");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "immer":
/*!************************!*\
  !*** external "immer" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("immer");

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-saga/effects":
/*!*************************************!*\
  !*** external "redux-saga/effects" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga/effects");

/***/ }),

/***/ "shortid":
/*!**************************!*\
  !*** external "shortid" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("shortid");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29uZmlnL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzIiwid2VicGFjazovLy8uL3JlZHVjZXJzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3JlZHVjZXJzL3Bvc3QuanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdWNlcnMvdXNlci5qcyIsIndlYnBhY2s6Ly8vLi9zYWdhcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zYWdhcy9wb3N0LmpzIiwid2VicGFjazovLy8uL3NhZ2FzL3VzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvY29uZmlndXJlU3RvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbC9wcm9kdWNlLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkByZWR1eC1zYWdhL2NvcmVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImltbWVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC1yZWR1eC13cmFwcGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJvcC10eXBlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1zYWdhL2VmZmVjdHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzaG9ydGlkXCIiXSwibmFtZXMiOlsiYmFja1VybCIsIlBpY2tNZSIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImVsZW1lbnRUeXBlIiwiaXNSZXF1aXJlZCIsIndyYXBwZXIiLCJ3aXRoUmVkdXgiLCJyb290UmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsIkhZRFJBVEUiLCJjb25zb2xlIiwibG9nIiwicGF5bG9hZCIsImNvbWJpbmVSZWR1Y2VyIiwiY29tYmluZVJlZHVjZXJzIiwidXNlciIsInBvc3QiLCJpbml0aWFsU3RhdGUiLCJtYWluUG9zdHMiLCJpbWFnZVBhdGhzIiwiYWRkUG9zdExvYWRpbmciLCJhZGRQb3N0RG9uZSIsImFkZFBvc3RFcnJvciIsImxpa2VQb3N0TG9hZGluZyIsImxpa2VQb3N0RG9uZSIsImxpa2VQb3N0RXJyb3IiLCJ1bmxpa2VQb3N0TG9hZGluZyIsInVubGlrZVBvc3REb25lIiwidW5saWtlUG9zdEVycm9yIiwibG9hZFBvc3RzTG9hZGluZyIsImxvYWRQb3N0c0RvbmUiLCJsb2FkUG9zdHNFcnJvciIsImxvYWRQb3N0TG9hZGluZyIsImxvYWRQb3N0RG9uZSIsImxvYWRQb3N0RXJyb3IiLCJyZW1vdmVQb3N0TG9hZGluZyIsInJlbW92ZVBvc3REb25lIiwicmVtb3ZlUG9zdEVycm9yIiwiYWRkQ29tbWVudExvYWRpbmciLCJhZGRDb21tZW50RG9uZSIsImFkZENvbW1lbnRFcnJvciIsInVwbG9hZEltYWdlc0xvYWRpbmciLCJ1cGxvYWRJbWFnZXNEb25lIiwidXBsb2FkSW1hZ2VzRXJyb3IiLCJyZXR3ZWV0TG9hZGluZyIsInJldHdlZXREb25lIiwicmV0d2VldEVycm9yIiwiaGFzTW9yZVBvc3QiLCJzaW5nbGVQb3N0IiwiUkVUV0VFVF9SRVFVRVNUIiwiUkVUV0VFVF9TVUNDRVNTIiwiUkVUV0VFVF9GQUlMVVJFIiwiVVBMT0FEX0lNQUdFU19SRVFVRVNUIiwiVVBMT0FEX0lNQUdFU19TVUNDRVNTIiwiVVBMT0FEX0lNQUdFU19GQUlMVVJFIiwiTElLRV9QT1NUX1JFUVVFU1QiLCJMSUtFX1BPU1RfU1VDQ0VTUyIsIkxJS0VfUE9TVF9GQUlMVVJFIiwiVU5MSUtFX1BPU1RfUkVRVUVTVCIsIlVOTElLRV9QT1NUX1NVQ0NFU1MiLCJVTkxJS0VfUE9TVF9GQUlMVVJFIiwiTE9BRF9QT1NUU19SRVFVRVNUIiwiTE9BRF9QT1NUU19TVUNDRVNTIiwiTE9BRF9QT1NUU19GQUlMVVJFIiwiTE9BRF9VU0VSX1BPU1RTX1JFUVVFU1QiLCJMT0FEX1VTRVJfUE9TVFNfU1VDQ0VTUyIsIkxPQURfVVNFUl9QT1NUU19GQUlMVVJFIiwiTE9BRF9IQVNIVEFHX1BPU1RTX1JFUVVFU1QiLCJMT0FEX0hBU0hUQUdfUE9TVFNfU1VDQ0VTUyIsIkxPQURfSEFTSFRBR19QT1NUU19GQUlMVVJFIiwiTE9BRF9QT1NUX1JFUVVFU1QiLCJMT0FEX1BPU1RfU1VDQ0VTUyIsIkxPQURfUE9TVF9GQUlMVVJFIiwiQUREX1BPU1RfUkVRVUVTVCIsIkFERF9QT1NUX1NVQ0NFU1MiLCJBRERfUE9TVF9GQUlMVVJFIiwiUkVNT1ZFX1BPU1RfUkVRVUVTVCIsIlJFTU9WRV9QT1NUX1NVQ0NFU1MiLCJSRU1PVkVfUE9TVF9GQUlMVVJFIiwiQUREX0NPTU1FTlRfUkVRVUVTVCIsIkFERF9DT01NRU5UX1NVQ0NFU1MiLCJBRERfQ09NTUVOVF9GQUlMVVJFIiwiUkVNT1ZFX0lNQUdFIiwiYWRkUG9zdCIsImRhdGEiLCJhZGRDb21tZW50IiwicmVkdWNlciIsInByb2R1Y2UiLCJkcmFmdCIsImZpbHRlciIsInYiLCJpIiwidW5zaGlmdCIsImVycm9yIiwiY29uY2F0IiwiZmluZCIsImlkIiwiUG9zdElkIiwiTGlrZXJzIiwicHVzaCIsIlVzZXJJZCIsImxlbmd0aCIsIkNvbW1lbnRzIiwibG9hZE15SW5mb0xvYWRpbmciLCJsb2FkTXlJbmZvRG9uZSIsImxvYWRNeUluZm9FcnJvciIsImxvYWRGb2xsb3dlcnNMb2FkaW5nIiwibG9hZEZvbGxvd2Vyc0RvbmUiLCJsb2FkRm9sbG93ZXJzRXJyb3IiLCJsb2FkRm9sbG93aW5nc0xvYWRpbmciLCJsb2FkRm9sbG93aW5nc0RvbmUiLCJsb2FkRm9sbG93aW5nc0Vycm9yIiwicmVtb3ZlRm9sbG93ZXJMb2FkaW5nIiwicmVtb3ZlRm9sbG93ZXJEb25lIiwicmVtb3ZlRm9sbG93ZXJFcnJvciIsImZvbGxvd0xvYWRpbmciLCJmb2xsb3dEb25lIiwiZm9sbG93RXJyb3IiLCJ1bmZvbGxvd0xvYWRpbmciLCJ1bmZvbGxvd0RvbmUiLCJ1bmZvbGxvd0Vycm9yIiwibG9nSW5Mb2FkaW5nIiwibG9nSW5Eb25lIiwibG9nSW5FcnJvciIsImxvZ091dExvYWRpbmciLCJsb2dPdXREb25lIiwibG9nT3V0RXJyb3IiLCJzaWduVXBMb2FkaW5nIiwic2lnblVwRG9uZSIsInNpZ25VcEZhaWx1cmUiLCJjaGFuZ2VOaWNrbmFtZUxvYWRpbmciLCJjaGFuZ2VOaWNrbmFtZURvbmUiLCJjaGFuZ2VOaWNrbmFtZUZhaWx1cmUiLCJjaGFuZ2VOaWNrbmFtZUVycm9yIiwibWUiLCJzaWduVXBEYXRhIiwibG9naW5EYXRhIiwidXNlckluZm8iLCJMT0FEX01ZX0lORk9fUkVRVUVTVCIsIkxPQURfTVlfSU5GT19TVUNDRVNTIiwiTE9BRF9NWV9JTkZPX0ZBSUxVUkUiLCJMT0FEX1VTRVJfUkVRVUVTVCIsIkxPQURfVVNFUl9TVUNDRVNTIiwiTE9BRF9VU0VSX0ZBSUxVUkUiLCJMT0dfSU5fUkVRVUVTVCIsIkxPR19JTl9TVUNDRVNTIiwiTE9HX0lOX0ZBSUxVUkUiLCJMT0dfT1VUX1JFUVVFU1QiLCJMT0dfT1VUX1NVQ0NFU1MiLCJMT0dfT1VUX0ZBSUxVUkUiLCJTSUdOX1VQX1JFUVVFU1QiLCJTSUdOX1VQX1NVQ0NFU1MiLCJTSUdOX1VQX0ZBSUxVUkUiLCJDSEFOR0VfTklDS05BTUVfUkVRVUVTVCIsIkNIQU5HRV9OSUNLTkFNRV9TVUNDRVNTIiwiQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkUiLCJMT0FEX0ZPTExPV0lOR1NfUkVRVUVTVCIsIkxPQURfRk9MTE9XSU5HU19TVUNDRVNTIiwiTE9BRF9GT0xMT1dJTkdTX0ZBSUxVUkUiLCJMT0FEX0ZPTExPV0VSU19SRVFVRVNUIiwiTE9BRF9GT0xMT1dFUlNfU1VDQ0VTUyIsIkxPQURfRk9MTE9XRVJTX0ZBSUxVUkUiLCJSRU1PVkVfRk9MTE9XRVJfUkVRVUVTVCIsIlJFTU9WRV9GT0xMT1dFUl9TVUNDRVNTIiwiUkVNT1ZFX0ZPTExPV0VSX0ZBSUxVUkUiLCJGT0xMT1dfUkVRVUVTVCIsIkZPTExPV19TVUNDRVNTIiwiRk9MTE9XX0ZBSUxVUkUiLCJVTkZPTExPV19SRVFVRVNUIiwiVU5GT0xMT1dfU1VDQ0VTUyIsIlVORk9MTE9XX0ZBSUxVUkUiLCJBRERfUE9TVF9UT19NRSIsIlJFTU9WRV9QT1NUX09GX01FIiwibG9naW5SZXF1ZXN0QWN0aW9uIiwibG9nb3V0UmVxdWVzdEFjdGlvbiIsIkZvbGxvd2VycyIsIkZvbGxvd2luZ3MiLCJsb2FkVXNlckxvYWRpbmciLCJsb2FkVXNlckVycm9yIiwibG9hZFVzZXJEb25lIiwic2lnblVwRXJyb3IiLCJuaWNrbmFtZSIsIlBvc3RzIiwiYXhpb3MiLCJkZWZhdWx0cyIsImJhc2VVUkwiLCJ3aXRoQ3JlZGVudGlhbHMiLCJyb290U2FnYSIsImFsbCIsImZvcmsiLCJ1c2VyU2FnYSIsInBvc3RTYWdhIiwibGlrZVBvc3RBUEkiLCJwYXRjaCIsImxpa2VQb3N0IiwicmVzdWx0IiwiY2FsbCIsInB1dCIsImVyciIsInJlc3BvbnNlIiwidW5saWtlUG9zdEFQSSIsImRlbGV0ZSIsInVubGlrZVBvc3QiLCJsb2FkUG9zdEFQSSIsImdldCIsImxvYWRQb3N0IiwibG9hZFBvc3RzQVBJIiwibGFzdElkIiwibG9hZFBvc3RzIiwidXNlclBvc3RzQVBJIiwidXNlclBvc3RzIiwiaGFzaHRhZ1Bvc3RzQVBJIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiaGFzaHRhZ1Bvc3RzIiwiYWRkUG9zdEFQSSIsInJlbW92ZVBvc3RBUEkiLCJyZW1vdmVQb3N0IiwiYWRkQ29tbWVudEFQSSIsInBvc3RJZCIsInVwbG9hZEltYWdlc0FQSSIsInVwbG9hZEltYWdlcyIsInJldHdlZXRBUEkiLCJyZXR3ZWV0Iiwid2F0Y2hSZXR3ZWV0IiwidGFrZUxhdGVzdCIsIndhdGNoVXBsb2FkSW1hZ2VzIiwid2F0Y2hMaWtlUG9zdCIsIndhdGNoVW5saWtlUG9zdCIsIndhdGNoQWRkUG9zdCIsIndhdGNoTG9hZFBvc3RzIiwidGhyb3R0bGUiLCJ3YXRjaExvYWRQb3N0Iiwid2F0Y2hVc2VyTG9hZFBvc3RzIiwid2F0Y2hIYXNodGFnTG9hZFBvc3RzIiwid2F0Y2hSZW1vdmVQb3N0Iiwid2F0Y2hBZGRDb21tZW50IiwicmVtb3ZlRm9sbG93ZXJBUEkiLCJyZW1vdmVGb2xsb3dlciIsImxvYWRGb2xsb3dlcnNBUEkiLCJsb2FkRm9sbG93ZXJzIiwibG9hZEZvbGxvd2luZ3NBUEkiLCJsb2FkRm9sbG93aW5ncyIsImNoYW5nZU5pY2tuYW1lQVBJIiwiY2hhbmdlTmlja25hbWUiLCJsb2FkVXNlckFQSSIsImxvYWRVc2VyIiwibG9hZE15SW5mb0FQSSIsImxvYWRNeUluZm8iLCJsb2dJbkFQSSIsImxvZ0luIiwibG9nT3V0QVBJIiwibG9nT3V0Iiwic2lnblVwQVBJIiwic2lnblVwIiwiZm9sbG93QVBJIiwiZm9sbG93IiwidW5mb2xsb3dBUEkiLCJ1bmZvbGxvdyIsIndhdGNoUm1vdmVGb2xsb3dlciIsIndhdGNoTG9hZEZvbGxvd2VycyIsIndhdGNoTG9hZEZvbGxvd2luZ3MiLCJ3YXRjaENoYW5nZU5pY2tuYW1lIiwid2F0Y2hMb2FkTXlJbmZvIiwid2F0Y2hMb2FkVXNlciIsIndhdGNoRm9sbG93Iiwid2F0Y2hVbmZvbGxvdyIsIndhdGNoTG9nSW4iLCJ3YXRjaExvZ091dCIsIndhdGNoU2lnblVwIiwiY29uZmlndXJlU3RvcmUiLCJzYWdhTWlkZGxlV2FyZSIsImNyZWF0ZVNhZ2FNaWRkbGV3YXJlIiwibWlkZGxld2FyZXMiLCJlbmhhbmNlciIsInByb2Nlc3MiLCJOT0RFX0VOViIsImNvbXBvc2UiLCJhcHBseU1pZGRsZXdhcmUiLCJjb21wb3NlV2l0aERldlRvb2xzIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsInNhZ2FUYXNrIiwicnVuIiwiY3JlYXRlV3JhcHBlciIsImRlYnVnIiwiYXJncyIsImVuYWJsZUVTNSJd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QUFFaEMsTUFBTUMsY0FBYyxHQUFDLE1BQUk7RUFDckIsTUFBTUMsY0FBYyxHQUFHQyx1REFBb0IsRUFBRTtFQUM3QyxNQUFNQyxXQUFXLEdBQUcsQ0FBQ0YsY0FBYyxDQUFDO0VBQ3BDLE1BQU1HLFFBQVEsR0FBR0MsT0FBTyxDQUFDQyxRQUFRLEtBQUksWUFBWSxHQUNoREMscURBQU8sQ0FBQ0MsNkRBQWUsQ0FBQyxHQUFHTCxXQUFXLENBQUMsQ0FBQyxHQUN4Q00sb0ZBQW1CLENBQUNELDZEQUFlLENBQUMsR0FBR0wsV0FBVyxDQUFDLENBQUM7RUFDckQsTUFBTU8sS0FBSyxHQUFDQyx5REFBVyxDQUFDbE0saURBQU8sRUFBQzJMLFFBQVEsQ0FBQztFQUN6Q00sS0FBSyxDQUFDRSxRQUFRLEdBQUdYLGNBQWMsQ0FBQ1ksR0FBRyxDQUFDL0YsOENBQVEsQ0FBQztFQUM3QyxPQUFPNEYsS0FBSztBQUNoQixDQUFDO0FBRUQsTUFBTXBSLE9BQU8sR0FBR3dSLHdFQUFhLENBQ3pCZCxjQUFjLEVBQ2Q7RUFBQ2UsS0FBSztBQUFzQyxDQUFDLENBQzVDO0FBRVV6UixzRUFBTyxFOzs7Ozs7Ozs7Ozs7QUN2QnRCO0FBQUE7QUFBQTtBQUEyQztBQUU1QixnRUFBQyxHQUFHMFIsSUFBSSxLQUFLO0VBQzFCQyx1REFBUyxFQUFFO0VBQ1gsT0FBT3ZNLHFEQUFPLENBQUMsR0FBR3NNLElBQUksQ0FBQztBQUN6QixDQUFDLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTkQsNkM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsK0M7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEsK0M7Ozs7Ozs7Ozs7O0FDQUEsb0MiLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImV4cG9ydCBjb25zdCBiYWNrVXJsID0gJ2h0dHBzOi8vYXBpLmJpdGZyb21taW5kLmNvbSciLCJpbXBvcnQgJ2FudGQvZGlzdC9hbnRkLmNzcyc7XHJcbmltcG9ydCB7IFByb3BUeXBlcyB9IGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgd3JhcHBlciBmcm9tICcuLi9zdG9yZS9jb25maWd1cmVTdG9yZSdcclxuXHJcbmNvbnN0IFBpY2tNZSA9ICh7IENvbXBvbmVudCB9KSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiLz5cclxuICAgICAgICAgICAgPHRpdGxlPlBJQ0stTUU8L3RpdGxlPlxyXG4gICAgICAgIDwvSGVhZD5cclxuICAgICAgICA8Q29tcG9uZW50IC8+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn07XHJcbiBQaWNrTWUucHJvcFR5cGVzID0ge1xyXG4gICAgQ29tcG9uZW50OiBQcm9wVHlwZXMuZWxlbWVudFR5cGUuaXNSZXF1aXJlZCxcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdyYXBwZXIud2l0aFJlZHV4KFBpY2tNZSk7ICIsImltcG9ydCB7IEhZRFJBVEUgfSBmcm9tIFwibmV4dC1yZWR1eC13cmFwcGVyXCI7XHJcbmltcG9ydCB1c2VyIGZyb20gJy4vdXNlcic7XHJcbmltcG9ydCBwb3N0IGZyb20gJy4vcG9zdCc7XHJcbmltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gXCJyZWR1eFwiO1xyXG5cclxuXHJcblxyXG5cclxuY29uc3Qgcm9vdFJlZHVjZXIgPSAoc3RhdGUsYWN0aW9uKT0+IHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpe1xyXG4gICAgICAgIGNhc2UgSFlEUkFURTpcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ0hZRFJBVEUnLGFjdGlvbik7XHJcbiAgICAgICAgICAgIHJldHVybiBhY3Rpb24ucGF5bG9hZDtcclxuXHJcbiAgICAgICAgZGVmYXVsdDp7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbWJpbmVSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcclxuICAgICAgICAgICAgICAgIHVzZXIsXHJcbiAgICAgICAgICAgICAgICBwb3N0LFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIGNvbWJpbmVSZWR1Y2VyKHN0YXRlLGFjdGlvbik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJvb3RSZWR1Y2VyOyIsImltcG9ydCBzaG9ydGlkIGZyb20gXCJzaG9ydGlkXCI7XHJcbmltcG9ydCB7IEFERF9QT1NUX1RPX01FIH0gZnJvbSBcIi4vdXNlclwiO1xyXG5pbXBvcnQgcHJvZHVjZSBmcm9tICcuLi91dGlsL3Byb2R1Y2UnO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcblxyXG4gICAgbWFpblBvc3RzOiBbXSxcclxuICAgIGltYWdlUGF0aHM6IFtdLFxyXG4gICAgYWRkUG9zdExvYWRpbmc6IGZhbHNlLFxyXG4gICAgYWRkUG9zdERvbmU6IGZhbHNlLFxyXG4gICAgYWRkUG9zdEVycm9yOiBudWxsLFxyXG5cclxuXHJcbiAgICBsaWtlUG9zdExvYWRpbmc6IGZhbHNlLFxyXG4gICAgbGlrZVBvc3REb25lOiBmYWxzZSxcclxuICAgIGxpa2VQb3N0RXJyb3I6IG51bGwsXHJcblxyXG4gICAgdW5saWtlUG9zdExvYWRpbmc6IGZhbHNlLFxyXG4gICAgdW5saWtlUG9zdERvbmU6IGZhbHNlLFxyXG4gICAgdW5saWtlUG9zdEVycm9yOiBudWxsLFxyXG5cclxuICAgIGxvYWRQb3N0c0xvYWRpbmc6IGZhbHNlLFxyXG4gICAgbG9hZFBvc3RzRG9uZTogZmFsc2UsXHJcbiAgICBsb2FkUG9zdHNFcnJvcjogbnVsbCxcclxuXHJcbiAgICBsb2FkUG9zdExvYWRpbmc6IGZhbHNlLFxyXG4gICAgbG9hZFBvc3REb25lOiBmYWxzZSxcclxuICAgIGxvYWRQb3N0RXJyb3I6IG51bGwsXHJcblxyXG4gICAgcmVtb3ZlUG9zdExvYWRpbmc6IGZhbHNlLFxyXG4gICAgcmVtb3ZlUG9zdERvbmU6IGZhbHNlLFxyXG4gICAgcmVtb3ZlUG9zdEVycm9yOiBudWxsLFxyXG5cclxuICAgIGFkZENvbW1lbnRMb2FkaW5nOiBmYWxzZSxcclxuICAgIGFkZENvbW1lbnREb25lOiBmYWxzZSxcclxuICAgIGFkZENvbW1lbnRFcnJvcjogbnVsbCxcclxuXHJcblxyXG4gICAgdXBsb2FkSW1hZ2VzTG9hZGluZzogZmFsc2UsXHJcbiAgICB1cGxvYWRJbWFnZXNEb25lOiBmYWxzZSxcclxuICAgIHVwbG9hZEltYWdlc0Vycm9yOiBudWxsLFxyXG5cclxuICAgIHJldHdlZXRMb2FkaW5nOiBmYWxzZSxcclxuICAgIHJldHdlZXREb25lOiBmYWxzZSxcclxuICAgIHJldHdlZXRFcnJvcjogbnVsbCxcclxuXHJcbiAgICBoYXNNb3JlUG9zdDp0cnVlLFxyXG5cclxuICAgIHNpbmdsZVBvc3Q6bnVsbCxcclxuICAgXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBSRVRXRUVUX1JFUVVFU1QgPSAnUkVUV0VFVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFJFVFdFRVRfU1VDQ0VTUyA9ICdSRVRXRUVUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgUkVUV0VFVF9GQUlMVVJFID0gJ1JFVFdFRVRfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgVVBMT0FEX0lNQUdFU19SRVFVRVNUID0gJ1VQTE9BRF9JTUFHRVNfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBVUExPQURfSU1BR0VTX1NVQ0NFU1MgPSAnVVBMT0FEX0lNQUdFU19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFVQTE9BRF9JTUFHRVNfRkFJTFVSRSA9ICdVUExPQURfSU1BR0VTX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExJS0VfUE9TVF9SRVFVRVNUID0gJ0xJS0VfUE9TVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExJS0VfUE9TVF9TVUNDRVNTID0gJ0xJS0VfUE9TVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExJS0VfUE9TVF9GQUlMVVJFID0gJ0xJS0VfUE9TVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBVTkxJS0VfUE9TVF9SRVFVRVNUID0gJ1VOTElLRV9QT1NUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgVU5MSUtFX1BPU1RfU1VDQ0VTUyA9ICdVTkxJS0VfUE9TVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFVOTElLRV9QT1NUX0ZBSUxVUkUgPSAnVU5MSUtFX1BPU1RfRkFJTFVSRSc7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfUE9TVFNfUkVRVUVTVCA9ICdMT0FEX1BPU1RTX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9QT1NUU19TVUNDRVNTID0gJ0xPQURfUE9TVFNfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RTX0ZBSUxVUkUgPSAnTE9BRF9QT1NUU19GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX1VTRVJfUE9TVFNfUkVRVUVTVCA9ICdMT0FEX1VTRVJfUE9TVFNfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1VTRVJfUE9TVFNfU1VDQ0VTUyA9ICdMT0FEX1VTRVJfUE9TVFNfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1VTRVJfUE9TVFNfRkFJTFVSRSA9ICdMT0FEX1VTRVJfUE9TVFNfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9IQVNIVEFHX1BPU1RTX1JFUVVFU1QgPSAnTE9BRF9IQVNIVEFHX1BPU1RTX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9IQVNIVEFHX1BPU1RTX1NVQ0NFU1MgPSAnTE9BRF9IQVNIVEFHX1BPU1RTX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9IQVNIVEFHX1BPU1RTX0ZBSUxVUkUgPSAnTE9BRF9IQVNIVEFHX1BPU1RTX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfUE9TVF9SRVFVRVNUID0gJ0xPQURfUE9TVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPQURfUE9TVF9TVUNDRVNTID0gJ0xPQURfUE9TVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPQURfUE9TVF9GQUlMVVJFID0gJ0xPQURfUE9TVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9SRVFVRVNUID0gJ0FERF9QT1NUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfU1VDQ0VTUyA9ICdBRERfUE9TVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX0ZBSUxVUkUgPSAnQUREX1BPU1RfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfUkVRVUVTVCA9ICdSRU1PVkVfUE9TVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX1NVQ0NFU1MgPSAnUkVNT1ZFX1BPU1RfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9GQUlMVVJFID0gJ1JFTU9WRV9QT1NUX0ZBSUxVUkUnO1xyXG5cclxuXHJcblxyXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfUkVRVUVTVCA9ICdBRERfQ09NTUVOVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX1NVQ0NFU1MgPSAnQUREX0NPTU1FTlRfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9GQUlMVVJFID0gJ0FERF9DT01NRU5UX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9JTUFHRSA9J1JFTU9WRV9JTUFHRSc7XHJcblxyXG5leHBvcnQgY29uc3QgYWRkUG9zdCA9IChkYXRhKSA9PiAoe1xyXG4gICAgdHlwZTogQUREX1BPU1RfUkVRVUVTVCxcclxuICAgIGRhdGFcclxufSlcclxuXHJcbmV4cG9ydCBjb25zdCBhZGRDb21tZW50ID0gKGRhdGEpID0+ICh7XHJcbiAgICB0eXBlOiBBRERfQ09NTUVOVF9SRVFVRVNULFxyXG4gICAgZGF0YVxyXG59KVxyXG5cclxuXHJcblxyXG5cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcblxyXG4gICAgcmV0dXJuIHByb2R1Y2Uoc3RhdGUsKGRyYWZ0KT0+e1xyXG4gICAgICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSBSRU1PVkVfSU1BR0U6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5pbWFnZVBhdGhzID0gZHJhZnQuaW1hZ2VQYXRocy5maWx0ZXIoKHYsaSk9PiBpICE9PWFjdGlvbi5kYXRhKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGNhc2UgUkVUV0VFVF9SRVFVRVNUOlxyXG4gICAgICAgICAgICAgICAgICAgIGRyYWZ0LnJldHdlZXRMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBkcmFmdC5yZXR3ZWV0RG9uZT0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgZHJhZnQucmV0d2VldEVycm9yPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgY2FzZSBSRVRXRUVUX1NVQ0NFU1M6XHJcbiAgICBcclxuICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn7ISx6rO1JylcclxuICAgICAgICAgICAgICAgICAgICBkcmFmdC5tYWluUG9zdHMudW5zaGlmdChhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZHJhZnQucmV0d2VldExvYWRpbmc9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGRyYWZ0LnJldHdlZXREb25lPSB0cnVlO1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgY2FzZSBSRVRXRUVUX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgZHJhZnQucmV0d2VldExvYWRpbmc9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkcmFmdC5yZXR3ZWV0RXJyb3I9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIFVQTE9BRF9JTUFHRVNfUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVwbG9hZEltYWdlc0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQudXBsb2FkSW1hZ2VzRG9uZT0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC51cGxvYWRJbWFnZXNFcnJvcj0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgY2FzZSBVUExPQURfSU1BR0VTX1NVQ0NFU1M6XHJcblxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmltYWdlUGF0aHMgPSBkcmFmdC5pbWFnZVBhdGhzLmNvbmNhdChhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn7ISx6rO1JylcclxuXHJcbiAgICAgICAgICAgICAgICBkcmFmdC51cGxvYWRJbWFnZXNMb2FkaW5nPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVwbG9hZEltYWdlc0RvbmU9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgY2FzZSBVUExPQURfSU1BR0VTX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGRyYWZ0LnVwbG9hZEltYWdlc0xvYWRpbmc9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGRyYWZ0LnVwbG9hZEltYWdlc0Vycm9yPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG5cclxuICAgICAgICAgICAgY2FzZSBMSUtFX1BPU1RfUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lmxpa2VQb3N0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5saWtlUG9zdERvbmU9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubGlrZVBvc3RFcnJvcj0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgY2FzZSBMSUtFX1BPU1RfU1VDQ0VTUzp7XHJcblxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+yEseqztScpXHJcbiAgICAgICAgICAgICAgICBjb25zdCBwb3N0ID0gZHJhZnQubWFpblBvc3RzLmZpbmQoKHYpPT52LmlkPT09YWN0aW9uLmRhdGEuUG9zdElkKTtcclxuICAgICAgICAgICAgICAgIHBvc3QuTGlrZXJzLnB1c2goe2lkOmFjdGlvbi5kYXRhLlVzZXJJZH0pO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubGlrZVBvc3RMb2FkaW5nPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lmxpa2VQb3N0RG9uZT0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY2FzZSBMSUtFX1BPU1RfRkFJTFVSRTpcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgZHJhZnQubGlrZVBvc3RMb2FkaW5nPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBkcmFmdC5saWtlUG9zdEVycm9yPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgVU5MSUtFX1BPU1RfUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgZHJhZnQudW5saWtlUG9zdExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkcmFmdC51bmxpa2VQb3N0RG9uZT0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRyYWZ0LnVubGlrZVBvc3RFcnJvcj0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFVOTElLRV9QT1NUX1NVQ0NFU1M6XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwb3N0ID0gZHJhZnQubWFpblBvc3RzLmZpbmQoKHYpPT52LmlkPT09YWN0aW9uLmRhdGEuUG9zdElkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zdC5MaWtlcnMgPSBwb3N0Lkxpa2Vycy5maWx0ZXIoKHYpPT52LmlkICE9PWFjdGlvbi5kYXRhLlVzZXJJZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn7ISx6rO1JylcclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgZHJhZnQudW5saWtlUG9zdExvYWRpbmc9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkcmFmdC51bmxpa2VQb3N0RG9uZT0gdHJ1ZTtcclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBVTkxJS0VfUE9TVF9GQUlMVVJFOlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZHJhZnQudW5saWtlUG9zdExvYWRpbmc9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZHJhZnQudW5saWtlUG9zdEVycm9yPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIExPQURfUE9TVF9SRVFVRVNUOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZHJhZnQubG9hZFBvc3REb25lPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkcmFmdC5sb2FkUG9zdEVycm9yPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBMT0FEX1BPU1RfU1VDQ0VTUzpcclxuICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfshLHqs7UnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRyYWZ0LnNpbmdsZVBvc3Q9YWN0aW9uLmRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZHJhZnQubG9hZFBvc3RMb2FkaW5nPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkcmFmdC5sb2FkUG9zdERvbmU9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIExPQURfUE9TVF9GQUlMVVJFOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0TG9hZGluZz0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0RXJyb3I9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgY2FzZSBMT0FEX1BPU1RTX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgIGNhc2UgTE9BRF9VU0VSX1BPU1RTX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgIGNhc2UgTE9BRF9IQVNIVEFHX1BPU1RTX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkUG9zdHNMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0c0RvbmU9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZFBvc3RzRXJyb3I9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNhc2UgTE9BRF9QT1NUU19TVUNDRVNTOlxyXG4gICAgICAgICAgICBjYXNlIExPQURfVVNFUl9QT1NUU19TVUNDRVNTOlxyXG4gICAgICAgICAgICBjYXNlIExPQURfSEFTSFRBR19QT1NUU19TVUNDRVNTOlxyXG4gXHJcblxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+yEseqztScpXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5tYWluUG9zdHM9IGRyYWZ0Lm1haW5Qb3N0cy5jb25jYXQoYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZFBvc3RzTG9hZGluZz0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkUG9zdHNEb25lPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuaGFzTW9yZVBvc3Q9IGFjdGlvbi5kYXRhLmxlbmd0aCA9PT0xMDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuXHJcbiAgICAgICAgICAgIGNhc2UgTE9BRF9QT1NUU19GQUlMVVJFOlxyXG4gICAgICAgICAgICBjYXNlIExPQURfVVNFUl9QT1NUU19GQUlMVVJFOlxyXG4gICAgICAgICAgICBjYXNlIExPQURfSEFTSFRBR19QT1NUU19GQUlMVVJFOlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBkcmFmdC5sb2FkUG9zdHNMb2FkaW5nPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBkcmFmdC5sb2FkUG9zdHNFcnJvcj0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuXHJcbiAgICAgICAgICAgIGNhc2UgQUREX1BPU1RfUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZFBvc3RMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZFBvc3REb25lPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZFBvc3RFcnJvcj0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgY2FzZSBBRERfUE9TVF9TVUNDRVNTOlxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5pbWFnZVBhdGhzID0gW107XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5tYWluUG9zdHMudW5zaGlmdChhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRQb3N0TG9hZGluZz0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRQb3N0RG9uZT0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgXHJcbiAgICBcclxuICAgICAgICAgICAgY2FzZSBBRERfUE9TVF9GQUlMVVJFOlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgZHJhZnQuYWRkUG9zdExvYWRpbmc9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGRyYWZ0LmFkZFBvc3RFcnJvcj0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgXHJcbiAgICBcclxuICAgICAgICAgICAgY2FzZSBSRU1PVkVfUE9TVF9SRVFVRVNUOlxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgZHJhZnQucmVtb3ZlUG9zdExvYWRpbmc9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgZHJhZnQucmVtb3ZlUG9zdERvbmU9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RFcnJvcj0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBSRU1PVkVfUE9TVF9TVUNDRVNTOlxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgZHJhZnQubWFpblBvc3RzPSBkcmFmdC5tYWluUG9zdHMuZmlsdGVyKCh2KT0+di5pZCAhPT0gYWN0aW9uLmRhdGEuUG9zdElkKTtcclxuICAgICAgICAgICAgICAgICAgICBkcmFmdC5yZW1vdmVQb3N0TG9hZGluZz0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgZHJhZnQucmVtb3ZlUG9zdERvbmU9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICBcclxuICAgICAgICAgICAgY2FzZSBSRU1PVkVfUE9TVF9GQUlMVVJFOlxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RMb2FkaW5nPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBkcmFmdC5yZW1vdmVQb3N0RXJyb3I9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBBRERfQ09NTUVOVF9SRVFVRVNUOlxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGRyYWZ0LmFkZENvbW1lbnRMb2FkaW5nPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGRyYWZ0LmFkZENvbW1lbnREb25lPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBkcmFmdC5hZGRDb21tZW50RXJyb3I9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQUREX0NPTU1FTlRfU1VDQ0VTUzoge1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHBvc3QgPWRyYWZ0Lm1haW5Qb3N0cy5maW5kKCh2KT0+di5pZD09PWFjdGlvbi5kYXRhLlBvc3RJZCk7XHJcbiAgICAgICAgICAgICAgICBwb3N0LkNvbW1lbnRzLnVuc2hpZnQoYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkQ29tbWVudExvYWRpbmc9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkQ29tbWVudERvbmU9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIEFERF9DT01NRU5UX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBkcmFmdC5hZGRDb21tZW50TG9hZGluZz0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgZHJhZnQuYWRkQ29tbWVudEVycm9yPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICBcclxuICAgIFxyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgXHJcbn07XHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7IiwiaW1wb3J0IHByb2R1Y2UgZnJvbSAnLi4vdXRpbC9wcm9kdWNlJztcclxuXHJcbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgICBsb2FkTXlJbmZvTG9hZGluZzogZmFsc2UsXHJcbiAgICBsb2FkTXlJbmZvRG9uZTogZmFsc2UsXHJcbiAgICBsb2FkTXlJbmZvRXJyb3I6IG51bGwsXHJcblxyXG4gICAgbG9hZEZvbGxvd2Vyc0xvYWRpbmc6IGZhbHNlLFxyXG4gICAgbG9hZEZvbGxvd2Vyc0RvbmU6IGZhbHNlLFxyXG4gICAgbG9hZEZvbGxvd2Vyc0Vycm9yOiBudWxsLFxyXG5cclxuICAgIGxvYWRGb2xsb3dpbmdzTG9hZGluZzogZmFsc2UsXHJcbiAgICBsb2FkRm9sbG93aW5nc0RvbmU6IGZhbHNlLFxyXG4gICAgbG9hZEZvbGxvd2luZ3NFcnJvcjogbnVsbCxcclxuXHJcblxyXG4gICAgcmVtb3ZlRm9sbG93ZXJMb2FkaW5nOiBmYWxzZSxcclxuICAgIHJlbW92ZUZvbGxvd2VyRG9uZTogZmFsc2UsXHJcbiAgICByZW1vdmVGb2xsb3dlckVycm9yOiBudWxsLFxyXG5cclxuICAgIGZvbGxvd0xvYWRpbmc6IGZhbHNlLFxyXG4gICAgZm9sbG93RG9uZTogZmFsc2UsXHJcbiAgICBmb2xsb3dFcnJvcjogbnVsbCxcclxuICAgIHVuZm9sbG93TG9hZGluZzogZmFsc2UsXHJcbiAgICB1bmZvbGxvd0RvbmU6IGZhbHNlLFxyXG4gICAgdW5mb2xsb3dFcnJvcjogbnVsbCxcclxuXHJcblxyXG4gICAgbG9nSW5Mb2FkaW5nOiBmYWxzZSxcclxuICAgIGxvZ0luRG9uZTogZmFsc2UsXHJcbiAgICBsb2dJbkVycm9yOiBudWxsLFxyXG4gICAgbG9nT3V0TG9hZGluZzogZmFsc2UsXHJcbiAgICBsb2dPdXREb25lOiBmYWxzZSxcclxuICAgIGxvZ091dEVycm9yOiBudWxsLFxyXG4gICAgc2lnblVwTG9hZGluZzogZmFsc2UsXHJcbiAgICBzaWduVXBEb25lOiBmYWxzZSxcclxuICAgIHNpZ25VcEZhaWx1cmU6IG51bGwsXHJcbiAgICBjaGFuZ2VOaWNrbmFtZUxvYWRpbmc6IGZhbHNlLFxyXG4gICAgY2hhbmdlTmlja25hbWVEb25lOiBmYWxzZSxcclxuICAgIGNoYW5nZU5pY2tuYW1lRmFpbHVyZTogbnVsbCxcclxuICAgIGNoYW5nZU5pY2tuYW1lRXJyb3I6bnVsbCxcclxuICAgIG1lOiBudWxsLFxyXG4gICAgc2lnblVwRGF0YToge30sXHJcbiAgICBsb2dpbkRhdGE6IHt9LFxyXG4gICAgdXNlckluZm86bnVsbFxyXG5cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX01ZX0lORk9fUkVRVUVTVCA9ICdMT0FEX01ZX0lORk9fUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX01ZX0lORk9fU1VDQ0VTUyA9ICdMT0FEX01ZX0lORk9fU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX01ZX0lORk9fRkFJTFVSRSA9ICdMT0FEX01ZX0lORk9fRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9VU0VSX1JFUVVFU1QgPSAnTE9BRF9VU0VSX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9VU0VSX1NVQ0NFU1MgPSAnTE9BRF9VU0VSX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9VU0VSX0ZBSUxVUkUgPSAnTE9BRF9VU0VSX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPR19JTl9SRVFVRVNUID0gJ0xPR19JTl9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPR19JTl9TVUNDRVNTID0gJ0xPR19JTl9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPR19JTl9GQUlMVVJFID0gJ0xPR19JTl9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBMT0dfT1VUX1JFUVVFU1QgPSAnTE9HX09VVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPR19PVVRfU1VDQ0VTUyA9ICdMT0dfT1VUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9HX09VVF9GQUlMVVJFID0gJ0xPR19PVVRfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgU0lHTl9VUF9SRVFVRVNUID0gJ1NJR05fVVBfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBTSUdOX1VQX1NVQ0NFU1MgPSAnU0lHTl9VUF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFNJR05fVVBfRkFJTFVSRSA9ICdTSUdOX1VQX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IENIQU5HRV9OSUNLTkFNRV9SRVFVRVNUID0gJ0NIQU5HRV9OSUNLTkFNRV9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IENIQU5HRV9OSUNLTkFNRV9TVUNDRVNTID0gJ0NIQU5HRV9OSUNLTkFNRV9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IENIQU5HRV9OSUNLTkFNRV9GQUlMVVJFID0gJ0NIQU5HRV9OSUNLTkFNRV9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX0ZPTExPV0lOR1NfUkVRVUVTVCA9ICdMT0FEX0ZPTExPV0lOR1NfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX0ZPTExPV0lOR1NfU1VDQ0VTUyA9ICdMT0FEX0ZPTExPV0lOR1NfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX0ZPTExPV0lOR1NfRkFJTFVSRSA9ICdMT0FEX0ZPTExPV0lOR1NfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9GT0xMT1dFUlNfUkVRVUVTVCA9ICdMT0FEX0ZPTExPV1dFUlNfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX0ZPTExPV0VSU19TVUNDRVNTID0gJ0xPQURfRk9MTE9XV0VSU19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPQURfRk9MTE9XRVJTX0ZBSUxVUkUgPSAnTE9BRF9GT0xMT1dXRVJTX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9GT0xMT1dFUl9SRVFVRVNUID0gJ1JFTU9WRV9GT0xMT1dFUl9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9GT0xMT1dFUl9TVUNDRVNTID0gJ1JFTU9WRV9GT0xMT1dFUl9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9GT0xMT1dFUl9GQUlMVVJFID0gJ1JFTU9WRV9GT0xMT1dFUl9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBGT0xMT1dfUkVRVUVTVCA9ICdGT0xMT1dfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBGT0xMT1dfU1VDQ0VTUyA9ICdGT0xMT1dfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBGT0xMT1dfRkFJTFVSRSA9ICdGT0xMT1dfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgVU5GT0xMT1dfUkVRVUVTVCA9ICdVTkZPTExPV19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFVORk9MTE9XX1NVQ0NFU1MgPSAnVU5GT0xMT1dfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBVTkZPTExPV19GQUlMVVJFID0gJ1VORk9MTE9XX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX1RPX01FID0gJ0FERF9QT1NUX1RPX01FJztcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX09GX01FID0gJ1JFTU9WRV9QT1NUX09GX01FJztcclxuXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ2luUmVxdWVzdEFjdGlvbiA9IChkYXRhKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGU6IExPR19JTl9SRVFVRVNULFxyXG4gICAgICAgIGRhdGEsXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY29uc3QgbG9nb3V0UmVxdWVzdEFjdGlvbiA9ICgpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdHlwZTogTE9HX09VVF9SRVFVRVNULFxyXG5cclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICByZXR1cm4gcHJvZHVjZShzdGF0ZSwgKGRyYWZ0KSA9PiB7XHJcblxyXG4gICAgICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSBSRU1PVkVfRk9MTE9XRVJfUkVRVUVTVDpcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgZHJhZnQucmVtb3ZlRm9sbG93ZXJMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZUZvbGxvd2VyRXJyb3IgPSBudWxsO2BgXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZW1vdmVGb2xsb3dlckRvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFJFTU9WRV9GT0xMT1dFUl9TVUNDRVNTOlxyXG5cclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZUZvbGxvd2VyTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQucmVtb3ZlRm9sbG93ZXJEb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lm1lLkZvbGxvd2VycyA9IGRyYWZ0Lm1lLkZvbGxvd2Vycy5maWx0ZXIoKHYpPT52LmlkICE9PSBhY3Rpb24uZGF0YS5Vc2VySWQpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIFJFTU9WRV9GT0xMT1dFUl9GQUlMVVJFOlxyXG5cclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZUZvbGxvd2VyTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQucmVtb3ZlRm9sbG93ZXJFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgY2FzZSBMT0FEX0ZPTExPV0lOR1NfUkVRVUVTVDpcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZEZvbGxvd2luZ3NMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRGb2xsb3dpbmdzRXJyb3IgPSBudWxsO2BgXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkRm9sbG93aW5nc0RvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIExPQURfRk9MTE9XSU5HU19TVUNDRVNTOlxyXG5cclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRGb2xsb3dpbmdzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZEZvbGxvd2luZ3NEb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lm1lLkZvbGxvd2luZ3MgPSBhY3Rpb24uZGF0YTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBMT0FEX0ZPTExPV0lOR1NfRkFJTFVSRTpcclxuXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkRm9sbG93aW5nc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRGb2xsb3dpbmdzRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcblxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgY2FzZSBMT0FEX0ZPTExPV0VSU19SRVFVRVNUOlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZHJhZnQubG9hZEZvbGxvd2Vyc0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRGb2xsb3dlcnNFcnJvciA9IG51bGw7YGBcclxuICAgICAgICAgICAgICAgICAgICBkcmFmdC5sb2FkRm9sbG93ZXJzRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBMT0FEX0ZPTExPV0VSU19TVUNDRVNTOlxyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgZHJhZnQubG9hZEZvbGxvd2Vyc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBkcmFmdC5sb2FkRm9sbG93ZXJzRG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgZHJhZnQubWUuRm9sbG93ZXJzID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgIGNhc2UgTE9BRF9GT0xMT1dFUlNfRkFJTFVSRTpcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRGb2xsb3dlcnNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgZHJhZnQubG9hZEZvbGxvd2Vyc0Vycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgTE9BRF9NWV9JTkZPX1JFUVVFU1Q6XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRNeUluZm9Mb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRNeUluZm9FcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkTXlJbmZvRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgTE9BRF9NWV9JTkZPX1NVQ0NFU1M6XHJcblxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZE15SW5mb0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRNeUluZm9Eb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lm1lID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgTE9BRF9NWV9JTkZPX0ZBSUxVUkU6XHJcblxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZE15SW5mb0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRNeUluZm9FcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICBjYXNlIExPQURfVVNFUl9SRVFVRVNUOlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZHJhZnQubG9hZFVzZXJMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBkcmFmdC5sb2FkVXNlckVycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICBkcmFmdC5sb2FkVXNlckRvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgTE9BRF9VU0VSX1NVQ0NFU1M6XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICBkcmFmdC5sb2FkVXNlckxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBkcmFmdC5sb2FkVXNlckRvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGRyYWZ0LnVzZXJJbmZvID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgIGNhc2UgTE9BRF9VU0VSX0ZBSUxVUkU6XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICBkcmFmdC5sb2FkVXNlckxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBkcmFmdC5sb2FkTXlJbmZvRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBGT0xMT1dfUkVRVUVTVDpcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgZHJhZnQuZm9sbG93TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5mb2xsb3dFcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5mb2xsb3dEb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBGT0xMT1dfU1VDQ0VTUzpcclxuXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5mb2xsb3dMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5mb2xsb3dEb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lm1lLkZvbGxvd2luZ3MucHVzaCh7aWQ6YWN0aW9uLmRhdGEuVXNlcklkfSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgRk9MTE9XX0ZBSUxVUkU6XHJcblxyXG4gICAgICAgICAgICAgICAgZHJhZnQuZm9sbG93TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuZm9sbG93RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcblxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgY2FzZSBVTkZPTExPV19SRVFVRVNUOlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBkcmFmdC51bmZvbGxvd0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGRyYWZ0LnVuZm9sbG93RXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgIGRyYWZ0LnVuZm9sbG93RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBVTkZPTExPV19TVUNDRVNTOlxyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgZHJhZnQudW5mb2xsb3dMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgZHJhZnQudW5mb2xsb3dEb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBkcmFmdC5tZS5Gb2xsb3dpbmdzID0gZHJhZnQubWUuRm9sbG93aW5ncy5maWx0ZXIoKHYpPT52LmlkICE9PSBhY3Rpb24uZGF0YS5Vc2VySWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICBjYXNlIFVORk9MTE9XX0ZBSUxVUkU6XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICBkcmFmdC51bmZvbGxvd0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBkcmFmdC51bmZvbGxvd0Vycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgTE9HX0lOX1JFUVVFU1Q6XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvZ0luTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2dJbkVycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvZ0luRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgTE9HX0lOX1NVQ0NFU1M6XHJcblxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9nSW5Mb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2dJbkRvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubWUgPSBhY3Rpb24uZGF0YTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBMT0dfSU5fRkFJTFVSRTpcclxuXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2dJbkxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvZ0luRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcblxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgTE9HX09VVF9SRVFVRVNUOlxyXG5cclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvZ091dExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9nT3V0RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9nT3V0RXJyb3IgPSBudWxsO1xyXG5cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBMT0dfT1VUX1NVQ0NFU1M6XHJcblxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9nT3V0TG9hZGluZyA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgICAgIGRyYWZ0Lm1lID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvZ091dERvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgTE9HX09VVF9GQUlMVVJFOlxyXG5cclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvZ091dExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvZ091dEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIFNJR05fVVBfUkVRVUVTVDpcclxuXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5zaWduVXBMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnNpZ25VcERvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnNpZ25VcEVycm9yID0gbnVsbDtcclxuXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgU0lHTl9VUF9TVUNDRVNTOlxyXG5cclxuICAgICAgICAgICAgICAgIGRyYWZ0LnNpZ25VcExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnNpZ25VcERvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgU0lHTl9VUF9GQUlMVVJFOlxyXG5cclxuICAgICAgICAgICAgICAgIGRyYWZ0LnNpZ25VcExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnNpZ25VcEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG5cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBDSEFOR0VfTklDS05BTUVfUkVRVUVTVDpcclxuXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZUxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVEb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZUVycm9yID0gbnVsbDtcclxuXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5tZS5uaWNrbmFtZSA9IGFjdGlvbi5kYXRhLm5pY2tuYW1lO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZURvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkU6XHJcblxyXG4gICAgICAgICAgICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZUVycm9yID0gYWN0aW9uLmVycm9yO1xyXG5cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEFERF9QT1NUX1RPX01FOlxyXG5cclxuICAgICAgICAgICAgICAgIGRyYWZ0Lm1lLlBvc3RzLnVuc2hpZnQoeyBpZDogYWN0aW9uLmRhdGEgfSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcblxyXG4gICAgICAgICAgICBjYXNlIFJFTU9WRV9QT1NUX09GX01FOlxyXG5cclxuICAgICAgICAgICAgICAgIGRyYWZ0Lm1lLlBvc3RzID0gZHJhZnQubWUuUG9zdHMuZmlsdGVyKCh2KSA9PiB2LmlkICE9PSBhY3Rpb24uZGF0YSk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICB9KVxyXG5cclxufTtcclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjsiLCJpbXBvcnQgeyBhbGwsIGZvcmssIH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJ1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgcG9zdFNhZ2EgZnJvbSAnLi9wb3N0JztcclxuaW1wb3J0IHVzZXJTYWdhIGZyb20gJy4vdXNlcic7XHJcbmltcG9ydCB7IGJhY2tVcmwgfSBmcm9tICcuLi9jb25maWcvY29uZmlnJztcclxuXHJcblxyXG5heGlvcy5kZWZhdWx0cy5iYXNlVVJMID0gYmFja1VybDtcclxuYXhpb3MuZGVmYXVsdHMud2l0aENyZWRlbnRpYWxzPXRydWU7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHJvb3RTYWdhKCkge1xyXG4gICAgeWllbGQgYWxsKFtcclxuICAgICAgICBmb3JrKHVzZXJTYWdhKSxcclxuICAgICAgICBmb3JrKHBvc3RTYWdhKSxcclxuIFxyXG4gICAgXSk7XHJcbn0iLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IGFsbCwgZGVsYXksIHB1dCwgZm9yaywgdGFrZUxhdGVzdCwgdGhyb3R0bGUsY2FsbCB9IGZyb20gXCJyZWR1eC1zYWdhL2VmZmVjdHNcIjtcclxuaW1wb3J0IHtMSUtFX1BPU1RfUkVRVUVTVCxVTkxJS0VfUE9TVF9SRVFVRVNULCBnZW5lcmF0ZUR1bW15UG9zdCxSRU1PVkVfUE9TVF9TVUNDRVNTLEFERF9QT1NUX1NVQ0NFU1MsIEFERF9QT1NUX0ZBSUxVUkUsIEFERF9QT1NUX1JFUVVFU1QsIEFERF9DT01NRU5UX1JFUVVFU1QsIEFERF9DT01NRU5UX1NVQ0NFU1MsIEFERF9DT01NRU5UX0ZBSUxVUkUsIFJFTU9WRV9QT1NUX1JFUVVFU1QsIExPQURfUE9TVFNfUkVRVUVTVCwgTE9BRF9QT1NUU19TVUNDRVNTLCBMT0FEX1BPU1RTX0ZBSUxVUkUsIExJS0VfUE9TVF9TVUNDRVNTLCBMSUtFX1BPU1RfRkFJTFVSRSwgVU5MSUtFX1BPU1RfU1VDQ0VTUywgVU5MSUtFX1BPU1RfRkFJTFVSRSwgVVBMT0FEX0lNQUdFU19SRVFVRVNULCBVUExPQURfSU1BR0VTX1NVQ0NFU1MsIFVQTE9BRF9JTUFHRVNfRkFJTFVSRSwgUkVUV0VFVF9SRVFVRVNULCBSRVRXRUVUX1NVQ0NFU1MsIFJFVFdFRVRfRkFJTFVSRSwgTE9BRF9QT1NUX1JFUVVFU1QsIExPQURfUE9TVF9TVUNDRVNTLCBMT0FEX1BPU1RfRkFJTFVSRSwgTE9BRF9VU0VSX1BPU1RTX1JFUVVFU1QsIExPQURfSEFTSFRBR19QT1NUU19SRVFVRVNULCBMT0FEX1VTRVJfUE9TVFNfU1VDQ0VTUywgTE9BRF9VU0VSX1BPU1RTX0ZBSUxVUkUsIExPQURfSEFTSFRBR19QT1NUU19TVUNDRVNTLCBMT0FEX0hBU0hUQUdfUE9TVFNfRkFJTFVSRSB9IGZyb20gXCIuLi9yZWR1Y2Vycy9wb3N0XCI7XHJcbmltcG9ydCB7IEFERF9QT1NUX1RPX01FLCBGT0xMT1dfRkFJTFVSRSwgRk9MTE9XX1JFUVVFU1QsIEZPTExPV19TVUNDRVNTLCBSRU1PVkVfUE9TVF9PRl9NRSwgVU5GT0xMT1dfRkFJTFVSRSwgVU5GT0xMT1dfUkVRVUVTVCwgVU5GT0xMT1dfU1VDQ0VTUyB9IGZyb20gJy4uL3JlZHVjZXJzL3VzZXInO1xyXG5cclxuZnVuY3Rpb24gbGlrZVBvc3RBUEkoZGF0YSkge1xyXG4gICAgcmV0dXJuIGF4aW9zLnBhdGNoKGAvcG9zdC8ke2RhdGF9L2xpa2VgKVxyXG59XHJcblxyXG5mdW5jdGlvbiogbGlrZVBvc3QoYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG5cclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxpa2VQb3N0QVBJLGFjdGlvbi5kYXRhKVxyXG4gICBcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coYWN0aW9uLmRhdGErJ2RhdGEg662Q7JW8IOyUqOuwnCcpXHJcblxyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcblxyXG4gICAgICAgICAgICB0eXBlOiBMSUtFX1BPU1RfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcblxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG5cclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG5cclxuICAgICAgICAgICAgdHlwZTogTElLRV9QT1NUX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiB1bmxpa2VQb3N0QVBJKGRhdGEpIHtcclxuICAgIHJldHVybiBheGlvcy5kZWxldGUoYC9wb3N0LyR7ZGF0YX0vbGlrZWApXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB1bmxpa2VQb3N0KGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbCh1bmxpa2VQb3N0QVBJLGFjdGlvbi5kYXRhKVxyXG4gICBcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coYWN0aW9uLmRhdGErJ2RhdGEg662Q7JW8IOyUqOuwnCcpXHJcblxyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcblxyXG4gICAgICAgICAgICB0eXBlOiBVTkxJS0VfUE9TVF9TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcblxyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcblxyXG4gICAgICAgICAgICB0eXBlOiBVTkxJS0VfUE9TVF9GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGFcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gbG9hZFBvc3RBUEkoZGF0YSkge1xyXG4gICAgcmV0dXJuIGF4aW9zLmdldChgL3Bvc3QvJHtkYXRhfWApXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsb2FkUG9zdChhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcblxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9hZFBvc3RBUEksYWN0aW9uLmRhdGEpXHJcbiAgIFxyXG5cclxuXHJcblxyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcblxyXG4gICAgICAgICAgICB0eXBlOiBMT0FEX1BPU1RfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcblxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG5cclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG5cclxuICAgICAgICAgICAgdHlwZTogTE9BRF9QT1NUX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvYWRQb3N0c0FQSShsYXN0SWQpIHtcclxuICAgIHJldHVybiBheGlvcy5nZXQoYC9wb3N0cz9sYXN0SWQ9JHtsYXN0SWQgfHwgMH1gKVxyXG59XHJcblxyXG5mdW5jdGlvbiogbG9hZFBvc3RzKGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2FkUG9zdHNBUEksYWN0aW9uLmxhc3RJZClcclxuICAgXHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCsnbGFzdElkIOutkOyVvCDslKjrsJwnKVxyXG5cclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG5cclxuICAgICAgICAgICAgdHlwZTogTE9BRF9QT1NUU19TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcblxyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcblxyXG4gICAgICAgICAgICB0eXBlOiBMT0FEX1BPU1RTX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiB1c2VyUG9zdHNBUEkoZGF0YSxsYXN0SWQpIHtcclxuICAgIHJldHVybiBheGlvcy5nZXQoYC91c2VyLyR7ZGF0YX0vcG9zdHM/bGFzdElkPSR7bGFzdElkIHx8IDB9YClcclxufVxyXG5cclxuZnVuY3Rpb24qIHVzZXJQb3N0cyhhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcblxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwodXNlclBvc3RzQVBJLGFjdGlvbi5kYXRhLGFjdGlvbi5sYXN0SWQpXHJcbiAgIFxyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQrJ2xhc3RJZCDrrZDslbwg7JSo67CcJylcclxuXHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuXHJcbiAgICAgICAgICAgIHR5cGU6IExPQURfVVNFUl9QT1NUU19TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcblxyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcblxyXG4gICAgICAgICAgICB0eXBlOiBMT0FEX1VTRVJfUE9TVFNfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGhhc2h0YWdQb3N0c0FQSShkYXRhLGxhc3RJZCkge1xyXG4gICAgcmV0dXJuIGF4aW9zLmdldChgL2hhc2h0YWcvJHtlbmNvZGVVUklDb21wb25lbnQoZGF0YSl9P2xhc3RJZD0ke2xhc3RJZCB8fCAwfWApXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBoYXNodGFnUG9zdHMoYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG5cclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGhhc2h0YWdQb3N0c0FQSSxhY3Rpb24uZGF0YSxhY3Rpb24ubGFzdElkKVxyXG4gICBcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KydsYXN0SWQg662Q7JW8IOyUqOuwnCcpXHJcblxyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcblxyXG4gICAgICAgICAgICB0eXBlOiBMT0FEX0hBU0hUQUdfUE9TVFNfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcblxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG5cclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG5cclxuICAgICAgICAgICAgdHlwZTogTE9BRF9IQVNIVEFHX1BPU1RTX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4vLyBmdW5jdGlvbiBsb2FkUG9zdEFQSShkYXRhKSB7XHJcbi8vICAgICByZXR1cm4gYXhpb3MuZ2V0KCcvcG9zdCcsIGRhdGEpXHJcbi8vIH1cclxuXHJcbi8vIGZ1bmN0aW9uKiBsb2FkUG9zdChhY3Rpb24pIHtcclxuLy8gICAgIHRyeSB7XHJcblxyXG4vLyAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9hZFBvc3RBUEksYWN0aW9uLmRhdGEpXHJcbiAgIFxyXG5cclxuLy8gICAgICAgICBjb25zb2xlLmxvZyhhY3Rpb24uZGF0YSsnZGF0YSDrrZDslbwg7JSo67CcJylcclxuXHJcbi8vICAgICAgICAgeWllbGQgcHV0KHtcclxuXHJcbi8vICAgICAgICAgICAgIHR5cGU6IExPQURfUE9TVFNfU1VDQ0VTUyxcclxuLy8gICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcblxyXG4vLyAgICAgICAgIH0pO1xyXG5cclxuLy8gICAgIH0gY2F0Y2ggKGVycikge1xyXG5cclxuLy8gICAgICAgICB5aWVsZCBwdXQoe1xyXG5cclxuLy8gICAgICAgICAgICAgdHlwZTogTE9BRF9QT1NUU19GQUlMVVJFLFxyXG4vLyAgICAgICAgICAgICBkYXRhOiBlcnIucmVzcG9uc2UuZGF0YVxyXG4vLyAgICAgICAgIH0pXHJcbi8vICAgICB9XHJcbi8vIH1cclxuXHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGFkZFBvc3RBUEkoZGF0YSkge1xyXG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoJy9wb3N0JywgZGF0YSlcclxufVxyXG5cclxuZnVuY3Rpb24qIGFkZFBvc3QoYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG5cclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGFkZFBvc3RBUEksYWN0aW9uLmRhdGEpXHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc29sZS5sb2coYWN0aW9uLmRhdGEpXHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuXHJcbiAgICAgICAgICAgIHR5cGU6IEFERF9QT1NUX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG5cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogQUREX1BPU1RfVE9fTUUsIFxyXG4gICAgICAgICAgICBkYXRhOnJlc3VsdC5kYXRhLmlkXHJcbiAgICAgICAgfSlcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG5cclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG5cclxuICAgICAgICAgICAgdHlwZTogQUREX1BPU1RfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiByZW1vdmVQb3N0QVBJKGRhdGEpIHtcclxuICAgIHJldHVybiBheGlvcy5kZWxldGUoYC9wb3N0LyR7ZGF0YX1gKVxyXG59XHJcblxyXG5mdW5jdGlvbiogcmVtb3ZlUG9zdChhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcblxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwocmVtb3ZlUG9zdEFQSSxhY3Rpb24uZGF0YSlcclxuICAgICAgIFxyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcblxyXG4gICAgICAgICAgICB0eXBlOiBSRU1PVkVfUE9TVF9TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBSRU1PVkVfUE9TVF9PRl9NRSwgXHJcbiAgICAgICAgICAgIGRhdGE6YWN0aW9uLmRhdGFcclxuICAgICAgICB9KVxyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpXHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuXHJcbiAgICAgICAgICAgIHR5cGU6IFJFTU9WRV9QT1NUX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gYWRkQ29tbWVudEFQSShkYXRhKSB7XHJcbiAgICByZXR1cm4gYXhpb3MucG9zdChgL3Bvc3QvJHtkYXRhLnBvc3RJZH0vY29tbWVudGAsIGRhdGEpXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBhZGRDb21tZW50KGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChhZGRDb21tZW50QVBJLGFjdGlvbi5kYXRhKVxyXG4gIFxyXG4gICAgICAgIGNvbnNvbGUubG9nKCfsvZTrqZjtirgnKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdClcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG5cclxuICAgICAgICAgICAgdHlwZTogQUREX0NPTU1FTlRfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGFcclxuICAgICAgICB9KVxyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcblxyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcblxyXG4gICAgICAgICAgICB0eXBlOiBBRERfQ09NTUVOVF9GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGFcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZnVuY3Rpb24gdXBsb2FkSW1hZ2VzQVBJKGRhdGEpIHtcclxuICAgIHJldHVybiBheGlvcy5wb3N0KCcvcG9zdC9pbWFnZXMnLCBkYXRhKVxyXG59XHJcblxyXG5mdW5jdGlvbiogdXBsb2FkSW1hZ2VzKGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbCh1cGxvYWRJbWFnZXNBUEksYWN0aW9uLmRhdGEpXHJcbiAgXHJcbiAgICAgICAgY29uc29sZS5sb2coJ+y9lOupmO2KuCcpXHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KVxyXG5cclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG5cclxuICAgICAgICAgICAgdHlwZTogVVBMT0FEX0lNQUdFU19TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YVxyXG4gICAgICAgIH0pXHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuXHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuXHJcbiAgICAgICAgICAgIHR5cGU6IFVQTE9BRF9JTUFHRVNfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiByZXR3ZWV0QVBJKGRhdGEpIHtcclxuICAgIHJldHVybiBheGlvcy5wb3N0KGAvcG9zdC8ke2RhdGF9L3JldHdlZXRgKVxyXG59XHJcblxyXG5mdW5jdGlvbiogcmV0d2VldChhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcblxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwocmV0d2VldEFQSSxhY3Rpb24uZGF0YSlcclxuICBcclxuICAgICAgICBjb25zb2xlLmxvZygn7L2U66mY7Yq4JylcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpXHJcblxyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcblxyXG4gICAgICAgICAgICB0eXBlOiBSRVRXRUVUX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhXHJcbiAgICAgICAgfSlcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG5cclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG5cclxuICAgICAgICAgICAgdHlwZTogUkVUV0VFVF9GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGFcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoUmV0d2VldCgpIHtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoUkVUV0VFVF9SRVFVRVNULCByZXR3ZWV0KTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoVXBsb2FkSW1hZ2VzKCkge1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChVUExPQURfSU1BR0VTX1JFUVVFU1QsIHVwbG9hZEltYWdlcyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaExpa2VQb3N0KCkge1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChMSUtFX1BPU1RfUkVRVUVTVCwgbGlrZVBvc3QpO1xyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaFVubGlrZVBvc3QoKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KFVOTElLRV9QT1NUX1JFUVVFU1QsIHVubGlrZVBvc3QpO1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24qIHdhdGNoQWRkUG9zdCgpIHtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoQUREX1BPU1RfUkVRVUVTVCwgYWRkUG9zdCk7XHJcbn1cclxuLy8gZnVuY3Rpb24qIHdhdGNoTG9hZFBvc3QoKSB7XHJcbi8vICAgICB5aWVsZCB0aHJvdHRsZSg1MDAwLExPQURfUE9TVFNfUkVRVUVTVCwgbG9hZFBvc3QpO1xyXG4vLyB9XHJcbmZ1bmN0aW9uKiB3YXRjaExvYWRQb3N0cygpIHtcclxuICAgIHlpZWxkIHRocm90dGxlKDUwMDAsTE9BRF9QT1NUU19SRVFVRVNULCBsb2FkUG9zdHMpO1xyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaExvYWRQb3N0KCkge1xyXG4gICAgeWllbGQgdGhyb3R0bGUoNTAwMCxMT0FEX1BPU1RfUkVRVUVTVCwgbG9hZFBvc3QpO1xyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaFVzZXJMb2FkUG9zdHMoKSB7XHJcbiAgICB5aWVsZCB0aHJvdHRsZSg1MDAwLExPQURfVVNFUl9QT1NUU19SRVFVRVNULCB1c2VyUG9zdHMpO1xyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaEhhc2h0YWdMb2FkUG9zdHMoKSB7XHJcbiAgICB5aWVsZCB0aHJvdHRsZSg1MDAwLExPQURfSEFTSFRBR19QT1NUU19SRVFVRVNULCBoYXNodGFnUG9zdHMpO1xyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaFJlbW92ZVBvc3QoKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KFJFTU9WRV9QT1NUX1JFUVVFU1QsIHJlbW92ZVBvc3QpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hBZGRDb21tZW50KCkge1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChBRERfQ09NTUVOVF9SRVFVRVNULCBhZGRDb21tZW50KTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiBwb3N0U2FnYSgpIHtcclxuICAgIHlpZWxkIGFsbChbXHJcbiAgICAgICAgZm9yayh3YXRjaFVwbG9hZEltYWdlcyksXHJcbiAgICAgICAgZm9yayh3YXRjaFJldHdlZXQpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hBZGRQb3N0KSxcclxuICAgICAgICBmb3JrKHdhdGNoTGlrZVBvc3QpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hVbmxpa2VQb3N0KSxcclxuXHJcbiAgICAgICAgLy8gZm9yayh3YXRjaExvYWRQb3N0KSxcclxuICAgICAgICBmb3JrKHdhdGNoTG9hZFBvc3RzKSxcclxuICAgICAgICBmb3JrKHdhdGNoVXNlckxvYWRQb3N0cyksXHJcbiAgICAgICAgZm9yayh3YXRjaEhhc2h0YWdMb2FkUG9zdHMpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hMb2FkUG9zdCksXHJcbiAgICAgICAgZm9yayh3YXRjaFJlbW92ZVBvc3QpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hBZGRDb21tZW50KSxcclxuICAgIF0pXHJcbn0iLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IGFsbCAsZm9yayx0YWtlTGF0ZXN0LGRlbGF5LHB1dCxjYWxsfSBmcm9tIFwicmVkdXgtc2FnYS9lZmZlY3RzXCI7XHJcbmltcG9ydCB7IExPQURfTVlfSU5GT19SRVFVRVNULExPQURfTVlfSU5GT19TVUNDRVNTLExPQURfTVlfSU5GT19GQUlMVVJFLExPR19JTl9TVUNDRVNTLFNJR05fVVBfU1VDQ0VTUyxTSUdOX1VQX1JFUVVFU1QsRk9MTE9XX0ZBSUxVUkUsRk9MTE9XX1JFUVVFU1QsRk9MTE9XX1NVQ0NFU1MsTE9HX0lOX0ZBSUxVUkUsTE9HX0lOX1JFUVVFU1QsTE9HX09VVF9GQUlMVVJFLExPR19PVVRfUkVRVUVTVCxMT0dfT1VUX1NVQ0NFU1MsU0lHTl9VUF9GQUlMVVJFLCBVTkZPTExPV19SRVFVRVNULCBVTkZPTExPV19GQUlMVVJFLCBVTkZPTExPV19TVUNDRVNTLCBDSEFOR0VfTklDS05BTUVfUkVRVUVTVCwgQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkUsIENIQU5HRV9OSUNLTkFNRV9TVUNDRVNTLCBMT0FEX0ZPTExPV0VSU19SRVFVRVNULCBMT0FEX0ZPTExPV0lOR1NfUkVRVUVTVCwgTE9BRF9GT0xMT1dFUlNfU1VDQ0VTUywgTE9BRF9GT0xMT1dFUlNfRkFJTFVSRSwgTE9BRF9GT0xMT1dJTkdTX1NVQ0NFU1MsIExPQURfRk9MTE9XSU5HU19GQUlMVVJFLCBSRU1PVkVfRk9MTE9XRVJfUkVRVUVTVCwgUkVNT1ZFX0ZPTExPV0VSX1NVQ0NFU1MsIFJFTU9WRV9GT0xMT1dFUl9GQUlMVVJFLCBMT0FEX1VTRVJfUkVRVUVTVCwgTE9BRF9VU0VSX1NVQ0NFU1MsIExPQURfVVNFUl9GQUlMVVJFIH0gZnJvbSBcIi4uL3JlZHVjZXJzL3VzZXJcIjtcclxuXHJcblxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlRm9sbG93ZXJBUEkoZGF0YSkge1xyXG4gICAgY29uc29sZS5sb2coJ+2MlOuhnOybjOyCreygnOuNsOydtO2EsCcpXHJcbiAgICBjb25zb2xlLmxvZyhkYXRhKVxyXG4gICAgcmV0dXJuIGF4aW9zLmRlbGV0ZShgL3VzZXIvZm9sbG93ZXIvJHtkYXRhfWApO1xyXG59XHJcblxyXG5mdW5jdGlvbiogcmVtb3ZlRm9sbG93ZXIoYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdzYWdhIHJlbW92ZUZvbGxvd2VyQVBJJylcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHJlbW92ZUZvbGxvd2VyQVBJLGFjdGlvbi5kYXRhKVxyXG5cclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG5cclxuICAgICAgICAgICAgdHlwZTogUkVNT1ZFX0ZPTExPV0VSX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhXHJcbiAgICAgICAgXHJcbiAgICAgICAgfSlcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG5cclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG5cclxuICAgICAgICAgICAgdHlwZTogUkVNT1ZFX0ZPTExPV0VSX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvYWRGb2xsb3dlcnNBUEkoZGF0YSkge1xyXG4gICAgcmV0dXJuIGF4aW9zLmdldCgnL3VzZXIvZm9sbG93ZXJzJyxkYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGxvYWRGb2xsb3dlcnMoYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdzYWdhIGZvbGxvd2VycycpXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2FkRm9sbG93ZXJzQVBJLGFjdGlvbi5kYXRhKVxyXG5cclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG5cclxuICAgICAgICAgICAgdHlwZTogTE9BRF9GT0xMT1dFUlNfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGFcclxuICAgICAgICBcclxuICAgICAgICB9KVxyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcblxyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcblxyXG4gICAgICAgICAgICB0eXBlOiBMT0FEX0ZPTExPV0VSU19GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGFcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBsb2FkRm9sbG93aW5nc0FQSShkYXRhKSB7XHJcbiAgICByZXR1cm4gYXhpb3MuZ2V0KCcvdXNlci9mb2xsb3dpbmdzJyxkYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGxvYWRGb2xsb3dpbmdzKGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zb2xlLmxvZygnc2FnYSBmb2xsb3dpbmdzJylcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvYWRGb2xsb3dpbmdzQVBJLGFjdGlvbi5kYXRhKVxyXG5cclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG5cclxuICAgICAgICAgICAgdHlwZTogTE9BRF9GT0xMT1dJTkdTX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhXHJcbiAgICAgICAgXHJcbiAgICAgICAgfSlcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG5cclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG5cclxuICAgICAgICAgICAgdHlwZTogTE9BRF9GT0xMT1dJTkdTX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBjaGFuZ2VOaWNrbmFtZUFQSShkYXRhKSB7XHJcbiAgICByZXR1cm4gYXhpb3MucGF0Y2goJy91c2VyL25pY2tuYW1lJyx7bmlja25hbWU6ZGF0YX0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiogY2hhbmdlTmlja25hbWUoYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdzYWdhIG5pY2tuYW1lJylcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGNoYW5nZU5pY2tuYW1lQVBJLGFjdGlvbi5kYXRhKVxyXG5cclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG5cclxuICAgICAgICAgICAgdHlwZTogQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhXHJcbiAgICAgICAgXHJcbiAgICAgICAgfSlcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG5cclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG5cclxuICAgICAgICAgICAgdHlwZTogQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gbG9hZFVzZXJBUEkoZGF0YSkge1xyXG4gICAgcmV0dXJuIGF4aW9zLmdldChgL3VzZXIvJHtkYXRhfWApO1xyXG59XHJcblxyXG5mdW5jdGlvbiogbG9hZFVzZXIoYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdzYWdhIGxvYWRVc2VyQVBJJylcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvYWRVc2VyQVBJLGFjdGlvbi5kYXRhKVxyXG5cclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG5cclxuICAgICAgICAgICAgdHlwZTogTE9BRF9VU0VSX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhXHJcbiAgICAgICAgXHJcbiAgICAgICAgfSlcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG5cclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG5cclxuICAgICAgICAgICAgdHlwZTogTE9BRF9VU0VSX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gbG9hZE15SW5mb0FQSSgpIHtcclxuICAgIHJldHVybiBheGlvcy5nZXQoJy91c2VyJyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsb2FkTXlJbmZvKCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zb2xlLmxvZygnc2FnYSB1c2VyJylcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvYWRNeUluZm9BUEkpXHJcblxyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcblxyXG4gICAgICAgICAgICB0eXBlOiBMT0FEX01ZX0lORk9fU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGFcclxuICAgICAgICBcclxuICAgICAgICB9KVxyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcblxyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcblxyXG4gICAgICAgICAgICB0eXBlOiBMT0FEX01ZX0lORk9fRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvZ0luQVBJKGRhdGEpIHtcclxuICAgIHJldHVybiBheGlvcy5wb3N0KCcvdXNlci9sb2dpbicsZGF0YSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsb2dJbihhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3NhZ2EgbG9naW4nKVxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9nSW5BUEksYWN0aW9uLmRhdGEpXHJcblxyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcblxyXG4gICAgICAgICAgICB0eXBlOiBMT0dfSU5fU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGFcclxuICAgICAgICBcclxuICAgICAgICB9KVxyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcblxyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcblxyXG4gICAgICAgICAgICB0eXBlOiBMT0dfSU5fRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBsb2dPdXRBUEkoKSB7XHJcblxyXG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoJy91c2VyL2xvZ291dCcpXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsb2dPdXQoKSB7XHJcbiAgICB0cnkge1xyXG5cclxuICAgICAgICB5aWVsZCBjYWxsKGxvZ091dEFQSSlcclxuXHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuXHJcbiAgICAgICAgICAgIHR5cGU6IExPR19PVVRfU1VDQ0VTUyxcclxuICAgICAgICAgICAgLy8gZGF0YTogcmVzdWx0LmRhdGFcclxuICAgICAgICB9KVxyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcblxyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcblxyXG4gICAgICAgICAgICB0eXBlOiBMT0dfT1VUX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNpZ25VcEFQSShkYXRhKSB7XHJcbiAgICByZXR1cm4gYXhpb3MucG9zdCgnL3VzZXInLGRhdGEpXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBzaWduVXAoYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG5cclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHNpZ25VcEFQSSxhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuXHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuXHJcbiAgICAgICAgICAgIHR5cGU6IFNJR05fVVBfU1VDQ0VTUyxcclxuICAgICAgICAgICAgLy8gZGF0YTogcmVzdWx0LmRhdGFcclxuICAgICAgICB9KVxyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcblxyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcblxyXG4gICAgICAgICAgICB0eXBlOiBTSUdOX1VQX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZvbGxvd0FQSShkYXRhKSB7XHJcbiAgICByZXR1cm4gYXhpb3MucGF0Y2goYC91c2VyLyR7ZGF0YX0vZm9sbG93YClcclxufVxyXG5cclxuZnVuY3Rpb24qIGZvbGxvdyhhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcblxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoZm9sbG93QVBJLGFjdGlvbi5kYXRhKVxyXG4gICAgICAgIFxyXG4gICAgIFxyXG4gICAgIFxyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcblxyXG4gICAgICAgICAgICB0eXBlOiBGT0xMT1dfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogIHJlc3VsdC5kYXRhLFxyXG4gICAgICAgICAgICAgXHJcblxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG5cclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG5cclxuICAgICAgICAgICAgdHlwZTogRk9MTE9XX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGRhdGE6IGVyci5yZXNwb25zZS5kYXRhXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIHVuZm9sbG93QVBJKGRhdGEpIHtcclxuICAgIHJldHVybiBheGlvcy5kZWxldGUoYC91c2VyLyR7ZGF0YX0vZm9sbG93YClcclxufVxyXG5cclxuZnVuY3Rpb24qIHVuZm9sbG93KGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbCh1bmZvbGxvd0FQSSxhY3Rpb24uZGF0YSlcclxuXHJcblxyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcblxyXG4gICAgICAgICAgICB0eXBlOiBVTkZPTExPV19TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiAgcmVzdWx0LmRhdGEsXHJcbiAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcblxyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcblxyXG4gICAgICAgICAgICB0eXBlOiBVTkZPTExPV19GQUlMVVJFLFxyXG4gICAgICAgICAgICBkYXRhOiBlcnIucmVzcG9uc2UuZGF0YVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaFJtb3ZlRm9sbG93ZXIoKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KFJFTU9WRV9GT0xMT1dFUl9SRVFVRVNULCByZW1vdmVGb2xsb3dlcik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaExvYWRGb2xsb3dlcnMoKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KExPQURfRk9MTE9XRVJTX1JFUVVFU1QsIGxvYWRGb2xsb3dlcnMpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2FkRm9sbG93aW5ncygpIHtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoTE9BRF9GT0xMT1dJTkdTX1JFUVVFU1QsIGxvYWRGb2xsb3dpbmdzKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoQ2hhbmdlTmlja25hbWUoKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KENIQU5HRV9OSUNLTkFNRV9SRVFVRVNULCBjaGFuZ2VOaWNrbmFtZSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaExvYWRNeUluZm8oKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KExPQURfTVlfSU5GT19SRVFVRVNULCBsb2FkTXlJbmZvKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTG9hZFVzZXIoKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KExPQURfVVNFUl9SRVFVRVNULCBsb2FkVXNlcik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaEZvbGxvdygpIHtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoRk9MTE9XX1JFUVVFU1QsIGZvbGxvdyk7XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoVW5mb2xsb3coKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KFVORk9MTE9XX1JFUVVFU1QsIHVuZm9sbG93KTtcclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2dJbigpIHtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoTE9HX0lOX1JFUVVFU1QsIGxvZ0luKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTG9nT3V0KCkge1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChMT0dfT1VUX1JFUVVFU1QsbG9nT3V0KTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoU2lnblVwKCkge1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChTSUdOX1VQX1JFUVVFU1Qsc2lnblVwKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHVzZXJTYWdhKCl7XHJcbiAgICB5aWVsZCBhbGwoW1xyXG5cclxuICAgICAgICBmb3JrKHdhdGNoUm1vdmVGb2xsb3dlciksXHJcbiAgICAgICAgZm9yayh3YXRjaExvYWRGb2xsb3dlcnMpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hMb2FkRm9sbG93aW5ncyksXHJcbiAgICAgICAgZm9yayh3YXRjaENoYW5nZU5pY2tuYW1lKSxcclxuICAgICAgICBmb3JrKHdhdGNoTG9hZE15SW5mbyksXHJcbiAgICAgICAgZm9yayh3YXRjaExvYWRVc2VyKSxcclxuICAgICAgICBmb3JrKHdhdGNoRm9sbG93KSxcclxuICAgICAgICBmb3JrKHdhdGNoVW5mb2xsb3cpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hMb2dJbiksXHJcbiAgICAgICAgZm9yayh3YXRjaExvZ091dCksXHJcbiAgICAgICAgZm9yayh3YXRjaFNpZ25VcCksXHJcblxyXG4gICAgXSlcclxufSIsIlxyXG5pbXBvcnQge2NyZWF0ZVdyYXBwZXJ9IGZyb20gJ25leHQtcmVkdXgtd3JhcHBlcic7XHJcbmltcG9ydCB7YXBwbHlNaWRkbGV3YXJlLCBjb21wb3NlLCBjcmVhdGVTdG9yZX0gZnJvbSAncmVkdXgnO1xyXG5pbXBvcnQgcmVkdWNlciBmcm9tICcuLi9yZWR1Y2VycydcclxuaW1wb3J0IHsgY29tcG9zZVdpdGhEZXZUb29scyB9IGZyb20gJ3JlZHV4LWRldnRvb2xzLWV4dGVuc2lvbic7XHJcbmltcG9ydCBjcmVhdGVTYWdhTWlkZGxld2FyZSBmcm9tICdAcmVkdXgtc2FnYS9jb3JlJztcclxuaW1wb3J0IHJvb3RTYWdhIGZyb20gJy4uL3NhZ2FzJztcclxuXHJcbmNvbnN0IGNvbmZpZ3VyZVN0b3JlPSgpPT57XHJcbiAgICBjb25zdCBzYWdhTWlkZGxlV2FyZSA9IGNyZWF0ZVNhZ2FNaWRkbGV3YXJlKCk7XHJcbiAgICBjb25zdCBtaWRkbGV3YXJlcyA9IFtzYWdhTWlkZGxlV2FyZV07XHJcbiAgICBjb25zdCBlbmhhbmNlciA9IHByb2Nlc3MuTk9ERV9FTlYgPT09J3Byb2R1Y3Rpb24nXHJcbiAgICA/Y29tcG9zZShhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZXMpKVxyXG4gICAgOmNvbXBvc2VXaXRoRGV2VG9vbHMoYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmVzKSlcclxuICAgIGNvbnN0IHN0b3JlPWNyZWF0ZVN0b3JlKHJlZHVjZXIsZW5oYW5jZXIpO1xyXG4gICAgc3RvcmUuc2FnYVRhc2sgPSBzYWdhTWlkZGxlV2FyZS5ydW4ocm9vdFNhZ2EpO1xyXG4gICAgcmV0dXJuIHN0b3JlO1xyXG59O1xyXG5cclxuY29uc3Qgd3JhcHBlciA9IGNyZWF0ZVdyYXBwZXIoXHJcbiAgICBjb25maWd1cmVTdG9yZSxcclxuICAgIHtkZWJ1Zzpwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0nZGV2ZWxvcG1lbnQnfVxyXG4gICAgKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdyYXBwZXI7IiwiXHJcbmltcG9ydCB7IGVuYWJsZUVTNSwgcHJvZHVjZSB9IGZyb20gJ2ltbWVyJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0ICguLi5hcmdzKSA9PiB7XHJcbiAgZW5hYmxlRVM1KCk7XHJcbiAgcmV0dXJuIHByb2R1Y2UoLi4uYXJncyk7XHJcbn07IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHJlZHV4LXNhZ2EvY29yZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJpbW1lclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LXJlZHV4LXdyYXBwZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXNhZ2EvZWZmZWN0c1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzaG9ydGlkXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=