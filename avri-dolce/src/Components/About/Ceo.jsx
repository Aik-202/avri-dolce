import React from 'react'
import { ceo } from '../../Data'

export default function Ceo() {
  return (
    <section className='flex flex-col justify-center items-center space-y-10'>
      <h2 className='font-h-font text-3xl font-bold text-red tracking-wide'>MEET THE CEO</h2>
      <div className='flex flex-row pl-5'>
        <p className='self-center w-[90%] md:w-[80%] font-p-font text-base font-semibold'>
        <i className='text-dark-green font-bold'>Avri Dolce</i>, led by the 
        visionary <i className='text-dark-green font-bold'>Mr. Frank Omozuma</i>, embodies the essence of 
        fashion as a medium for soulful expression. Frank's journey originates from 
        <i className='text-dark-green font-bold'> Edo State, Nigeria</i>, but he currently resides in 
        <i className='text-red font-bold'> Pescara, Italy</i>, where he honed his craft under the esteemed 
        guidance of <i className='text-red font-bold'> Planeta Modal Fashion Academy</i>. Now poised on the cusp 
        of greatness, he stands ready to unveil his boundless creativity to the world, igniting inspiration 
        and leaving an indelible mark on the realm of fashion. </p>
        <figure>
          <div className='w-[70%] h-[80%] rounded-md]'>
            <img src={ceo} alt="frank" className='h-full w-full rounded-md' />
          </div>
          <div className='flex flex-col'>
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
          </div>
        </figure>
      </div>
    </section>
  )
}
