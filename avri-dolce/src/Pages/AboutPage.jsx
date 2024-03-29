import React from 'react'
import { About, Footer, NavBar } from '../Components'

export default function AboutPage() {
  return (
    <section className='flex flex-col space-y-10'>
      <NavBar about={true}/>
      <About />
      <Footer />
    </section>
  )
}
