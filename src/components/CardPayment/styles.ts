import styled from "styled-components";

const OptionCardPattern =  styled.div`
display:flex;
gap: 0.5rem;

padding: 1rem;

border-radius: 8px;
`

export const OptionCard = styled(OptionCardPattern)`

background-color:${(props) => props.theme['base-input']} ;

&:hover {
    background-color:${(props) => props.theme['base-hover']} ;
}

`
export const OptionCardAtive = styled(OptionCardPattern)`

background-color:${(props) => props.theme['purple-light']};
border: ${(props) => props.theme['purple-dark']} 1px solid;
`

export const PaymentContainer = styled.div`
display: flex;
flex-wrap: wrap;
gap: 1rem;
`