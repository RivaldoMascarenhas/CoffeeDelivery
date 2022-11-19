import { produce } from 'immer'
import { Coffee, TypesStates } from '../context/context'


export const actions = {
    submitCard: "submitCard",
    submitAmount: "submitAmount",
    delete: "delete",
    deleteAll: "deleteAll",
    setAddress: "setAddress",
    setPayment: "setPayment",

}

export function coffeeReducer(state: TypesStates, action: any) {

    switch (action.type) {

        case actions.submitCard:
            return produce(state, (draft: TypesStates) => {
                draft.CoffeeSelect.push(action.playload)
            })

        case actions.delete:
            return produce(state, (draft: TypesStates) => {
                const index = draft.CoffeeSelect.findIndex((item: Coffee) => item.id === action.playload.id)
                draft.CoffeeSelect.splice(index, 1)
            })

        case actions.deleteAll:
            return produce(state, (draft: any) => {
                draft.CoffeeSelect = action.playload
            })

        case actions.submitAmount:
            return produce(state, (draft: any) => {
                const coffee = draft.CoffeeSelect.find((item: Coffee) => item.id === action.playload.id)
                coffee.amount = action.playload.counter
            })
        case actions.setAddress:
            return produce(state, (draft: TypesStates) => {
                draft.dataAddress = action.playload
            })
        case actions.setPayment:
            return produce(state, (draft: TypesStates) => {
                draft.dataPaygament = action.playload
            })

        default:
            return state
    }
}

