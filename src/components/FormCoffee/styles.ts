import styled from "styled-components";

export const Container = styled.form`
    display: flex;
    width: 100%;
    gap: 2rem;

    @media screen and (max-width: 1064px) {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;

export const Wrapper = styled.div`
    display: flex;
    width: 60%;
    flex-direction: column;

    @media screen and (max-width: 1064px) {
        width: 80%;
    }
`;

export const AddressCard = styled.div`
    & > h3 {
        font-family: "baloo 2", cursive;
        font-weight: bold;
        font-size: 1.125rem;

        margin-bottom: 1rem;
        color: ${(props) => props.theme["base-subtitle"]};
    }
`;

export const FormContainer = styled.div`
    width: 100%;
    padding: 2.5rem;
    border-radius: 6px;
    background-color: ${(props) => props.theme["base-card"]};
    margin-bottom: 1rem;
`;
export const AddressInfo = styled.div`
    display: flex;
    gap: 0.5rem;
    margin-bottom: 2rem;

    & > article > p {
        font-size: 1.125rem;
        color: ${(props) => props.theme["base-subtitle"]};
    }
    & > article > span {
        font-size: 0.875rem;
    }
`;
interface InputStylesProps {
    width: number;
}
export const InputStyles = styled.input<InputStylesProps>`
    ${(props) => `width:${props.width}%;`}
    border: none;
    border-style: none;
    border-radius: 4px;

    padding: 0.75rem;
    margin-bottom: 1rem;
    margin-left: 1rem;
    background-color: ${(props) => props.theme["base-input"]};

    font-size: 0.875rem;
`;
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

    @media screen and (max-width: 1064px) {
        width: 80%;
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
