import React from 'react'
import { Link } from 'react-router-dom'

export default function EmptyCart() {
  return (
    <div className='text-center mt-3 font-semibold'>
      Your Cart Is Empty 😅,Go Shopping From Here <Link className='text-blue-400 underline' to={"/menu"}>MENU</Link> 
    </div>
  )
}
