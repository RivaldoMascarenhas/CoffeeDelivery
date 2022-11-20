import styled from "styled-components";

export const TitleFilled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 3rem;
    margin-bottom: 3rem;
    & > p {
        font-family: "Baloo 2", cursive;
        font-size: 3rem;
        color: ${(props) => props.theme["yellow_dark"]};
    }

    & > span {
        font-size: 1.25rem;
    }

    @media screen and (max-width: 1064px) {
        line-height: 220%;
        width: 100%;
    }
`;

export const WrapperFilled = styled.div`
    display: flex;
    width: 100%;
    gap: 4.75rem;

    & > div {
        width: 100%;
    }
    @media screen and (max-width: 1064px) {
        flex-direction: column;
    }
`;

export const ListFilled = styled.div`
    & > ul {
        display: flex;
        flex-direction: column;

        padding: 2.5rem;
        gap: 2rem;

        border-image: linear-gradient(90deg, #dbac2c, #8047f8);
        border-style: solid;
        border-width: 3px;
        border-image-slice: 1;
        border-radius: 6px 36px 6px 36px;

        list-style: none;

        & > li {
            display: flex;
            gap: 0.75rem;
        }
    }
`;
interface IconContainerProps {
    variant: "purple" | "yellow" | "yellow_dark";
}
export const IconContainer = styled.div<IconContainerProps>`
    width: 42px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
    border-radius: 100%;
    ${(props) => `background-color: ${props.theme[props.variant]};`};
`;
