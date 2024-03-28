import React from 'react'
import { products } from '../../Data/demo'
import { heartBlack, heartRed } from '../../Data'

export default function SlideShow() {
  const [like, setLike] = React.useState(false)

  return (
    <section className='grid grid-cols-4 gap-10'>
        {products.map((src => <div className='flex flex-col'>
          <figure className={`flex flex-col rounded-md px-5 py-2 mb-3
          bg-[#BCAAA4] w-[14rem] h-[16rem] items-center
          ${src.id % 2 === 0 ? 'mt-10' : 'mt-0'}`}>
              <img src={like ? heartRed : heartBlack} alt="heart" className='w-[35px] self-end 
              cursor-pointer bg-white rounded-full p-2' onClick={(e) => setLike(prev => !prev)} />
              <div className='flex items-center h-[90%]'>
                <img key={src.tag} src={src.img} alt={src.tag} className='self-center h-[inherit]'/>
              </div>
          </figure>
          <p className='text-red w-max font-p-font text-sm font-semibold
          self-start'>{src.tag}</p>
          <p className='w-max font-p-font text-sm font-semibold 
          self-start'>{src.price}</p>
          </div>))}
    </section>
  )
}
