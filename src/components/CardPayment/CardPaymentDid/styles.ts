import styled from "styled-components";

const OptionCardPattern = styled.div`
    display: flex;
    gap: 0.5rem;

    padding: 1rem;

    border-radius: 8px;

    cursor: pointer;
`;

type OptionCardProps = {
    active?: "active" | "disable";
};

export const OptionCard = styled(OptionCardPattern)<OptionCardProps>`
    background-color: ${(props) => {
        if (props.active === "active") {
            return props.theme["purple-light"];
        }
        if (props.active === "disable") {
            return props.theme["base-input"];
        } else {
            return props.theme["base-input"];
        }
    }};

    border: ${(props) => {
        if (props.active === "active") {
            return `${props.theme["purple-dark"]} 1px solid`;
        }
        if (props.active === "disable") {
            return `transparente 1px solid`;
        } else {
            return `transparente 1px solid`;
        }
    }};

    &:hover {
        background-color: ${(props) => {
            if (props.active === "active") {
                return;
            }
            if (props.active === "disable") {
                return props.theme["base-hover"];
            } else {
                return props.theme["base-hover"];
            }
        }};
    }
`;
