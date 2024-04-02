import React from 'react'
import { Collection, NavBar } from '../Components'
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
      <Collection option={option} setOption={setOption} type={"MEN'S COLLECTION"}/>
      <Collection option={option} setOption={setOption} type={"WOMEN'S COLLECTION"}/>
    </section>
  )
}
