import React from 'react'
import ADLogo from '../ADLogo'
import NavItems from './NavItems'
import ChangeLanguage from './ChangeLanguage'

export default function NavBar() {
  return (
    <nav className='flex flex-row justify-between w-screen px-5 pr-10 py-5 items-center '>
      <div className='flex flex-row space-x-8'>
        <ADLogo />
        <NavItems />
      </div>
      <div className='flex flex-row space-x-8 font-b-font font-medium'>
        <ChangeLanguage />
        <button className='rounded-sm border-solid border-[1px] border-dark-green px-3
        border-transparent'>Sign Up</button>
        <button className='rounded-sm text-white bg-dark-green px-3'>Sign In</button>
      </div>
    </nav>
  )
}
