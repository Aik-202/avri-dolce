import React from 'react'
import Avatar from '@mui/material/Avatar';
import Rating from '@mui/material/Rating';
import { red } from '@mui/material/colors';
import { ratings } from '../../Data/demo';

export default function Testimonials() {
  return (
    <section className='flex flex-col justify-center items-center space-y-10'>
        <h2 className='text-center w-[90%] md:w-auto font-h-font text-3xl font-bold text-red tracking-wide'>
        WHAT OUR CUSTOMERS SAY</h2>
        <p className='w-[90%] md:w-[80%] font-p-font text-base font-semibold'>It is easy for us to say who we are, 
        but what our customers say about us is most important, the following are the most revelant reviews 
        from our customers coined from Google Reviews. </p>
        <section className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8'>
            {ratings.map((item) => <div key={item.name} className='bg-gray px-5 py-5 rounded-md shadow-md'>
                <div className='flex flex-row space-x-2 items-center'>
                    <Avatar sx={{ bgcolor: red[900] }} alt={item.name}>{item.name.charAt(0)}</Avatar>
                    <p className='font-p-font text-base font-semibold'>{item.name}</p>
                </div>
                <div className='flex flex-col space-y-2 items-center'>
                    <Rating name="read-only" value={item.rating} readOnly />
                    <p className='font-p-font text-base font-semibold'>{item.comment}</p>
                </div>
            </div>)}
        </section>
    </section>
  )
}
