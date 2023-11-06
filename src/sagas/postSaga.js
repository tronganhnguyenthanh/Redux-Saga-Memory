import {call, put, takeEvery} from "redux-saga/effects"
import {getListPost} from "../features/post.slice"
import {getListPosts} from "../api/api"
function* getPosts(){
  const post = yield call(getListPosts)
  yield put(getListPost(post))
}

function* watchPostsSaga(){
  yield takeEvery("post/getListPost", getPosts)
}

export default watchPostsSaga
