import styled from "styled-components";

export const ButtonDiv = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 2rem;
`;

export const Button = styled.button`
    width: 23rem;
    padding: 0.75rem;
    border-radius: 6px;
    border: none;
    color: ${(props) => props.theme["white"]};
    background-color: ${(props) => props.theme["yellow"]};

    &:hover {
        background-color: ${(props) => props.theme["yellow_dark"]};
    }
`;
