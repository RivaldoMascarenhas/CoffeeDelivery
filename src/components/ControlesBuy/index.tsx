import React, { useContext, useState } from "react"
import { ContextCoffee } from "../../context/context"
import { actions } from "../../redurcers/redurcer"
import { ControlesBuy } from "../CardCoffee/styles"


export function Controles() {
    const { dispatch } = useContext(ContextCoffee)
    const [counter, setCounter] = useState(1)

    function decrement() {
        setCounter((state) => state - 1)
        dispatch({
            type: actions.decrement,
            playload: counter,
        })
    }
    function increment() {
        setCounter((state) => state + 1)
        dispatch({
            type: actions.increment,
            playload: counter,
        })
    }

    return (
        <ControlesBuy>
            <span onClick={() => { decrement() }}>-</span>
            <p>{counter}</p>
            <span onClick={() => { increment() }}>+</span>
        </ControlesBuy>
    )
}