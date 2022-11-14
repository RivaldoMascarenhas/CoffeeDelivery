import React from 'react'
import { Button, ButtonDiv } from './styles'

interface ButtonSubmitProps {
    children: string
}

export function ButtonSubmit({ children }: ButtonSubmitProps) {
    return (
        <ButtonDiv>
            <Button type='submit'>{children}</Button>
        </ButtonDiv>

    )
}