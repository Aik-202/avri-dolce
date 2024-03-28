import React from 'react'
import { homeNav } from '../../Data/demo.js'

export default function NavItems() {
  return (
    <ul className='flex flex-row space-x-5 lg:space-x-10'>
      {homeNav.map((list) => <li key={list} className='font-p-font text-red hover:text-black 
      hover:font-bold font-semibold cursor-pointer'>{list}</li>)}
    </ul>
  )
}
