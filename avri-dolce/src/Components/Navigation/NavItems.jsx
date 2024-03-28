import React from 'react'
import { homeNav } from '../../Data/demo.js'

export default function NavItems(props) {
  return (
    <ul className={`absolute left-0 top-16 w-full md:w-auto z-20 md:z-0 bg-brown md:bg-transparent 
    md:static flex-col justify-between items-center md:items-start h-[260px] md:h-auto py-5 md:py-0 
    md:justify-start md:flex-row md:space-x-5 lg:space-x-10 ${props.active ? 'flex' : 'hidden md:flex'}`}>
      {homeNav.map((list) => <li key={list} className='font-p-font text-red hover:text-black 
      hover:font-bold font-semibold cursor-pointer'>{list}</li>)}
    </ul>
  )
}
