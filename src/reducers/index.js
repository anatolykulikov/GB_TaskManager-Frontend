import { combineReducers } from 'redux'
//Импортируем и подключаем reducers
import { UserReducer } from './userReducers.js'

export default combineReducers ({ UserReducer })