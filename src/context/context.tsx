import React, { useReducer } from 'react'
import { createContext, ReactNode } from 'react'
import { coffeeReducer } from '../redurcers/redurcer'

export interface Coffee {
    id: number,
    tags: string[],
    name: string,
    description: string,
    img: string,
    buy: number,
    amount: number,
}

interface ContextCoffeeType {
    listCoffee: Array<Coffee>,
    state: TypesStates,
    dispatch: (value: any) => void,
}


interface ContextProps {
    children: ReactNode
}
interface dataAddressType {
    CEP: string;
    Rua: string;
    Número: number;
    Complemento: string;
    Bairro: string;
    Cidade: string;
    UF: string;
}

export const ContextCoffee = createContext({} as ContextCoffeeType)

const listCoffee: Array<Coffee> = [
    {
        id: 1,
        tags: ['TRADICIONAL'],
        name: 'Expresso Tradicional',
        description: 'O tradicional café feito com água quente e grãos moídos',
        img: './Type=Expresso.png',
        buy: 9.90,
        amount: 0,
    },
    {
        id: 2,
        tags: ['TRADICIONAL'],
        name: 'Expresso Americano',
        description: 'Expresso diluído, menos intenso que o tradicional',
        img: './Type=Americano.png',
        buy: 9.90,
        amount: 0,
    },
    {
        id: 3,
        tags: ['TRADICIONAL'],
        name: 'Expresso Cremoso',
        description: 'Café expresso tradicional com espuma cremosa',
        img: './Type=Expresso Cremoso.png',
        buy: 9.90,
        amount: 0,
    },
    {
        id: 4,
        tags: ['TRADICIONAL', 'GELADO'],
        name: 'Expresso Gelado',
        description: 'Bebida preparada com café expresso e cubos de gelo',
        img: './Type=Expresso Cremoso.png',
        buy: 9.90,
        amount: 0,
    },
    {
        id: 5,
        tags: ['TRADICIONAL', 'COM LEITE'],
        name: 'Café com Leite',
        description: 'Meio a meio de expresso tradicional com leite vaporizado',
        img: './Type=Café com Leite.png',
        buy: 9.90,
        amount: 0,
    },
    {
        id: 6,
        tags: ['TRADICIONAL', 'COM LEITE'],
        name: 'Latte',
        description: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
        img: './Type=Latte.png',
        buy: 9.90,
        amount: 0,
    },
    {
        id: 7,
        tags: ['TRADICIONAL', 'COM LEITE'],
        name: 'Capuccino',
        description: 'Bebida com canela feita de doses iguais de café, leite e espuma',
        img: './Type=Capuccino.png',
        buy: 9.90,
        amount: 0,
    },
    {
        id: 8,
        tags: ['TRADICIONAL', 'COM LEITE'],
        name: 'Macchiato',
        description: 'Café expresso misturado com um pouco de leite quente e espuma',
        img: './Type=Macchiato.png',
        buy: 9.90,
        amount: 0,
    },
    {
        id: 9,
        tags: ['TRADICIONAL', 'COM LEITE'],
        name: 'Mocaccino',
        description: 'Café expresso com calda de chocolate, pouco leite e espuma',
        img: './Type=Mochaccino.png',
        buy: 9.90,
        amount: 0,
    },
    {
        id: 10,
        tags: ['TRADICIONAL', 'COM LEITE'],
        name: 'Chocolate Quente',
        description: 'Bebida feita com chocolate dissolvido no leite quente e café',
        img: './Type=Chocolate Quente.png',
        buy: 9.90,
        amount: 0,
    },
    {
        id: 11,
        tags: ['ESPECIAL', 'ALCOÓLICO', 'GELADO'],
        name: 'Cubano',
        description: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
        img: './Type=Cubano.png',
        buy: 9.90,
        amount: 0,
    },
    {
        id: 12,
        tags: ['ESPECIAL'],
        name: 'Havaiano',
        description: 'Bebida adocicada preparada com café e leite de coco',
        img: './Type=Havaiano.png',
        buy: 9.90,
        amount: 0,
    },
    {
        id: 13,
        tags: ['ESPECIAL'],
        name: 'Árabe',
        description: 'Bebida preparada com grãos de café árabe e especiarias',
        img: './Type=Árabe.png',
        buy: 9.90,
        amount: 0,
    },
    {
        id: 14,
        tags: ['ESPECIAL', 'ALCOÓLICO'],
        name: 'Irlandês',
        description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
        img: './Type=Irlandês.png',
        buy: 9.90,
        amount: 0,
    },


]

export interface TypesStates {
    CoffeeSelect: Coffee[],
    dataAddress: dataAddressType,
    dataPaygament: { type: string, label: string },

}

const initial: TypesStates = {
    CoffeeSelect: [],
    dataAddress: {
        CEP: '',
        Rua: '',
        Número: 0,
        Complemento: '',
        Bairro: '',
        Cidade: '',
        UF: '',
    },
    dataPaygament: {
        type: '',
        label: '',
    },
}

export function Context({ children }: ContextProps) {
    const [state, dispatch] = useReducer(coffeeReducer, initial)

    return (

        <ContextCoffee.Provider value={{ listCoffee, state, dispatch }}>
            {children}
        </ContextCoffee.Provider>

    )
}

