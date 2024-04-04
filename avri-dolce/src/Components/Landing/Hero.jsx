import React from 'react'
import { men, women } from '../../Data'

export default function Hero() {

  return (
    <section className='flex flex-col-reverse space-y-reverse space-y-8 lg:space-y-0 lg:flex-row justify-between w-screen pl-5 h-max'>
      <div className='flex flex-col space-y-5'>
        <h1 className='font-h-font text-3xl md:text-[4.2rem] md:leading-[3.4rem] xl:text-[4.6rem] w-[10rem] tracking-wide xl:leading-[4.2rem] z-10'>
          <i className='text-red font-bold'>elevate</i> <span>YOUR WARDROBE</span></h1>
        <p className='font-p-font w-[21rem] xl:w-[24rem] text-sm'>Have you been looking foward to a change of wardrobe and dont know what brand to go for? 
        The search is over!! <i className='text-dark-green font-bold'>Avri Dolce</i> is the way to go, offering you all kinds of clothings 
        at affordable prices!</p>
        <div className='flex flex-row space-x-3 font-b-font font-medium text-sm'>
          <button className='hover:rounded-full text-white bg-dark-green px-3 py-2'>
          Become an AD customer</button>
          <button className='rounded-full border-solid border-[1px] border-dark-green px-3 py-2
          border-transparent font-semibold text-red hover:text-black hover:font-bold'><a href="#offer">See our 
          products</a></button>
      </div>
      </div>
      <figure className='flex flex-row w-full lg:grid lg:grid-cols-2'>
        <img src={women} alt="product one" className='max-w-[50%] max-h-[50%] lg:max-h-full lg:max-w-[100%] lg:w-full lg:h-[90%] lg:col-span-1' />
        <img src={men} alt="product one" className='max-w-[50%] max-h-[50%] lg:max-h-full lg:max-w-[100%] lg:col-span-1 lg:w-full lg:h-full' />
      </figure>
    </section>
  )
}
