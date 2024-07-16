import axios from 'axios';
import React, { useEffect, useState } from 'react'
import MenuItem from '../Components/MenuItem';
import Loader from './../UI/Loader';
import { Link } from 'react-router-dom';
const API_URL = 'https://react-fast-pizza-api.onrender.com/api/menu';
export default function Menu() {

  const [loading, setLoading] = useState(false)
  const [menu,setMenu] = useState([])
  async function getMenu(){
    setLoading(true)
    const data = await axios.get("https://react-fast-pizza-api.onrender.com/api/menu").then(res=>{setMenu(res.data.data)
      setLoading(false)
    })
    .catch(err=>{console.log(err)
      setLoading(false)
    })
  }
  useEffect(()=>{
    getMenu()
  },[])
  if(loading) return <Loader/>

  return (
    <ul className='divide-y divide-slate-300 h-full'>
      
      {menu.map((item)=><MenuItem  pizza={item} key={item.id}/>)}
    </ul>
  )
}
