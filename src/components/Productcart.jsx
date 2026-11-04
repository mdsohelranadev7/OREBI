import React from 'react'
import itemsone from '../assets/items1.png'
import Badge from './Badge'
import Carticon from './Carticon'
import Image from './Image'
import { Heart, RefreshCw } from 'lucide-react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../features/cart/cartSlice'

const Productcart = ({ id, productimg, productname, productprice, badgename }) => {
    const dispatch = useDispatch()

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
    }

    return (
        <div className="relative group overflow-hidden">
            <Image srcimg={productimg} className={"w-full"} />
            {badgename && (
                <Badge Badgetext={badgename} className={"py-2.5 px-7.5 text-white bg-primary absolute top-5 left-5"} />
            )}
            <div className="flex justify-between mt-6">
                <h3 className="font-bold text-primary font-sans">{productname}</h3>
                <h4 className="text-gry font-sans">{productprice}</h4>
                <div className="absolute bottom-11 right-0 bg-white w-full opacity-0 group-hover:opacity-100 duration-500 translate-x-full group-hover:translate-x-0">
                    <div className='flex justify-end items-center gap-x-4 mt-5 text-[16px] pr-8 text-gry cursor-pointer hover:text-primary transition-colors'>
                        Add to Wish List <Heart className={"text-black"} size={18} />
                    </div>
                    <div className='flex justify-end items-center gap-x-4 mt-5 text-[16px] pr-8 text-gry cursor-pointer hover:text-primary transition-colors'>
                        Compare <RefreshCw className={"text-black"} size={18} />
                    </div>
                    <div
                        onClick={handleAddToCart}
                        className='flex justify-end items-center gap-x-4 mt-5 text-[16px] pr-8 text-primary cursor-pointer hover:font-bold select-none transition-all'
                    >
                        Add to Cart <Carticon className={"text-black"} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Productcart
