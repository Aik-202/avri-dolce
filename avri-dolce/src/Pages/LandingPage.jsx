import React from 'react'
import { Ceo, ChangeLanguage, FAQ, Footer, Hero, Info, KnowUs, NavBar, Offer, Testimonials } from '../Components'

export default function LandingPage() {
  return (
    <section className='flex flex-col space-y-10'>
      <NavBar home={true}/>
      <Hero />
      <Ceo />
      <Offer />
      <Info />
      <KnowUs />
      <Testimonials />
      <FAQ />
      <Footer/>
    </section>
  )
}
