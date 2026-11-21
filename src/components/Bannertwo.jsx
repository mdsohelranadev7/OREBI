import React from 'react'
import Image from './Image'
import addtwo from '../assets/Adsbannertwo.png'
import Container from './Container'
import { Link } from 'react-router-dom'

const Bannertwo = () => {
    return (
        <section className="my-10 md:my-20">
            <Container>
                <Link to="/shop" className="block w-full overflow-hidden rounded group">
                    <Image
                        srcimg={addtwo}
                        srcalt="Ad Banner"
                        className="w-full h-auto object-cover group-hover:scale-101 transition-transform duration-500"
                    />
                </Link>
            </Container>
        </section>
    )
}

export default Bannertwo
