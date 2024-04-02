import React from 'react'
import { categories } from '../Data/demo'

export default function Collection() {
    const [option, setOption] = React.useState('Shirts')
  return (
    <section className='pl-5 flex flex-col space-y-8'>
        <h2 className='font-h-font text-3xl font-bold text-red tracking-wide'>MEN'S COLLECTION</h2>
        <div className='flex flex-row space-x-3 items-center'>
            <p className='font-p-font text-base font-semibold'>Categories:</p>
            <div className='flex flex-row space-x-5'>
                {categories.map((item => <p className={`font-p-font text-base font-semibold py-2 px-4 
                rounded-full border-[1px] border-solid border-red hover:bg-red hover:text-white
                cursor-pointer
                ${option == item ? 'text-white bg-red' : 'text-black bg-transparent'}
                `} onClick={() => setOption(item)}>{item}</p>))}
            </div>
        </div>
    </section>
  )
}
