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
    @media screen and (max-width: 1064px) {
        width: 100%;
        align-items: center;
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

    @media screen and (max-width: 1064px) {
        width: 80%;
        align-items: center;
        margin-bottom: 0;
        column-gap: 1rem;
    }
`;
