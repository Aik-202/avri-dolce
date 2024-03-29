import React from 'react'
import { NavBar } from '../Components'
import { contacts } from '../Data/demo'

export default function ContactPage() {
  return (
    <section className='flex flex-col space-y-10'>
      <NavBar contact={true}/>
      <section className='relative flex justify-center w-screen md:h-screen'>
        <div className='absolute left-0 h-[50%] w-full md:w-[50%] md:h-full bg-dark-green opacity-70'></div>
        <div className='flex flex-col z-20 bg-gray p-5 rounded-md shadow-md h-max mt-20 w-[90%] md:w-auto'>
          <h2 className='text-center font-h-font text-3xl font-bold text-red tracking-wide'>CONTACT US</h2>
          {contacts.map((item) => <div key={item.name} className='flex flex-row space-x-3 
          items-center mt-5 rounded-md bg-white shadow-sm p-2'>
            <img src={item.img} className='w-[30px]' />
            <a href={item.link} className='select-text text-sm md:text-base font-b-font 
            hover:text-dark-green'>{item.name}</a>
          </div>)}
        </div>
      </section>
    </section>
  )
}
