import React from 'react'
import Banners from '../components/Banners'
import Flex from '../components/Flex'
import Container from '../components/Container'
import { Van, RotateCcw } from 'lucide-react';
import Shipping from '../components/Shipping';
import Promotion from '../components/Promotion';
import Cart from '../components/Cart';
import items from '../assets/items'
import itemstwo from '../assets/items.1png'
import itemsthree from '../assets/items.2png'
import itemsfour from '../assets/items.3png'


const Home = () => {
  return (
    <>
      <Banners />
      <Shipping />
      <Promotion />
      <div className="grid grid-cols-4">
        <Cart className={"Watch"} itemimg={items} />
        <Cart className={"Basic Crew Neck Tee"} itemimg={itemstwo} />
        <Cart className={"Bag"} itemimg={itemsthree} />
        <Cart className={"Rabbit Bag"} itemimg={itemsfour} />

      </div>


    </>
  )
}

export default Home