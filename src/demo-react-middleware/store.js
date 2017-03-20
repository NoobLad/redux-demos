import {createStore, applyMiddleware} from "redux";
import createLogger from 'redux-logger';

export const counterTypes = {
    increment: 'INCREMENT',
    decrement: 'DECREMENT'
}

export const increment = () => ({type: counterTypes.increment})
export const decrement = () => ({type: counterTypes.decrement})

function counter(state = 0, action) {
    switch (action.type) {
        case counterTypes.increment:
            return state + 1
        case counterTypes.decrement:
            return state - 1
        default:
            return state
    }
}

const logger = createLogger()

export const store = createStore(
  counter,
  applyMiddleware(logger)
)