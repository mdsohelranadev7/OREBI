import React, { useEffect, useState, useMemo } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import Container from './Container'
import Shopbycatagory from './Shopbycatagory'
import Shopbycolor from './Shopbycolor'
import Shopbybrand from './Shopbybrand'
import Shopbyprice from './Shopbyprice'
import ShopCategorySection from './ShopCategorySection'
import Image from './Image'
import windowbar from '../assets/windowbar.png'
import bartwo from '../assets/bar2.png'
import Carticon from './Carticon'
import { addToCart } from '../features/cart/cartSlice'
import { Filter, X, ShoppingCart, Star, Check } from 'lucide-react'

// Default fallback products in case API is loading or offline
const fallbackProducts = [
    { id: 1, title: 'iPhone 15 Pro', price: 999, category: 'smartphones', thumbnail: 'https://cdn.dummyjson.com/products/images/smartphones/iPhone%2013%20Pro/thumbnail.png', discountPercentage: 12.5 },
    { id: 2, title: 'MacBook Pro 16', price: 1999, category: 'laptops', thumbnail: 'https://cdn.dummyjson.com/products/images/laptops/Apple%20MacBook%20Pro%2014%20Inch%20Space%20Grey/thumbnail.png', discountPercentage: 15.0 },
    { id: 3, title: 'Chanel No 5 Parfum', price: 120, category: 'fragrances', thumbnail: 'https://cdn.dummyjson.com/products/images/fragrances/Chanel%20Coco%20Noir%20Eau%20De/thumbnail.png', discountPercentage: 8.0 },
    { id: 4, title: 'Hydrating Face Cream', price: 45, category: 'skin-care', thumbnail: 'https://cdn.dummyjson.com/products/images/skin-care/Attitude%20Super%20Leaves%20Hand%20Soap/thumbnail.png', discountPercentage: 10.0 },
    { id: 5, title: 'Organic Olive Oil', price: 25, category: 'groceries', thumbnail: 'https://cdn.dummyjson.com/products/images/groceries/Apple/thumbnail.png', discountPercentage: 5.0 },
    { id: 6, title: 'Modern Wooden Table', price: 340, category: 'furniture', thumbnail: 'https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Bed/thumbnail.png', discountPercentage: 18.0 },
    { id: 7, title: 'Ceramic Flower Vase', price: 65, category: 'home-decoration', thumbnail: 'https://cdn.dummyjson.com/products/images/home-decoration/Plant%20Pot/thumbnail.png', discountPercentage: 14.0 },
    { id: 8, title: 'Classic Casual T-Shirt', price: 35, category: 'tops', thumbnail: 'https://cdn.dummyjson.com/products/images/mens-shirts/Blue%20&%20Black%20Check%20Shirt/thumbnail.png', discountPercentage: 20.0 },
]

