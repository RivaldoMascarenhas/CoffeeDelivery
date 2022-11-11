import React from 'react'
import { IntroCoffee } from '../../components/IntroCoffee'
import { CoffeeList } from '../../components/ListCoffee'

export function Home() {

    return (
        <main>
            <IntroCoffee />
            <CoffeeList />
        </main>
    )
}