import {createStore, combineReducers} from "redux"
import {counter} from "./counter/counter.reducer.js"
import {randomList} from "./random-list/random-list.reducer.js"

const rootReducer = combineReducers({
    counter,
    randomList
})

export const store = createStore(rootReducer)