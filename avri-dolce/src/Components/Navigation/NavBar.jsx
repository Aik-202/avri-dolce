import React from 'react'
import ADLogo from '../ADLogo'
import NavItems from './NavItems'
import ChangeLanguage from './ChangeLanguage'
import { close, open } from '../../Data'

export default function NavBar() {
  const [active, setActive] = React.useState(false)
  return (
    <nav className='relative flex flex-col space-y-8 md:space-y-0 md:flex-row justify-between 
    w-screen px-3 lg:px-5 lg:pr-10 py-5 items-center '>
      <div className='flex flex-row justify-between w-full md:w-auto md:justify-start md:space-x-3 lg:space-x-8'>
        <ADLogo />
        <img src={!active ? open : close} alt="menu" className='md:hidden w-[40px]' 
        onClick={() => setActive(prev => !prev) }/>
        <NavItems active={active}/>
      </div>
      <div className='flex flex-row justify-between w-full md:w-auto md:justify-start md:space-x-8 
      font-b-font font-medium'>
        <ChangeLanguage />
        <button className='rounded-sm border-solid border-[1px] border-dark-green px-3 
        hover:rounded-full'>Sign Up</button>
        <button className='rounded-sm text-white bg-dark-green px-3 hover:rounded-full'>
        Sign In</button>
      </div>
    </nav>
  )
}
