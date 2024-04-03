import React from 'react'
import { NavBar } from '../Components'
import { useLocation } from 'react-router-dom'

export default function ViewProduct() {
  const location = useLocation();

  const data = location.state

  return (
    <section className='flex flex-col space-y-10'>
      <NavBar />
      <section className='pl-5'>
        <figure className='w-[30%]'>
          <img src={data.img} alt={data.tag} className='cursor-pointer bg-brown rounded-md h-[26rem] py-5 w-full'  />
        </figure>
      </section>
    </section>
  )
}
