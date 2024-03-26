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
      <div className='flex flex-row space-x-8'>
        <ChangeLanguage />
        <button>Sign Up</button>
        <button>Sign In</button>
      </div>
    </nav>
  )
}
