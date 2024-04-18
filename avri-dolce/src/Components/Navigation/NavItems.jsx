import React from 'react'
import { homeNav } from '../../Data/demo.js'
import { useNavigate } from 'react-router-dom'

export default function NavItems(props) {
  const navigate =  useNavigate()

  return (
    <ul className={`absolute left-0 top-16 w-full md:w-auto z-20 md:z-0 bg-gray md:bg-transparent 
    md:static flex-col justify-between items-center md:items-start h-[260px] md:h-auto py-5 md:py-0 
    md:justify-start md:flex-row md:space-x-5 lg:space-x-10 ${props.active ? 'flex' : 'hidden md:flex'}`}>
      {homeNav.map((list) => <li key={list} className={`font-p-font hover:text-black 
      hover:font-bold cursor-pointer border-transparent border-solid border-[2px]
      ${props.home && list == 'Home' || props.about && list == 'About' || props.product && list == 'Products' || props.contact && list == 'Contact' || props.gallery && list == 'Gallery'  ? 'text-black font-bold border-b-dark-green'
      : 'text-red font-semibold border-b-transparent'}
      `} onClick={() => list == 'Home' ? navigate('/') 
      : list == 'About' ? navigate('/about') 
      : list == 'Products' ? navigate('/product')
      : list == 'Gallery' ? navigate('/gallery') 
      : navigate('/contact') }>{list}</li>)}
    </ul>
  )
}
