import React from 'react'
import { NavBar } from '../Components'

export default function ContactPage() {
  return (
    <section className='flex flex-col space-y-10'>
      <NavBar contact={true}/>
      <section className='relative flex justify-center w-screen h-full'>
        <div className='absolute left-0 w-[50%] h-full bg-dark-green opacity-70'></div>
        <div className='flex flex-col z-20 bg-gray p-5 rounded-md shadow-md'>
          <h2 className='font-h-font text-3xl font-bold text-red tracking-wide'>CONTACT US</h2>
        </div>
      </section>
    </section>
  )
}
