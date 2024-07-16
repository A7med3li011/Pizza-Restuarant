import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import CartItems from './../Components/CartItems';
import { clearCart } from '../cartSlice';
import EmptyCart from '../Components/EmptyCart';

export default function Cart() {
   const cart = useSelector(store=>store.cart.cart)
   
   const userName = useSelector(store=>store.user.userName)
   const dispatch = useDispatch()
   const navigate = useNavigate()
   
   if(!cart.length) return <EmptyCart/> 

  return (
    <div className='py-2 px-3'>
      <Link to={"/menu"} className='text-blue-500 font-semibold mb-4 inline-block'> *back to menu*</Link>
      <h3 className='text-lg font-semibold'>Your Cart, {userName}</h3>
      <ul className=' divide-y divide-slate-300 border-b mb-3'>
        {cart?.map((item)=><CartItems item={item} key={item.pizzaId} />)}
      </ul>

      <div className="btns flex gap-3">
        <button onClick={()=>navigate("/createorder")} className='bg-yellow-400 py-2 px-3 transition-all duration-300 focus:outline-none hover:bg-yellow-300 rounded-lg' >Order Now</button>
        <button onClick={()=>dispatch(clearCart())} className='border border-yellow-400 transition-all duration-300 py-2 px-3 focus:outline-none hover:bg-yellow-300 rounded-lg '>Clear Cart</button>
      </div>
    </div>
  )
}
