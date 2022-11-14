import React from 'react'
import { Buy, BuyContainer, BuyDivStyled, ControlesBuy, DivStyled, ItemContainer } from './styles'
import ShoppingCartSimple from '../../assets/ShoppingCartSimple.png'
import { Tags } from '../tags'
import { Coffee } from '../../context/context'

export function CardCoffee(item: Coffee) {
    // const {  } = useContext(ContextCoffee)
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
                    <ControlesBuy>
                        <span >-</span>
                        <p>{item.amount}</p>
                        <span>+</span>
                    </ControlesBuy>
                    <Buy>
                        <img src={ShoppingCartSimple} />
                    </Buy>
                </BuyDivStyled >
            </BuyContainer>
        </ItemContainer>
    )
}