import React from 'react'
import { NavBar } from '../Components'
import { useLocation } from 'react-router-dom'

export default function ViewProduct() {
  const location = useLocation();

  const data = location.state

  return (
    <section className='flex flex-col space-y-10 w-screen'>
      <NavBar product={true} />
      <section className='px-5 flex flex-row justify-between w-[inherit]'>
        <figure className='w-[30%]'>
          <img src={data.img} alt={data.tag} className='cursor-pointer bg-brown rounded-md 
          h-[26rem] p-5 w-full'  />
        </figure>
        <div className='w-[50%] flex flex-col space-y-10'>
          <p className='uppercase text-base font-bold text-red tracking-wide'>Avri Dolce</p>
          <h2 className='uppercase text-4xl font-bold text-black tracking-wide'>{data.tag}</h2>
          <p className='w-[90%] md:w-[80%] font-p-font text-sm font-normal text-[#795548]'>{data.des}</p>
          <p className='uppercase text-3xl font-bold text-black tracking-wide'>{data.price}</p>
        </div>
      </section>
    </section>
  )
}
