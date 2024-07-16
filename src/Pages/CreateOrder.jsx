import React from 'react'
import Button from '../UI/Button'
import { useFormik } from 'formik'
import { useDispatch,useSelector } from 'react-redux'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

import { clearCart } from '../cartSlice'
import toast from 'react-hot-toast'

export default function CreateOrder() {
    const cart = useSelector(store=>store.cart.cart)
    const navigate = useNavigate()
    const dispacth =  useDispatch()
    
        const formik = useFormik({
            initialValues:{
                customer:"",
                phone:"",
                address:"",
                priority:false,
                cart
            },
             
            onSubmit: async function createOrder(newOrder) {
                const data = await axios.post(`https://react-fast-pizza-api.onrender.com/api/order`,newOrder
                    ,{
                        headers:{'Content-Type': 'application/json'}
                    }
                ).then(res=>{
                    toast.success("created order successfully")
                    navigate(`/createorder/${res.data.data.id}`)
                    console.log(res)
                    dispacth(clearCart())
                }

                ).catch(err=>console.log(err))
                
              }
        })
    return (
        <div className='py-1 px-3'>
                <h2 className=' tracking-wider font-semibold text-lg mt-5'>Ready to order? Let's go!</h2>
            <form onSubmit={formik.handleSubmit} className='mt-10'>  
                <div className="name">
                    <label className='block mb-2'>First Name</label>
                    <input required name='customer' value={formik.values.customer} onChange={formik.handleChange} className=' focus:outline-none focus:border-yellow-400  rounded-full border mb-5 border-stone-300 w-full  py-2 px-3' type="text" />
                </div>
                <div className="phone">
                    <label className='block mb-2'>phone number</label>
                    <input required name='phone' value={formik.values.phone} onChange={formik.handleChange}  className=' focus:outline-none  focus:border-yellow-400 rounded-full border mb-5 border-stone-300 w-full  py-2 px-3' type="text" />
                </div>
                <div className="address">
                    <label className='block mb-2'>address</label>
                    <input required name='address' value={formik.values.address} onChange={formik.handleChange} className=' focus:outline-none   focus:border-yellow-400 rounded-full border mb-5 border-stone-300 w-full  py-2 px-3' type="text" />
                </div>
                <div className="priority items-center flex ">
                    <input name='priority' value={formik.values.priority} onChange={formik.handleChange} className='' type="checkbox" />
                    <label className=''>Want to yo give your order priority?</label>
                </div>

                <Button text={"order Now"}/>
            </form>
        </div>
    )
}

