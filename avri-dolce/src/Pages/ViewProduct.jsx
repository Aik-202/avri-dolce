import React from 'react'
import { NavBar } from '../Components'
import { useLocation } from 'react-router-dom'
import { minus, plus, whatWhite } from '../Data';

export default function ViewProduct() {
  const location = useLocation();

  const data = location.state.data

  const gender = location.state.gender

  const [count, setCount] = React.useState(1)
  const [price, setPrice] = React.useState(data.price)
  const [size, setSize] = React.useState(`${gender} - S (Small)`)

  React.useEffect(() => {
    setPrice(prev => count * prev)
  }, [count])


  return (
    <section className='flex flex-col w-screen'>
      <NavBar product={true} />
      <p className='w-[90%] md:w-[80%] text-center text-base font-bold text-[#F44336] tracking-wide pl-5 pb-5'>! You cannot make in-app 
      purchase, feature hasn't been provided, all transactions will be redirected to 
      whatsapp for now.</p>
      <section className='px-5 flex flex-col space-y-10 md:space-y-0 md:flex-row 
      justify-between w-[inherit] pb-10'>
        <div className='flex flex-col space-y-8'>
          <figure className='md:w-[40%] xl:w-[30rem] h-[20rem] lg:h-[26rem]'>
            <img src={data.img} alt={data.tag} className='cursor-pointer bg-red bg-opacity-15 rounded-md 
            p-5 w-full h-full'  />
          </figure>
          <div className='flex flex-col space-y-3'>
          <p className='text-lg text-black font-bold tracking-wide font-h-font'>
            Related images:
          </p>
            {data.related ?<figure className='flex flex-row space-x-2'>
              {data.related.map((src) => <img src={src} key={src} alt='related' className='w-[4rem] h-[4rem] rounded-md 
              border-solid border-[1px] opacity-50 border-transparent' />)}
            </figure> : <p className='text-base text-red font-bold tracking-wide font-p-font'>! No related images found</p>}
          </div>
          <div className='flex flex-col space-y-3'>
          <p className='text-lg text-black font-bold tracking-wide font-h-font'>
            Related videos:
          </p>
            {data.video ?<div className='flex flex-row space-x-2'>
              {data.video.map((src) => <video key={src}  alt='related' 
              className='relative w-[4rem] h-[4rem] rounded-md opacity-15 '>
                <source src={src} />
              </video>)}
            </div> : <p className='text-base text-red font-bold tracking-wide font-p-font'>! No related images found</p>}
          </div>
        </div>
        <div className='md:w-[50%] flex flex-col space-y-8'>
          <p className='uppercase text-base font-bold text-red tracking-wide font-h-font'>Avri Dolce</p>
          <h2 className='uppercase text-center md:text-start text-3xl lg:text-4xl font-bold font-h-font 
          text-black tracking-wide'>{data.tag}</h2>
          <p className='w-[90%] md:w-[80%] font-p-font text-sm font-normal text-[#795548]'>{data.des}</p>
          <div className='flex flex-col space-y-5 lg:space-y-0 lg:flex-row lg:space-x-10 lg:items-center'>
            <p className='uppercase text-3xl font-p-font font-bold text-black tracking-wide'>{price}</p>
            <div  className='flex flex-row space-x-3 items-center text-red'>
              <p className='uppercase text-xl font-bold tracking-wide font-p-font'>Size: 
              <span className='text-base text-black capitalize'> {gender} - </span> </p>
              <div className='grid grid-cols-4 gap-y-2 md:gap-y-0 md:grid-cols-5 font-b-font cursor-pointer 
              text-sm'>
                <span className={`rounded-md  px-3 py-1 hover:bg-opacity-100 bg-red hover:text-white w-max
                ${size == `${gender} - S (Small)` ? 'bg-opacity-100 text-white' 
                : 'bg-opacity-20 text-black' } 
                `} onClick={() => setSize(`${gender} - S (Small)`)}>S</span>
                <span className={`rounded-md  px-3 py-1 hover:bg-opacity-100 bg-red hover:text-white w-max
                ${size == `${gender} - M (Medium)` ? 'bg-opacity-100 text-white' 
                : 'bg-opacity-20 text-black' } 
                `} onClick={() => setSize(`${gender} - M (Medium)`)}>M</span>
                <span className={`rounded-md  px-3 py-1 hover:bg-opacity-100 bg-red hover:text-white w-max
                ${size == `${gender} - L (Large)` ? 'bg-opacity-100 text-white' 
                : 'bg-opacity-20 text-black' } 
                `} onClick={() => setSize(`${gender} - L (Large)`)}>L</span>
                <span className={`rounded-md  px-3 py-1 hover:bg-opacity-100 bg-red hover:text-white w-max
                ${size == `${gender} - XL (Extra-Large)` ? 'bg-opacity-100 text-white' 
                : 'bg-opacity-20 text-black' } 
                `} onClick={() => setSize(`${gender} - XL (Extra-Large)`)}>XL</span>
                <span className={`rounded-md  px-3 py-1 hover:bg-opacity-100 bg-red hover:text-white w-max
                ${size == `${gender} - XXL (Extra-Extra-Large)` ? 'bg-opacity-100 text-white' 
                : 'bg-opacity-20 text-black' } 
                `} onClick={() => setSize(`${gender} - XXL (Extra-Extra-Large)`)}>XXL</span>
              </div>
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
