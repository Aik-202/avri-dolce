import React from 'react'
import { about, about2 } from '../../Data'

export default function About() {
  return (
    <section className='flex flex-col-reverse lg:flex-row justify-between w-screen pl-5 h-max'>
      <div className='flex flex-col space-y-5'>
        <h1 className='font-h-font text-4xl w-[10rem] tracking-wide z-10'>
            <span>THE CLOTHING BRAND OF</span> <i className='text-red font-bold'>the future</i></h1>
        <p className='font-p-font w-[21rem] xl:w-[24rem] text-sm'>Have you been looking foward to a change of wardrobe and dont know what brand to go for? 
        The search is over!! <i className='text-dark-green font-bold'>Avri Dolce</i> is the way to go, offering you all kinds of clothings 
        at affordable prices!</p>
        <button className='hover:rounded-full text-white bg-dark-green px-3 py-2'>
        Learn more</button>
      </div>
      <figure className='flex flex-col justify-end items-end'>
        <img src={about2} alt="product one" className='w-[50%]' />
        <img src={about} alt="product one" className='w-[60%]' />
      </figure>
    </section>
  )
}
