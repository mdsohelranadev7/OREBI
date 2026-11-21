import React, { useState } from 'react'
import Image from './Image'
import map from '../assets/Map.png'
import { CheckCircle2 } from 'lucide-react'

const Contactfrom = () => {
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        setSubmitted(true)
        setTimeout(() => setSubmitted(false), 4000)
    }

    return (
        <div className="font-sans">
            <h2 className="text-2xl sm:text-3xl lg:text-[40px] mb-8 text-primary font-bold">
                Fill up a Form
            </h2>

            <form onSubmit={handleSubmit} className="w-full max-w-xl">
                <div className="flex flex-col border-b border-gray-200 mb-6 focus-within:border-primary transition-colors">
                    <label className="text-sm font-bold text-primary mb-1" htmlFor="name">
                        Name
                    </label>
                    <input
                        id="name"
                        required
                        className="py-2.5 text-primary outline-none text-sm placeholder:text-gray-400"
                        type="text"
                        placeholder="Your name here"
                    />
                </div>

                <div className="flex flex-col border-b border-gray-200 mb-6 focus-within:border-primary transition-colors">
                    <label className="text-sm font-bold text-primary mb-1" htmlFor="email">
                        Email
                    </label>
                    <input
                        id="email"
                        required
                        className="py-2.5 text-primary outline-none text-sm placeholder:text-gray-400"
                        type="email"
                        placeholder="Your email here"
                    />
                </div>

                <div className="flex flex-col border-b border-gray-200 mb-8 focus-within:border-primary transition-colors">
                    <label className="text-sm font-bold text-primary mb-1" htmlFor="message">
                        Message
                    </label>
                    <textarea
                        id="message"
                        required
                        rows="4"
                        className="py-2.5 text-primary outline-none text-sm resize-none placeholder:text-gray-400"
                        placeholder="Your message here"
                    ></textarea>
                </div>

                <button
                    type="submit"
                    className="w-full sm:w-auto px-12 py-4 bg-primary text-white font-bold text-xs uppercase tracking-wider hover:bg-black transition-colors cursor-pointer rounded"
                >
                    Post Message
                </button>

                {submitted && (
                    <p className="mt-4 text-sm font-bold text-emerald-600 flex items-center gap-2">
                        <CheckCircle2 size={16} /> Thank you! Your message has been sent successfully.
                    </p>
                )}
            </form>

            {/* Interactive Map Visual */}
            <div className="w-full mt-12 md:mt-20 overflow-hidden rounded-xl border border-gray-200">
                <Image srcimg={map} srcalt="Store Location Map" className="w-full h-auto object-cover" />
            </div>
        </div>
    )
}

export default Contactfrom
