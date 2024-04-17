import React from 'react'
import { collection } from '../../Data/demo'
import { useNavigate } from 'react-router-dom'

export default function Info() {
  const navigate = useNavigate()

  return (
    <section className='flex flex-col justify-center items-center space-y-10 mt-10'>
      <section className='grid grid-cols-1 md:grid-cols-4 gap-10 w-[90%] md:w-[71%] cursor-pointer'>
        {collection.map((item => <div className='relative bg-brown w-full h-max flex justify-center 
        items-center rounded-md' key={item.id} onClick={() => navigate('/product', {state: item.tag}) }>
          <img src={item.img} alt={item.tag} className='max-w-[80%] self-center' />
          <div className='absolute flex bg-black top-0 w-full h-full
          opacity-50 rounded-md'></div>
          <div className='absolute top-0 w-full h-full z-10 flex justify-center items-center'>
            <p className='text-white font-p-font text-xl font-bold'>{item.tag}</p>
          </div>
        </div>))}
      </section>
    </section>
  )
}
