import React from 'react'
import { homeNav } from '../../Data/demo.js'

export default function NavItems() {
  return (
    <ul className='flex flex-row space-x-10'>
      {homeNav.map((list) => <li key={list} className='font-p-font text-red font-medium'>{list}</li>)}
    </ul>
  )
}
