import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Container from './Container'
import Shopbycatagory from './Shopbycatagory'
import Shopbycolor from './Shopbycolor'
import Shopbybrand from './Shopbybrand'
import Shopbyprice from './Shopbyprice'
import Image from './Image'
import windowbar from '../assets/windowbar.png'
import bartwo from '../assets/bar2.png'
import { Link } from 'react-router-dom'

const Productfilter = () => {

    const [prdt, setprdt] = useState([])
    const [sortType, setSortType] = useState("featured")
    const [show, setShow] = useState(12)
    const [page, setPage] = useState(1)

    useEffect(() => {
        async function getprdt() {
            const data = await axios.get('https://dummyjson.com/products?limit=100')
            setprdt(data.data.products)
        }
        getprdt()
    }, [])

    // sort (কপি করে)
    let sorted = [...prdt]

    if (sortType === "low") sorted.sort((a, b) => a.price - b.price)
    if (sortType === "high") sorted.sort((a, b) => b.price - a.price)
    if (sortType === "name") sorted.sort((a, b) => a.title.localeCompare(b.title))

    // pagination এর হিসাব
    const totalPages = Math.max(1, Math.ceil(sorted.length / show))
    const start = (page - 1) * show
    const end = page * show
    const currentProducts = sorted.slice(start, end)

    return (
        <Container>

            <div className="flex justify-between">
                <div className="w-[20%] group">
                    <Shopbycatagory />
                    <Shopbycolor />
                    <Shopbybrand />
                    <Shopbyprice />
                </div>

                <div className="w-[80%] mb-10 ml-10">

                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <Image srcimg={windowbar} className={"mr-5"} />
                            <Image srcimg={bartwo} />
                        </div>

                        <div className="flex justify-center gap-x-10">

                            <div className="flex text-gry items-center gap-x-3.5">
                                <h4>Sort by:</h4>
                                <select
                                    className='py-1 px-5 border'
                                    value={sortType}
                                    onChange={(e) => {
                                        setSortType(e.target.value)
                                        setPage(1)
                                    }}
                                >
                                    <option value="featured">Featured</option>
                                    <option value="low">Price: Low to High</option>
                                    <option value="high">Price: High to Low</option>
                                    <option value="name">Name: A-Z</option>
                                </select>
                            </div>

                            <div className="flex text-gry items-center gap-x-3.5">
                                <h4>Show:</h4>
                                <select
                                    className='py-1 px-5 border w-40'
                                    value={show}
                                    onChange={(e) => {
                                        setShow(Number(e.target.value))
                                        setPage(1)
                                    }}
                                >
                                    <option value="6">6</option>
                                    <option value="12">12</option>
                                    <option value="24">24</option>
                                    <option value="36">36</option>
                                </select>
                            </div>

                        </div>
                    </div>

                    <div className="grid grid-cols-3 gap-x-10 mt-15 gap-y-13">
                        {currentProducts.map((item) => (
                            <Link to={`/product/${item.id}`} key={item.id}>
                                <img src={item.thumbnail} alt={item.title} />
                                <h3>{item.title}</h3>
                                <p>${item.price}</p>
                                <h3>{item.category}</h3>
                            </Link>
                        ))}
                    </div>

                    {/* Pagination */}
                    <div className="flex items-center justify-center gap-x-3 mt-10">

                        <button
                            className="py-1 px-4 border disabled:opacity-40"
                            onClick={() => setPage(page - 1)}
                            disabled={page === 1}
                        >
                            Previous
                        </button>

                        {[...Array(totalPages)].map((_, i) => (
                            <Link to={"/shop"} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                                <button
                                    key={i}
                                    className={`py-1 px-3 border ${page === i + 1 ? "bg-black text-white" : ""}`}
                                    onClick={() => setPage(i + 1)}
                                >
                                    {i + 1}
                                </button>
                            </Link>
                        ))}

                        <button
                            className="py-1 px-4 border disabled:opacity-40"
                            onClick={() => setPage(page + 1)}
                            disabled={page === totalPages}
                        >
                            Next
                        </button>

                    </div>

                </div>
            </div>

        </Container>
    )
}

export default Productfilter