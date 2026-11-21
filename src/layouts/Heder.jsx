import React, { useEffect, useRef, useState } from 'react'
import Container from '../components/Container'
import Image from '../components/Image'
import logo from '../assets/Logo.png'
import { Link, useLocation } from 'react-router-dom'
import Bars from '../components/Bars'
import { Search, Menu, X } from 'lucide-react'
import Usermanu from '../components/Usermanu'
import Cartmanu from '../components/Cartmanu'

const Heder = () => {
    const [bars, setBars] = useState(false)
    const [mobileNavOpen, setMobileNavOpen] = useState(false)
    const manuref = useRef(null)
    const mobileNavRef = useRef(null)
    const location = useLocation()

    // Toggle category dropdown
    function handleShow() {
        setBars(!bars)
    }

    // Close category dropdown on outside click
    useEffect(() => {
        function handleOut(s) {
            if (manuref.current && !manuref.current.contains(s.target)) {
                setBars(false)
            }
            if (mobileNavRef.current && !mobileNavRef.current.contains(s.target)) {
                setMobileNavOpen(false)
            }
        }
        document.addEventListener("mousedown", handleOut)
        return () => document.removeEventListener("mousedown", handleOut)
    }, [])

    // Close mobile nav on route change
    useEffect(() => {
        setMobileNavOpen(false)
        setBars(false)
    }, [location.pathname])

    return (
        <header className="sticky w-full top-0 z-50 bg-white shadow-xs">
            {/* Top Navigation Bar: Logo & Main Menu */}
            <div className="border-b border-gray-200">
                <Container className="py-4 md:py-6">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <div className="shrink-0">
                            <Link to="/">
                                <Image srcimg={logo} srcalt="OREBI" className="w-24 sm:w-28 md:w-32 h-auto" />
                            </Link>
                        </div>

                        {/* Desktop Navigation Links */}
                        <nav className="hidden md:block">
                            <ul className="flex items-center gap-x-6 lg:gap-x-10 text-gry text-sm font-medium">
                                <li>
                                    <Link to="/" className={`hover:font-bold hover:text-primary transition-colors ${location.pathname === '/' ? 'font-bold text-primary' : ''}`}>
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/shop" className={`hover:font-bold hover:text-primary transition-colors ${location.pathname === '/shop' ? 'font-bold text-primary' : ''}`}>
                                        Shop
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/about" className={`hover:font-bold hover:text-primary transition-colors ${location.pathname === '/about' ? 'font-bold text-primary' : ''}`}>
                                        About
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/contact" className={`hover:font-bold hover:text-primary transition-colors ${location.pathname === '/contact' ? 'font-bold text-primary' : ''}`}>
                                        Contact
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/dashboard" className={`hover:font-bold hover:text-primary transition-colors ${location.pathname === '/dashboard' ? 'font-bold text-primary' : ''}`}>
                                        Dashboard
                                    </Link>
                                </li>
                            </ul>
                        </nav>

                        {/* Mobile Hamburger Button */}
                        <div className="flex items-center gap-3 md:hidden">
                            <button
                                onClick={() => setMobileNavOpen(!mobileNavOpen)}
                                className="p-2 border border-gray-200 rounded text-primary hover:bg-gray-100 transition-colors"
                                aria-label="Toggle navigation menu"
                            >
                                {mobileNavOpen ? <X size={20} /> : <Menu size={20} />}
                            </button>
                        </div>
                    </div>

                    {/* Mobile Navigation Dropdown */}
                    {mobileNavOpen && (
                        <nav ref={mobileNavRef} className="md:hidden mt-3 pt-3 border-t border-gray-100">
                            <ul className="flex flex-col text-sm font-medium text-gry divide-y divide-gray-100">
                                <li>
                                    <Link to="/" className="block py-3 hover:text-primary hover:font-bold">
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/shop" className="block py-3 hover:text-primary hover:font-bold">
                                        Shop
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/about" className="block py-3 hover:text-primary hover:font-bold">
                                        About
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/contact" className="block py-3 hover:text-primary hover:font-bold">
                                        Contact
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/dashboard" className="block py-3 hover:text-primary hover:font-bold">
                                        Dashboard
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/cart" className="block py-3 hover:text-primary hover:font-bold">
                                        Shopping Cart
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    )}
                </Container>
            </div>

            {/* Bottom Bar: Category Dropdown, Search, User & Cart */}
            <div className="py-3 md:py-5 bg-[#fafafa] border-b border-gray-100">
                <Container>
                    {/* Desktop Layout (md and up) */}
                    <div className="hidden md:flex items-center justify-between gap-4">
                        {/* Shop by Category */}
                        <div ref={manuref} className="relative shrink-0">
                            <button
                                onClick={handleShow}
                                className="flex items-center gap-x-2 text-xs lg:text-sm font-medium text-primary hover:font-bold cursor-pointer"
                            >
                                <Bars />
                                <span>Shop by Category</span>
                            </button>

                            {bars && (
                                <div className="absolute top-full left-0 mt-3 z-50 bg-primary text-white w-56 rounded-md shadow-xl overflow-hidden text-sm">
                                    <ul className="flex flex-col divide-y divide-[#3a3a3a]">
                                        <li>
                                            <Link to="/shop" onClick={() => setBars(false)} className="block px-5 py-3 hover:bg-black transition-colors">
                                                Accessories
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/shop" onClick={() => setBars(false)} className="block px-5 py-3 hover:bg-black transition-colors">
                                                Furniture
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/shop" onClick={() => setBars(false)} className="block px-5 py-3 hover:bg-black transition-colors">
                                                Electronics
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/shop" onClick={() => setBars(false)} className="block px-5 py-3 hover:bg-black transition-colors">
                                                Clothes
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/shop" onClick={() => setBars(false)} className="block px-5 py-3 hover:bg-black transition-colors">
                                                Bags
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/shop" onClick={() => setBars(false)} className="block px-5 py-3 hover:bg-black transition-colors">
                                                Home Appliances
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </div>

                        {/* Search Bar - Responsive width */}
                        <div className="flex-1 max-w-xl mx-4 relative">
                            <input
                                className="w-full border border-gray-300 rounded px-4 py-2.5 text-xs lg:text-sm outline-none focus:border-primary focus:shadow-xs transition-all pr-10 bg-white"
                                type="text"
                                placeholder="Search Products..."
                            />
                            <Search size={18} className="absolute top-1/2 right-3 -translate-y-1/2 text-gry pointer-events-none" />
                        </div>

                        {/* User & Cart Icons */}
                        <div className="flex items-center gap-x-6 shrink-0">
                            <Usermanu />
                            <Cartmanu />
                        </div>
                    </div>

                    {/* Mobile Layout (less than md) */}
                    <div className="md:hidden flex flex-col gap-3">
                        <div className="flex items-center justify-between">
                            {/* Shop by Category */}
                            <div ref={manuref} className="relative">
                                <button
                                    onClick={handleShow}
                                    className="flex items-center gap-x-2 text-xs font-semibold text-primary cursor-pointer p-1"
                                >
                                    <Bars />
                                    <span>Categories</span>
                                </button>

                                {bars && (
                                    <div className="absolute top-full left-0 mt-2 z-50 bg-primary text-white w-48 rounded shadow-xl overflow-hidden text-xs">
                                        <ul className="flex flex-col divide-y divide-[#3a3a3a]">
                                            <li>
                                                <Link to="/shop" onClick={() => setBars(false)} className="block px-4 py-2.5 hover:bg-black">
                                                    Accessories
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/shop" onClick={() => setBars(false)} className="block px-4 py-2.5 hover:bg-black">
                                                    Furniture
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/shop" onClick={() => setBars(false)} className="block px-4 py-2.5 hover:bg-black">
                                                    Electronics
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/shop" onClick={() => setBars(false)} className="block px-4 py-2.5 hover:bg-black">
                                                    Clothes
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/shop" onClick={() => setBars(false)} className="block px-4 py-2.5 hover:bg-black">
                                                    Bags
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                )}
                            </div>

                            {/* User & Cart Icons */}
                            <div className="flex items-center gap-x-5">
                                <Usermanu />
                                <Cartmanu />
                            </div>
                        </div>

                        {/* Search Bar - Full Width on Mobile */}
                        <div className="relative w-full">
                            <input
                                className="w-full border border-gray-300 rounded px-3.5 py-2 text-xs outline-none focus:border-primary pr-9 bg-white"
                                type="text"
                                placeholder="Search Products..."
                            />
                            <Search size={16} className="absolute top-1/2 right-3 -translate-y-1/2 text-gry pointer-events-none" />
                        </div>
                    </div>
                </Container>
            </div>
        </header>
    )
}

export default Heder
