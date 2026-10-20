import React from 'react'
import Banners from '../components/Banners'
import Flex from '../components/Flex'
import Container from '../components/Container'
import { Van, RotateCcw } from 'lucide-react';
import Shipping from '../components/Shipping';
import Promotion from '../components/Promotion';
import Newarrival from '../components/Newarrival';
import Ourbestseller from '../components/Ourbestseller';
import Bannertwo from '../components/Bannertwo';
import Specialoffer from '../components/Specialoffer';






const Home = () => {
  return (
    <>
      <Banners />
      <Shipping />
      <Promotion />
      <Newarrival />
      <Ourbestseller />
      <Bannertwo />
      <Specialoffer />

    </>
  )
}

export default Home