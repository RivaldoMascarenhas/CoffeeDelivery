import React from 'react'

interface typesOfCoffee {
    tags: string[],
    name: string,
    description: string,
    img: string,
    buy: number,
}

export function CardCoffee() {
    const typesCoffee: Array<typesOfCoffee> = [{
        tags: ['TRADICIONAL'],
        name: 'Expresso Tradicional',
        description: 'O tradicional café feito com água quente e grãos moídos',
        img: './Type=Americano.png',
        buy: 9.90,
    },]

    return (
        <>
            <ul>
                <li>


                </li>
            </ul>
        </>
    )
}