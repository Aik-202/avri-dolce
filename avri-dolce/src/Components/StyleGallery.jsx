import React from 'react'
import { gallery } from '../Data/demo'
import { useNavigate } from 'react-router-dom';

export default function StyleGallery() {
  const navigate =  useNavigate()

  React.useEffect(() => {
    const element = document.getElementById('gallery');
    setInterval(() => {
      if(element.scrollWidth - element.scrollLeft !== element.offsetWidth) {
        element.scrollTo(element.scrollLeft + 1, 0)
      }  
    }, 15)
   setTimeout(() => {
    setInterval(() => {
      if(element.scrollWidth - element.scrollLeft === element.offsetWidth) {
        element.scrollTo(0, element.scrollLeft)
      } 
    }, 15)
   }, 500)
  }, [])
  return (
    <section className='flex flex-col justify-center items-center space-y-10' id='offer'>
      <h2 className='font-h-font text-3xl font-bold text-red tracking-wide text-center 
      md:text-start'>AVRI DOLCE'S GALLERY</h2>
      <p className='w-[90%] md:w-[80%] font-p-font text-base font-semibold'>Step into the 
      Avri Dolce gallery, where elegance meets community. Explore our CEO and customers adorned 
      in Avri Dolce's finest, embodying style and unity in every stitch. </p>
      <section className='w-screen h-[30rem] overflow-hidden' id='gallery'>
        <section className='flex flex-row space-x-3 w-max h-[inherit] ml-5 md:ml-10'>
          {gallery.map((src) => <figure className={`bg-red bg-opacity-10 w-[20rem] rounded-md 
          h-max px-10 cursor-pointer ${(gallery.indexOf(src) + 1) % 2 === 0 ? 'mt-20' : 'mt-10'}`} 
          key={src} onClick={() => navigate('/gallery') }>
              <img src={src} alt="image" className={`w-full mx-auto py-5 -mt-10`} />
              <p className='font-h-font text-center text-red font-semibold'>
              {gallery.indexOf(src) + 1}</p>
          </figure>)}
        </section>
      </section>
    </section>
  )
}
