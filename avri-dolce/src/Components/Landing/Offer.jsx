import React from 'react'
import SlideShow from './SlideShow'
import { products } from '../../Data/demo.js'
import { g18, left, right } from '../../Data/index.jsx'

export default function Offer() {
  const [view, setView] = React.useState(0);
  const [count, setCount] = React.useState(0);
  const [width, setWidth] = React.useState(screen.width)
  const [num, setNum] = React.useState(1);

  React.useEffect(() => {
    window.addEventListener('resize', () => {
    setWidth(screen.width)})
  }, [])

  React.useEffect(() => {
    width <= 375 ? setNum(1) 
    : width >= 768 && !(width >= 1024)   ? setNum(2) 
    : width >= 1024 && !(width >= 1280) ? setNum(3) 
    : width >= 1280 ? setNum(4) : null
  }, [width])

  return (
    <section style={{backgroundImage: `url(${g18})`}} className='relative w-screen h-[41rem]
    bg-cover' id='offer'>
      <div className='absolute top-0 w-full h-full bg-white opacity-75 z-0'></div>
      <div className='absolute top-0 w-full h-full flex flex-col justify-center items-center 
      space-y-10 z-10'>
        <h2 className='font-h-font text-3xl font-bold text-red tracking-wide'>NEW OFFERS</h2>
        <p className='w-[90%] md:w-[80%] font-p-font text-base font-semibold'>We have products ranging 
        from T-shirts, trousers, hoodies, 
        caps, knickers, gym attire, and African-inspired dresses.Some of our recent works are shown below, 
        click on any to see more about the or click on the cart to add to your cart.  </p>
        <div className='absolute top-0 w-[95%] h-full flex flex-row justify-between items-center 
      space-y-10  cursor-pointer'>
        <img src={left} alt="left" className='w-[50px]' onClick={ () => {setView(view => view == 0 ? view : view - num); setCount(count => count +-1)}}/>
        <img src={right} alt="right" className='w-[50px]' onClick={ () => {setView(view => view + num); setCount(count => count + 1)}}/>
      </div>
        <SlideShow data={products} gender={'Men'} num={num} count={count} setCount={setCount} view={view} setView={setView} offer={true} />
      </div>
    </section>
  )
}
