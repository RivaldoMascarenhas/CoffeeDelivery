import React from "react";
import { CardCoffeeSelect } from "../../components/CardCoffeeSelect";
import { Form } from "../../components/FormCoffee";
import { CheckoutContainer } from "./styles";

export function Checkout() {
    return (
        <CheckoutContainer>
            <Form />
            <CardCoffeeSelect />
        </CheckoutContainer>
    )
}