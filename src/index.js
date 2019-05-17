import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import {Provider} from 'react-redux';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import {takeEvery, put} from 'redux-saga/effects';
import axios from 'axios';



const displayResults = (state=[], action) => {
	console.log('in displayResults reducer, action.payload:', action.payload);
	//console.log('action.payload:', action.payload)
	if(action.type==='DISPLAY_RESULTS'){
		return action.payload;
	}
	return state;
};//end displayResults

const showFavs = (state=[], action) => {
	console.log('in showFavs reducer, action.payload:', action.payload);
	if(action.type === 'SHOW_FAVS'){
		return action.payload;
	}
	return state;
};//end showFavs

function* getResults(action) {
	try{
		//console.log('getResults saga', action.payload);
		const searchResponse = yield axios.get(`${action.payload}`);
		yield put ({type: 'DISPLAY_RESULTS', payload: searchResponse.data.data})
		//console.log('searchresult.data.data', searchResponse.data.data)
	}catch(error){
		console.log('error in GET:', error)
	}
};//end getResults

function* saveFav(action){
	try{
		console.log('saveFav action.payload:', action.payload);
		yield axios.post('/api/favorite', {gif_url: action.payload});
		yield put({type: 'SHOW_FAVS'})
	}catch(error){
		console.log('error in POST:', error)
	}
};//end saveFav

function* getFavs(){
	try{
		const allTheFavorites = yield axios.get('/api/favorite');
		console.log('allTheFavorites.data', allTheFavorites.data)
		yield put ({type: 'SHOW_FAVS', payload: allTheFavorites.data})
	}catch(error){
		console.log('error in fav get:', error)
	}
};//end getFavs

function* sagaWatcher(){
	yield takeEvery(`GET_CATS`, getCats)
	yield takeEvery('GET_RESULTS', getResults)
	yield takeEvery('SAVE_FAV', saveFav)
	yield takeEvery('GET_FAVS', getFavs)
}

function* getCats() {
	try {
		const catResponse = yield axios.get('/api/category')
		yield put({type: `SHOW_CATS`, payload: catResponse.data})
	} catch (error) {
		console.log(error);	
	}
}

const showCats = (state = [], action) => {
	switch (action.type) {
		case `SHOW_CATS`:
			return action.payload
		default:
			return state;
	}
}

const sagaMiddleware = createSagaMiddleware();

const storeInstance = createStore(
	combineReducers({
		displayResults,
		showCats,
		showFavs
	}),
	applyMiddleware(sagaMiddleware, logger),
)

sagaMiddleware.run(sagaWatcher)

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>,document.getElementById('root'));

