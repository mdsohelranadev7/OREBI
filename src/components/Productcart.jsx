
import itemsone from '../assets/items1.png'
import Badge from './Badge'
import Carticon from './Carticon'
import Image from './Image'
import { Heart, RefreshCw } from 'lucide-react'




const Productcart = ({ productimg, productname, productprice, badgename }) => {
    return (

        <>
            <div className=" relative group">
                <Image srcimg={productimg} />
                <Badge Badgetext={badgename} className={"py-2.5 px-7.5 text-white bg-primary absolute top-5 left-5"} />
                <div className="flex justify-between mt-6">
                    <h3>{productname}</h3>
                    <h4>{productprice}</h4>
                </div>
                <div className=" absolute bottom-11 right-0 bg-white w-full opacity-0 group-hover:opacity-100  duration-500 translate-x-full group-hover:translate-x-0">
                    <div className=' flex justify-end gap-x-4 mt-5 text-[16px] pr-8 text-gry'>Add to Wish List <Heart className={"text-black"} /></div>
                    <div className=' flex justify-end gap-x-4 mt-5 text-[16px] pr-8 text-gry'>Compare <RefreshCw className={"text-black"} /></div>
                    <div className=' flex justify-end gap-x-4 mt-5 text-[16px] pr-8 text-primary'>Add to Cart <Carticon className={"text-black"} /> </div>
                </div>
            </div>
        </>

    )
}

export default Productcart