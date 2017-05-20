import 'babel-polyfill';
import React from 'react';
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import createLogger from 'redux-logger';
import globalReducers from './reducers';
import MainPage from './containers/MainPage';

const logger = createLogger();

const store = createStore(
    globalReducers,
    applyMiddleware(thunk, promise, logger)
);


ReactDOM.render(
    <Provider store={store}>
         <MainPage/>
    </Provider>,
    document.getElementById('root')
);

