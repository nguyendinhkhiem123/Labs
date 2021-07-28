import { call, put }  from 'redux-saga/effects'
import { getAllUser } from '../Api/User';
import { allUser } from '../Reducer/user';
function * fetchUser(){
    try{
        const resOne = yield call(getAllUser);
        yield put(allUser(resOne.data));
    }
    catch(err){
        console.log(err);
    }
}

export default fetchUser;