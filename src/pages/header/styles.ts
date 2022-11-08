import styled from 'styled-components'

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;

    width: 100%;
    height: 6.5rem;
    padding: 2rem 0.5rem;

    &>img {
        cursor: pointer;
    }
`
export const LeftContainer =  styled.div`

    display: flex;
    width: 100%;
    justify-content: flex-end;
    gap: 1rem;
    
    
`
const PatternAction =  styled.a`
    border-radius: 8px;
    border:none;
    padding: 0.5rem;

    display: flex;
    justify-content: center;
    align-items: center;

`
export const Location =  styled(PatternAction)`
    background-color: #EBE5F9;
    color: #6029D4;

    font-size: 1rem;
    font-family: 'Roboto', sans-serif;

    padding:0.625rem;
    gap:0.5rem;

    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
    cursor: pointer;

    &:hover{
        background-color: #E9d3ff;
        transition: 300ms;
    }
`
export const CartAction =  styled(PatternAction)`
    background-color: #F1E9C9;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);

    cursor: pointer;
    
    svg> path{
        fill: white;
    }
    
`