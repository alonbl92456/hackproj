import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import  appReducers from './reducers';
import {rootSaga}  from './sagas';
import httpHandler from '../httpHandler';
import { requestsPromiseMiddleware, requestsCacheMiddleware } from 'redux-saga-requests';


// disable ServiceWorker
// import registerServiceWorker from './registerServiceWorker';


export const configureStore = () => {



    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


    const rootReducer = combineReducers(appReducers);
    
    const sagaMiddleware = createSagaMiddleware();
    
    const store = createStore(
      rootReducer,
      composeEnhancers(applyMiddleware(requestsCacheMiddleware(),sagaMiddleware))
    );

    sagaMiddleware.run(rootSaga, httpHandler);
    return store;
  };