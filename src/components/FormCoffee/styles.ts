import styled from "styled-components";


export const Wrapper = styled.div`
display: flex;
width:60%;
flex-direction: column;
`

export const AddressCard = styled.div`
& > h3 {
    font-family: 'baloo 2', cursive;
    font-weight: bold;
    font-size: 1.125rem;

    margin-bottom: 1rem;
    color: ${(props) => props.theme['base-subtitle']};
}`


export const FormContainer = styled.div`
width: 100%;
padding: 2.5rem;
border-radius: 6px;
background-color: ${(props) => props.theme['base-card']};
margin-bottom: 1rem;
`
 export const AddressInfo =  styled.div`
    display:flex;
    gap: 0.5rem;
    margin-bottom: 2rem;

& > article > p {
    font-size: 1.125rem;
    color:${(props) => props.theme['base-subtitle']}
}
& > article > span {
    font-size: 0.875rem;
}
` 
interface InputStylesProps {
    width: number;
}
export const InputStyles = styled.input<InputStylesProps>`
${(props) => `width:${props.width}%;`}
border: none;
border-style: none;
border-radius:4px;

padding: 0.75rem;
margin-bottom:1rem;
margin-left:1rem;
background-color: ${(props) => props.theme['base-input']};

font-size: 0.875rem;
`