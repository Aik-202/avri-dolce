import React from 'react'
import { locate } from '../../Data'
import { know } from '../../Data/demo'

export default function KnowUs() {
  return (
    <section className='flex flex-col justify-center items-center space-y-10'>
      <h2 className='font-h-font text-3xl font-bold text-red tracking-wide'>GET TO KNOW US</h2>
      <p className='w-[90%] md:w-[80%] font-p-font text-base font-semibold'><i className='text-dark-green 
      font-bold'>Avri Dolce</i> is an italian based clothing 
      brand whose services extend to anywhere in the globe. We are committed to fulfilling the diverse apparel 
      requirements of its clientele, encompassing the meticulous design of T-shirts, trousers, hoodies, caps, 
      knickers, gym attire, and African-inspired dresses. We are located at 
      <i className='text-red font-bold'> Via Musone, 20, 65129 Pescara PE, Italy</i> </p>
      <img src={locate} alt="locate" />
      <div className='grid grid-cols-3 gap-x-10'>
        {know.map((list) => <div className='flex items-center flex-col w-[20rem]'>
            <img src={list.img} alt={list.head} className='w-[55px] self-center' />
            <p className='font-p-font text-lg font-bold py-2 text-red'>{list.head}</p>
            <p className='font-p-font text-base font-semibold'>{list.text}</p>
        </div>)}
      </div>
    </section>
  )
}
