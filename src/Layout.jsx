import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './UI/Header'
import Footer from './UI/Footer'

export default function Layout() {
  return (

    <div className='h-lvh flex flex-col justify-between relative'>

      <Header />
    <main className='flex-auto py-3 h-auto'>
      <Outlet />
    </main>
        <div className=' sticky w-full bottom-0 '>

       <Footer/> 
        </div>
    

    </div>




  )
}
