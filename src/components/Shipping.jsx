import React from 'react'
import Container from './Container'
import { RotateCcw, Van } from 'lucide-react'

const Shipping = () => {
    return (
        <section className="border-y border-gray-200 bg-white">
            <Container>
                <div className="flex flex-col sm:flex-row justify-between items-center py-5 md:py-7 gap-4 text-gry text-xs sm:text-sm font-sans">
                    <div className="flex items-center gap-2">
                        <span className="text-xl sm:text-2xl font-black text-primary">2</span>
                        <span className="font-medium">Two years warranty</span>
                    </div>

                    <div className="flex items-center gap-2.5">
                        <Van className="text-primary w-5 h-5" />
                        <span className="font-medium">Free shipping</span>
                    </div>

                    <div className="flex items-center gap-2.5">
                        <RotateCcw className="text-primary w-5 h-5" />
                        <span className="font-medium">Return policy in 30 days</span>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Shipping
