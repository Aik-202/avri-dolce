import React from 'react'
import { Ceo, FAQ, Footer, Hero, Info, KnowUs, NavBar, Offer, StyleGallery, Testimonials } from '../Components'

export default function LandingPage() {
  return (
    <section className='flex flex-col space-y-10'>
      <NavBar home={true}/>
      <Hero />
      <Ceo />
      <Offer />
      <StyleGallery />
      <Info />
      <KnowUs />
      <Testimonials />
      <FAQ />
      <Footer/>
    </section>
  )
}
