import { takeEvery } from "redux-saga/effects";
import handlePost from './Post';
import handleUser from './User';
import handleComment from './Comment'
import * as Action from '../Const/index';
function * rootSaga(){
    yield takeEvery(Action.WATCH_FETCH_POST , handlePost)
    yield takeEvery(Action.WATCH_FETCH_USER , handleUser)
    yield takeEvery(Action.WATCH_FETCH_COMMENT , handleComment)
}

export default rootSaga;