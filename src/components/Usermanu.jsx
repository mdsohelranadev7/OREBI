import React, { useState, useRef, useEffect } from 'react'
import { FaUser, FaCaretDown } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const UserMenu = () => {
    const [open, setOpen] = useState(false)
    const menuRef = useRef(null)

    // বাইরে click করলে dropdown বন্ধ হবে
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (menuRef.current && !menuRef.current.contains(e.target)) {
                setOpen(false)
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    return (
        <div ref={menuRef} className="relative">
            <button
                onClick={() => setOpen(!open)}
                className="flex items-center gap-1 cursor-pointer"
                aria-label="User Account"
            >
                <FaUser />
                <FaCaretDown />
            </button>

            {open && (
                <ul className="absolute right-0 top-full mt-4 w-57 bg-white border border-gray-100 text-center z-50 shadow-lg">
                    <Link to={"/dashboard"} onClick={() => setOpen(false)}>
                        <li className="py-3.5 cursor-pointer hover:bg-primary hover:text-white font-semibold text-sm transition-colors border-b border-gray-50">
                            Dashboard
                        </li>
                    </Link>
                    <Link to={"/dashboard"} onClick={() => setOpen(false)}>
                        <li className="py-3.5 cursor-pointer hover:bg-primary hover:text-white font-semibold text-sm transition-colors border-b border-gray-50">
                            My Account
                        </li>
                    </Link>
                    <Link to={"/loging"} onClick={() => setOpen(false)}>
                        <li className="py-3.5 cursor-pointer hover:bg-primary hover:text-white font-semibold text-sm transition-colors">
                            Log In
                        </li>
                    </Link>
                </ul>
            )}
        </div>
    )
}

export default UserMenu
