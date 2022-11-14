import React, { useContext } from 'react'
import { ContextCoffee } from '../../context/context'
import { CardCoffee } from '../CardCoffee'
import { Container, ListContainer } from './styles'

export function CoffeeList() {
    const { listCoffee } = useContext(ContextCoffee)
    return (
        <Container>
            <h2>Nossos Cafés</h2>
            <ListContainer>
                {listCoffee.length > 0 ? (
                    listCoffee.map((item, index) => <CardCoffee key={index} {...item} />)
                ) : (<p>Infelizmente estamos sem café!!</p>)}
            </ListContainer>
        </Container>
    )
}