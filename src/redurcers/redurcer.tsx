import { produce } from 'immer'
import { Coffee, TypesStates } from '../context/context'


export const actions = {
    submitCard: "submitCard",
    submitAmount: "submitAmount",
    delete: "delete",
    setAmount: "setAmount",


}
export function coffeeReducer(state: TypesStates, action: any) {
    switch (action.type) {

        case actions.submitCard:
            return produce(state, (draft: any) => {
                draft.CoffeeSelect.push(action.playload)
            })

        case actions.delete:
            return produce(state, (draft: any) => {
                const index = draft.CoffeeSelect.findIndex((item: Coffee) => item.id === action.playload.id)
                draft.CoffeeSelect.splice(index, 1)
            })
        case actions.setAmount:
            return produce(state, (draft: any) => {
                draft.amount = action.playload
            })

        case actions.submitAmount:
            return produce(state, (draft: any) => {
                const coffee = draft.CoffeeSelect.find((item: Coffee) => item.id === action.playload.id)
                coffee.amount = action.playload.counter
            })

        default:
            return state
    }
}

