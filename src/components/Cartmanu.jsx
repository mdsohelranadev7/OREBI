import React, { useState, useRef, useEffect } from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { X } from 'lucide-react'
import { removeFromCart } from '../features/cart/cartSlice'

const Cartmanu = () => {
    const [open, setOpen] = useState(false)
    const menuRef = useRef(null)
    const dispatch = useDispatch()

    const cartItems = useSelector((state) => state.cart.cartItems)
    const totalCount = cartItems.reduce((acc, item) => acc + item.quantity, 0)
    const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)

    // Close dropdown on outside click
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
                className="relative flex items-center cursor-pointer p-1"
                aria-label="Shopping Cart"
            >
                <FaShoppingCart className="text-xl text-primary hover:text-black transition-colors" />
                {totalCount > 0 && (
                    <span className="absolute -top-2.5 -right-3 bg-primary text-white text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center leading-none">
                        {totalCount}
                    </span>
                )}
            </button>

            {open && (
                <div className="absolute right-0 top-full mt-4 w-88 bg-white border border-gray-200 shadow-2xl z-50 p-5 font-sans">
                    {cartItems.length === 0 ? (
                        <div className="py-6 text-center">
                            <p className="text-gry text-sm mb-4">Your cart is currently empty.</p>
                            <Link
                                to="/shop"
                                onClick={() => setOpen(false)}
                                className="inline-block bg-primary text-white text-xs font-bold py-2 px-5 hover:bg-black transition-colors"
                            >
                                Shop Now
                            </Link>
                        </div>
                    ) : (
                        <>
                            <div className="max-h-64 overflow-y-auto divide-y divide-gray-100 pr-1">
                                {cartItems.map((item) => (
                                    <div
                                        key={item.id}
                                        className="py-3 flex items-center justify-between gap-3 bg-[#f8f8f8] p-3 mb-2"
                                    >
                                        <div className="w-14 h-14 bg-white flex items-center justify-center shrink-0 border border-gray-100 overflow-hidden">
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                className="w-full h-full object-contain"
                                            />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <h4 className="text-sm font-bold text-primary truncate">
                                                {item.name}
                                            </h4>
                                            <p className="text-xs text-gry mt-0.5">
                                                {item.quantity} ×{' '}
                                                <span className="font-semibold text-primary">
                                                    ${item.price.toFixed(2)}
                                                </span>
                                            </p>
                                        </div>
                                        <button
                                            onClick={() => dispatch(removeFromCart(item.id))}
                                            className="text-gry hover:text-red-500 cursor-pointer p-1 transition-colors"
                                            title="Remove item"
                                        >
                                            <X size={16} />
                                        </button>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-4 pt-3 border-t border-gray-200">
                                <div className="flex justify-between items-center mb-4">
                                    <span className="text-sm text-gry">Subtotal:</span>
                                    <span className="text-base font-bold text-primary">
                                        ${subtotal.toFixed(2)}
                                    </span>
                                </div>
                                <div className="flex gap-2">
                                    <Link
                                        to="/cart"
                                        onClick={() => setOpen(false)}
                                        className="flex-1 text-center py-2.5 px-3 bg-white border border-primary text-primary font-bold text-xs hover:bg-primary hover:text-white transition-colors uppercase tracking-wider"
                                    >
                                        View Cart
                                    </Link>
                                    <Link
                                        to="/cart"
                                        onClick={() => setOpen(false)}
                                        className="flex-1 text-center py-2.5 px-3 bg-primary text-white font-bold text-xs hover:bg-black transition-colors uppercase tracking-wider"
                                    >
                                        Checkout
                                    </Link>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            )}
        </div>
    )
}

export default Cartmanu
