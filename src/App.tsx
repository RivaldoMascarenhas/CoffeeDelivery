import React from "react"


import { GlobalStyle } from "../src/styles/global"

import { ThemeProvider } from "styled-components"

import { defaultTheme } from "./styles/themes/default"
import { Router } from "./routers/router"
import { BrowserRouter } from 'react-router-dom'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router />
        <GlobalStyle />
      </BrowserRouter>
    </ThemeProvider>
  )
}

