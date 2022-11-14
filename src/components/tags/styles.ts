import styled from "styled-components";

export const TagsStyles = styled.div`
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
    justify-content: center;
    & > span {
        font-family: "Roboto", sans-serif;
        font-weight: bold;
        font-size: 0.625rem;

        border-radius: 8px;
        border: none;
        padding: 0 0.3rem;

        display: flex;
        justify-content: center;

        color: ${(props) => props.theme["yellow_dark"]};
        background-color: ${(props) => props.theme["yellow-light"]};
    }
`;
