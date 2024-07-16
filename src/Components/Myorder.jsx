import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import OrederItems from './OrederItems'
import EmptyCart from './EmptyCart';

export default function Myorder() {
    const [order, setOrder] = useState({})
    const { id } = useParams()
    const d = new Date(); // for now
    d.getHours(); // => 9
   const M =  d.getMinutes() + 30  // =>  30
    d.getSeconds(); // => 51
    const estimatedTime = `${d.getUTCHours()>10?d.getUTCHours() - 9:d.getHours()}:${M>=10?M:`0${M} `} ` 
    

    async function getMyOrder() {
        const data = await axios.get(`https://react-fast-pizza-api.onrender.com/api/order/${id}`)
            .then(res => {
                setOrder(res.data.data)
                console.log(res.data.data)

            }).catch(err => console.log(err))
    }
    useEffect(() => {
        getMyOrder()


    }, [id])


    return (
        <div className='py-2 px-3'>
            <div className=' mb-3 sm:flex items-center justify-between '>
                <h2 className='text-xl font-semibold mb-2 sm:mb-0'>order {order.id} Status</h2>
                <div className='flex gap-2'>
                    {order.priority === true && <p className='bg-red-500 font-semibold text-white py-1 px-2 rounded-full'>PRIORITY</p>}
                    <p className='bg-green-500 font-semibold text-white py-1 px-2 rounded-full'>PREPARING ORDER</p>
                </div>
            </div>
            <div className='sm:flex sm:justify-between sm:items-center bg-stone-300 mt-10 h-16 px-3 py-1'>
                <p>Only 31 minutes left 😃</p>
                <p>(Estimated delivery: {estimatedTime} {d.getHours()>=12?"PM":"AM"})</p>
            </div>
            <ul className=' divide-y divide-stone-300 border-b my-5'>
                {order.cart?.map((order, index) => <OrederItems key={index} order={order} />)}
            </ul>

            <div className=' bg-stone-300 mt-10 h-auto px-3 py-4'>
                <p>Price pizza: {order.orderPrice}$</p>
                {order.priority === true && <p>Price priority: {order.priorityPrice}$</p>}

                {order.priority === true ? <p>To pay on delivery: {+order.orderPrice + +order.priorityPrice}$</p> : <p>To pay on delivery: {order.orderPrice}$</p>}
            </div>
        </div>
    )
}
