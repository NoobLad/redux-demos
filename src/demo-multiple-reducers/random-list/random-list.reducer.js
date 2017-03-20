export const randomListTypes = {
    add: 'RANDOM_LIST_ADD',
    remove: 'RANDOM_LIST_REMOVE'
}

export const add = () => ({ type: randomListTypes.add })
export const remove = (id) => ({ type: randomListTypes.remove, id })

const initialState = {
    list: [],
    count: 0,
}

export function randomList(state = initialState, {type, id}) {
    console.log(state, type, id)
    switch (type) {
        case randomListTypes.add:
            return {
                list: state.list.concat({
                    id: state.count,
                    random: Math.floor(Math.random() * 100),
                }),
                count: state.count + 1
            }
        case randomListTypes.remove:
            return {
                list: state.list.filter((random) => random.id != id),
                count: state.count
            }
        default:
            return state
    }
}
