import React from 'react'
import { ceo, fb, ig, tik } from '../../Data'

export default function Ceo() {
  const [tip1, setTip1] = React.useState(false)
  const [tip2, setTip2] = React.useState(false)
  const [tip3, setTip3] = React.useState(false)

  return (
    <section className='flex flex-col justify-center items-center space-y-10 w-screen'>
      <h2 className='font-h-font text-3xl font-bold text-red tracking-wide'>MEET THE CEO</h2>
      <div className='flex flex-col-reverse space-y-reverse space-y-5 lg:space-y-0 lg:flex-row justify-center lg:space-x-10 pl-5 w-[inherit]'>
        <p className='self-center w-[90%] lg:w-[40%] font-p-font text-base font-semibold'>
        <i className='text-dark-green font-bold'>Avri Dolce</i>, led by the 
        visionary <i className='text-dark-green font-bold'>Mr. Frank Omozuma</i>, embodies the essence of 
        fashion as a medium for soulful expression. Frank's journey originates from 
        <i className='text-dark-green font-bold'> Edo State, Nigeria</i>, but he currently resides in 
        <i className='text-red font-bold'> Pescara, Italy</i>, where he honed his craft under the esteemed 
        guidance of <i className='text-red font-bold'> Planeta Modal Fashion Academy</i>. Now poised on the cusp 
        of greatness, he stands ready to unveil his boundless creativity to the world, igniting inspiration 
        and leaving an indelible mark on the realm of fashion. </p>
        <figure className='self-center lg:self-aauto flex flex-row space-x-5 w-max'>
          <div className='self-center flex flex-col space-y-3'>
            <a href="https://www.facebook.com/winnie.frankwinnie" className='relative'>
              <img src={fb} alt="facebook" className='w-[40px]' onMouseOver={(e) => setTip1(true)}
              onMouseLeave={() => setTip1(false)} />
              {tip1 ? <p className='text-red w-max font-p-font text-sm font-bold
              self-start absolute right-0 md:-right-8 -top-10 bg-gray p-2 rounded-lg'>Follow on Facebook</p> : null}
            </a>
            <a href="https://www.instagram.com/avridolce" className='relative'>
              <img src={ig} alt="instagram" className='w-[40px]' onMouseOver={(e) => setTip2(true)}
              onMouseLeave={() => setTip2(false)}/>
              {tip2 ? <p className='text-red w-max font-p-font text-sm font-bold
              self-start absolute right-0 md:-right-8 -top-10 bg-gray p-2 rounded-lg'>Follow on Instagram</p> : null}
            </a>
            <a href="https://www.tiktok.com/@fcavridolce" className='relative'>
              <img src={tik} alt="tiktok" className='w-[40px]' onMouseOver={(e) => setTip3(true)}
              onMouseLeave={() => setTip3(false)}/>
              {tip3 ? <p className='text-red w-max font-p-font text-sm font-bold
              self-start absolute right-0 md:-right-8 -top-10 bg-gray p-2 rounded-lg'>Follow on TikTok</p> : null}
            </a>
          </div>
          <div className='w-[15rem] h-[20rem] md:h-[30rem] md:w-[30rem] rounded-md]'>
            <img src={ceo} alt="frank" className='h-full w-full rounded-md' />
          </div>
        </figure>
      </div>
    </section>
  )
}
