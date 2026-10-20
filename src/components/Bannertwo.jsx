import React from 'react'
import Image from './Image'
import addtwo from '../assets/Adsbannertwo.png'
import Container from './Container'
import { Link } from 'react-router-dom'

const Bannertwo = () => {
    return (
        <Container>
            <Link to={"/shop"}>
                <Image srcimg={addtwo} srcalt={"banner.png"} />
            </Link>
        </Container>
    )
}

export default Bannertwo