import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Container from './Container'
import { ChevronRight } from 'lucide-react'

const Loging = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = (e) => {
        e.preventDefault()
        alert(`Logged in as ${email || 'Customer'}`)
    }

    return (
        <Container>
            <div className="mt-10 md:mt-16 mb-16 md:mb-24 font-sans">
                <h1 className="text-3xl sm:text-4xl md:text-[49px] font-sans font-bold text-primary">
                    Login
                </h1>
                <h4 className="flex items-center gap-1.5 text-sm text-gry mb-10 md:mb-16">
                    <Link to="/" className="hover:text-primary transition-colors">Home</Link>
                    <ChevronRight size={14} />
                    <span className="font-semibold text-primary">Login</span>
                </h4>

                <div className="max-w-2xl">
                    <p className="pb-8 border-b border-gray-200 text-gry text-sm leading-relaxed mb-8">
                        Welcome to Orebi. Please sign in to access your dashboard, review your order history, and manage your account details.
                    </p>

                    <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-6">
                        Returning Customer
                    </h2>

                    <form onSubmit={handleLogin} className="w-full max-w-md flex flex-col gap-y-6">
                        <div className="flex flex-col gap-y-2">
                            <label className="text-sm font-bold text-primary" htmlFor="loginEmail">
                                Email Address
                            </label>
                            <input
                                id="loginEmail"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="border-b border-gray-300 outline-none py-2 text-sm text-primary focus:border-primary transition-colors placeholder:text-gray-400"
                                type="email"
                                placeholder="Enter your email"
                            />
                        </div>

                        <div className="flex flex-col gap-y-2">
                            <label className="text-sm font-bold text-primary" htmlFor="loginPassword">
                                Password
                            </label>
                            <input
                                id="loginPassword"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="border-b border-gray-300 outline-none py-2 text-sm text-primary focus:border-primary transition-colors placeholder:text-gray-400"
                                type="password"
                                placeholder="Enter your password"
                            />
                        </div>

                        <div className="flex items-center justify-between text-xs text-gry">
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input type="checkbox" className="rounded" />
                                <span>Remember me</span>
                            </label>
                            <a href="#" className="hover:text-primary underline">Forgot password?</a>
                        </div>

                        <button
                            type="submit"
                            className="w-full sm:w-auto py-3.5 px-10 bg-primary text-white font-bold text-xs uppercase tracking-wider rounded hover:bg-black transition-colors cursor-pointer"
                        >
                            Log In
                        </button>
                    </form>
                </div>
            </div>
        </Container>
    )
}

export default Loging
