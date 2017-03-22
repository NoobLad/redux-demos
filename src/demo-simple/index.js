import {createStore} from "redux"
import "./simple.css"

const counterElement = document.querySelector('.counter')

function counter(state = 0, action) {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1
        case 'DECREMENT':
            return state - 1
        default:
            return state
    }
}

const store = createStore(
    counter,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)

store.subscribe(() => counterElement.dataset.value = store.getState())

document.querySelector('.counter-inc').addEventListener('click', () => {
    store.dispatch({type: 'INCREMENT'})
})

document.querySelector('.counter-dec').addEventListener('click', () => {
    store.dispatch({type: 'DECREMENT'})
})

store.dispatch({type: 'INCREMENT'})
store.dispatch({type: 'INCREMENT'})
store.dispatch({type: 'INCREMENT'})
// Si si je sais au moins compter jusqu'à 3 !
