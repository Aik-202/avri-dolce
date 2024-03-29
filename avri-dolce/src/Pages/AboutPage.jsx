import React from 'react'
import { About, Footer, NavBar } from '../Components'
import Ceo from '../Components/About/Ceo'

export default function AboutPage() {
  return (
    <section className='flex flex-col space-y-10'>
      <NavBar about={true}/>
      <About />
      <Ceo />
      <Footer />
    </section>
  )
}
