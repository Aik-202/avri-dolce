import React from 'react'

export default function AuthOptions(props) {
  return (
    <nav className='flex flex-row space-x-10 font-b-font font-medium tracking-wider'>  
        <a className={`border-solid border-transparent border-[2px] cursor-pointer 
        text-base hover:border-b-red
        ${props.options ? 'border-b-red' 
        : 'text-brown'}`} 
        onClick={() => props.setOption(prev => !prev)}>Images</a>
        <a className={`border-solid border-transparent border-[2px] cursor-pointer 
        text-base hover:border-b-red
        ${props.options ? 'text-brown' 
        : 'border-b-red'}`} 
        onClick={() => props.setOption(prev => !prev)}>Videos</a>
    </nav>
  )
}
