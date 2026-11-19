import { ChevronRight } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'
import Container from '../components/Container'
import Productfilter from '../components/Productfilter'

const Shop = () => {
  return (
    <Container>
      <div className="mt-14 mb-24 font-sans">
        <h1 className="text-[42px] sm:text-[49px] font-sans font-bold text-primary">Products</h1>
        <h4 className="flex items-center gap-1.5 text-sm text-gry mb-10">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <ChevronRight size={14} />
          <span className="font-semibold text-primary">Products</span>
        </h4>

        <Productfilter />
      </div>
    </Container>
  )
}

export default Shop
