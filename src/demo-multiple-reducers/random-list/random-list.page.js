import {store} from "../store"
import {onClickDispatch, onClick} from "../helpers"
import {add, remove} from "./random-list.reducer.js"

const randomListAdd = document.querySelector('.random-list-add')
const randomListContainer = document.querySelector('.random-list')

store.subscribe(() => {
    const list = store.getState().randomList.list;
    randomListContainer.innerHTML = list.map(template).join('')
})

onClickDispatch(randomListAdd, add)
onClick(randomListContainer, (event) => {
    event.stopPropagation()

    const id = event.target.dataset.id
    store.dispatch(remove(id))
})

function template(randomItem) {
    return `
        <li>
            A random item ${randomItem.id} 
            <a href="#" data-id="${randomItem.id}">Supprimer</a>
        </li>
    `
}