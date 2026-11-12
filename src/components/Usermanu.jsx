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
            >
                <FaUser />
                <FaCaretDown />
            </button>

            {open && (
                <ul className="absolute right-0 top-full mt-4 w-57 bg-white border border-gray-100 text-center z-50">
                    <Link to={"/loging"}>
                        <li className="py-4 cursor-pointer hover:bg-primary hover:text-white">
                            My Account
                        </li>
                    </Link>

                    <Link to={"/loging"}>
                        <li className="py-4 cursor-pointer hover:bg-primary hover:text-white">
                            Log Out
                        </li>
                    </Link>
                </ul>
            )}
        </div>
    )
}

export default UserMenu