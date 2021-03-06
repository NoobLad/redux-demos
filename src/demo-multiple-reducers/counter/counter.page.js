import {store} from "../store"
import {decrement, increment, reset} from "./counter.reducer.js"
import {onClickDispatch} from "../helpers"

const counterIncButton = document.querySelector('.counter-inc')
const counterDecButton = document.querySelector('.counter-dec')
const counterResetButton = document.querySelector('.counter-reset')
const counterDisplay = document.querySelector('.counter')

store.subscribe(() => {
    counterDisplay.dataset.value = store.getState().counter
})

onClickDispatch(counterIncButton, increment)
onClickDispatch(counterDecButton, decrement)
onClickDispatch(counterResetButton, reset)