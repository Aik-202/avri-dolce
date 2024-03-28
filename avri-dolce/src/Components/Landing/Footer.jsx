import React from 'react'
import { foot } from '../../Data'
import { footer } from '../../Data/demo'

export default function Footer() {
  return (
    <footer style={{backgroundImage: `url(${foot})`}} className='relative bg-cover w-screen flex 
    flex-col py-5 space-y-5'>
      <div className='absolute top-0 w-full h-full bg-brown opacity-70 z-0'></div>
      <div className='self-center flex flex-col z-10'>
        <h2 className='font-h-font text-3xl tracking-wide leading-[3.2rem] uppercase
        text-red text-center font-bold my-3'>Help us stay relevant to you</h2>
        <p className='font-p-font w-[38rem] font-bold text-base text-black'>By writing reviews about our 
        services, search engines recommend our products to others, you help us stay relevant to you.</p>
        <button className='rounded-full text-white bg-red px-5 py-2 self-center font-semibold 
        hover:bg-transparent border-transparent border-solid border-[1px] hover:border-red 
        hover:text-black mt-8 hover:font-bold'>
        Send Review</button>
      </div>
      <div className='flex flex-row justify-between mx-12 bg-white rounded-md p-5 z-10'>
        {footer.map((item) => <div key={item.head} className='flex flex-col space-y-3 font-b-font'> 
          <p className='font-bold'>{item.head}</p>
          <ul className='flex flex-col space-y-2'>
            {item.list.map((li => <li key={li} className='cursor-pointer text-red hover:font-semibold
            hover:text-black'>{li}</li>))}
          </ul>
        </div>)}
      </div>
    </footer>
  )
}
