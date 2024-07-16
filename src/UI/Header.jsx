import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import img from "../cart-1502681-1272891.webp"
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Error } from './Error'
export default function Header() {
  const [query, setQuery] = useState("")
  const name = useSelector(store => store.user.userName)
  const cartQuantity = useSelector(store => store.cart.cart.reduce((acc, item) => item.quantity + acc, 0))
  const navigate = useNavigate()
  
  

  return (
    <div className='bg-yellow-400 flex items-center justify-between py-3 px-3 tracking-widest'>
      <div className='flex items-center gap-x-3'>
        <h1 className=''>FAST REACT PIZZA CO.</h1>
        {cartQuantity ? <Link to={"/cart"} className='relative' >
          <img className='w-6 relative' src={img} alt='cart' />
          <span className=' absolute bottom-3 left-6 bg-black text-white rounded-full px-2 py-1 text-center text-xs '>{cartQuantity}</span>
        </Link> : null}
      </div>
      <form onSubmit={(e) => {
        e.preventDefault()
        
        navigate(`/createorder/${query}`)

      }}>
        <input className='rounded-full me-2 bg-yellow-100 py-1.5 px-3 w-24 sm:w-60 focus:outline-none text-sm focus:ring-1 focus:ring-yellow-200 ' placeholder='Search order #' type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
        {name && <span className='hidden sm:inline-block'>{name}</span>}
        {query&&<button className='bg-black text-white rounded-full px-2 py-1 block  w-full sm:w-1/2 mt-3'>Search</button>}

      </form>
    </div>
  )
}
