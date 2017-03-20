import {createStore} from "redux";

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

export const store = createStore(
  counter,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)