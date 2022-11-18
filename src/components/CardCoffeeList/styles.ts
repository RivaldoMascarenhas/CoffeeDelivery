import styled from "styled-components";

export const CoffesSelectContainer = styled.li`
    display: flex;
    width: 100%;
    padding-bottom: 1rem;
    margin-bottom: 1rem;
    border-bottom: 1px solid ${(props) => props.theme["base-button"]};
`;
export const ItemStyled = styled.div`
    display: flex;
    align-items: center;
    gap: 1.5rem;

    & > div > p {
        font-size: 1rem;
        color: ${(props) => props.theme["base-subtitle"]};
        margin-bottom: 0.5rem;
    }
`;
export const ControlesContainerRemover = styled.div`
    display: flex;

    align-items: center;
    padding: 0.5rem;
    gap: 0.2rem;
    border-radius: 6px;
    background-color: ${(props) => props.theme["base-button"]};
    cursor: pointer;
`;
