import React from 'react'
import Container from './Container'
import Flex from './Flex'
import { RotateCcw, Van } from 'lucide-react'

const Shipping = () => {
    return (

        <div className={"border border-[#f0f0f0]"}>
            <Container>
                <Flex className={"justify-between items-center py-7.5 text-[#6d6d6d]"}>
                    <div className={"font-sans flex gap-x-2 items-center "}>
                        <span className={"text-2xl font-black text-[#262626]"}>2</span>
                        <span className={"text-[16px]"}>Two years warranty</span>
                    </div>
                    <div className="flex gap-x-3.5">
                        <Van className={"text-[#262626]"} />
                        <span>Free shipping</span>
                    </div>
                    <div className="flex gap-x-3.5">
                        <RotateCcw className={"text-[#262626]"} />
                        <span>Return policy in 30 days</span>
                    </div>
                </Flex>
            </Container>
        </div>

    )
}

export default Shipping