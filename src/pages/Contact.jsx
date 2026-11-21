import { ChevronRight } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'
import Container from '../components/Container'
import Contactfrom from '../components/Contactfrom'

const Contact = () => {
    return (
        <Container>
            <div className="mt-10 md:mt-16 mb-16 md:mb-24 font-sans">
                <h1 className="text-3xl sm:text-4xl md:text-[49px] font-sans font-bold text-primary">
                    Contacts
                </h1>
                <h4 className="flex items-center gap-1.5 text-sm text-gry mb-10 md:mb-16">
                    <Link to="/" className="hover:text-primary transition-colors">Home</Link>
                    <ChevronRight size={14} />
                    <span className="font-semibold text-primary">Contacts</span>
                </h4>

                <Contactfrom />
            </div>
        </Container>
    )
}

export default Contact
