import styled from "styled-components";

export const ContainerSelect = styled.div`
    display: flex;
    flex-direction: column;
    width: 40%;

    & > div {
        background-color: ${(props) => props.theme["base-card"]};
        padding: 1.7rem;
        border-radius: 6px 44px 6px 44px;
    }
    & > h3 {
        font-family: "baloo 2", cursive;
        font-weight: bold;
        font-size: 1.125rem;

        margin-bottom: 1rem;
        color: ${(props) => props.theme["base-subtitle"]};
    }
`;
export const CoffesSelect = styled.ul`
    max-height: 300px;
    overflow-x: hidden;
    overflow-y: scroll;
    white-space: nowrap;
`;

export const ControlesContainer = styled.div`
    display: flex;
    gap: 0.5rem;
`;

export const TotalStyles = styled.div`
    display: flex;
    gap: 1rem;
    flex-direction: column;
    padding-top: 1rem;
    & > p {
        display: flex;
        justify-content: space-between;

        & > span {
            font-weight: bold;
        }
    }
`;
export const BuyText = styled.div`
    & > p {
        font-weight: bold;
    }
`;
