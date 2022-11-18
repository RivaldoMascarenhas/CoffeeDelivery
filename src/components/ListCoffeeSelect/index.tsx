import React, { useContext } from 'react'
import { CoffesSelect, ContainerSelect, TotalStyles } from './styles'
import { ButtonSubmit } from '../ButtonSubmit'
import { Coffee, ContextCoffee } from '../../context/context'
import { CardCoffeeList } from '../CardCoffeeList'



export function CardCoffeeSelect() {

    const { state } = useContext(ContextCoffee)
    const totalValue = state.CoffeeSelect.reduce((acc, item) => acc + item.amount * item.buy, 0)
    const entrega = 3.5
    const total = totalValue + entrega
    return (
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
                    <p>Total de itens<span>R$ {totalValue.toFixed(2)}</span></p>
                    <p>Entrega<span>R$ 3,50</span></p>
                    <p>Total<span>{total <= entrega ? <p> R$ 0,00 </p> : <p>R$ {total.toFixed(2)}</p>} </span></p>
                </TotalStyles>
                <ButtonSubmit> Confirmar Pedido</ButtonSubmit>
            </div>
        </ContainerSelect>
    )
}