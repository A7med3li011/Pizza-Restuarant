import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export default function Footer() {
  const numOfPizza = useSelector(store=>store.cart.cart.reduce((curr,item) => curr + item.quantity,0))
  const totalPrice = useSelector(store=>store.cart.cart.reduce((curr,item) => curr + item.totalPrice,0))

  
  return (
    <footer className=' bg-black py-4 text-white  flex items-center justify-between px-3'>
     {(numOfPizza && totalPrice)? <div >
        <span className='me-3'>
        {numOfPizza} Pizza
        </span>
        <span>
        {totalPrice} $
        </span>
      </div>:<div></div>}
      <div>
        <Link to={"/cart"}> Open cart &rarr;</Link>
      </div>
    </footer>
  )
}
