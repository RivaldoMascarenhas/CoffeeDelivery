import React, { useContext } from "react"
import { useForm } from "react-hook-form"
import { Coffee, ContextCoffee } from "../../context/context"
import { CardCoffeeList } from "../CardCoffeeList"
import { CardPayment } from "../CardPayment"
import { AddressCard, AddressInfo, Button, ButtonDiv, CoffesSelect, Container, ContainerSelect, FormContainer, InputStyles, TotalStyles, Wrapper } from "./styles"
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { actions } from "../../redurcers/redurcer"
import { useNavigate } from "react-router-dom"

export function Form() {

    const { state, dispatch } = useContext(ContextCoffee)
    const navigate = useNavigate()

    const formValidation = zod.object({
        CEP: zod.string(),
        Rua: zod.string(),
        Número: zod.number(),
        Complemento: zod.string(),
        Bairro: zod.string(),
        Cidade: zod.string(),
        UF: zod.string(),
    })

    type dataType = zod.infer<typeof formValidation>

    const { register, handleSubmit } = useForm<dataType>({
        resolver: zodResolver(formValidation),

    })

    const totalValue = state.CoffeeSelect.reduce((acc, item) => acc + item.amount * item.buy, 0)
    const entrega = 3.5
    const total = totalValue + entrega

    function handleSubmitForm(data: dataType) {

        dispatch({
            type: actions.setAddress,
            playload: data
        })
        navigate('/checkoutFilled')

        dispatch({
            type: actions.deleteAll,
            playload: [],
        })

    }
    return (
        <Container onSubmit={handleSubmit(handleSubmitForm)}>
            <Wrapper>
                <AddressCard>
                    <h3>Complete seu pedido</h3>
                    <div >
                        <FormContainer>
                            <AddressInfo>
                                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M4.125 19.9375C4.125 19.5578 4.4328 19.25 4.8125 19.25H17.1875C17.5672 19.25 17.875 19.5578 17.875 19.9375C17.875 20.3172 17.5672 20.625 17.1875 20.625H4.8125C4.4328 20.625 4.125 20.3172 4.125 19.9375Z" fill="#C47F17" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M11 6.875C9.86091 6.875 8.9375 7.79841 8.9375 8.9375C8.9375 10.0766 9.86091 11 11 11C12.1391 11 13.0625 10.0766 13.0625 8.9375C13.0625 7.79841 12.1391 6.875 11 6.875ZM7.5625 8.9375C7.5625 7.03902 9.10152 5.5 11 5.5C12.8985 5.5 14.4375 7.03902 14.4375 8.9375C14.4375 10.836 12.8985 12.375 11 12.375C9.10152 12.375 7.5625 10.836 7.5625 8.9375Z" fill="#C47F17" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M11 2.75C9.35897 2.75 7.78516 3.4019 6.62478 4.56228C5.4644 5.72266 4.8125 7.29647 4.8125 8.9375C4.8125 11.7837 6.4019 14.3754 8.08129 16.3067C8.91259 17.2627 9.74566 18.0335 10.371 18.565C10.6184 18.7753 10.8324 18.9474 11 19.0781C11.1676 18.9474 11.3816 18.7753 11.629 18.565C12.2543 18.0335 13.0874 17.2627 13.9187 16.3067C15.5981 14.3754 17.1875 11.7837 17.1875 8.9375C17.1875 7.29647 16.5356 5.72266 15.3752 4.56228C14.2148 3.4019 12.641 2.75 11 2.75ZM11 19.9375C10.6057 20.5007 10.6056 20.5006 10.6053 20.5004L10.6048 20.5L10.6032 20.4989L10.5981 20.4953L10.5806 20.4829C10.5657 20.4723 10.5445 20.457 10.5174 20.4372C10.4632 20.3977 10.3853 20.3399 10.2871 20.2649C10.0908 20.1148 9.81284 19.8952 9.48052 19.6127C8.81684 19.0486 7.93116 18.2295 7.04371 17.2089C5.28561 15.1871 3.4375 12.2788 3.4375 8.9375C3.4375 6.9318 4.23426 5.00825 5.6525 3.59C7.07075 2.17176 8.9943 1.375 11 1.375C13.0057 1.375 14.9293 2.17176 16.3475 3.59C17.7657 5.00825 18.5625 6.9318 18.5625 8.9375C18.5625 12.2788 16.7144 15.1871 14.9563 17.2089C14.0688 18.2295 13.1832 19.0486 12.5195 19.6127C12.1872 19.8952 11.9092 20.1148 11.7129 20.2649C11.6147 20.3399 11.5368 20.3977 11.4826 20.4372C11.4555 20.457 11.4343 20.4723 11.4194 20.4829L11.4019 20.4953L11.3968 20.4989L11.3952 20.5L11.3947 20.5004C11.3944 20.5006 11.3943 20.5007 11 19.9375ZM11 19.9375L11.3943 20.5007C11.1575 20.6664 10.8425 20.6664 10.6057 20.5007L11 19.9375Z" fill="#C47F17" />
                                </svg>
                                <article>
                                    <p>
                                        Endereço de Entrega
                                    </p>
                                    <span>
                                        Informe o endereço onde deseja receber seu pedido
                                    </span>
                                </article>
                            </AddressInfo>
                            <div>
                                <InputStyles
                                    width={40}
                                    type='text'
                                    placeholder='CEP'
                                    autoComplete="on"
                                    autoFocus
                                    required
                                    {...register('CEP')}
                                /> <br />
                                <InputStyles type='text' width={93} placeholder='Rua' autoComplete="on" required {...register('Rua')} /> <br />
                                <InputStyles type="text" width={20} autoComplete="on" placeholder="Número" required {...register('Número', { valueAsNumber: true })} />
                                <InputStyles type='text' width={70} placeholder="Complemento" required {...register('Complemento')} /><br />
                                <InputStyles type='text' width={30} autoComplete="on" placeholder="Bairro" required {...register('Bairro')} />
                                <InputStyles type="text" width={40} autoComplete="on" placeholder="Cidade" required {...register('Cidade')} />
                                <InputStyles type="text" width={17} autoComplete="on" placeholder="UF" min={2} max={2} required {...register('UF')} />
                            </div>

                        </FormContainer>
                    </div>
                </AddressCard>
                <FormContainer margin-top={1}>
                    <CardPayment />
                </FormContainer>
            </Wrapper>

            <ContainerSelect>
                <h3>Cafés selecionados</h3>
                <div>
                    <div>
                        <CoffesSelect>
                            {state.CoffeeSelect.map((item: Coffee) => {
                                return (
                                    <CardCoffeeList key={item.id} item={item} />
                                )
                            })}

                        </CoffesSelect>
                    </div>
                    <TotalStyles>
                        <p>Total de itens<span>R$ {totalValue.toFixed(2).replace('.', ',')}</span></p>
                        <p>Entrega<span>R$ 3,50</span></p>
                        <p>Total<span>{total <= entrega ? "R$ 0,00" : `R$ ${total.toFixed(2).replace('.', ',')}`} </span></p>
                    </TotalStyles>
                    <ButtonDiv>
                        <Button type='submit'> Confirmar Pedido </Button>
                    </ButtonDiv>
                </div>
            </ContainerSelect>
        </Container >

    )
}