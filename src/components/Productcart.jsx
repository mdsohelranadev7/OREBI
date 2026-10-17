
import itemsone from '../assets/items1.png'
import Badge from './Badge'
import Carticon from './Carticon'
import Image from './Image'
import { Heart, RefreshCw } from 'lucide-react'




const Productcart = ({ productimg, productname, productprice, badgename }) => {
    return (

        <>
            <div className=" relative">
                <Image srcimg={productimg} />
                <Badge Badgetext={badgename} className={"py-2.5 px-7.5 text-white bg-primary absolute top-5 left-5"} />
                <div className="flex justify-between mt-6">
                    <h3>{productname}</h3>
                    <h4>{productprice}</h4>
                </div>
                <div className="">
                    <div className=' flex'>Add to Wish List <Heart /></div>
                    <div className=' flex'>Compare <RefreshCw /></div>
                    <div className=' flex'>Add to Cart <Carticon /> </div>
                </div>
            </div>
        </>

    )
}

export default Productcart