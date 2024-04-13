import React from 'react'
import { Collection, Footer, NavBar } from '../Components'
import { useLocation } from 'react-router-dom'

export default function ProductsPage() {
  const [option, setOption] = React.useState('')
  const location = useLocation()

  const data = location.state 

  React.useEffect(() => {
    data ? setOption(data) : setOption('T-shirts')
  }, [data])

  return (
    <section className='flex flex-col space-y-10'>
      <NavBar product={true}/>
      <p className='w-[90%] md:w-[80%] text-center text-base font-bold text-[#F44336] tracking-wide pl-5 pb-5'>! You cannot make in-app 
      purchase, feature hasn't been provided, all transactions will be redirected to 
      whatsapp for now.</p>
      <Collection option={option} setOption={setOption} type={"MEN'S COLLECTION"}/>
      <Collection option={option} setOption={setOption} type={"WOMEN'S COLLECTION"}/>
      <Footer />
    </section>
  )
}
