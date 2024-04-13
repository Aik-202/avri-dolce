import React from 'react'
import { About, Footer, NavBar, Ceo, KnowUs, Testimonials } from '../Components'

export default function AboutPage() {
  return (
    <section className='flex flex-col space-y-10'>
      <NavBar about={true}/>
      <p className='w-[90%] md:w-[80%] text-center text-base font-bold text-[#F44336] tracking-wide pl-5 pb-5'>! You cannot make in-app 
      purchase, feature hasn't been provided, all transactions will be redirected to 
      whatsapp for now.</p>
      <About />
      <KnowUs />
      <Ceo />
      <Testimonials />
      <Footer />
    </section>
  )
}
