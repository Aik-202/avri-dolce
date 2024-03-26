import React from 'react'

export default function Hero() {
  return (
    <section className='flex flex-row w-screen pl-5'>
      <div className='flex flex-col space-y-5'>
        <h1 className='font-h-font text-[4rem] w-[10rem] tracking-wide leading-[4rem]'>
          <i className='text-red font-bold'>elevate</i> <span>YOUR WARDROBE</span></h1>
        <p className='font-p-font w-[25rem] text-sm'>Have you been looking foward to a change of wardrobe and dont know what brand to go for? 
        The search is over!! <i className='text-red'>Avri Dolce</i> is thw way to go with, offering you all kinds of clothings 
        at affordable prices!</p>
        <div className='flex flex-row space-x-3 font-b-font font-medium text-sm'>
          <button className='rounded-full text-white bg-dark-green px-3 py-2'>
          Become an AD customer</button>
          <button className='rounded-full border-solid border-[1px] border-dark-green px-3 py-2
          border-transparent'>See our products</button>
      </div>
      </div>
      <figure></figure>
    </section>
  )
}
