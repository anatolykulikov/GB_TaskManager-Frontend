import { createStore, applyMiddleware, compose } from 'redux'

// reducers
import initReducers from './reducers'

//midware
import middlewares from './middleware'
import thunk from 'redux-thunk'

export default function initStore () {
    
    let initialStore = {}

    return createStore (
        initReducers, 
        initialStore,
        applyMiddleware (thunk),
        //window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : () => {}
        )
}