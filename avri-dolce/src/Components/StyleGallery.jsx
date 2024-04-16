import React from 'react'
import { gallery } from '../Data/demo'

export default function StyleGallery() {
  return (
    <section className='flex flex-col justify-center items-center space-y-10' id='offer'>
      <h2 className='font-h-font text-3xl font-bold text-red tracking-wide'>AVRI DOLCE'S GALLERY</h2>
      <p className='w-[90%] md:w-[80%] font-p-font text-base font-semibold'>Step into the 
      Avri Dolce gallery, where elegance meets community. Explore our CEO and customers adorned 
      in Avri Dolce's finest, embodying style and unity in every stitch. </p>
      <section className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 w-[90%] 
      md:w-[80%'>
        {gallery.map((src) => <figure className={`bg-red bg-opacity-10 max-w-max rounded-md 
        h-max ${(gallery.indexOf(src) + 1) % 2 === 0 ? 'mt-10' : 'mt-0'}`}>
            <img src={src} alt="image" className={`max-w-[70%] mx-auto py-5`} />
            <p className='font-h-font text-center text-red font-medium'>
            {gallery.indexOf(src) + 1}</p>
        </figure>)}
      </section>
    </section>
  )
}
