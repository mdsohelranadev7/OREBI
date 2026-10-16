import React from 'react'
import Cart from '../components/Cart';
import itemsone from '../assets/items1.png'
import itemstwo from '../assets/items2.png'
import itemsthree from '../assets/items3.png'
import itemsfour from '../assets/items4.png'
import Container from './Container';

const Newarrival = () => {
    return (
        <Container>

            <h2 className="font-bold text-[39px] mb-12">New Arrivals</h2>
            <div className="grid grid-cols-4">
                <Cart className={"Watch"} itemimg={itemsone} />
                <Cart className={"Basic Crew Neck Tee"} itemimg={itemstwo} />
                <Cart className={"Bag"} itemimg={itemsthree} />
                <Cart className={"Rabbit Bag"} itemimg={itemsfour} />

            </div>
        </Container>
    )
}

export default Newarrival