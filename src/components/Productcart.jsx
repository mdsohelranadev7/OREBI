import React, { useState } from 'react'
import Badge from './Badge'
import Carticon from './Carticon'
import Image from './Image'
import { Heart, RefreshCw, ShoppingCart, Check } from 'lucide-react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../features/cart/cartSlice'

const Productcart = ({ id, productimg, productname, productprice, badgename }) => {
    const dispatch = useDispatch()
    const [added, setAdded] = useState(false)

    const handleAddToCart = (e) => {
        e.preventDefault()
        e.stopPropagation()
        dispatch(
            addToCart({
                id: id || `${productname}_${productimg}`,
                name: productname,
                price: productprice,
                image: productimg,
                badge: badgename,
            })
        )
        setAdded(true)
        setTimeout(() => setAdded(false), 1500)
    }

    return (
        <div className="relative group overflow-hidden bg-white rounded-lg transition-all duration-300 hover:shadow-lg border border-gray-100 flex flex-col justify-between h-full">
            {/* Image Area */}
            <div className="relative w-full aspect-square bg-[#f8f8f8] flex items-center justify-center p-4 overflow-hidden">
                <Image srcimg={productimg} srcalt={productname} className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500" />
                {badgename && (
                    <Badge
                        Badgetext={badgename}
                        className="py-1 px-3 text-xs font-bold text-white bg-primary absolute top-3 left-3 rounded shadow-xs"
                    />
                )}

                {/* Desktop Slide-up Actions Panel */}
                <div className="hidden md:flex flex-col gap-2 absolute bottom-0 inset-x-0 bg-white/95 backdrop-blur-xs p-3 shadow-md translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <div className="flex justify-end items-center gap-x-2 text-xs text-gry hover:text-primary cursor-pointer transition-colors">
                        <span>Add to Wish List</span> <Heart size={14} />
                    </div>
                    <div className="flex justify-end items-center gap-x-2 text-xs text-gry hover:text-primary cursor-pointer transition-colors">
                        <span>Compare</span> <RefreshCw size={14} />
                    </div>
                    <button
                        onClick={handleAddToCart}
                        className={`flex justify-end items-center gap-x-2 text-xs font-bold cursor-pointer transition-colors pt-1 border-t border-gray-100 ${
                            added ? 'text-emerald-600' : 'text-primary hover:text-black'
                        }`}
                    >
                        {added ? (
                            <>
                                <span>Added to Cart!</span> <Check size={14} />
                            </>
                        ) : (
                            <>
                                <span>Add to Cart</span> <Carticon className="text-black" />
                            </>
                        )}
                    </button>
                </div>
            </div>

            {/* Product Meta & Mobile Add Button */}
            <div className="p-4 flex flex-col justify-between flex-1">
                <div className="flex items-start justify-between gap-2">
                    <h3 className="font-bold text-sm sm:text-base text-primary font-sans line-clamp-1">
                        {productname}
                    </h3>
                    <h4 className="font-bold text-sm sm:text-base text-primary font-sans shrink-0">
                        {productprice}
                    </h4>
                </div>

                {/* Mobile Direct Add-to-Cart Button (Screen < md) */}
                <button
                    onClick={handleAddToCart}
                    className={`md:hidden mt-3 w-full py-2 px-3 rounded text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors cursor-pointer ${
                        added ? 'bg-emerald-600 text-white' : 'bg-primary text-white hover:bg-black'
                    }`}
                >
                    {added ? (
                        <>
                            <Check size={13} /> Added!
                        </>
                    ) : (
                        <>
                            <ShoppingCart size={13} /> Add to Cart
                        </>
                    )}
                </button>
            </div>
        </div>
    )
}

export default Productcart
