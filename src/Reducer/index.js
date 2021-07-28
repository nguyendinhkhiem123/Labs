import { configureStore , combineReducers, getDefaultMiddleware} from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' 

import post from './post';
import user from './user';
import comment from './comment'
import rootSaga from '../Saga/root';
import createSagaMiddleware from 'redux-saga'

const sagaMiddleware = createSagaMiddleware();
const reducer = combineReducers({
    post,
    user,
    comment
});

const persistConfig = {
    key: 'blog-root',
    storage,
    whitelist: ['post'] 
}
   
const persistedReducer = persistReducer(persistConfig, reducer)
let store = configureStore(
    {   
        reducer : persistedReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
       
    }
)

sagaMiddleware.run(rootSaga)


let persistor = persistStore(store);
export default  {
    store, persistor 
}