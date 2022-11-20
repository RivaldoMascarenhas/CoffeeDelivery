import React, { useContext } from 'react'
import { ContextCoffee } from '../../context/context'
import { IconContainer, ListFilled, TitleFilled, WrapperFilled } from './styles'
import Illustration from '.public/Illustration.png'

export function CheckoutFilled() {
    const { state } = useContext(ContextCoffee)
    return (
        <>
            <TitleFilled>
                <p>Uhu! Pedido confirmado</p>
                <span>Agora é só aguardar que logo o café chegará até você</span>
            </TitleFilled>

            <WrapperFilled>
                <div>
                    <ListFilled>
                        <ul>
                            <li>
                                <IconContainer variant='purple'>
                                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11 1.375C8.995 1.37727 7.07277 2.17477 5.65502 3.59252C4.23727 5.01027 3.43977 6.9325 3.4375 8.9375C3.4375 15.4086 10.3125 20.2984 10.6047 20.5047C10.7218 20.5827 10.8593 20.6243 11 20.6243C11.1407 20.6243 11.2782 20.5827 11.3953 20.5047C11.6875 20.2984 18.5625 15.4086 18.5625 8.9375C18.5602 6.9325 17.7627 5.01027 16.345 3.59252C14.9272 2.17477 13.005 1.37727 11 1.375ZM11 6.1875C11.5439 6.1875 12.0756 6.34878 12.5278 6.65096C12.9801 6.95313 13.3325 7.38262 13.5407 7.88512C13.7488 8.38762 13.8033 8.94055 13.6972 9.474C13.5911 10.0074 13.3291 10.4974 12.9445 10.882C12.5599 11.2666 12.0699 11.5286 11.5365 11.6347C11.0031 11.7408 10.4501 11.6863 9.94762 11.4782C9.44512 11.27 9.01563 10.9176 8.71346 10.4653C8.41128 10.0131 8.25 9.4814 8.25 8.9375C8.25 8.20815 8.53973 7.50868 9.05546 6.99296C9.57118 6.47723 10.2707 6.1875 11 6.1875Z" fill="white" />
                                    </svg>

                                </IconContainer>
                                <div>
                                    <p>Entrega em <strong> {state.dataAddress.Rua} , {state.dataAddress.Número}</strong></p>
                                    <p>{state.dataAddress.Bairro} - {state.dataAddress.Cidade}, {state.dataAddress.UF}</p>
                                </div>
                            </li>
                            <li>
                                <IconContainer variant='yellow'>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6.5 1H9.5C9.63261 1 9.75979 0.947322 9.85355 0.853553C9.94732 0.759785 10 0.632608 10 0.5C10 0.367392 9.94732 0.240215 9.85355 0.146447C9.75979 0.0526784 9.63261 0 9.5 0L6.5 0C6.36739 0 6.24021 0.0526784 6.14645 0.146447C6.05268 0.240215 6 0.367392 6 0.5C6 0.632608 6.05268 0.759785 6.14645 0.853553C6.24021 0.947322 6.36739 1 6.5 1Z" fill="#FAFAFA" />
                                        <path d="M8 2C6.81331 2 5.65328 2.35189 4.66658 3.01118C3.67989 3.67047 2.91085 4.60754 2.45673 5.7039C2.0026 6.80026 1.88378 8.00666 2.11529 9.17054C2.3468 10.3344 2.91825 11.4035 3.75736 12.2426C4.59648 13.0818 5.66557 13.6532 6.82946 13.8847C7.99335 14.1162 9.19975 13.9974 10.2961 13.5433C11.3925 13.0892 12.3295 12.3201 12.9888 11.3334C13.6481 10.3467 14 9.18669 14 8C13.9967 6.40972 13.3635 4.88551 12.239 3.76101C11.1145 2.6365 9.59029 2.0033 8 2ZM10.8313 5.88125L8.35625 8.35625C8.26068 8.44866 8.13294 8.50032 8 8.50032C7.86706 8.50032 7.73932 8.44866 7.64375 8.35625C7.54986 8.26145 7.49719 8.13342 7.49719 8C7.49719 7.86658 7.54986 7.73855 7.64375 7.64375L10.1188 5.16875C10.1636 5.11413 10.2194 5.06949 10.2825 5.03772C10.3456 5.00595 10.4147 4.98775 10.4852 4.98428C10.5558 4.98082 10.6264 4.99216 10.6923 5.0176C10.7582 5.04303 10.8181 5.08198 10.8681 5.13195C10.918 5.18192 10.957 5.24179 10.9824 5.30772C11.0078 5.37365 11.0192 5.44418 11.0157 5.51476C11.0123 5.58534 10.9941 5.65441 10.9623 5.71753C10.9305 5.78065 10.8859 5.83642 10.8313 5.88125Z" fill="#FAFAFA" />
                                    </svg>

                                </IconContainer>
                                <div>
                                    <p>Previsão de entrega</p>
                                    <p><strong>20 min - 30 min </strong></p>
                                </div>
                            </li>
                            <li>
                                <IconContainer variant='yellow_dark'>
                                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M11 1.375C11.3797 1.375 11.6875 1.6828 11.6875 2.0625V19.9375C11.6875 20.3172 11.3797 20.625 11 20.625C10.6203 20.625 10.3125 20.3172 10.3125 19.9375V2.0625C10.3125 1.6828 10.6203 1.375 11 1.375Z" fill="white" />
                                        <path fillRule="evenodd" clipRule="evenodd" d="M6.36443 4.64568C7.13802 3.8721 8.18723 3.4375 9.28125 3.4375H12.375C12.9167 3.4375 13.4531 3.5442 13.9536 3.7515C14.454 3.9588 14.9088 4.26264 15.2918 4.64568C15.6749 5.02873 15.9787 5.48346 16.186 5.98393C16.3933 6.4844 16.5 7.0208 16.5 7.5625C16.5 7.9422 16.1922 8.25 15.8125 8.25C15.4328 8.25 15.125 7.9422 15.125 7.5625C15.125 7.20136 15.0539 6.84377 14.9157 6.51012C14.7775 6.17648 14.5749 5.87332 14.3195 5.61796C14.0642 5.3626 13.761 5.16003 13.4274 5.02183C13.0937 4.88363 12.7361 4.8125 12.375 4.8125H9.28125C8.5519 4.8125 7.85243 5.10223 7.33671 5.61796C6.82098 6.13368 6.53125 6.83315 6.53125 7.5625C6.53125 8.29185 6.82098 8.99132 7.33671 9.50704C7.85243 10.0228 8.5519 10.3125 9.28125 10.3125H13.0625C14.1565 10.3125 15.2057 10.7471 15.9793 11.5207C16.7529 12.2943 17.1875 13.3435 17.1875 14.4375C17.1875 15.5315 16.7529 16.5807 15.9793 17.3543C15.2057 18.1279 14.1565 18.5625 13.0625 18.5625H8.9375C7.84348 18.5625 6.79427 18.1279 6.02068 17.3543C5.2471 16.5807 4.8125 15.5315 4.8125 14.4375C4.8125 14.0578 5.1203 13.75 5.5 13.75C5.8797 13.75 6.1875 14.0578 6.1875 14.4375C6.1875 15.1668 6.47723 15.8663 6.99296 16.382C7.50868 16.8978 8.20815 17.1875 8.9375 17.1875H13.0625C13.7918 17.1875 14.4913 16.8978 15.007 16.382C15.5228 15.8663 15.8125 15.1668 15.8125 14.4375C15.8125 13.7082 15.5228 13.0087 15.007 12.493C14.4913 11.9772 13.7918 11.6875 13.0625 11.6875H9.28125C8.18723 11.6875 7.13802 11.2529 6.36443 10.4793C5.59085 9.70573 5.15625 8.65652 5.15625 7.5625C5.15625 6.46848 5.59085 5.41927 6.36443 4.64568Z" fill="white" />
                                    </svg>

                                </IconContainer>
                                <div>
                                    <p>Pagamento na entrega</p>
                                    <p><strong>{state.dataPaygament.type != '' ? state.dataPaygament.label : "Por favor, informe a forma de entrega"}</strong></p>
                                </div>
                            </li>
                        </ul>
                    </ListFilled>
                </div>
                <div>
                    <img src='./public/Illustration.png' />
                </div>
            </WrapperFilled>
        </>
    )
}