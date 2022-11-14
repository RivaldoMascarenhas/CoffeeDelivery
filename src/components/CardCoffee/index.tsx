import React, { useContext, useState } from 'react'
import { Buy, BuyContainer, BuyDivStyled, DivStyled, ItemContainer } from './styles'
import ShoppingCartSimple from '../../assets/ShoppingCartSimple.png'
import { Tags } from '../tags'
import { Coffee, ContextCoffee } from '../../context/context'
import { actions } from '../../redurcers/redurcer'
import { Controles } from '../ControlesBuy'


export function CardCoffee(item: Coffee) {

    const { dispatch, state } = useContext(ContextCoffee)
    const CoffeeSelect: Coffee = {
        amount: state.counter,
        buy: item.buy,
        description: item.description,
        img: item.img,
        name: item.name,
        tags: item.tags,
    }

    function submit() {
        dispatch({ type: actions.submitCard, playload: CoffeeSelect })
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
                        {`${item.buy.toString().replace('.', ',')}0`}
                    </span>
                </p>
                <BuyDivStyled >
                    <Controles />
                    <Buy onClick={() => { submit() }}>
                        <img src={ShoppingCartSimple} />
                    </Buy>
                </BuyDivStyled >
            </BuyContainer>
        </ItemContainer >
    )
}