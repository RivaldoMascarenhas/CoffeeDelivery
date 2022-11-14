import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    h2 {
        font-family: "Baloo 2", cursive;
        font-size: 2rem;
        font-weight: bold;
        margin-bottom: 3.375rem;
    }
`;
export const ListContainer = styled.ul`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    margin-bottom: 3rem;
    column-gap: 2rem;
    row-gap: 4rem;
    list-style: none;
`;
