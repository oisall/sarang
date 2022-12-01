webpackHotUpdate_N_E("pages/index",{

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: initialState, RETWEET_REQUEST, RETWEET_SUCCESS, RETWEET_FAILURE, UPLOAD_IMAGES_REQUEST, UPLOAD_IMAGES_SUCCESS, UPLOAD_IMAGES_FAILURE, LIKE_POST_REQUEST, LIKE_POST_SUCCESS, LIKE_POST_FAILURE, UNLIKE_POST_REQUEST, UNLIKE_POST_SUCCESS, UNLIKE_POST_FAILURE, LOAD_POSTS_REQUEST, LOAD_POSTS_SUCCESS, LOAD_POSTS_FAILURE, LOAD_USER_POSTS_REQUEST, LOAD_USER_POSTS_SUCCESS, LOAD_USER_POSTS_FAILURE, LOAD_HASHTAG_POSTS_REQUEST, LOAD_HASHTAG_POSTS_SUCCESS, LOAD_HASHTAG_POSTS_FAILURE, LOAD_POST_REQUEST, LOAD_POST_SUCCESS, LOAD_POST_FAILURE, ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE, REMOVE_POST_REQUEST, REMOVE_POST_SUCCESS, REMOVE_POST_FAILURE, ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE, REMOVE_IMAGE, addPost, addComment, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
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
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shortid */ "./node_modules/shortid/index.js");
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(shortid__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user */ "./reducers/user.js");
/* harmony import */ var _util_produce__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/produce */ "./util/produce.js");



