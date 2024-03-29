import React from 'react'
import { about, about2, logo2 } from '../../Data'

export default function About() {
  return (
    <section className='flex flex-col-reverse space-y-reverse space-y-5 md:space-y-0 lg:flex-row space-x-5 
    w-screen pl-5'>
      <div className='self-center items-center lg:items-start lg:self-auto flex flex-col space-y-5'>
        <h1 className='font-h-font text-3xl md:text-[2.2rem] md:leading-[3.4rem] 
        xl:text-[3rem] lg:w-[20rem] tracking-wide z-10'>
          <span>THE CLOTHING BRAND OF</span> <i className='text-red font-bold'>the future</i></h1>
        <p className='font-p-font w-[90%] lg:w-[21rem] xl:w-[24rem] text-sm'>
        <i className='text-dark-green font-bold'>Avri 
        Dolce</i> is a distinguished clothing brand headed by Fashion Designer; 
        <i className='text-dark-green font-bold'> Mr. Frank Omozuwa</i> set to revolutionize 
        the future, no better time than now. As a matter of fact, they say, <i className='text-red font-bold'>
        the future starts right now!</i></p>
        <button className='self-center lg:self-auto hover:rounded-full text-white bg-dark-green px-3 py-2'>
        Learn more</button>
      </div>
      <figure className='relative grid grid-cols-2 grid-rows-1'>
        <img src={about} alt="product one" className='col-span-1 w-full h-[90%] lg:h-auto' />
        <img src={about2} alt="product one" className='col-span-1 h-full' />
        <div className='absolute flex bg-dark-green top-0 w-full h-full opacity-20'></div>
        <div className='absolute top-0 w-full h-full z-10 flex justify-center items-center'>
          <img src={logo2} alt="ad"  className='w-[60px] xl:w-[100px]'/>
        </div>
      </figure>
    </section>
  )
}
