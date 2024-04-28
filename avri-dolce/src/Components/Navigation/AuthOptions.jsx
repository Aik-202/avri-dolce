import React from 'react'
import { img, imgActive, vid, vidActive } from '../../Data'

export default function AuthOptions(props) {
  return (
    <nav className='flex flex-row space-x-10 font-p-font font-semibold tracking-wider'>  
        <a className={`border-solid border-transparent border-[2px] cursor-pointer 
         hover:border-b-red flex flex-row space-x-2 items-center text-lg
        ${props.options ? 'text-black' 
        : 'text-brown'}`} 
        onClick={() => props.setOption(prev => !prev)}>
            <img src={props.options ? imgActive : img} alt="image-icon" className='w-[25px]' />
            <span>Images</span>
        </a>
        <a className={`border-solid border-transparent border-[2px] cursor-pointer 
        text-lg hover:border-b-red flex flex-row space-x-2 items-center
        ${props.options ? 'text-brown' 
        : 'text-black'}`} 
        onClick={() => props.setOption(prev => !prev)}>
            <img src={props.options ? vid : vidActive} alt="video-icon" className='w-[25px]' />
            <span>Videos</span>
        </a>
    </nav>
  )
}
