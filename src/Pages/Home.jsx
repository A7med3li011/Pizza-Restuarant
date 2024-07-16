import React, { useState } from 'react'
import Button from '../UI/Button'
import { useDispatch } from 'react-redux'
import { updateName } from '../userSlice'
import { useNavigate } from 'react-router-dom'

export default function Home() {

    const [name,setName] = useState("")
    const dispatch  = useDispatch()
    const navigate = useNavigate()
    function updatename (){
      dispatch(updateName(name))
      navigate("/menu")
    }
  return (
    <div className='text-center flex flex-col justify-center mt-16'>
      <h2 className='text-yellow-500  text-lg  px-3 sm:text-2xl font-semibold'>the best pizza.</h2>
      <h2 className='text-yellow-500  text-lg mb-8 px-3 sm:text-2xl font-semibold'>Straight out of the oven, straight to you.</h2>
      <p className='text-lg mb-8'>👋 Welcome! Please start by telling us your name:</p>
      <input className='w-72 mx-auto rounded-full bg-yellow-100 py-2 px-4 focus:outline-none focus:ring-1 focus:ring-yellow-300' placeholder='Your Full Name' type="text" value={name} onChange={(e)=>setName(e.target.value)} />
      {name && <Button onclick={()=>updatename()} width={38} text={"Shopping Now"}/>}
    </div>
  )
}
