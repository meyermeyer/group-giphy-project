import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import {Provider} from 'react-redux';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import {takeEvery, put} from 'redux-saga/effects';
import axios from 'axios';


const displayResults = (state, action) => {
	return {};
}

function* sagaWatcher(){

}



const sagaMiddleware = createSagaMiddleware();

const storeInstance = createStore(
	combineReducers({
		displayResults,
	}),
	applyMiddleware(sagaMiddleware, logger),
)

sagaMiddleware.run(sagaWatcher)

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>,document.getElementById('root'));

