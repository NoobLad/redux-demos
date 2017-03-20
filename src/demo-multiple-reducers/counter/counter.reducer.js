/**
 * Types
 */
export const counterTypes = {
    increment: 'COUNTER_INCREMENT',
    decrement: 'COUNTER_DECREMENT',
    reset: 'COUNTER_RESET',
}

/**
 * Actions creators
 */
export const increment = () => ({type: counterTypes.increment})
export const decrement = () => ({type: counterTypes.decrement})
export const reset = () => ({type: counterTypes.reset})

/**
 * Reducer
 */
export function counter(state = 0, {type}) {
    switch (type) {
        case counterTypes.increment:
            return state + 1
        case counterTypes.decrement:
            return state - 1
        case counterTypes.reset:
            return 0
        default:
            return state
    }
}