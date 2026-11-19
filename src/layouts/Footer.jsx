import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Container from '../components/Container'
import Image from '../components/Image'
import logo from '../assets/Logo.png'
import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaTwitter,
    FaYoutube,
    FaCreditCard
} from 'react-icons/fa'
import {
    Phone,
    Mail,
    MapPin,
    Clock,
    Send,
    CheckCircle2
} from 'lucide-react'

const Footer = () => {
    const [email, setEmail] = useState('')
    const [subscribed, setSubscribed] = useState(false)

    const handleSubscribe = (e) => {
        e.preventDefault()
        if (email.trim()) {
            setSubscribed(true)
            setTimeout(() => {
                setSubscribed(false)
                setEmail('')
            }, 3000)
        }
    }

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <footer className="bg-[#f5f5f5] border-t border-gray-200 font-sans pt-16 pb-12">
            <Container>
                {/* 5-Column Responsive Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 lg:gap-8 pb-14 border-b border-gray-200">
                    {/* Column 1: Quick Menu */}
                    <div>
                        <h4 className="font-bold text-base text-primary uppercase tracking-wider mb-5">
                            Menu
                        </h4>
                        <ul className="flex flex-col gap-y-2.5 text-sm text-[#6d6d6d]">
                            <li>
                                <Link to="/" onClick={scrollToTop} className="hover:text-primary hover:font-bold transition-all">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/shop" onClick={scrollToTop} className="hover:text-primary hover:font-bold transition-all">
                                    Shop
                                </Link>
                            </li>
                            <li>
                                <Link to="/about" onClick={scrollToTop} className="hover:text-primary hover:font-bold transition-all">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" onClick={scrollToTop} className="hover:text-primary hover:font-bold transition-all">
                                    Contact Us
                                </Link>
                            </li>
                            <li>
                                <Link to="/dashboard" onClick={scrollToTop} className="hover:text-primary hover:font-bold transition-all">
                                    My Account / Dashboard
                                </Link>
                            </li>
                            <li>
                                <Link to="/cart" onClick={scrollToTop} className="hover:text-primary hover:font-bold transition-all">
                                    Shopping Cart
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Column 2: Shop Categories */}
                    <div>
                        <h4 className="font-bold text-base text-primary uppercase tracking-wider mb-5">
                            Shop Categories
                        </h4>
                        <ul className="flex flex-col gap-y-2.5 text-sm text-[#6d6d6d]">
                            <li>
                                <Link to="/shop" onClick={scrollToTop} className="hover:text-primary hover:font-bold transition-all">
                                    Smartphones & Tablets
                                </Link>
                            </li>
                            <li>
                                <Link to="/shop" onClick={scrollToTop} className="hover:text-primary hover:font-bold transition-all">
                                    Laptops & Computers
                                </Link>
                            </li>
                            <li>
                                <Link to="/shop" onClick={scrollToTop} className="hover:text-primary hover:font-bold transition-all">
                                    Furniture & Decor
                                </Link>
                            </li>
                            <li>
                                <Link to="/shop" onClick={scrollToTop} className="hover:text-primary hover:font-bold transition-all">
                                    Bags & Backpacks
                                </Link>
                            </li>
                            <li>
                                <Link to="/shop" onClick={scrollToTop} className="hover:text-primary hover:font-bold transition-all">
                                    Fragrances & Beauty
                                </Link>
                            </li>
                            <li>
                                <Link to="/shop" onClick={scrollToTop} className="hover:text-primary hover:font-bold transition-all">
                                    Clothes & Footwear
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Column 3: Help & Customer Care */}
                    <div>
                        <h4 className="font-bold text-base text-primary uppercase tracking-wider mb-5">
                            Customer Care
                        </h4>
                        <ul className="flex flex-col gap-y-2.5 text-sm text-[#6d6d6d]">
                            <li>
                                <Link to="/contact" onClick={scrollToTop} className="hover:text-primary hover:font-bold transition-all">
                                    Help & Support Center
                                </Link>
                            </li>
                            <li>
                                <Link to="/about" onClick={scrollToTop} className="hover:text-primary hover:font-bold transition-all">
                                    Shipping & Delivery
                                </Link>
                            </li>
                            <li>
                                <Link to="/about" onClick={scrollToTop} className="hover:text-primary hover:font-bold transition-all">
                                    Return & Refund Policy
                                </Link>
                            </li>
                            <li>
                                <Link to="/about" onClick={scrollToTop} className="hover:text-primary hover:font-bold transition-all">
                                    Secure Payments
                                </Link>
                            </li>
                            <li>
                                <Link to="/about" onClick={scrollToTop} className="hover:text-primary hover:font-bold transition-all">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link to="/about" onClick={scrollToTop} className="hover:text-primary hover:font-bold transition-all">
                                    Terms & Conditions
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Column 4: Contact Info */}
                    <div>
                        <h4 className="font-bold text-base text-primary uppercase tracking-wider mb-5">
                            Store Contact
                        </h4>
                        <ul className="flex flex-col gap-y-3 text-sm text-[#6d6d6d]">
                            <li className="flex items-start gap-2.5">
                                <Phone size={16} className="text-primary shrink-0 mt-0.5" />
                                <a href="tel:0526115711" className="font-bold text-primary hover:underline">
                                    (052) 611-5711
                                </a>
                            </li>
                            <li className="flex items-start gap-2.5">
                                <Mail size={16} className="text-primary shrink-0 mt-0.5" />
                                <a href="mailto:company@domain.com" className="hover:text-primary transition-colors">
                                    company@domain.com
                                </a>
                            </li>
                            <li className="flex items-start gap-2.5">
                                <MapPin size={16} className="text-primary shrink-0 mt-0.5" />
                                <span>575 Crescent Ave. Quakertown, PA 18951</span>
                            </li>
                            <li className="flex items-start gap-2.5">
                                <Clock size={16} className="text-primary shrink-0 mt-0.5" />
                                <span className="text-xs">Mon - Fri: 9:00 AM - 6:00 PM</span>
                            </li>
                        </ul>
                    </div>

                    {/* Column 5: Brand & Newsletter */}
                    <div className="sm:col-span-2 md:col-span-3 lg:col-span-1">
                        <Link to="/" onClick={scrollToTop} className="inline-block mb-4">
                            <Image srcimg={logo} srcalt="OREBI" className="w-28" />
                        </Link>
                        <p className="text-xs text-[#6d6d6d] leading-relaxed mb-4">
                            Subscribe to receive exclusive deals, new arrivals, and special promotions directly in your inbox.
                        </p>

                        <form onSubmit={handleSubscribe} className="flex flex-col gap-2">
                            <div className="relative">
                                <input
                                    type="email"
                                    required
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full bg-white border border-gray-300 rounded px-3 py-2 text-xs text-primary outline-none focus:border-primary transition-colors"
                                />
                                <button
                                    type="submit"
                                    className="absolute right-1 top-1 bottom-1 bg-primary text-white px-2.5 rounded text-xs flex items-center justify-center hover:bg-black transition-colors cursor-pointer"
                                    title="Subscribe"
                                >
                                    <Send size={12} />
                                </button>
                            </div>
                            {subscribed && (
                                <p className="text-[11px] text-emerald-600 font-bold flex items-center gap-1">
                                    <CheckCircle2 size={12} /> Subscribed successfully!
                                </p>
                            )}
                        </form>
                    </div>
                </div>

                {/* Bottom Row: Social Icons & Copyright */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8">
                    {/* Social Media Icons with Smooth Hover Effects */}
                    <div className="flex items-center gap-x-3">
                        <a
                            href="https://www.facebook.com/sohelrana.dev7/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Facebook"
                            className="w-9 h-9 rounded-full bg-white border border-gray-200 flex items-center justify-center text-primary text-sm transition-all duration-300 hover:bg-primary hover:text-white hover:-translate-y-1 hover:shadow-md"
                        >
                            <FaFacebookF />
                        </a>
                        <a
                            href="https://www.instagram.com/mdsohelrana.dev7/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Instagram"
                            className="w-9 h-9 rounded-full bg-white border border-gray-200 flex items-center justify-center text-primary text-sm transition-all duration-300 hover:bg-primary hover:text-white hover:-translate-y-1 hover:shadow-md"
                        >
                            <FaInstagram />
                        </a>
                        <a
                            href="https://www.linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                            className="w-9 h-9 rounded-full bg-white border border-gray-200 flex items-center justify-center text-primary text-sm transition-all duration-300 hover:bg-primary hover:text-white hover:-translate-y-1 hover:shadow-md"
                        >
                            <FaLinkedinIn />
                        </a>
                        <a
                            href="https://twitter.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Twitter"
                            className="w-9 h-9 rounded-full bg-white border border-gray-200 flex items-center justify-center text-primary text-sm transition-all duration-300 hover:bg-primary hover:text-white hover:-translate-y-1 hover:shadow-md"
                        >
                            <FaTwitter />
                        </a>
                        <a
                            href="https://youtube.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="YouTube"
                            className="w-9 h-9 rounded-full bg-white border border-gray-200 flex items-center justify-center text-primary text-sm transition-all duration-300 hover:bg-primary hover:text-white hover:-translate-y-1 hover:shadow-md"
                        >
                            <FaYoutube />
                        </a>
                    </div>

                    {/* Copyright & Payment Badges */}
                    <div className="flex flex-col sm:flex-row items-center gap-4 text-xs text-[#6d6d6d] text-center md:text-right">
                        <span>
                            © 2026 <strong>OREBI</strong> Minimal eCommerce. All rights reserved.
                        </span>
                        <div className="flex items-center gap-2 text-gray-400">
                            <span className="px-2 py-0.5 border border-gray-300 rounded bg-white font-mono text-[10px]">VISA</span>
                            <span className="px-2 py-0.5 border border-gray-300 rounded bg-white font-mono text-[10px]">MC</span>
                            <span className="px-2 py-0.5 border border-gray-300 rounded bg-white font-mono text-[10px]">AMEX</span>
                            <span className="px-2 py-0.5 border border-gray-300 rounded bg-white font-mono text-[10px]">PAYPAL</span>
                        </div>
                    </div>
                </div>
            </Container>
        </footer>
    )
}

export default Footer
