import React from 'react'
import { Ceo, FAQ, Footer, Hero, Info, KnowUs, NavBar, Offer, StyleGallery, Testimonials } from '../Components'

export default function LandingPage() {
  return (
    <section className='flex flex-col space-y-10'>
      <div>
      <NavBar home={true}/>
      <Hero />
      <Info />
      </div>
      <Offer />
      <StyleGallery />
      <Ceo />
      <KnowUs />
      <Testimonials />
      <FAQ />
      <Footer/>
    </section>
  )
}
