import React from 'react'
import { categories, men, women } from '../Data/demo'
import SlideShow from './Landing/SlideShow'

export default function Collection(props) {
    const MentShirt = men.filter((prev) => {return prev.name == 'T-shirts'});
    const MenSShirt = men.filter((prev) => {return prev.name == 'Sweat-shirts'});
    const MenShorts = men.filter((prev) => {return prev.name == 'Shorts'});
    const MenHoodies = men.filter((prev) => {return prev.name == 'Hoodies'});
    const MenBottoms = men.filter((prev) => {return prev.name == 'Bottoms'});
    const MenHead = men.filter((prev) => {return prev.name == 'Head wear'});
    const MenAfrican = men.filter((prev) => {return prev.name == 'African'});
    const MenGym = men.filter((prev) => {return prev.name == 'Gym Clothes'});

    const WomentShirt = women.filter((prev) => {return prev.name == 'T-shirts'});
    const WomenSShirt = women.filter((prev) => {return prev.name == 'Sweat-shirts'});
    const WomenShorts = women.filter((prev) => {return prev.name == 'Shorts'});
    const WomenHoodies = women.filter((prev) => {return prev.name == 'Hoodies'});
    const WomenBottoms = women.filter((prev) => {return prev.name == 'Bottoms'});
    const WomenHead = women.filter((prev) => {return prev.name == 'Head wear'});
    const WomenAfrican = women.filter((prev) => {return prev.name == 'African'});
    const WomenGym = women.filter((prev) => {return prev.name == 'Gym Clothes'});

  return (
    <section className='pl-5 flex flex-col space-y-8' id={props.type === "MEN'S COLLECTION" ? 'men' 
    : 'women'}>
        <h2 className='font-h-font text-3xl font-bold text-red tracking-wide'>{props.type}</h2>
        <div className='flex flex-row space-x-3 items-center'>
            <p className='font-p-font text-base font-semibold'>Categories:</p>
            <div className='flex flex-row space-x-5 xl:space-x-10 overflow-x-scroll w-[95%] lg:overflow-x-hidden lg:w-auto'>
                {categories.map((item => <p className={`font-p-font text-base font-semibold py-2 px-4 
                rounded-full border-[1px] border-solid border-red hover:bg-red hover:text-white
                cursor-pointer whitespace-nowrap
                ${props.option == item ? 'text-white bg-red' : 'text-black bg-transparent'}
                `} key={item} onClick={() => props.setOption(item)}>{item}</p>))}
            </div>
        </div>
        <section className='px-24 mt-10'>
            <SlideShow  
            data={props.type === "MEN'S COLLECTION" && props.option === 'T-shirts' ? MentShirt[0].product
            : props.type === "MEN'S COLLECTION" && props.option === 'Sweat-shirts' ? MenSShirt[0].product
            : props.type === "MEN'S COLLECTION" && props.option === 'Shorts' ? MenShorts[0].product
            : props.type === "MEN'S COLLECTION" && props.option === 'Hoodies' ? MenHoodies[0].product
            : props.type === "MEN'S COLLECTION" && props.option === 'Bottoms' ? MenBottoms[0].product
            : props.type === "MEN'S COLLECTION" && props.option === 'Head wear' ? MenHead[0].product
            : props.type === "MEN'S COLLECTION" && props.option === 'African' ? MenAfrican[0].product
            : props.type === "MEN'S COLLECTION" && props.option === 'Gym Clothes' ? MenGym[0].product
            : props.type === "WOMEN'S COLLECTION" && props.option === 'T-shirts' ? WomentShirt[0].product
            : props.type === "WOMEN'S COLLECTION" && props.option === 'Sweat-shirts' ? WomenSShirt[0].product
            : props.type === "WOMEN'S COLLECTION" && props.option === 'Shorts' ? WomenShorts[0].product
            : props.type === "WOMEN'S COLLECTION" && props.option === 'Hoodies' ? WomenHoodies[0].product
            : props.type === "WOMEN'S COLLECTION" && props.option === 'Bottoms' ? WomenBottoms[0].product
            : props.type === "WOMEN'S COLLECTION" && props.option === 'Head wear' ? WomenHead[0].product
            : props.type === "WOMEN'S COLLECTION" && props.option === 'African' ? WomenAfrican[0].product
            : props.type === "WOMEN'S COLLECTION" && props.option === 'Gym Clothes' ? WomenGym[0].product
            : null}/>
        </section>
    </section>
  )
}
