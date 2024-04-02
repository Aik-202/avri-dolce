import React from 'react'
import { categories } from '../Data/demo'
import SlideShow from './Landing/SlideShow'

export default function Collection(props) {
  return (
    <section className='pl-5 flex flex-col space-y-8' id={props.type === "MEN'S COLLECTION" ? 'men' 
    : 'women'}>
        <h2 className='font-h-font text-3xl font-bold text-red tracking-wide'>{props.type}</h2>
        <div className='flex flex-row space-x-3 items-center'>
            <p className='font-p-font text-base font-semibold'>Categories:</p>
            <div className='flex flex-row space-x-5 overflow-x-scroll w-[95%] lg:overflow-x-hidden lg:w-auto'>
                {categories.map((item => <p className={`font-p-font text-base font-semibold py-2 px-4 
                rounded-full border-[1px] border-solid border-red hover:bg-red hover:text-white
                cursor-pointer whitespace-nowrap
                ${props.option == item ? 'text-white bg-red' : 'text-black bg-transparent'}
                `} key={item} onClick={() => props.setOption(item)}>{item}</p>))}
            </div>
        </div>
        <SlideShow />
    </section>
  )
}