const Productfilter = () => {
    const dispatch = useDispatch()
    const [prdt, setprdt] = useState(fallbackProducts)
    const [loading, setLoading] = useState(true)
    const [sortType, setSortType] = useState('featured')
    const [show, setShow] = useState(12)
    const [page, setPage] = useState(1)
    const [selectedCategory, setSelectedCategory] = useState('all')
    const [sidebarVisible, setSidebarVisible] = useState(false)
    const [addedId, setAddedId] = useState(null)

    // Fetch products
    useEffect(() => {
        let isMounted = true
        async function getprdt() {
            try {
                const response = await axios.get('https://dummyjson.com/products?limit=100')
                if (isMounted && response.data && response.data.products && response.data.products.length > 0) {
                    setprdt(response.data.products)
                }
            } catch (err) {
                console.log('Using default product catalog', err.message)
            } finally {
                if (isMounted) setLoading(false)
            }
        }
        getprdt()
        return () => { isMounted = false }
    }, [])

    // Extract dynamic categories with product counts
    const categoriesList = useMemo(() => {
        const counts = {}
        prdt.forEach((item) => {
            if (item.category) {
                const cat = item.category.toLowerCase()
                counts[cat] = (counts[cat] || 0) + 1
            }
        })
        return Object.keys(counts)
            .sort()
            .map((slug) => ({
                slug,
                name: slug,
                count: counts[slug]
            }))
    }, [prdt])

    // Filter by category
    const filteredProducts = useMemo(() => {
        if (selectedCategory === 'all') return prdt
        return prdt.filter(
            (item) => item.category && item.category.toLowerCase() === selectedCategory.toLowerCase()
        )
    }, [prdt, selectedCategory])

    // Sort products
    const sorted = useMemo(() => {
        const copy = [...filteredProducts]
        if (sortType === 'low') copy.sort((a, b) => a.price - b.price)
        if (sortType === 'high') copy.sort((a, b) => b.price - a.price)
        if (sortType === 'name') copy.sort((a, b) => a.title.localeCompare(b.title))
        return copy
    }, [filteredProducts, sortType])

    // Pagination
    const totalPages = Math.max(1, Math.ceil(sorted.length / show))
    const start = (page - 1) * show
    const end = page * show
    const currentProducts = sorted.slice(start, end)

    const handleCategoryChange = (categorySlug) => {
        setSelectedCategory(categorySlug)
        setPage(1)
        window.scrollTo({ top: 350, behavior: 'smooth' })
    }

    const handleAddToCart = (e, item) => {
        e.preventDefault()
        e.stopPropagation()
        dispatch(
            addToCart({
                id: item.id,
                name: item.title,
                price: item.price,
                image: item.thumbnail,
                badge: item.discountPercentage ? `${Math.round(item.discountPercentage)}% OFF` : ''
            })
        )
        setAddedId(item.id)
        setTimeout(() => setAddedId(null), 1500)
    }

    return (
        <div className="font-sans">
            {/* Top Category Cards Section */}
            <ShopCategorySection
                categories={categoriesList}
                selectedCategory={selectedCategory}
                onSelectCategory={handleCategoryChange}
                totalProducts={prdt.length}
            />

            {/* Mobile Filter Toggle */}
            <div className="lg:hidden flex items-center justify-between bg-gray-50 border border-gray-200 p-4 rounded-lg mb-6">
                <div className="text-sm font-bold text-primary">
                    {sorted.length} Products Found
                </div>
                <button
                    onClick={() => setSidebarVisible(!sidebarVisible)}
                    className="flex items-center gap-2 bg-primary text-white text-xs font-bold px-4 py-2 rounded uppercase tracking-wider"
                >
                    <Filter size={14} /> {sidebarVisible ? 'Hide Filters' : 'Show Filters'}
                </button>
            </div>

            {/* Main Shop Layout: Sidebar + Product Grid */}
            <div className="flex flex-col lg:flex-row gap-8 items-start">
                {/* Left Sidebar */}
                <div
                    className={`w-full lg:w-[24%] shrink-0 bg-white border border-gray-200 rounded-xl p-5 ${
                        sidebarVisible ? 'block' : 'hidden lg:block'
                    }`}
                >
                    <Shopbycatagory
                        categories={categoriesList}
                        selectedCategory={selectedCategory}
                        onSelectCategory={handleCategoryChange}
                    />
                    <div className="mt-8 pt-6 border-t border-gray-100">
                        <Shopbycolor />
                    </div>
                    <div className="mt-8 pt-6 border-t border-gray-100">
                        <Shopbybrand />
                    </div>
                    <div className="mt-8 pt-6 border-t border-gray-100">
                        <Shopbyprice />
                    </div>
                </div>

                {/* Right Product Grid Area */}
                <div className="w-full lg:w-[76%] min-w-0">
                    {/* Controls Bar: Sort, View, Active Filter */}
                    <div className="bg-white border border-gray-200 rounded-xl p-4 mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                            <div className="hidden sm:flex items-center gap-2">
                                <Image srcimg={windowbar} className="opacity-70 hover:opacity-100 cursor-pointer" />
                                <Image srcimg={bartwo} className="opacity-70 hover:opacity-100 cursor-pointer" />
                            </div>
                            <span className="text-xs text-gry font-medium">
                                Showing <strong>{sorted.length === 0 ? 0 : start + 1} - {Math.min(end, sorted.length)}</strong> of <strong>{sorted.length}</strong> products
                            </span>
                            {selectedCategory !== 'all' && (
                                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-primary text-white capitalize">
                                    {selectedCategory.replace(/-/g, ' ')}
                                    <button
                                        onClick={() => handleCategoryChange('all')}
                                        className="hover:text-red-300 cursor-pointer"
                                    >
                                        <X size={12} />
                                    </button>
                                </span>
                            )}
                        </div>

                        {/* Sort & Show Selectors */}
                        <div className="flex items-center gap-4 w-full sm:w-auto justify-end">
                            <div className="flex items-center gap-2 text-xs font-semibold text-gry">
                                <label htmlFor="sortBy">Sort:</label>
                                <select
                                    id="sortBy"
                                    className="border border-gray-200 rounded px-2.5 py-1.5 text-xs text-primary font-bold outline-none bg-white focus:border-primary cursor-pointer"
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

                            <div className="flex items-center gap-2 text-xs font-semibold text-gry">
                                <label htmlFor="showCount">Show:</label>
                                <select
                                    id="showCount"
                                    className="border border-gray-200 rounded px-2.5 py-1.5 text-xs text-primary font-bold outline-none bg-white focus:border-primary cursor-pointer"
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

                    {/* Empty State */}
                    {sorted.length === 0 ? (
                        <div className="py-20 text-center bg-white border border-dashed border-gray-300 rounded-xl">
                            <h4 className="text-xl font-bold text-primary mb-2">No products found</h4>
                            <p className="text-gry text-sm mb-6">
                                No products match the category "{selectedCategory}".
                            </p>
                            <button
                                onClick={() => handleCategoryChange('all')}
                                className="bg-primary text-white text-xs font-bold uppercase tracking-wider py-3 px-8 rounded hover:bg-black transition-colors"
                            >
                                Clear Category Filter
                            </button>
                        </div>
                    ) : (
                        /* Products Grid */
                        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                            {currentProducts.map((item) => (
                                <div
                                    key={item.id}
                                    className="group relative bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                                >
                                    {/* Product Image Area with Hover Overlay */}
                                    <div className="relative w-full h-64 bg-[#f8f9fa] flex items-center justify-center p-6 overflow-hidden">
                                        <Link to={`/product/${item.id}`} className="w-full h-full flex items-center justify-center">
                                            <img
                                                src={item.thumbnail}
                                                alt={item.title}
                                                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                                            />
                                        </Link>

                                        {/* Discount Badge */}
                                        {item.discountPercentage && (
                                            <span className="absolute top-3 left-3 bg-primary text-white text-[11px] font-bold px-2.5 py-1 rounded">
                                                {Math.round(item.discountPercentage)}% OFF
                                            </span>
                                        )}

                                        {/* Category Pill */}
                                        <span className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-xs text-primary border border-gray-200 text-[10px] font-bold px-2 py-0.5 rounded capitalize">
                                            {item.category?.replace(/-/g, ' ')}
                                        </span>

                                        {/* Hover Add to Cart Slide-up Panel */}
                                        <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/60 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex items-center justify-center">
                                            <button
                                                onClick={(e) => handleAddToCart(e, item)}
                                                className={`w-full py-2.5 px-4 rounded-lg font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md ${
                                                    addedId === item.id
                                                        ? 'bg-emerald-600 text-white'
                                                        : 'bg-primary text-white hover:bg-black'
                                                }`}
                                            >
                                                {addedId === item.id ? (
                                                    <>
                                                        <Check size={14} /> Added to Cart!
                                                    </>
                                                ) : (
                                                    <>
                                                        <ShoppingCart size={14} /> Add to Cart
                                                    </>
                                                )}
                                            </button>
                                        </div>
                                    </div>

                                    {/* Product Details Area */}
                                    <div className="p-5 flex flex-col justify-between flex-1">
                                        <div>
                                            <div className="flex items-center gap-1 text-amber-500 text-xs mb-1">
                                                <Star size={13} fill="currentColor" />
                                                <span className="font-bold text-primary text-[11px]">4.8</span>
                                                <span className="text-gray-400 text-[11px]">(24)</span>
                                            </div>
                                            <Link to={`/product/${item.id}`}>
                                                <h4 className="font-bold text-base text-primary hover:text-black line-clamp-1 mb-1">
                                                    {item.title}
                                                </h4>
                                            </Link>
                                        </div>

                                        <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-100">
                                            <div className="flex items-baseline gap-2">
                                                <span className="text-lg font-bold text-primary">
                                                    ${item.price.toFixed(2)}
                                                </span>
                                                {item.discountPercentage && (
                                                    <span className="text-xs text-gray-400 line-through">
                                                        ${(item.price * (1 + item.discountPercentage / 100)).toFixed(2)}
                                                    </span>
                                                )}
                                            </div>

                                            {/* Quick Add Button (always visible on touch devices) */}
                                            <button
                                                onClick={(e) => handleAddToCart(e, item)}
                                                className="p-2 border border-gray-200 rounded-lg hover:bg-primary hover:text-white hover:border-primary text-primary transition-colors cursor-pointer"
                                                title="Add to Cart"
                                            >
                                                <ShoppingCart size={16} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Pagination Controls */}
                    {totalPages > 1 && (
                        <div className="flex flex-wrap items-center justify-center gap-2 mt-12 pt-8 border-t border-gray-200">
                            <button
                                className="py-2 px-4 border border-gray-300 rounded font-bold text-xs uppercase tracking-wider text-primary hover:bg-gray-50 disabled:opacity-30 disabled:pointer-events-none cursor-pointer"
                                onClick={() => {
                                    setPage(page - 1)
                                    window.scrollTo({ top: 350, behavior: 'smooth' })
                                }}
                                disabled={page === 1}
                            >
                                Previous
                            </button>

                            {[...Array(totalPages)].map((_, i) => (
                                <button
                                    key={i}
                                    className={`w-9 h-9 rounded text-xs font-bold transition-all cursor-pointer ${
                                        page === i + 1
                                            ? 'bg-primary text-white shadow-sm'
                                            : 'border border-gray-300 text-primary hover:bg-gray-50'
                                    }`}
                                    onClick={() => {
                                        setPage(i + 1)
                                        window.scrollTo({ top: 350, behavior: 'smooth' })
                                    }}
                                >
                                    {i + 1}
                                </button>
                            ))}

                            <button
                                className="py-2 px-4 border border-gray-300 rounded font-bold text-xs uppercase tracking-wider text-primary hover:bg-gray-50 disabled:opacity-30 disabled:pointer-events-none cursor-pointer"
                                onClick={() => {
                                    setPage(page + 1)
                                    window.scrollTo({ top: 350, behavior: 'smooth' })
                                }}
                                disabled={page === totalPages}
                            >
                                Next
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Productfilter
