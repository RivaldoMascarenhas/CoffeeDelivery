import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from '../layout/layout'
import { Home } from '../pages/home'

export function Router() {
    return (
        <Routes>
            <Route path='/' element={<DefaultLayout />}>
                <Route path='/' element={<Home />} />
            </Route>
        </Routes>

    )
}