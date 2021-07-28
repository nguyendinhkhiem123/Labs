import { call, put }  from 'redux-saga/effects'
import { getAllComment  } from '../Api/Comment';
import { allComment } from '../Reducer/comment';
function * fetchComment(){
    try{
        const resOne = yield call(getAllComment);
        yield put(allComment(resOne.data));
    }
    catch(err){
        console.log(err);
    }
}

export default fetchComment;