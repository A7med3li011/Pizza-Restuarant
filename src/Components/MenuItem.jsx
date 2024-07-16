import React, { useState } from 'react'

import Button from './../UI/Button';
import { useDispatch, useSelector } from 'react-redux';
import { addtoCart, decItem, deleteCart, getCurrentQuantitubyId, incItem } from '../cartSlice';

export default function MenuItem({ pizza }) {
    const dispatch = useDispatch()
    const { name, id, unitPrice, imageUrl, ingredients, soldOut  } = pizza
    const currentQuantByid = useSelector(getCurrentQuantitubyId(id))
    
    
    function Addtocart(){
        const obj = {
            name,
            pizzaId:id,
            unitPrice,
            quantity:1,
            totalPrice:unitPrice ,
            
            
        }
        
        
        dispatch(addtoCart(obj))
        
        
        
    }

  

    return (
        <li className='py-1 px-3 gap-3 flex box'>
            <img className={`h-24 sm:h-28 ${soldOut && " grayscale "} `} src={imageUrl} alt='' />
            <div className=' w-full text-sm md:text-base'>
                <p className='mb-2 font-semibold'>{name}</p>
                <p className=''>{ingredients.join(', ')}</p>
                <div className='flex  justify-between items-center'>
                    <div className='mt-3 sm:mt-5'>
                        <p className={`${soldOut && "text-red-600"} text-sm`}>{soldOut ? "slodOut" : `${unitPrice}$`}</p>
                    </div>
                    <div className="btns flex gap-2">
                        {(!soldOut && currentQuantByid)?  <Button onclick = {()=>dispatch(incItem(id))} width={22} text={"+"} />:null}
                        {(!soldOut && currentQuantByid)? <Button onclick = {()=>dispatch(decItem(id))} width={10} text={"-"} /> :null}
                        {(!soldOut && currentQuantByid === 0) ? <Button onclick = {()=>Addtocart()} width={12} text={"add to cart"} />:null}
                        {(!soldOut && currentQuantByid > 0 ) ? <Button onclick = {()=>dispatch(deleteCart(id))} width={12} text={"delete"} />:null}
                        
                    </div>
                </div>
            </div>
        </li>
    )
}
