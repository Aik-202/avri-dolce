import React from 'react'
import { foot } from '../../Data'
import { footer } from '../../Data/demo'

export default function Footer() {

  return (
    <footer style={{backgroundImage: `url(${foot})`}} className='relative bg-cover w-screen flex 
    flex-col py-5 space-y-8'>
      <div className='absolute top-0 w-full h-full bg-brown opacity-70 z-0'></div>
      <div className='self-center flex flex-col z-10'>
        <h2 className='font-h-font text-3xl tracking-wide leading-[3.2rem] uppercase
        text-red text-center font-bold my-3'>Help us stay relevant to you</h2>
        <p className='font-p-font text-center md:text-start md:w-[38rem] font-bold text-base text-black'>By writing reviews about our 
        services, search engines recommend our products to others, you help us stay relevant to you.</p>
        <button className='hover:rounded-full text-white bg-red px-5 py-2 self-center font-semibold 
        mt-8 hover:font-bold' onClick={() => window.location.href = 'https://www.google.com/maps/place/Avri+Dolce/@42.4427153,14.2104569,17z/data=!3m1!4b1!4m6!3m5!1s0x1331a7b49d59f0c3:0x2fd1f2cc67160ed!8m2!3d42.4427153!4d14.2104569!16s%2Fg%2F11vwkp99r6?entry=ttu'}>
        Send Review</button>
      </div>
      <div className='grid grid-cols-1 gap-y-10 md:flex md:flex-row md:justify-between mx-12 bg-white rounded-md p-5 z-10'>
        {footer.map((item) => <div key={item.head} className='flex flex-col space-y-3 font-b-font'> 
          <p className='font-bold'>{item.head}</p>
          <ul className='flex flex-col space-y-2'>
            {item.list.map((li => <li key={li} className='cursor-pointer text-red hover:font-semibold
            hover:text-black'><a href={li == 'About Us' ? '/about'
            : li == 'Contact Us' || li == 'Help & Support' ?'/contact'
            : li == 'Men Fashion' ? '/product/#men'
            : li == 'Women Fashion' ? '/product/#women'
            : li == 'FAQ' ? '#faq'
            : li == 'Review' ?  'https://www.google.com/maps/place/Avri+Dolce/@42.4427153,14.2104569,17z/data=!3m1!4b1!4m6!3m5!1s0x1331a7b49d59f0c3:0x2fd1f2cc67160ed!8m2!3d42.4427153!4d14.2104569!16s%2Fg%2F11vwkp99r6?entry=ttu' 
            : li == 'Instagram' ?  'https://www.instagram.com/avridolce' 
            : li == 'TikTok' ?  'https://www.tiktok.com/@fcavridolce'
            : 'https://www.facebook.com/winnie.frankwinnie'}>{li}</a></li>))}
          </ul>
        </div>)}
      </div>
    </footer>
  )
}
