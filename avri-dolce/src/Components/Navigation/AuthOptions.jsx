import React from 'react'
import { img, imgActive, vid, vidActive } from '../../Data'

export default function AuthOptions(props) {
  return (
    <nav className='flex flex-row space-x-10 font-p-font font-semibold tracking-wider'>  
        <a className={`border-solid border-transparent border-[2px] cursor-pointer 
         hover:border-b-red flex flex-row space-x-2 items-center text-lg
        ${props.options && !props.offer ? 'text-black' 
        : props.options && props.offer ? 'text-red border-b-red' 
        :!props.options && props.offer ? 'text-black' 
        : 'text-brown'}`} 
        onClick={() => props.setOption(prev => !prev)}>
            {!props.offer ? <>
              <img src={props.options ? imgActive : img} alt="image-icon" className='w-[25px]' />
              <span>Images</span>
            </> : <span className='font-bold'>For Men</span> }
        </a>
        <a className={`border-solid border-transparent border-[2px] cursor-pointer 
        text-lg hover:border-b-red flex flex-row space-x-2 items-center
        ${props.options && !props.offer  ? 'text-brown' 
        : !props.options && props.offer ? 'text-red border-b-red'
        : props.options && props.offer ? 'text-black'
        : 'text-black'}`} 
        onClick={() => props.setOption(prev => !prev)}>
            {!props.offer ? <>
              <img src={props.options ? vid : vidActive} alt="video-icon" className='w-[25px]' />
              <span>Videos</span>
            </>: 'For Women'}
        </a>
    </nav>
  )
}
