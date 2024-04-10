import React from 'react'
import { NavBar } from '../Components'
import { useLocation } from 'react-router-dom'
import { minus, plus, whatWhite } from '../Data';

export default function ViewProduct() {
  const [count, setCount] = React.useState(1)
  const [size, setSize] = React.useState('S (Small)')

  const location = useLocation();

  const data = location.state.data

  const gender = location.state.gender

  return (
    <section className='flex flex-col w-screen'>
      <NavBar product={true} />
      <p className='w-[90%] md:w-[80%] text-center text-base font-bold text-[#F44336] tracking-wide pl-5 pb-5'>! You cannot make in-app 
      purchase, feature hasn't been provided, all transactions will be redirected to 
      whatsapp for now.</p>
      <section className='px-5 flex flex-col space-y-10 md:space-y-0 md:flex-row 
      justify-between w-[inherit] pb-5'>
        <figure className='md:w-[40%] xl:w-[30%]'>
          <img src={data.img} alt={data.tag} className='cursor-pointer bg-brown rounded-md 
          h-[20rem] lg:h-[26rem] p-5 w-full'  />
        </figure>
        <div className='md:w-[50%] flex flex-col space-y-8'>
          <p className='uppercase text-base font-bold text-red tracking-wide font-h-font'>Avri Dolce</p>
          <h2 className='uppercase text-center md:text-start text-4xl font-bold font-h-font text-black tracking-wide'>{data.tag}</h2>
          <p className='w-[90%] md:w-[80%] font-p-font text-sm font-normal text-[#795548]'>{data.des}</p>
          <div className='flex flex-row space-x-10 items-center'>
            <p className='uppercase text-3xl font-bold text-black tracking-wide'>{data.price}</p>
            <div  className='flex flex-row space-x-3 items-center text-red'>
              <p className='uppercase text-xl font-bold tracking-wide font-p-font'>Size:</p>
              <select name="size" id="size" className='font-b-font border-[1px] border-solid 
              rounded-md border-black w-max py-2' onChange={(e) => setSize(e.target.value)}>
                <option value={`${gender} - S (Small)`}>{`${gender} - S (Small)`}</option>
                <option value={`${gender} - M (Medium)`}>{`${gender} - M (Medium)`}</option>
                <option value={`${gender} - L (Large)`}>{`${gender} - L (Large)`}</option>
                <option value={`${gender} - XL (Extra-Large)`}>{`${gender} - XL (Extra-Large)`}</option>
                <option value={`${gender} - XXL (Extra-Extra-Large)`}>{`${gender} - XXL (Extra-Extra-Large)`}</option>
              </select>
            </div>
          </div>
          <section className='flex flex-row space-x-10'>
          <div className='w-[10rem] bg-gray flex flex-row justify-between items-center 
          p-3 rounded-md cursor-pointer font-b-font'>
            <img src={minus} alt="minus" className='w-[25px] h-[25px]' 
            onClick={() => count == 0 ? setCount(0) : setCount(prev => prev - 1) } />
            <p className='text-base font-bold text-black'>{count}</p>
            <img src={plus} alt="plus" className='w-[25px] h-[22px]'
            onClick={() => setCount(prev => prev + 1)}/>
          </div>
          <button className='bg-green-500 flex flex-row text-white font-b-font items-center
          space-x-3 rounded-md px-5 text-center' 
          onClick={() => {window.location.href = `https://wa.me/+393755327166?text=Hello Avri Dolce, I would like to purchase ${count} of ${data.tag} in ${size} size`}}>
            <img src={whatWhite} alt="whatsapp" className='w-[30px]'/>
            <span className='mt-1'>Checkout</span>
          </button>
        </section>
        </div>
      </section>
    </section>
  )
}
