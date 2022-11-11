import styled from "styled-components";

export const ListContainer = styled.ul`
display: flex;
flex-wrap: wrap;
width: 100%;
column-gap:2rem;
row-gap: 4rem;
list-style: none;
padding: 5.75rem;

& > li {
 display: flex;
 flex-direction: column;

 gap: 1.5rem;
 padding: 0.5rem;
 width: 16rem;

 background-color: ${(props) =>  props.theme['base-card']};
 border-radius: 6px 36px 6px 36px;
}
`
export const DivStyled =  styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 0.7rem;

& > img {
    
    margin-top: -2rem;
    width: 7.5rem;
    height: 7.5rem;
}
& > h3 {
    font-family: 'Baloo 2' , cursive;
    font-weight: bold;
    font-size: 1.25rem;
    color: ${(props) =>  props.theme['base-subtitle']};
}
& > p {
    text-align: center;
    font-size: 0.875rem;
    color: ${(props) =>  props.theme['base-label']};
}
`
export const Tags =  styled.div`
display: flex;
gap: 0.5rem;
flex-wrap: wrap;
justify-content: center;
& > span {
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    font-size: 0.625rem;

    border-radius: 8px;
    border:none;
    padding: 0 0.3rem;

    display: flex;
    justify-content: center;
   
    color: ${(props) =>  props.theme['yellow_dark']};
    background-color: ${(props) =>  props.theme['yellow-light']};
}
`
export const BuyContainer =  styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
padding: 0rem 1rem;

& > p {
    font-size: 0.875rem;
    
    & > span {
        font-size: 1.5rem;
        font-weight: bold;
        margin-left: 0.2rem;
    }
}
`
export const BuyDivStyled  =  styled.div`
    display: flex;
    gap: 0.5rem;
`

export const ControlesBuy =  styled.div`
display: flex;
flex-direction: row;
align-items: center;
background-color: ${(props) =>  props.theme['base-button']}  ;
padding: 0.5rem;
gap: 1rem;
border-radius: 8px;

& > span {
    color: ${(props) =>  props.theme['purple']} ;
}
& > p {
    
    color: ${(props) =>  props.theme['base-title']} ;
}
`
export const Buy =  styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
    border-radius: 8px;
    background-color: ${(props) =>  props.theme['purple-dark']};
      & > img {
        width: 80%;
      }
`