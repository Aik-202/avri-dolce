import React from 'react'
import { faqData } from '../../Data/demo'

export default function FAQ() {
  const [accordion, setAccordion] = React.useState(false);
  const [element, setElement] = React.useState();

  return (
    <section className='bg-[#E7E8E9] flex flex-col justify-center content-center items-center flex-wrap py-20 space-y-8' id='faq'>
      <h2 className='font-font-one font-bold text-2xl md:text-3xl'>Frequently asked questions</h2>
      <p className='font-font-two font-medium w-full text-center md:text-start md:w-[46rem] text-lg text-light-gray'>At lacus vitae nulla sagittis scelerisque nisl. Pellentesque duis cursus vestibulum, 
      facilisi ac, sed faucibus.</p>
      <section className='flex flex-col justify-center w-[90%] md:w-[92%] lg:w-[72%] xl:w-[55%] bg-white rounded-md'>
        {faqData.map((items) => <div key={items.id}>
          <div id={items.id} className={`flex flex-row justify-between px-7 py-5
           ${accordion  && items.id === +element ? 'bg-gray rounded-t-sm': 'bg-transparent'}
          `}>
            <h3 className={`font-font-three text-base font-medium 
            ${accordion  && items.id === +element ? 'text-blue-two': 'text-light-gray'}
            `}>{items.question}</h3>
            {accordion  && items.id === +element && <img  alt="up" className='cursor-pointer self-center' 
            onClick={(e) => {setElement(0), setAccordion(false)}}/>}
            {items.id !== +element && <img className='cursor-pointer self-center'  alt="down" 
            onClick={(e) => {setElement(e.target.parentNode.id), setAccordion(true)}}/>}
          </div>
         {accordion && items.id == element && <p className='px-7 py-5 border-transparent border-b-gray 
         border-solid border-[1px] text-light-gray text-sm font-normal'>{items.answer}</p>}
        </div>)}
      </section>
    </section>
  )
}
