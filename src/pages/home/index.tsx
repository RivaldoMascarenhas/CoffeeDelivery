import React from 'react'
import { CoffeeList } from './components/CoffeeList'
import { IntroCoffee } from './components/IntroCoffee'

export function Home() {

    return (
        <>
            <IntroCoffee />
            <CoffeeList />
        </>
    )
}