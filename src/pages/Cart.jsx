import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import Container from '../components/Container'
import { ChevronRight, X, Plus, Minus, Trash2 } from 'lucide-react'
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
            <div className="mt-31 mb-30 font-sans">
                <h2 className="text-[49px] font-sans font-bold text-primary">Cart</h2>
                <h4 className="flex items-center gap-x-2 text-gry mb-12">
                    <Link to="/" className="hover:text-primary">
                        Home
                    </Link>{' '}
                    <ChevronRight size={16} /> Cart
                </h4>

                {cartItems.length === 0 ? (
                    <div className="py-20 text-center border border-dashed border-gray-300 rounded-md">
                        <h3 className="text-2xl font-bold text-primary mb-3">
                            Your shopping cart is empty
                        </h3>
                        <p className="text-gry text-base mb-8">
                            Looks like you haven't added anything to your cart yet.
                        </p>
                        <Link
                            to="/shop"
                            className="inline-block bg-primary text-white font-bold text-sm py-4 px-10 hover:bg-black transition-colors uppercase tracking-wider"
                        >
                            Continue Shopping
                        </Link>
                    </div>
                ) : (
                    <div>
                        {/* Table Header */}
                        <div className="bg-[#f5f5f7] py-4 px-6 grid grid-cols-12 text-primary font-bold text-base mb-6">
                            <div className="col-span-5">Product</div>
                            <div className="col-span-2 text-center">Price</div>
                            <div className="col-span-3 text-center">Quantity</div>
                            <div className="col-span-2 text-right">Total</div>
                        </div>

                        {/* Table Rows */}
                        <div className="divide-y divide-gray-200 border-b border-gray-200">
                            {cartItems.map((item) => (
                                <div
                                    key={item.id}
                                    className="py-6 px-6 grid grid-cols-12 items-center"
                                >
                                    {/* Product Details */}
                                    <div className="col-span-5 flex items-center gap-x-5">
                                        <button
                                            onClick={() => dispatch(removeFromCart(item.id))}
                                            className="text-gry hover:text-red-600 cursor-pointer p-1 transition-colors"
                                            title="Remove item"
                                        >
                                            <X size={18} />
                                        </button>
                                        <div className="w-20 h-20 bg-[#f5f5f7] p-2 flex items-center justify-center shrink-0">
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                className="w-full h-full object-contain"
                                            />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-primary text-base">
                                                {item.name}
                                            </h4>
                                            {item.badge && (
                                                <span className="inline-block mt-1 text-xs bg-gray-200 px-2 py-0.5 text-gry">
                                                    {item.badge}
                                                </span>
                                            )}
                                        </div>
                                    </div>

                                    {/* Price */}
                                    <div className="col-span-2 text-center font-bold text-primary text-base">
                                        ${item.price.toFixed(2)}
                                    </div>

                                    {/* Quantity Controls */}
                                    <div className="col-span-3 flex justify-center">
                                        <div className="border border-gray-300 flex items-center justify-between w-32 py-1.5 px-4 select-none">
                                            <button
                                                onClick={() => dispatch(decreaseQuantity(item.id))}
                                                className="cursor-pointer text-gry hover:text-primary transition-colors disabled:opacity-30"
                                                aria-label="Decrease quantity"
                                            >
                                                <Minus size={14} />
                                            </button>
                                            <span className="font-bold text-primary text-sm">
                                                {item.quantity}
                                            </span>
                                            <button
                                                onClick={() => dispatch(increaseQuantity(item.id))}
                                                className="cursor-pointer text-gry hover:text-primary transition-colors"
                                                aria-label="Increase quantity"
                                            >
                                                <Plus size={14} />
                                            </button>
                                        </div>
                                    </div>

                                    {/* Total */}
                                    <div className="col-span-2 text-right font-bold text-primary text-base">
                                        ${(item.price * item.quantity).toFixed(2)}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Cart Action Buttons */}
                        <div className="flex justify-between items-center mt-6">
                            <Link
                                to="/shop"
                                className="inline-block border border-primary text-primary font-bold text-sm py-3 px-8 hover:bg-primary hover:text-white transition-colors"
                            >
                                Continue Shopping
                            </Link>
                            <button
                                onClick={() => dispatch(clearCart())}
                                className="flex items-center gap-x-2 border border-red-500 text-red-500 font-bold text-sm py-3 px-8 hover:bg-red-500 hover:text-white cursor-pointer transition-colors"
                            >
                                <Trash2 size={16} /> Clear Cart
                            </button>
                        </div>

                        {/* Cart Totals Summary */}
                        <div className="flex justify-end mt-12">
                            <div className="w-110">
                                <h3 className="text-xl font-bold text-primary text-right mb-6">
                                    Cart totals
                                </h3>
                                <div className="border border-gray-200">
                                    <div className="flex justify-between py-3.5 px-5 border-b border-gray-200">
                                        <span className="font-bold text-primary text-base">
                                            Subtotal
                                        </span>
                                        <span className="text-gry font-medium text-base">
                                            ${subtotal.toFixed(2)}
                                        </span>
                                    </div>
                                    <div className="flex justify-between py-3.5 px-5 border-b border-gray-200">
                                        <span className="font-bold text-primary text-base">
                                            Shipping
                                        </span>
                                        <span className="text-green-600 font-medium text-base">
                                            Free
                                        </span>
                                    </div>
                                    <div className="flex justify-between py-3.5 px-5 bg-[#fafafa]">
                                        <span className="font-bold text-primary text-base">
                                            Total
                                        </span>
                                        <span className="font-bold text-primary text-lg">
                                            ${subtotal.toFixed(2)}
                                        </span>
                                    </div>
                                </div>
                                <div className="flex justify-end mt-6">
                                    <button
                                        onClick={() =>
                                            alert(
                                                'Thank you for your order! Checkout functionality is ready.'
                                            )
                                        }
                                        className="bg-primary text-white font-bold text-sm py-4 px-8 hover:bg-black transition-colors uppercase tracking-wider cursor-pointer"
                                    >
                                        Proceed to Checkout
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </Container>
    )
}

export default Cart

