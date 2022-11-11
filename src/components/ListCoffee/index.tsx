import React from 'react'
import { CardCoffee } from '../CardCoffee'
import { Container } from './styles'


export function CoffeeList() {
    return (
        <Container>
            <h2>Nossos Cafés</h2>
            <CardCoffee />
        </Container>
    )
}