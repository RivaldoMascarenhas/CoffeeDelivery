import styled from "styled-components";

export const HomeContainer = styled.div`
    display: flex;
    margin-bottom: 3rem;
    width: 100%;
    & > section {
        display: flex;
        flex-direction: column;
        width: 50%;

        @media screen and (max-width: 1064px) {
            width: 80%;
        }
    }

    @media screen and (max-width: 1064px) {
        justify-content: center;
    }
`;

export const Banner = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;

    & > img {
        width: 29rem;
    }
    @media screen and (max-width: 1064px) {
        display: none;
    }
`;
export const BenefitContainer = styled.ul`
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    gap: 0.9rem;

    & > li {
        display: flex;
        width: 47%;
        align-items: center;
        gap: 0.5rem;
    }
`;
type buttonVariantProps = {
    variant: "yellow_dark" | "yellow" | "purple" | "base_text";
};

export const BenefitIcon = styled.span<buttonVariantProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    padding: 0.5rem;
    background-color: ${(props) => props.theme[props.variant]};
`;

export const DescriptionCoffee = styled.article`
    margin-bottom: 4.125rem;

    & > h1 {
        font-family: "Baloo 2", cursive;
        font-weight: bold;
        line-height: 130%;
        font-size: 3rem;
        color: ${(props) => props.theme["base-title"]};
    }
    & > p {
        font-size: 1.25rem;
    }
`;
