import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from '../pages/header'
import { LayoutContainer } from './styles'


export function DefaultLayout() {

    return (
        <LayoutContainer>
            <Header />
            <Outlet />
        </LayoutContainer>
    )
}