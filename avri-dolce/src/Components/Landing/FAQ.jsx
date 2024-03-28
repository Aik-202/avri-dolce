import React from 'react'
import { faqData } from '../../Data/demo'
import { down, up } from '../../Data';

export default function FAQ() {
  const [accordion, setAccordion] = React.useState(false);
  const [element, setElement] = React.useState();

  return (
    <section className='flex flex-col justify-center content-center items-center flex-wrap py-20 
    space-y-8' id='faq'>
      <h2 className='font-h-font text-center md:text-start text-3xl font-bold tracking-wide text-red uppercase'>Frequently 
      asked questions
      </h2>
      <p className='font-p-font font-medium w-full text-center md:text-start md:w-[46rem] text-lg 
      text-light-gray'>At lacus vitae nulla sagittis scelerisque nisl. Pellentesque duis cursus 
      vestibulum, facilisi ac, sed faucibus.</p>
      <section className='flex flex-col justify-center w-[90%] md:w-[92%] lg:w-[72%] xl:w-[55%] 
      bg-gray rounded-md'>
        {faqData.map((items) => <div key={items.id}>
          <div id={items.id} className={`flex flex-row justify-between px-7 py-5
           ${accordion  && items.id === +element ? 'bg-[#EEEEEE] rounded-t-sm': 'bg-transparent'}
          `}>
            <h3 className={`font-h-font text-base tracking-wider 
            ${accordion  && items.id === +element ? 'text-black font-semibold' 
            : 'text-red font-medium'}
            `}>{items.question}</h3>
            {accordion  && items.id === +element && <img src={up}  alt="up" className='cursor-pointer 
            self-center w-[22px]' 
            onClick={(e) => {setElement(0), setAccordion(false)}}/>}
            {items.id !== +element && <img src={down} alt="down" className='cursor-pointer self-center 
            w-[22px]'  
            onClick={(e) => {setElement(e.target.parentNode.id), setAccordion(true)}}/>}
          </div>
         {accordion && items.id == element && <p className='px-7 py-5 border-transparent border-b-black 
         border-solid border-[1px] text-light-gray text-sm font-semibold font-b-font'>{items.answer}</p>}
        </div>)}
      </section>
    </section>
  )
}
