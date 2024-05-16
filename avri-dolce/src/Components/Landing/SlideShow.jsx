import React from 'react'
import { cart, heartBlack, heartRed } from '../../Data'
import { useNavigate } from 'react-router-dom'

export default function SlideShow(props) {
  const [two, setTwo] = React.useState()
  const [tip, setTip] = React.useState(false)

  const navigate = useNavigate()

  const numGroups = props.offer ? Math.ceil(props.data.length / props.num) : null;
  

  const group = props.offer ? props.data.slice(props.view, props.view + props.num) : null

  React.useEffect (() => {
    if(props.count === numGroups) {
      props.setView(0)
      props.setCount(0) 
    }
  }, [props.count])

  return (
    <section className={`grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 w-[90%] md:w-auto
    ${props.offer ? 'xl:w-[80%]' : 'xl:w-[100%]'}`}>
        {props.data && props.offer ? group.map((src => <div className={`flex flex-col cursor-pointer sticky z-10`} key={src.id}>
          <figure className={`self-center md:self-start flex flex-col rounded-md px-5 py-2 mb-3
          bg-brown w-[14rem] h-[16rem] items-center
          ${src.id % 2 === 0 ? 'mt-10' : 'mt-0'}`}>
              <img src={ heartBlack} alt="heart" className='w-[35px] h-[35px] self-end 
              cursor-pointer bg-white rounded-full p-2' id={src.tag} onClick={(e) => { e.target.src.includes('heart-black.png') ? e.target.src = heartRed 
              : e.target.src = heartBlack } } />
              <div className='flex items-center h-[90%]'>
                <img key={src.tag} src={src.img} alt={src.tag} className='self-center h-[inherit]'
                 onClick={() => navigate(`/view-product/${src.tag}`, 
                 {state : {data: src, gender: props.gender} }) }/>
              </div>
          </figure>
          <div className='relative flex flex-row justify-between'>
            <div>
              <p className='text-red w-[10rem] truncate font-p-font text-sm font-bold
              self-start'>{src.tag}</p>
              <p className='w-max font-p-font text-sm font-bold 
              self-start'>€{src.price}</p>
            </div>
            {tip && two == src.tag ? <p className='text-red w-max font-p-font text-sm font-bold
            self-start absolute right-0 md:-right-8 -top-10 bg-gray p-2 rounded-lg'>Add to Cart</p> : null}
            <img src={cart} alt="cart" className='p-2 w-[38px] h-[38px] border-solid border-[1px] 
            border-red rounded-full cursor-pointer hover:bg-brown hover:border-transparent'
            id={src.tag} onMouseOver={(e) => {setTwo(e.target.id); setTip(true)}} 
            onMouseLeave={() => setTip(false)} 
            onClick={() => navigate(`/view-product/${src.tag}`, 
            {state : {data: src, gender: props.gender} }) }/>
          </div>
          </div>)) : null}
          {props.data && !props.offer ? props.data.map((src => <div className={`flex flex-col cursor-pointer`} key={src.id}>
          <figure className={`self-center md:self-start flex flex-col rounded-md px-5 py-2 mb-3
          bg-brown w-[14rem] h-[16rem] items-center
          ${src.id % 2 === 0 ? 'mt-10' : 'mt-0'}`}>
              <img src={ heartBlack} alt="heart" className='w-[35px] h-[35px] self-end 
              cursor-pointer bg-white rounded-full p-2' id={src.tag} onClick={(e) => { e.target.src.includes('heart-black.png') ? e.target.src = heartRed 
              : e.target.src = heartBlack } } />
              <div className='flex items-center h-[90%]'>
                <img key={src.tag} src={src.img} alt={src.tag} className='self-center h-[inherit]'
                 onClick={() => navigate(`/view-product/${src.tag}`, 
                 {state : {data: src, gender: props.gender} }) }/>
              </div>
          </figure>
          <div className='relative flex flex-row justify-between'>
            <div>
              <p className='text-red w-[10rem] truncate font-p-font text-sm font-bold
              self-start'>{src.tag}</p>
              <p className='w-max font-p-font text-sm font-bold 
              self-start'>€{src.price}</p>
            </div>
            {tip && two == src.tag ? <p className='text-red w-max font-p-font text-sm font-bold
            self-start absolute right-0 md:-right-8 -top-10 bg-gray p-2 rounded-lg'>Add to Cart</p> : null}
            <img src={cart} alt="cart" className='p-2 w-[38px] h-[38px] border-solid border-[1px] 
            border-red rounded-full cursor-pointer hover:bg-brown hover:border-transparent'
            id={src.tag} onMouseOver={(e) => {setTwo(e.target.id); setTip(true)}} 
            onMouseLeave={() => setTip(false)} 
            onClick={() => navigate(`/view-product/${src.tag}`, 
            {state : {data: src, gender: props.gender} }) }/>
          </div>
          </div>)) : null}
    </section>
  )
}
