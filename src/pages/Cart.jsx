import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import Container from '../components/Container'
import { ChevronRight, X, Plus, Minus, Trash2, ArrowLeft } from 'lucide-react'
import {
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
} from '../features/cart/cartSlice'

const Cart = () => {
    const dispatch = useDispatch()
    const cartItems = useSelector((state) => state.cart.cartItems)

    const subtotal = cartItems.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
    )

    return (
        <Container>
            <div className="mt-10 md:mt-16 mb-16 md:mb-24 font-sans">
                <h1 className="text-3xl sm:text-4xl md:text-[49px] font-sans font-bold text-primary">
                    Cart
                </h1>
                <h4 className="flex items-center gap-1.5 text-sm text-gry mb-8 md:mb-14">
                    <Link to="/" className="hover:text-primary transition-colors">
                        Home
                    </Link>
                    <ChevronRight size={14} />
                    <span className="font-semibold text-primary">Cart</span>
                </h4>

                {cartItems.length === 0 ? (
                    <div className="py-16 md:py-24 text-center border border-dashed border-gray-300 rounded-xl bg-white px-4">
                        <h3 className="text-xl sm:text-2xl font-bold text-primary mb-3">
                            Your shopping cart is empty
                        </h3>
                        <p className="text-gry text-sm sm:text-base mb-8">
                            Looks like you haven't added anything to your cart yet.
                        </p>
                        <Link
                            to="/shop"
                            className="inline-block bg-primary text-white font-bold text-xs sm:text-sm py-3.5 px-8 sm:px-10 hover:bg-black transition-colors uppercase tracking-wider rounded"
                        >
                            Continue Shopping
                        </Link>
                    </div>
                ) : (
                    <div>
                        {/* Desktop Table Header (Hidden on Mobile/Tablet) */}
                        <div className="hidden lg:grid grid-cols-12 bg-[#f5f5f7] py-4 px-6 text-primary font-bold text-sm mb-6 rounded-t">
                            <div className="col-span-6">Product</div>
                            <div className="col-span-2 text-center">Price</div>
                            <div className="col-span-2 text-center">Quantity</div>
                            <div className="col-span-2 text-right">Total</div>
                        </div>

                        {/* Desktop Table Rows */}
                        <div className="hidden lg:block divide-y divide-gray-200 border-b border-gray-200 bg-white rounded-b">
                            {cartItems.map((item) => (
                                <div
                                    key={item.id}
                                    className="py-5 px-6 grid grid-cols-12 items-center"
                                >
                                    <div className="col-span-6 flex items-center gap-x-4">
                                        <button
                                            onClick={() => dispatch(removeFromCart(item.id))}
                                            className="text-gry hover:text-red-600 cursor-pointer p-1 transition-colors"
                                            title="Remove item"
                                        >
                                            <X size={18} />
                                        </button>
                                        <div className="w-20 h-20 bg-[#f5f5f7] p-2 flex items-center justify-center shrink-0 rounded">
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                className="w-full h-full object-contain"
                                            />
                                        </div>
                                        <div className="min-w-0 pr-4">
                                            <h4 className="font-bold text-primary text-sm truncate">
                                                {item.name}
                                            </h4>
                                            {item.badge && (
                                                <span className="inline-block mt-1 text-[11px] bg-gray-100 px-2 py-0.5 text-gry rounded">
                                                    {item.badge}
                                                </span>
                                            )}
                                        </div>
                                    </div>

                                    <div className="col-span-2 text-center font-bold text-primary text-sm">
                                        ${item.price.toFixed(2)}
                                    </div>

                                    <div className="col-span-2 flex justify-center">
                                        <div className="border border-gray-300 flex items-center justify-between w-28 py-1 px-3 rounded select-none">
                                            <button
                                                onClick={() => dispatch(decreaseQuantity(item.id))}
                                                className="cursor-pointer text-gry hover:text-primary transition-colors"
                                                aria-label="Decrease quantity"
                                            >
                                                <Minus size={13} />
                                            </button>
                                            <span className="font-bold text-primary text-xs">
                                                {item.quantity}
                                            </span>
                                            <button
                                                onClick={() => dispatch(increaseQuantity(item.id))}
                                                className="cursor-pointer text-gry hover:text-primary transition-colors"
                                                aria-label="Increase quantity"
                                            >
                                                <Plus size={13} />
                                            </button>
                                        </div>
                                    </div>

                                    <div className="col-span-2 text-right font-bold text-primary text-sm">
                                        ${(item.price * item.quantity).toFixed(2)}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Mobile & Tablet Card Layout (Screen < lg) */}
                        <div className="lg:hidden space-y-4">
                            {cartItems.map((item) => (
                                <div
                                    key={item.id}
                                    className="bg-white border border-gray-200 rounded-xl p-4 flex gap-4 items-center justify-between shadow-xs"
                                >
                                    <div className="w-20 h-20 bg-[#f5f5f7] p-2 flex items-center justify-center shrink-0 rounded">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-full h-full object-contain"
                                        />
                                    </div>

                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-start justify-between gap-2">
                                            <h4 className="font-bold text-primary text-sm truncate">
                                                {item.name}
                                            </h4>
                                            <button
                                                onClick={() => dispatch(removeFromCart(item.id))}
                                                className="text-gry hover:text-red-600 cursor-pointer p-1"
                                                title="Remove item"
                                            >
                                                <X size={16} />
                                            </button>
                                        </div>

                                        <p className="text-xs text-gry font-medium mt-1">
                                            Unit Price: <span className="font-bold text-primary">${item.price.toFixed(2)}</span>
                                        </p>

                                        <div className="flex items-center justify-between mt-3 pt-2 border-t border-gray-100">
                                            {/* Quantity Selector */}
                                            <div className="border border-gray-300 flex items-center justify-between w-24 py-1 px-2.5 rounded">
                                                <button
                                                    onClick={() => dispatch(decreaseQuantity(item.id))}
                                                    className="cursor-pointer text-gry hover:text-primary"
                                                >
                                                    <Minus size={12} />
                                                </button>
                                                <span className="font-bold text-primary text-xs">
                                                    {item.quantity}
                                                </span>
                                                <button
                                                    onClick={() => dispatch(increaseQuantity(item.id))}
                                                    className="cursor-pointer text-gry hover:text-primary"
                                                >
                                                    <Plus size={12} />
                                                </button>
                                            </div>

                                            {/* Subtotal */}
                                            <span className="font-bold text-primary text-sm">
                                                ${(item.price * item.quantity).toFixed(2)}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Cart Action Buttons */}
                        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 mt-6">
                            <Link
                                to="/shop"
                                className="inline-flex items-center justify-center gap-2 border border-primary text-primary font-bold text-xs uppercase tracking-wider py-3 px-6 hover:bg-primary hover:text-white transition-colors rounded text-center"
                            >
                                <ArrowLeft size={14} /> Continue Shopping
                            </Link>
                            <button
                                onClick={() => dispatch(clearCart())}
                                className="inline-flex items-center justify-center gap-2 border border-red-500 text-red-500 font-bold text-xs uppercase tracking-wider py-3 px-6 hover:bg-red-500 hover:text-white cursor-pointer transition-colors rounded text-center"
                            >
                                <Trash2 size={14} /> Clear Cart
                            </button>
                        </div>

                        {/* Cart Totals Summary */}
                        <div className="flex justify-end mt-10 md:mt-14">
                            <div className="w-full sm:w-96 md:w-105 bg-white border border-gray-200 rounded-xl p-6 shadow-xs">
                                <h3 className="text-lg font-bold text-primary mb-4 pb-3 border-b border-gray-100">
                                    Cart Totals
                                </h3>
                                <div className="space-y-3 text-sm">
                                    <div className="flex justify-between py-1">
                                        <span className="text-gry font-medium">Subtotal</span>
                                        <span className="font-bold text-primary">
                                            ${subtotal.toFixed(2)}
                                        </span>
                                    </div>
                                    <div className="flex justify-between py-1">
                                        <span className="text-gry font-medium">Shipping</span>
                                        <span className="text-emerald-600 font-bold">
                                            Free
                                        </span>
                                    </div>
                                    <div className="flex justify-between py-3 border-t border-gray-200 text-base font-bold text-primary">
                                        <span>Total</span>
                                        <span>${subtotal.toFixed(2)}</span>
                                    </div>
                                </div>

                                <button
                                    onClick={() => alert('Proceeding to checkout with total: $' + subtotal.toFixed(2))}
                                    className="w-full mt-4 bg-primary text-white font-bold text-xs uppercase tracking-wider py-4 rounded hover:bg-black transition-colors cursor-pointer"
                                >
                                    Proceed to Checkout
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </Container>
    )
}

export default Cart
