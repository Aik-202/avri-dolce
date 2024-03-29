import React from 'react'
import { locate } from '../../Data'

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
    </section>
  )
}
