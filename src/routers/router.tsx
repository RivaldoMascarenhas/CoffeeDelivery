import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from '../layout/layout'
import { Checkout } from '../pages/Checkout'
import { CheckoutFilled } from '../pages/CheckoutFilled'
import { Home } from '../pages/home/index'

export function Router() {
    return (
        <Routes>
            <Route path='/' element={<DefaultLayout />}>
                <Route path='/' element={<Home />} />
                <Route path='/checkout' element={<Checkout />} />
                <Route path='/checkoutFilled' element={<CheckoutFilled />} />
            </Route>
        </Routes>

    )
}