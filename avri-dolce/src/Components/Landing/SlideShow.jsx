import React from 'react'
import { products } from '../../Data/demo'

export default function SlideShow() {
  return (
    <section className='grid grid-cols-4 gap-10'>
        {products.map((src => <figure className='grid grid-cols-1 grid-rows-2 rounded-md px-5 py-2 
        bg-[#FFEBEE] w-[12rem] h-[16rem] items-center'>
            <img key={src.tag} src={src.img} alt={src.tag} className='row-span-2 self-center'/>
            <p className='bg-white text-red w-max font-p-font text-sm font-semibold px-2 py-1 
            sself-start'>{src.tag}</p>
        </figure>))}
    </section>
  )
}
