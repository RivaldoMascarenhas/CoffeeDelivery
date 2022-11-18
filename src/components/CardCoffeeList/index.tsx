import React, { useContext, useState } from "react";
import { Coffee, ContextCoffee } from "../../context/context";
import { actions } from "../../redurcers/redurcer";
import { ControlesBuy, SpanStyles, SpanStyles02 } from "../CardCoffee/styles";
import { BuyText, ControlesContainer } from "../ListCoffeeSelect/styles";
import { CoffesSelectContainer, ControlesContainerRemover, ItemStyled } from "./styles";


interface CardCoffeeListProps {
    item: Coffee,
}

export function CardCoffeeList({ item }: CardCoffeeListProps) {
    const [counter, setCounter] = useState(item.amount)
    const { dispatch } = useContext(ContextCoffee)


    function handleCounter(value: number) {

        const newValue = counter + value
        if (newValue < 1 || newValue > 10) { return }
        setCounter(newValue)
        dispatch({ type: actions.submitAmount, playload: { id: item.id, counter: newValue } })
    }

    return (
        <CoffesSelectContainer>
            <ItemStyled>
                <img src={item.img} alt={item.name} />
                <div>
                    <p>{item.name}</p>
                    <ControlesContainer>

                        <ControlesBuy>
                            <SpanStyles onClick={() => { handleCounter(-1) }}>-</SpanStyles>
                            <span>{item.amount}</span>
                            <SpanStyles02 onClick={() => { handleCounter(1) }}>+</SpanStyles02>
                        </ControlesBuy>

                        <ControlesContainerRemover onClick={() => { dispatch({ type: actions.delete, playload: { id: item.id } }) }}>
                            <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M2 4C2 3.72386 2.22386 3.5 2.5 3.5H13.5C13.7761 3.5 14 3.72386 14 4C14 4.27614 13.7761 4.5 13.5 4.5H2.5C2.22386 4.5 2 4.27614 2 4Z" fill="#8047F8" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M6.5 6.5C6.77614 6.5 7 6.72386 7 7V11C7 11.2761 6.77614 11.5 6.5 11.5C6.22386 11.5 6 11.2761 6 11V7C6 6.72386 6.22386 6.5 6.5 6.5Z" fill="#8047F8" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M9.5 6.5C9.77614 6.5 10 6.72386 10 7V11C10 11.2761 9.77614 11.5 9.5 11.5C9.22386 11.5 9 11.2761 9 11V7C9 6.72386 9.22386 6.5 9.5 6.5Z" fill="#8047F8" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M3.5 3.5C3.77614 3.5 4 3.72386 4 4V13.5H12V4C12 3.72386 12.2239 3.5 12.5 3.5C12.7761 3.5 13 3.72386 13 4V13.5C13 13.7652 12.8946 14.0196 12.7071 14.2071C12.5196 14.3946 12.2652 14.5 12 14.5H4C3.73478 14.5 3.48043 14.3946 3.29289 14.2071C3.10536 14.0196 3 13.7652 3 13.5V4C3 3.72386 3.22386 3.5 3.5 3.5Z" fill="#8047F8" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M5.43934 1.93934C5.72064 1.65804 6.10218 1.5 6.5 1.5H9.5C9.89782 1.5 10.2794 1.65804 10.5607 1.93934C10.842 2.22064 11 2.60217 11 3V4C11 4.27614 10.7761 4.5 10.5 4.5C10.2239 4.5 10 4.27614 10 4V3C10 2.86739 9.94732 2.74021 9.85355 2.64645C9.75979 2.55268 9.63261 2.5 9.5 2.5H6.5C6.36739 2.5 6.24022 2.55268 6.14645 2.64645C6.05268 2.74021 6 2.86739 6 3V4C6 4.27614 5.77614 4.5 5.5 4.5C5.22386 4.5 5 4.27614 5 4V3C5 2.60217 5.15804 2.22064 5.43934 1.93934Z" fill="#8047F8" />
                            </svg>
                            <p>REMOVER</p>
                        </ControlesContainerRemover>
                    </ControlesContainer>
                </div>
            </ItemStyled>
            <BuyText>
                <p>R$ {`${item.buy.toString().replace('.', ',')}0`}</p>
            </BuyText>
        </CoffesSelectContainer>
    )

}