var initialState = {
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
var RETWEET_REQUEST = 'RETWEET_REQUEST';
var RETWEET_SUCCESS = 'RETWEET_SUCCESS';
var RETWEET_FAILURE = 'RETWEET_FAILURE';
var UPLOAD_IMAGES_REQUEST = 'UPLOAD_IMAGES_REQUEST';
var UPLOAD_IMAGES_SUCCESS = 'UPLOAD_IMAGES_SUCCESS';
var UPLOAD_IMAGES_FAILURE = 'UPLOAD_IMAGES_FAILURE';
var LIKE_POST_REQUEST = 'LIKE_POST_REQUEST';
var LIKE_POST_SUCCESS = 'LIKE_POST_SUCCESS';
var LIKE_POST_FAILURE = 'LIKE_POST_FAILURE';
var UNLIKE_POST_REQUEST = 'UNLIKE_POST_REQUEST';
var UNLIKE_POST_SUCCESS = 'UNLIKE_POST_SUCCESS';
var UNLIKE_POST_FAILURE = 'UNLIKE_POST_FAILURE';
var LOAD_POSTS_REQUEST = 'LOAD_POSTS_REQUEST';
var LOAD_POSTS_SUCCESS = 'LOAD_POSTS_SUCCESS';
var LOAD_POSTS_FAILURE = 'LOAD_POSTS_FAILURE';
var LOAD_USER_POSTS_REQUEST = 'LOAD_USER_POSTS_REQUEST';
var LOAD_USER_POSTS_SUCCESS = 'LOAD_USER_POSTS_SUCCESS';
var LOAD_USER_POSTS_FAILURE = 'LOAD_USER_POSTS_FAILURE';
var LOAD_HASHTAG_POSTS_REQUEST = 'LOAD_HASHTAG_POSTS_REQUEST';
var LOAD_HASHTAG_POSTS_SUCCESS = 'LOAD_HASHTAG_POSTS_SUCCESS';
var LOAD_HASHTAG_POSTS_FAILURE = 'LOAD_HASHTAG_POSTS_FAILURE';
var LOAD_POST_REQUEST = 'LOAD_POST_REQUEST';
var LOAD_POST_SUCCESS = 'LOAD_POST_SUCCESS';
var LOAD_POST_FAILURE = 'LOAD_POST_FAILURE';
var ADD_POST_REQUEST = 'ADD_POST_REQUEST';
var ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
var ADD_POST_FAILURE = 'ADD_POST_FAILURE';
var REMOVE_POST_REQUEST = 'REMOVE_POST_REQUEST';
var REMOVE_POST_SUCCESS = 'REMOVE_POST_SUCCESS';
var REMOVE_POST_FAILURE = 'REMOVE_POST_FAILURE';
var ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';
var ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
var ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE';
var REMOVE_IMAGE = 'REMOVE_IMAGE';
var addPost = function addPost(data) {
  return {
    type: ADD_POST_REQUEST,
    data: data
  };
};
var addComment = function addComment(data) {
  return {
    type: ADD_COMMENT_REQUEST,
    data: data
  };
};
var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  return Object(_util_produce__WEBPACK_IMPORTED_MODULE_2__["default"])(state, function (draft) {
    switch (action.type) {
      case REMOVE_IMAGE:
        draft.imagePaths = draft.imagePaths.filter(function (v, i) {
          return i !== action.data;
        });
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
        draft.imagePaths = action.data;
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
          var _post = draft.mainPosts.find(function (v) {
            return v.id === action.data.PostId;
          });
          _post.Likers.push({
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
        var post = draft.mainPosts.find(function (v) {
          return v.id === action.data.PostId;
        });
        post.Likers = post.Likers.filter(function (v) {
          return v.id !== action.data.UserId;
        });
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
        draft.mainPosts = draft.mainPosts.filter(function (v) {
          return v.id !== action.data.PostId;
        });
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
          var _post2 = draft.mainPosts.find(function (v) {
            return v.id === action.data.PostId;
          });
          _post2.Comments.unshift(action.data);
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

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./util/produce.js":
/*!*************************!*\
  !*** ./util/produce.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "./node_modules/immer/dist/immer.esm.js");

/* harmony default export */ __webpack_exports__["default"] = (function () {
  Object(immer__WEBPACK_IMPORTED_MODULE_0__["enableES5"])();
  return immer__WEBPACK_IMPORTED_MODULE_0__["produce"].apply(void 0, arguments);
});

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvcG9zdC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vdXRpbC9wcm9kdWNlLmpzIl0sIm5hbWVzIjpbImluaXRpYWxTdGF0ZSIsIm1haW5Qb3N0cyIsImltYWdlUGF0aHMiLCJhZGRQb3N0TG9hZGluZyIsImFkZFBvc3REb25lIiwiYWRkUG9zdEVycm9yIiwibGlrZVBvc3RMb2FkaW5nIiwibGlrZVBvc3REb25lIiwibGlrZVBvc3RFcnJvciIsInVubGlrZVBvc3RMb2FkaW5nIiwidW5saWtlUG9zdERvbmUiLCJ1bmxpa2VQb3N0RXJyb3IiLCJsb2FkUG9zdHNMb2FkaW5nIiwibG9hZFBvc3RzRG9uZSIsImxvYWRQb3N0c0Vycm9yIiwibG9hZFBvc3RMb2FkaW5nIiwibG9hZFBvc3REb25lIiwibG9hZFBvc3RFcnJvciIsInJlbW92ZVBvc3RMb2FkaW5nIiwicmVtb3ZlUG9zdERvbmUiLCJyZW1vdmVQb3N0RXJyb3IiLCJhZGRDb21tZW50TG9hZGluZyIsImFkZENvbW1lbnREb25lIiwiYWRkQ29tbWVudEVycm9yIiwidXBsb2FkSW1hZ2VzTG9hZGluZyIsInVwbG9hZEltYWdlc0RvbmUiLCJ1cGxvYWRJbWFnZXNFcnJvciIsInJldHdlZXRMb2FkaW5nIiwicmV0d2VldERvbmUiLCJyZXR3ZWV0RXJyb3IiLCJoYXNNb3JlUG9zdCIsInNpbmdsZVBvc3QiLCJSRVRXRUVUX1JFUVVFU1QiLCJSRVRXRUVUX1NVQ0NFU1MiLCJSRVRXRUVUX0ZBSUxVUkUiLCJVUExPQURfSU1BR0VTX1JFUVVFU1QiLCJVUExPQURfSU1BR0VTX1NVQ0NFU1MiLCJVUExPQURfSU1BR0VTX0ZBSUxVUkUiLCJMSUtFX1BPU1RfUkVRVUVTVCIsIkxJS0VfUE9TVF9TVUNDRVNTIiwiTElLRV9QT1NUX0ZBSUxVUkUiLCJVTkxJS0VfUE9TVF9SRVFVRVNUIiwiVU5MSUtFX1BPU1RfU1VDQ0VTUyIsIlVOTElLRV9QT1NUX0ZBSUxVUkUiLCJMT0FEX1BPU1RTX1JFUVVFU1QiLCJMT0FEX1BPU1RTX1NVQ0NFU1MiLCJMT0FEX1BPU1RTX0ZBSUxVUkUiLCJMT0FEX1VTRVJfUE9TVFNfUkVRVUVTVCIsIkxPQURfVVNFUl9QT1NUU19TVUNDRVNTIiwiTE9BRF9VU0VSX1BPU1RTX0ZBSUxVUkUiLCJMT0FEX0hBU0hUQUdfUE9TVFNfUkVRVUVTVCIsIkxPQURfSEFTSFRBR19QT1NUU19TVUNDRVNTIiwiTE9BRF9IQVNIVEFHX1BPU1RTX0ZBSUxVUkUiLCJMT0FEX1BPU1RfUkVRVUVTVCIsIkxPQURfUE9TVF9TVUNDRVNTIiwiTE9BRF9QT1NUX0ZBSUxVUkUiLCJBRERfUE9TVF9SRVFVRVNUIiwiQUREX1BPU1RfU1VDQ0VTUyIsIkFERF9QT1NUX0ZBSUxVUkUiLCJSRU1PVkVfUE9TVF9SRVFVRVNUIiwiUkVNT1ZFX1BPU1RfU1VDQ0VTUyIsIlJFTU9WRV9QT1NUX0ZBSUxVUkUiLCJBRERfQ09NTUVOVF9SRVFVRVNUIiwiQUREX0NPTU1FTlRfU1VDQ0VTUyIsIkFERF9DT01NRU5UX0ZBSUxVUkUiLCJSRU1PVkVfSU1BR0UiLCJhZGRQb3N0IiwiZGF0YSIsInR5cGUiLCJhZGRDb21tZW50IiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwicHJvZHVjZSIsImRyYWZ0IiwiZmlsdGVyIiwidiIsImkiLCJjb25zb2xlIiwibG9nIiwidW5zaGlmdCIsImVycm9yIiwicG9zdCIsImZpbmQiLCJpZCIsIlBvc3RJZCIsIkxpa2VycyIsInB1c2giLCJVc2VySWQiLCJjb25jYXQiLCJsZW5ndGgiLCJDb21tZW50cyIsImVuYWJsZUVTNSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtB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RUFBRTtFQUNYLE9BQU9uQiw2Q0FBTyx5QkFBUztBQUN6QixDQUFDIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmE3NTRmZDAyZTQzOTg5NTRjNWUzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc2hvcnRpZCBmcm9tIFwic2hvcnRpZFwiO1xyXG5pbXBvcnQgeyBBRERfUE9TVF9UT19NRSB9IGZyb20gXCIuL3VzZXJcIjtcclxuaW1wb3J0IHByb2R1Y2UgZnJvbSAnLi4vdXRpbC9wcm9kdWNlJztcclxuXHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG5cclxuICAgIG1haW5Qb3N0czogW10sXHJcbiAgICBpbWFnZVBhdGhzOiBbXSxcclxuICAgIGFkZFBvc3RMb2FkaW5nOiBmYWxzZSxcclxuICAgIGFkZFBvc3REb25lOiBmYWxzZSxcclxuICAgIGFkZFBvc3RFcnJvcjogbnVsbCxcclxuXHJcblxyXG4gICAgbGlrZVBvc3RMb2FkaW5nOiBmYWxzZSxcclxuICAgIGxpa2VQb3N0RG9uZTogZmFsc2UsXHJcbiAgICBsaWtlUG9zdEVycm9yOiBudWxsLFxyXG5cclxuICAgIHVubGlrZVBvc3RMb2FkaW5nOiBmYWxzZSxcclxuICAgIHVubGlrZVBvc3REb25lOiBmYWxzZSxcclxuICAgIHVubGlrZVBvc3RFcnJvcjogbnVsbCxcclxuXHJcbiAgICBsb2FkUG9zdHNMb2FkaW5nOiBmYWxzZSxcclxuICAgIGxvYWRQb3N0c0RvbmU6IGZhbHNlLFxyXG4gICAgbG9hZFBvc3RzRXJyb3I6IG51bGwsXHJcblxyXG4gICAgbG9hZFBvc3RMb2FkaW5nOiBmYWxzZSxcclxuICAgIGxvYWRQb3N0RG9uZTogZmFsc2UsXHJcbiAgICBsb2FkUG9zdEVycm9yOiBudWxsLFxyXG5cclxuICAgIHJlbW92ZVBvc3RMb2FkaW5nOiBmYWxzZSxcclxuICAgIHJlbW92ZVBvc3REb25lOiBmYWxzZSxcclxuICAgIHJlbW92ZVBvc3RFcnJvcjogbnVsbCxcclxuXHJcbiAgICBhZGRDb21tZW50TG9hZGluZzogZmFsc2UsXHJcbiAgICBhZGRDb21tZW50RG9uZTogZmFsc2UsXHJcbiAgICBhZGRDb21tZW50RXJyb3I6IG51bGwsXHJcblxyXG5cclxuICAgIHVwbG9hZEltYWdlc0xvYWRpbmc6IGZhbHNlLFxyXG4gICAgdXBsb2FkSW1hZ2VzRG9uZTogZmFsc2UsXHJcbiAgICB1cGxvYWRJbWFnZXNFcnJvcjogbnVsbCxcclxuXHJcbiAgICByZXR3ZWV0TG9hZGluZzogZmFsc2UsXHJcbiAgICByZXR3ZWV0RG9uZTogZmFsc2UsXHJcbiAgICByZXR3ZWV0RXJyb3I6IG51bGwsXHJcblxyXG4gICAgaGFzTW9yZVBvc3Q6dHJ1ZSxcclxuXHJcbiAgICBzaW5nbGVQb3N0Om51bGwsXHJcbiAgIFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgUkVUV0VFVF9SRVFVRVNUID0gJ1JFVFdFRVRfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBSRVRXRUVUX1NVQ0NFU1MgPSAnUkVUV0VFVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFJFVFdFRVRfRkFJTFVSRSA9ICdSRVRXRUVUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFVQTE9BRF9JTUFHRVNfUkVRVUVTVCA9ICdVUExPQURfSU1BR0VTX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgVVBMT0FEX0lNQUdFU19TVUNDRVNTID0gJ1VQTE9BRF9JTUFHRVNfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBVUExPQURfSU1BR0VTX0ZBSUxVUkUgPSAnVVBMT0FEX0lNQUdFU19GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBMSUtFX1BPU1RfUkVRVUVTVCA9ICdMSUtFX1BPU1RfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMSUtFX1BPU1RfU1VDQ0VTUyA9ICdMSUtFX1BPU1RfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMSUtFX1BPU1RfRkFJTFVSRSA9ICdMSUtFX1BPU1RfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgVU5MSUtFX1BPU1RfUkVRVUVTVCA9ICdVTkxJS0VfUE9TVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFVOTElLRV9QT1NUX1NVQ0NFU1MgPSAnVU5MSUtFX1BPU1RfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBVTkxJS0VfUE9TVF9GQUlMVVJFID0gJ1VOTElLRV9QT1NUX0ZBSUxVUkUnO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RTX1JFUVVFU1QgPSAnTE9BRF9QT1NUU19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPQURfUE9TVFNfU1VDQ0VTUyA9ICdMT0FEX1BPU1RTX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9QT1NUU19GQUlMVVJFID0gJ0xPQURfUE9TVFNfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9VU0VSX1BPU1RTX1JFUVVFU1QgPSAnTE9BRF9VU0VSX1BPU1RTX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9VU0VSX1BPU1RTX1NVQ0NFU1MgPSAnTE9BRF9VU0VSX1BPU1RTX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9VU0VSX1BPU1RTX0ZBSUxVUkUgPSAnTE9BRF9VU0VSX1BPU1RTX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfSEFTSFRBR19QT1NUU19SRVFVRVNUID0gJ0xPQURfSEFTSFRBR19QT1NUU19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPQURfSEFTSFRBR19QT1NUU19TVUNDRVNTID0gJ0xPQURfSEFTSFRBR19QT1NUU19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPQURfSEFTSFRBR19QT1NUU19GQUlMVVJFID0gJ0xPQURfSEFTSFRBR19QT1NUU19GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RfUkVRVUVTVCA9ICdMT0FEX1BPU1RfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RfU1VDQ0VTUyA9ICdMT0FEX1BPU1RfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RfRkFJTFVSRSA9ICdMT0FEX1BPU1RfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfUkVRVUVTVCA9ICdBRERfUE9TVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX1NVQ0NFU1MgPSAnQUREX1BPU1RfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9GQUlMVVJFID0gJ0FERF9QT1NUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX1JFUVVFU1QgPSAnUkVNT1ZFX1BPU1RfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9TVUNDRVNTID0gJ1JFTU9WRV9QT1NUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfRkFJTFVSRSA9ICdSRU1PVkVfUE9TVF9GQUlMVVJFJztcclxuXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX1JFUVVFU1QgPSAnQUREX0NPTU1FTlRfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9TVUNDRVNTID0gJ0FERF9DT01NRU5UX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfRkFJTFVSRSA9ICdBRERfQ09NTUVOVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfSU1BR0UgPSdSRU1PVkVfSU1BR0UnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGFkZFBvc3QgPSAoZGF0YSkgPT4gKHtcclxuICAgIHR5cGU6IEFERF9QT1NUX1JFUVVFU1QsXHJcbiAgICBkYXRhXHJcbn0pXHJcblxyXG5leHBvcnQgY29uc3QgYWRkQ29tbWVudCA9IChkYXRhKSA9PiAoe1xyXG4gICAgdHlwZTogQUREX0NPTU1FTlRfUkVRVUVTVCxcclxuICAgIGRhdGFcclxufSlcclxuXHJcblxyXG5cclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xyXG5cclxuICAgIHJldHVybiBwcm9kdWNlKHN0YXRlLChkcmFmdCk9PntcclxuICAgICAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgUkVNT1ZFX0lNQUdFOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuaW1hZ2VQYXRocyA9IGRyYWZ0LmltYWdlUGF0aHMuZmlsdGVyKCh2LGkpPT4gaSAhPT1hY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBjYXNlIFJFVFdFRVRfUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgICAgICBkcmFmdC5yZXR3ZWV0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgZHJhZnQucmV0d2VldERvbmU9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGRyYWZ0LnJldHdlZXRFcnJvcj0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGNhc2UgUkVUV0VFVF9TVUNDRVNTOlxyXG4gICAgXHJcbiAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+yEseqztScpXHJcbiAgICAgICAgICAgICAgICAgICAgZHJhZnQubWFpblBvc3RzLnVuc2hpZnQoYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRyYWZ0LnJldHdlZXRMb2FkaW5nPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBkcmFmdC5yZXR3ZWV0RG9uZT0gdHJ1ZTtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICBcclxuICAgICAgICAgICAgICAgIGNhc2UgUkVUV0VFVF9GQUlMVVJFOlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRyYWZ0LnJldHdlZXRMb2FkaW5nPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZHJhZnQucmV0d2VldEVycm9yPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBVUExPQURfSU1BR0VTX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC51cGxvYWRJbWFnZXNMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVwbG9hZEltYWdlc0RvbmU9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQudXBsb2FkSW1hZ2VzRXJyb3I9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNhc2UgVVBMT0FEX0lNQUdFU19TVUNDRVNTOlxyXG5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5pbWFnZVBhdGhzID0gYWN0aW9uLmRhdGFcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfshLHqs7UnKVxyXG5cclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVwbG9hZEltYWdlc0xvYWRpbmc9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQudXBsb2FkSW1hZ2VzRG9uZT0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICBjYXNlIFVQTE9BRF9JTUFHRVNfRkFJTFVSRTpcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgZHJhZnQudXBsb2FkSW1hZ2VzTG9hZGluZz0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgZHJhZnQudXBsb2FkSW1hZ2VzRXJyb3I9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcblxyXG4gICAgICAgICAgICBjYXNlIExJS0VfUE9TVF9SRVFVRVNUOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQubGlrZVBvc3RMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lmxpa2VQb3N0RG9uZT0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5saWtlUG9zdEVycm9yPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjYXNlIExJS0VfUE9TVF9TVUNDRVNTOntcclxuXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn7ISx6rO1JylcclxuICAgICAgICAgICAgICAgIGNvbnN0IHBvc3QgPSBkcmFmdC5tYWluUG9zdHMuZmluZCgodik9PnYuaWQ9PT1hY3Rpb24uZGF0YS5Qb3N0SWQpO1xyXG4gICAgICAgICAgICAgICAgcG9zdC5MaWtlcnMucHVzaCh7aWQ6YWN0aW9uLmRhdGEuVXNlcklkfSk7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5saWtlUG9zdExvYWRpbmc9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubGlrZVBvc3REb25lPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjYXNlIExJS0VfUE9TVF9GQUlMVVJFOlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBkcmFmdC5saWtlUG9zdExvYWRpbmc9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGRyYWZ0Lmxpa2VQb3N0RXJyb3I9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBVTkxJS0VfUE9TVF9SRVFVRVNUOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkcmFmdC51bmxpa2VQb3N0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRyYWZ0LnVubGlrZVBvc3REb25lPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZHJhZnQudW5saWtlUG9zdEVycm9yPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgVU5MSUtFX1BPU1RfU1VDQ0VTUzpcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHBvc3QgPSBkcmFmdC5tYWluUG9zdHMuZmluZCgodik9PnYuaWQ9PT1hY3Rpb24uZGF0YS5Qb3N0SWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3N0Lkxpa2VycyA9IHBvc3QuTGlrZXJzLmZpbHRlcigodik9PnYuaWQgIT09YWN0aW9uLmRhdGEuVXNlcklkKTtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfshLHqs7UnKVxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkcmFmdC51bmxpa2VQb3N0TG9hZGluZz0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRyYWZ0LnVubGlrZVBvc3REb25lPSB0cnVlO1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFVOTElLRV9QT1NUX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkcmFmdC51bmxpa2VQb3N0TG9hZGluZz0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkcmFmdC51bmxpa2VQb3N0RXJyb3I9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgTE9BRF9QT1NUX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZHJhZnQubG9hZFBvc3RMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkcmFmdC5sb2FkUG9zdERvbmU9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0RXJyb3I9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIExPQURfUE9TVF9TVUNDRVNTOlxyXG4gICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+yEseqztScpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZHJhZnQuc2luZ2xlUG9zdD1hY3Rpb24uZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkcmFmdC5sb2FkUG9zdExvYWRpbmc9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0RG9uZT0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgTE9BRF9QT1NUX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZHJhZnQubG9hZFBvc3RMb2FkaW5nPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZHJhZnQubG9hZFBvc3RFcnJvcj0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjYXNlIExPQURfUE9TVFNfUkVRVUVTVDpcclxuICAgICAgICAgICAgY2FzZSBMT0FEX1VTRVJfUE9TVFNfUkVRVUVTVDpcclxuICAgICAgICAgICAgY2FzZSBMT0FEX0hBU0hUQUdfUE9TVFNfUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0c0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZFBvc3RzRG9uZT0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkUG9zdHNFcnJvcj0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgY2FzZSBMT0FEX1BPU1RTX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgIGNhc2UgTE9BRF9VU0VSX1BPU1RTX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgIGNhc2UgTE9BRF9IQVNIVEFHX1BPU1RTX1NVQ0NFU1M6XHJcbiBcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn7ISx6rO1JylcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lm1haW5Qb3N0cz0gZHJhZnQubWFpblBvc3RzLmNvbmNhdChhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkUG9zdHNMb2FkaW5nPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0c0RvbmU9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5oYXNNb3JlUG9zdD0gYWN0aW9uLmRhdGEubGVuZ3RoID09PTEwO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG5cclxuICAgICAgICAgICAgY2FzZSBMT0FEX1BPU1RTX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgIGNhc2UgTE9BRF9VU0VSX1BPU1RTX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgIGNhc2UgTE9BRF9IQVNIVEFHX1BPU1RTX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0c0xvYWRpbmc9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0c0Vycm9yPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG5cclxuICAgICAgICAgICAgY2FzZSBBRERfUE9TVF9SRVFVRVNUOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkUG9zdExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkUG9zdERvbmU9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkUG9zdEVycm9yPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjYXNlIEFERF9QT1NUX1NVQ0NFU1M6XHJcbiAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmltYWdlUGF0aHMgPSBbXTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lm1haW5Qb3N0cy51bnNoaWZ0KGFjdGlvbi5kYXRhKTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZFBvc3RMb2FkaW5nPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZFBvc3REb25lPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBcclxuICAgIFxyXG4gICAgICAgICAgICBjYXNlIEFERF9QT1NUX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBkcmFmdC5hZGRQb3N0TG9hZGluZz0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgZHJhZnQuYWRkUG9zdEVycm9yPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICBcclxuICAgIFxyXG4gICAgICAgICAgICBjYXNlIFJFTU9WRV9QT1NUX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBkcmFmdC5yZW1vdmVQb3N0TG9hZGluZz0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBkcmFmdC5yZW1vdmVQb3N0RG9uZT0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgZHJhZnQucmVtb3ZlUG9zdEVycm9yPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFJFTU9WRV9QT1NUX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBkcmFmdC5tYWluUG9zdHM9IGRyYWZ0Lm1haW5Qb3N0cy5maWx0ZXIoKHYpPT52LmlkICE9PSBhY3Rpb24uZGF0YS5Qb3N0SWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RMb2FkaW5nPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBkcmFmdC5yZW1vdmVQb3N0RG9uZT0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgIFxyXG4gICAgICAgICAgICBjYXNlIFJFTU9WRV9QT1NUX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgZHJhZnQucmVtb3ZlUG9zdExvYWRpbmc9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RFcnJvcj0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEFERF9DT01NRU5UX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgZHJhZnQuYWRkQ29tbWVudExvYWRpbmc9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgZHJhZnQuYWRkQ29tbWVudERvbmU9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGRyYWZ0LmFkZENvbW1lbnRFcnJvcj0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBBRERfQ09NTUVOVF9TVUNDRVNTOiB7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgcG9zdCA9ZHJhZnQubWFpblBvc3RzLmZpbmQoKHYpPT52LmlkPT09YWN0aW9uLmRhdGEuUG9zdElkKTtcclxuICAgICAgICAgICAgICAgIHBvc3QuQ29tbWVudHMudW5zaGlmdChhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRDb21tZW50TG9hZGluZz0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRDb21tZW50RG9uZT0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgQUREX0NPTU1FTlRfRkFJTFVSRTpcclxuICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGRyYWZ0LmFkZENvbW1lbnRMb2FkaW5nPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBkcmFmdC5hZGRDb21tZW50RXJyb3I9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgIFxyXG4gICAgXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG5cclxuICBcclxufTtcclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjsiLCJcclxuaW1wb3J0IHsgZW5hYmxlRVM1LCBwcm9kdWNlIH0gZnJvbSAnaW1tZXInO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKC4uLmFyZ3MpID0+IHtcclxuICBlbmFibGVFUzUoKTtcclxuICByZXR1cm4gcHJvZHVjZSguLi5hcmdzKTtcclxufTsiXSwic291cmNlUm9vdCI6IiJ9