import React from 'react'
import { NavBar } from '../Components'
import { useLocation } from 'react-router-dom'
import { minus, plus, whatWhite } from '../Data';

export default function ViewProduct() {
  const [count, setCount] = React.useState(1)

  const location = useLocation();

  const data = location.state

  return (
    <section className='flex flex-col w-screen'>
      <NavBar product={true} />
      <p className='w-[90%] md:w-[80%] text-center text-base font-bold text-[#F44336] tracking-wide pl-5 pb-5'>! You cannot make in-app 
      purchase, feature hasn't been provided, all transactions will be redirected to 
      whatsapp for now.</p>
      <section className='px-5 flex flex-col space-y-10 md:space-y-0 md:flex-row justify-between w-[inherit]'>
        <figure className='md:w-[40%] xl:w-[30%]'>
          <img src={data.img} alt={data.tag} className='cursor-pointer bg-brown rounded-md 
          h-[20rem] lg:h-[26rem] p-5 w-full'  />
        </figure>
        <div className='md:w-[50%] flex flex-col space-y-8'>
          <p className='uppercase text-base font-bold text-red tracking-wide'>Avri Dolce</p>
          <h2 className='uppercase text-center md:text-start text-4xl font-bold text-black tracking-wide'>{data.tag}</h2>
          <p className='w-[90%] md:w-[80%] font-p-font text-sm font-normal text-[#795548]'>{data.des}</p>
          <p className='uppercase text-3xl font-bold text-black tracking-wide'>{data.price}</p>
          <section className='flex flex-row space-x-10'>
          <div className='w-[10rem] bg-gray flex flex-row justify-between items-center 
          p-3 rounded-md cursor-pointer'>
            <img src={minus} alt="minus" className='w-[25px] h-[25px]' 
            onClick={() => count == 0 ? setCount(0) : setCount(prev => prev - 1) } />
            <p className='text-base font-bold text-black'>{count}</p>
            <img src={plus} alt="plus" className='w-[25px] h-[22px]'
            onClick={() => setCount(prev => prev + 1)}/>
          </div>
          <button className='bg-green-500 flex flex-row text-white font-b-font items-center
          space-x-3 rounded-md px-5 text-center' 
          onClick={() => {window.location.href = `https://wa.me/+393755327166?text=I would like to purchase ${count} of  ${data.tag}`}}>
            <img src={whatWhite} alt="whatsapp" className='w-[30px]'/>
            <span className='mt-1'>Checkout</span>
          </button>
        </section>
        </div>
      </section>
    </section>
  )
}
