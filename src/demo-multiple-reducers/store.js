import {combineReducers, createStore} from "redux"
import {counter} from "./counter/counter.reducer.js"
import {randomList} from "./random-list/random-list.reducer.js"

const rootReducer = combineReducers({
    counter,
    randomList,
})

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

export const store = createStore(rootReducer, devTools)