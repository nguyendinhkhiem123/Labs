import { call, put }  from 'redux-saga/effects'
import { getAllPost  } from '../Api/Post';
import { allPost } from '../Reducer/post';
function * fetchPost(){
    try{
        const resOne = yield call(getAllPost);
        yield put(allPost(resOne.data));
    }
    catch(err){
        console.log(err);
    }
}

export default fetchPost;