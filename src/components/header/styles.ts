import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;

    width: 100%;
    height: 6.5rem;
    padding: 2rem 0rem;
    & > div > img {
        cursor: pointer;
    }
    @media screen and (max-width: 1064px) {
        width: 80%;
        margin: 0 auto;
    }
`;
export const LeftContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: flex-end;
    gap: 1rem;
`;
const PatternAction = styled.div`
    border-radius: 8px;
    border: none;
    padding: 0.5rem;

    display: flex;
    justify-content: center;
    align-items: center;
`;
export const Location = styled(PatternAction)`
    background-color: ${(props) => props.theme["purple-light"]};
    color: ${(props) => props.theme["purple-dark"]};

    font-size: 1rem;
    font-family: "Roboto", sans-serif;

    padding: 0.625rem;
    gap: 0.5rem;

    cursor: pointer;

    &:hover {
        background-color: #e9d3ff;
        transition: 300ms;
    }
`;
export const CartAction = styled(PatternAction)`
    background-color: ${(props) => props.theme["yellow-light"]};

    cursor: pointer;

    svg > path {
        fill: ${(props) => props.theme["yellow_dark"]};
    }
    &:hover svg > path {
        fill: ${(props) => props.theme["yellow"]};
    }

    & > span {
        position: absolute;
        margin-left: 2rem;
        margin-top: -2rem;
        font-size: 0.75rem;
        padding: 0 0.4rem 0 0.4rem;
        border-radius: 50%;
        background-color: ${(props) => props.theme["yellow_dark"]};
        color: ${(props) => props.theme["white"]};
    }
`;
