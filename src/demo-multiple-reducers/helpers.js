import {store} from "./store"

export function onClickDispatch(element, actionBuilder) {
    onClick(
        element,
        () => store.dispatch(actionBuilder()),
    )
}

export function onClick(element, handler) {
    element && element.addEventListener && element.addEventListener('click', handler, true)
}