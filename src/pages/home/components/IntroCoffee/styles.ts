import styled from "styled-components";

export const HomeContainer = styled.main`
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 5.75rem;
    
    
`

export const Banner = styled.div`
display: flex;
align-items: center;
width: 100%;

& > img {
    width: 29rem
}
`
export const BenefitContainer = styled.ul`
display: flex;
flex-direction: row;
gap: 2rem;

width: 49rem;
flex-wrap: wrap;
list-style: none;


& > li {
    display: flex;
    width: 20rem;
    align-items: center;
    gap: 1rem;
}
`
type buttonVariantProps = {
    variant: 'orange' | 'yellow' | "purple" | "gray"
}
const buttonVariant = {
    orange: "#C47F17",
    yellow: "#DBAC2C",
    purple: "#8047F8",
    gray: "#574F4D"
}

export const BenefitIcon = styled.span<buttonVariantProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100%;
    padding: 0.5rem;
   ${(props) => {
        return `background-color: ${buttonVariant[props.variant]}`
    }};
`

export const DescriptionCoffee = styled.article`

margin-bottom: 4.125rem;

& > h1 {
    font-family: 'Baloo 2', cursive;
    font-weight: bold;
    font-size: 3rem;
}
&> p {
    font-size: 1.25rem;
}
`