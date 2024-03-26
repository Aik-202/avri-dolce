import React from 'react'
import { logo } from '../Data'
import { useNavigate } from 'react-router-dom'

export default function ADLogo() {
    const navigate =  useNavigate()

  return (
    <img src={logo} alt="Avri Dolce" onClick={() => {navigate('/')}} className='w-[130px] 
    self-center'/>
  )
}
