import { ChevronRight } from 'lucide-react'
import React from 'react'
import Container from '../components/Container'
import Productfilter from '../components/Productfilter'

const Shop = () => {
  return (

    <Container>

      <div className="mt-56.25">
        <h2 className='text-[49px] font-sans font-bold text-primary'>Products</h2>
        <h4 className='flex text-gry mb-32.5' >Home <ChevronRight />  Products</h4>

        <Productfilter />

      </div>
    </Container>


  )
}

export default Shop