import React from 'react'
import { NavBar } from '../Components'

export default function ProductsPage() {
  return (
    <section className='flex flex-col space-y-10'>
      <NavBar product={true}/>
    </section>
  )
}
