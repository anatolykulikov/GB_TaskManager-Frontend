import { combineReducers } from 'redux'
//Импортируем и подключаем reducers
import { UserLogInReducer } from './userReducers.js'

export default combineReducers ({ UserLogInReducer })