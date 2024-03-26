import React from 'react'
import { flag } from '../../Data'

export default function ChangeLanguage() {
  return (
    <button className='flex flex-row space-x-3 px-2 py-1 rounded-full border-solid 
    border-[1px] border-dark-green border-transparent'>
        <img src={flag} alt="flag" />
        <span>English</span>
    </button>
  )
}
