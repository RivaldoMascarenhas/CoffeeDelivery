import styled from "styled-components";

export const DivStyled = styled.div`
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
        font-family: "Baloo 2", cursive;
        font-weight: bold;
        font-size: 1.25rem;
        color: ${(props) => props.theme["base-subtitle"]};
    }
    & > p {
        text-align: center;
        font-size: 0.875rem;
        color: ${(props) => props.theme["base-label"]};
    }
`;
export const BuyContainer = styled.div`
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
`;

export const ItemContainer = styled.li`
    display: flex;
    flex-direction: column;

    gap: 1.5rem;
    padding: 0.5rem;
    width: 16rem;

    background-color: ${(props) => props.theme["base-card"]};
    border-radius: 6px 36px 6px 36px;
`;
export const BuyDivStyled = styled.div`
    display: flex;
    gap: 0.5rem;
`;

export const ControlesBuy = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    & > span {
        color: ${(props) => props.theme["base-title"]};
        display: flex;
        justify-content: center;
        align-items: center;
        width: 2.3rem;
        height: 2.7rem;
        border: none;
        background-color: ${(props) => props.theme["base-button"]};
    }
`;
const patternSpan = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1rem;
    height: 2.7rem;
    color: ${(props) => props.theme["purple"]};
    background-color: ${(props) => props.theme["base-button"]};
    cursor: pointer;
`;

export const SpanStyles = styled(patternSpan)`
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
`;

export const SpanStyles02 = styled(patternSpan)`
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
`;

export const Buy = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
    border-radius: 8px;
    background-color: ${(props) => props.theme["purple-dark"]};
    cursor: pointer;
    & > img {
        width: 80%;
    }
`;
