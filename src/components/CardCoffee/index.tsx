import React, { useContext, useState } from 'react'
import { Buy, BuyContainer, BuyDivStyled, ControlesBuy, DivStyled, ItemContainer, SpanStyles, SpanStyles02 } from './styles'
import ShoppingCartSimple from '../../assets/ShoppingCartSimple.png'
import { Tags } from '../tags'
import { Coffee, ContextCoffee } from '../../context/context'
import { actions } from '../../redurcers/redurcer'


export function CardCoffee(item: Coffee) {
    const { dispatch, state } = useContext(ContextCoffee)
    const [counter, setCounter] = useState(1)

    function handleCounter(value: number) {
        const newValue = counter + value
        if (newValue < 1 || newValue > 10) { return }

        setCounter(newValue)

    }

    function submit() {
        const CoffeeSelect: Coffee = {
            id: item.id,
            amount: counter,
            buy: item.buy,
            description: item.description,
            img: item.img,
            name: item.name,
            tags: item.tags,
        }
        if (state.CoffeeSelect.length > 0) {

            const CoffeeSelectName = state.CoffeeSelect.some((item) => (item.name === CoffeeSelect.name))

            if (CoffeeSelectName) { dispatch({ type: actions.submitAmount, playload: { id: item.id, counter: counter } }) }
            else { { dispatch({ type: actions.submitCard, playload: CoffeeSelect }) } }

        } else {
            dispatch({ type: actions.submitCard, playload: CoffeeSelect })
        }

    }
    return (

        <ItemContainer>
            <DivStyled>
                <img src={item.img} alt={item.name} />
                <Tags tags={item.tags} />
                <h3>{item.name}</h3>
                <p> {item.description} </p>
            </DivStyled>

            <BuyContainer>
                <p>R$
                    <span>
                        {`${item.buy.toFixed(2).replace('.', ',')}`}
                    </span>
                </p>
                <BuyDivStyled >
                    <ControlesBuy>
                        <SpanStyles onClick={() => { handleCounter(-1) }}>-</SpanStyles>
                        <span>{counter}</span>
                        <SpanStyles02 onClick={() => { handleCounter(1) }}>+</SpanStyles02>
                    </ControlesBuy>
                    <Buy onClick={() => { submit() }}>
                        <img src={ShoppingCartSimple} />
                    </Buy>
                </BuyDivStyled >
            </BuyContainer>
        </ItemContainer >
    )
}
