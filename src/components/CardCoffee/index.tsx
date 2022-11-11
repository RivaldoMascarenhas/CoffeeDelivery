import React from 'react'
import { typesCoffee } from '../ListOfCoffee'
import { Buy, BuyContainer, BuyDivStyled, ControlesBuy, DivStyled, ListContainer, Tags } from './styles'
import ShoppingCartSimple from '../../assets/ShoppingCartSimple.png'

export function CardCoffee() {


    return (
        <>
            <ListContainer>
                {typesCoffee.length > 0 ? (
                    typesCoffee.map((item) => (
                        <>
                            <li>
                                <DivStyled>
                                    <img src={item.img} alt={item.name} />
                                    <Tags>{item.tags.map((tag) => <><span>{tag}</span></>)}</Tags>
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
                                            <span>-</span>
                                            <p>0</p>
                                            <span>+</span>
                                        </ControlesBuy>
                                        <Buy>
                                            <img src={ShoppingCartSimple} />
                                        </Buy>
                                    </BuyDivStyled >
                                </BuyContainer>
                            </li>
                        </>
                    ))
                ) : (<p>Infelizmente estamos sem café!!</p>)}
            </ListContainer>
        </>
    )
}