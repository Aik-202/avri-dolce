import React from 'react'
import { FAQ, Footer, Hero, Info, NavBar, Offer } from '../Components'

export default function LandingPage() {
  return (
    <section className='flex flex-col space-y-10'>
      <NavBar home={true}/>
      <Hero />
      <Offer />
      <Info />
      <FAQ />
      <Footer/>
    </section>
  )
}
