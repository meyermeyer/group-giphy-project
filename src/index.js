import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import {Provider} from 'react-redux';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import {takeEvery, put} from 'redux-saga/effects';
import axios from 'axios';


const displayResults = (state={}, action) => {
	console.log('in displayResults reducer', action.payload);
	if(action.type==='DISPLAY_RESULTS'){
		return action.payload;
	}
	return state;
}
function* getResults(action) {
	const searchResponse = yield axios.get(action.payload);
	console.log('in GET /search', searchResponse.data);	
	yield put({ type: 'DISPLAY_RESULTS', payload: searchResponse.data})
	console.log('in getResults', action.payload);

	
}

// function* fetchPlants(action) {
// 	const plantsResponse = yield axios.get('api/plant');
// 	console.log(plantsResponse.data);
// 	yield put({ type: 'LOAD_PLANT', payload: plantsResponse.data })

// }

function* sagaWatcher(){
	yield takeEvery('GET_RESULTS', getResults)

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

