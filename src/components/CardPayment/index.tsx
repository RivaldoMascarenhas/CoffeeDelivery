import React, { useContext, useState } from 'react'
import { ContextCoffee } from '../../context/context'
import { actions } from '../../redurcers/redurcer'
import { AddressInfo } from '../FormCoffee/styles'
import { CardPaymentDid } from './CardPaymentDid'
import { PaymentContainer } from './styles'

const options = [
    {
        label: 'Cartão de Crédito',
        type: 'credit'
    },
    {
        label: 'Cartão de Débito',
        type: 'debit'
    },
    {
        label: 'Dinheiro',
        type: 'cash'
    },
]

export function CardPayment() {

    const { dispatch } = useContext(ContextCoffee)

    const [cardActive, setCardActive] = useState('')

    if (cardActive != '') {
        dispatch({
            type: actions.setPayment,
            playload: options.find((item) => item.type === cardActive),
        })
    }
    return (
        <>
            <AddressInfo>
                <svg
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M11 1.375C11.3797 1.375 11.6875 1.6828 11.6875 2.0625V19.9375C11.6875 20.3172 11.3797 20.625 11 20.625C10.6203 20.625 10.3125 20.3172 10.3125 19.9375V2.0625C10.3125 1.6828 10.6203 1.375 11 1.375Z"
                        fill="#8047F8"
                    />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M6.36443 4.64568C7.13802 3.8721 8.18723 3.4375 9.28125 3.4375H12.375C12.9167 3.4375 13.4531 3.5442 13.9536 3.7515C14.454 3.9588 14.9088 4.26264 15.2918 4.64568C15.6749 5.02873 15.9787 5.48346 16.186 5.98393C16.3933 6.4844 16.5 7.0208 16.5 7.5625C16.5 7.9422 16.1922 8.25 15.8125 8.25C15.4328 8.25 15.125 7.9422 15.125 7.5625C15.125 7.20136 15.0539 6.84377 14.9157 6.51012C14.7775 6.17648 14.5749 5.87332 14.3195 5.61796C14.0642 5.3626 13.761 5.16003 13.4274 5.02183C13.0937 4.88363 12.7361 4.8125 12.375 4.8125H9.28125C8.5519 4.8125 7.85243 5.10223 7.33671 5.61796C6.82098 6.13368 6.53125 6.83315 6.53125 7.5625C6.53125 8.29185 6.82098 8.99132 7.33671 9.50704C7.85243 10.0228 8.5519 10.3125 9.28125 10.3125H13.0625C14.1565 10.3125 15.2057 10.7471 15.9793 11.5207C16.7529 12.2943 17.1875 13.3435 17.1875 14.4375C17.1875 15.5315 16.7529 16.5807 15.9793 17.3543C15.2057 18.1279 14.1565 18.5625 13.0625 18.5625H8.9375C7.84348 18.5625 6.79427 18.1279 6.02068 17.3543C5.2471 16.5807 4.8125 15.5315 4.8125 14.4375C4.8125 14.0578 5.1203 13.75 5.5 13.75C5.8797 13.75 6.1875 14.0578 6.1875 14.4375C6.1875 15.1668 6.47723 15.8663 6.99296 16.382C7.50868 16.8978 8.20815 17.1875 8.9375 17.1875H13.0625C13.7918 17.1875 14.4913 16.8978 15.007 16.382C15.5228 15.8663 15.8125 15.1668 15.8125 14.4375C15.8125 13.7082 15.5228 13.0087 15.007 12.493C14.4913 11.9772 13.7918 11.6875 13.0625 11.6875H9.28125C8.18723 11.6875 7.13802 11.2529 6.36443 10.4793C5.59085 9.70573 5.15625 8.65652 5.15625 7.5625C5.15625 6.46848 5.59085 5.41927 6.36443 4.64568Z"
                        fill="#8047F8"
                    />
                </svg>
                <article>
                    <p>Pagamento</p>
                    <span>
                        O pagamento é feito na entrega. Escolha a
                        forma que deseja pagar
                    </span>
                </article>
            </AddressInfo>
            <PaymentContainer>
                {options.map(({ label, type }, index) => (
                    <CardPaymentDid
                        key={index}
                        text={label}
                        active={type === cardActive}
                        onClick={() => setCardActive(type)}
                    />
                ))}
            </PaymentContainer>
        </>
    );
}