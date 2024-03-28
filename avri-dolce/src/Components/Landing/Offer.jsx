import React from 'react'
import SlideShow from './SlideShow'

export default function Offer() {
  return (
    <section className='flex flex-col justify-center items-center space-y-10'>
      <h2 className='font-h-font text-3xl font-bold text-red tracking-wide'>OUR OFFERS</h2>
      <p className='w-[90%] md:w-[80%] font-p-font text-base font-semibold'>We have products ranging from T-shirts, trousers, hoodies, 
      caps, knickers, gym attire, and African-inspired dresses.Some of our recent works are shown below, 
      click on any to see more about the or click on the cart to add to your cart.  </p>
      <SlideShow />
    </section>
  )
}
