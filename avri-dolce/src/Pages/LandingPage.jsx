import React from 'react'
import { Ceo, ChangeLanguage, FAQ, Footer, Hero, Info, KnowUs, NavBar, Offer, Testimonials } from '../Components'

export default function LandingPage() {
  return (
    <section className='flex flex-col space-y-10'>
      <NavBar home={true}/>
      <p className='w-[90%] md:w-[80%] text-center text-base font-bold text-[#F44336] tracking-wide pl-5 pb-5'>! You cannot make in-app 
      purchase, feature hasn't been provided, all transactions will be redirected to 
      whatsapp for now.</p>
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
