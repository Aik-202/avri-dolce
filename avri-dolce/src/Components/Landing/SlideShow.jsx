import React from 'react'
import { cart, heartBlack, heartRed } from '../../Data'

export default function SlideShow(props) {
  const [two, setTwo] = React.useState()
  const [tip, setTip] = React.useState(false)

  return (
    <section className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 w-[90%] md:w-auto'>
        {props.data ? props.data.map((src => <div className='flex flex-col cursor-pointer' key={src.id}>
          <figure className={`self-center md:self-start flex flex-col rounded-md px-5 py-2 mb-3
          bg-brown w-[14rem] h-[16rem] items-center
          ${src.id % 2 === 0 ? 'mt-10' : 'mt-0'}`}>
              <img src={ heartBlack} alt="heart" className='w-[35px] h-[35px] self-end 
              cursor-pointer bg-white rounded-full p-2' id={src.tag} onClick={(e) => { e.target.src.includes('heart-black.png') ? e.target.src = heartRed 
              : e.target.src = heartBlack } } />
              <div className='flex items-center h-[90%]'>
                <img key={src.tag} src={src.img} alt={src.tag} className='self-center h-[inherit]'/>
              </div>
          </figure>
          <div className='relative flex flex-row justify-between'>
            <div>
              <p className='text-red w-max font-p-font text-sm font-bold
              self-start'>{src.tag}</p>
              <p className='w-max font-p-font text-sm font-bold 
              self-start'>{src.price}</p>
            </div>
            {tip && two == src.tag ? <p className='text-red w-max font-p-font text-sm font-bold
            self-start absolute right-0 md:-right-8 -top-10 bg-gray p-2 rounded-lg'>Add to Cart</p> : null}
            <img src={cart} alt="cart" className='p-2 w-[38px] h-[38px] border-solid border-[1px] 
            border-red rounded-full cursor-pointer hover:bg-brown hover:border-transparent'
            id={src.tag} onMouseOver={(e) => {setTwo(e.target.id); setTip(true)}} 
            onMouseLeave={() => setTip(false)} />
          </div>
          </div>)) : null}
    </section>
  )
}
