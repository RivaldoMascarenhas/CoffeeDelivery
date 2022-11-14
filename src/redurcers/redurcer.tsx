import { produce } from 'immer'
import { Coffee } from '../context/context'


export const actions = {
    increment: "increment",
    decrement: "decrement",
    submitCard: "submitCard",
    delete: "delete",

}
export function coffeeReducer(state: any, action: any) {
    switch (action.type) {
        case actions.increment:
            return produce(state, (draft: any) => {
                draft.counter = action.playload + 1
            })

        case actions.decrement:
            return produce(state, (draft: any) => {
                draft.counter = action.playload - 1
            })
        case actions.submitCard:
            return produce(state, (draft: any) => {
                draft.CoffeeSelect.push(action.playload)
            })

        case actions.delete:
            return produce(state, (draft: any) => {
                draft.CoffeeSelect = draft.CoffeeSelect.filter((item: Coffee) => item.name !== action.playload.name)
            })
        default:
            return state
    }
}

