import styled from "styled-components";

export const HomeContainer = styled.div`
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
    variant: 'yellow_dark' | 'yellow' | "purple" | "base_text"
}


export const BenefitIcon = styled.span<buttonVariantProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    padding: 0.5rem;
    background-color: ${(props) =>  props.theme[props.variant]};
    
`

export const DescriptionCoffee = styled.article`

margin-bottom: 4.125rem;

& > h1 {
    font-family: 'Baloo 2', cursive;
    font-weight: bold;
    line-height: 130%;
    font-size: 3rem;
    color: ${(props) =>  props.theme['base-title']};
}
&> p {
    font-size: 1.25rem;
}
`