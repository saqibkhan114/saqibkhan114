//imports
import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger'
import rootReducer from './root-reducer'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './root-saga'
import thunkMiddleware from "redux-thunk";
//declarations
const sagaMiddleware = createSagaMiddleware();
const middlewares = [logger, sagaMiddleware, thunkMiddleware];
const store = createStore(rootReducer, applyMiddleware(...middlewares))
sagaMiddleware.run(rootSaga);
export default store;