import React from 'react'
import { about, about2 } from '../../Data'

export default function About() {
  return (
    <section className='flex flex-col-reverse lg:flex-row justify-between w-screen pl-5 h-max'>
      <div className='flex flex-col space-y-5'>
        <h1 className='font-h-font text-3xl md:text-[2.2rem] md:leading-[3.4rem] xl:text-[3rem] w-[20rem] tracking-wide z-10'>
            <span>THE CLOTHING BRAND OF</span> <i className='text-red font-bold'>the future</i></h1>
        <p className='font-p-font w-[21rem] xl:w-[24rem] text-sm'><i className='text-dark-green font-bold'>Avri 
        Dolce</i> is a distinguished clothing brand headed by Fashion Designer; 
        <i className='text-dark-green font-bold'> Mr. Frank Omozuwa</i> set to revolutionize 
        the future, no better time than now beacuse <i className='text-red font-bold'>the future is 
        right now!</i></p>
        <button className='hover:rounded-full text-white bg-dark-green px-3 py-2'>
        Learn more</button>
      </div>
      <figure className='flex flex-row w-[68%]'>
        <img src={about} alt="product one" className='w-[50%] mt-5' />
        <img src={about2} alt="product one" className='w-[50%] mt-20' />
      </figure>
    </section>
  )
}
