import { createStore, applyMiddleware } from 'redux'
import { persistStore, persistReducer, persistCombineReducers, REHYDRATE, PURGE, autoRehydrate } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web and AsyncStorage for react-native
// import AsyncStorage from '@react-native-community/async-storage';   
import rootReducer from './allreducers';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import AuthenticationReducer from './views/Authentication/AuthenticationReducer';

import ReduxThunk from 'redux-thunk';
import logger from 'redux-logger'


const persistConfig = {
    key: 'root',
    storage
}
const persistedReducer = persistReducer(persistConfig, rootReducer)



// ENABLE BEFORE CREATE PRODUCTION BUILD To REMOVE  REDUX logger :

let middleware;
if (NODE_ENV === 'development') {
    middleware = applyMiddleware(ReduxThunk, logger)
} else {
    middleware = applyMiddleware(ReduxThunk, logger)
}


export default () => {
    let store = createStore(persistedReducer, {}, middleware);
    let persistor = persistStore(store)
    return { store, persistor }
}