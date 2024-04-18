import React from 'react'
import { NavBar } from '../Components'
import { gallery } from '../Data/demo'

export default function Gallery() {
  return (
    <section className='flex flex-col space-y-10'>
        <NavBar gallery={true}/>
        <section className='flex flex-col space-y-10 justify-center items-center'>
        <h2 className='font-h-font text-xl md:text-3xl font-bold text-red tracking-wide text-center 
        md:w-[60%]'>
            Step into the AVRI DOLCE gallery, where elegance meets community. Explore our CEO 
            and customers adorned in AVRI DOLCE'S finest, embodying style and unity in every 
            stitch.
        </h2>
        <figure className='w-[90%] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 
        xl:grid-cols-6 gap-3 cursor-pointer'>
            {gallery.map((src) => <img src={src} key={src}/>)}
        </figure>
        <p className='pb-10 font-p-font text-base font-semibold text-red px-5 
        md:px-0 text-center'>You've reached 
        the end of the gallery, thank you for stopping by.</p>
        </section>
    </section>
  )
}
