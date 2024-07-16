import React from 'react'

export default function OrederItems({ order }) {
    return (
        <li className='flex items-center justify-between py-4'>
            <p>
               <span className='font-bold me-2'>{order.quantity} X</span>   {order.name}
            </p>
            <p>
                {order.totalPrice} $
            </p>
        </li>
    )
}
