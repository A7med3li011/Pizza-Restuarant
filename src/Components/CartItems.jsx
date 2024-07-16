import React from 'react'
import Button from '../UI/Button'
import { useDispatch } from 'react-redux'
import { decItem, deleteCart, getitemById, incItem } from '../cartSlice'

export default function CartItems({ item }) {
    const dispatch = useDispatch()
    if (item.quantity === 0) return null
    return (
        <li className='py-5 flex items-center justify-between '>

            <div>
                <span className=' me-1 sm:me-3 '>{item.quantity}x</span>
                <span>{item.name}</span>
            </div>

            <div className='space-x-1 sm:space-x-2 flex items-center flex-col-reverse sm:flex sm:flex-row sm:items-center'>
                <span className='sm:mt-3'>{item.quantity * item.unitPrice}$</span>
                <div className='flex gap-1 my-1'>
                    <Button width={7} onclick={() => dispatch(incItem(item.pizzaId))} text={"+"} />
                    <Button width={7} onclick={() => dispatch(decItem(item.pizzaId))} text={"-"} />
                </div>
                <Button onclick={() => dispatch(deleteCart(item.pizzaId))} text={"delete"} />
            </div>

        </li>
    )
}
