import React from 'react'
import Container from './Container'
import Flex from './Flex'
import Image from './Image'
import Ad1 from '../assets/Ad_1.jpg'
import Ad2 from '../assets/Ad_2.png'
import Ad3 from '../assets/Ad_3.jpg'
import { FileAudio2 } from 'lucide-react'
import { Link } from 'react-router-dom'

const Promotion = () => {
    return (
        <div className="mt-29.25 mb-32">
            <Container>
                <Flex className={" justify-between items-center"}>
                    <div className="w-195 h-195">
                        <div className="w-full">
                            <Link to={"/shop"}>
                                <Image srcimg={Ad1} srcalt={"ad1.jpg"} className={"w-full"} />
                            </Link>
                        </div>

                    </div>
                    <div className=" h-195 flex flex-col justify-between">
                        <div className="h-92 w-full">
                            <Link to={"/shop"}>
                                <Image srcimg={Ad2} srcalt={"ad2.jpg"} className={"w-full"} />
                            </Link>
                        </div>

                        <div className="h-92 w-full">
                            <Link to={"/shop"}>
                                <Image srcimg={Ad3} srcalt={"ad3.jpg"} className={"w-full"} />
                            </Link>

                        </div>
                    </div>



                </Flex>
            </Container>

        </div>
    )
}

export default Promotion