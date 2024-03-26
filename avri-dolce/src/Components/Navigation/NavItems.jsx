import React from 'react'
import { homeNav } from '../../Data/demo'

export default function NavItems() {
  return (
    <ul className='flex flex-row space-x-10'>
      {homeNav.map((list) => <li key={list}>{list}</li>)}
    </ul>
  )
}
