import React from 'react'
import {
    Smartphone,
    Laptop,
    Sparkles,
    ShoppingBasket,
    Home,
    Armchair,
    Shirt,
    Glasses,
    Watch,
    Footprints,
    Package,
    Layers,
    Sparkle,
    Check
} from 'lucide-react'

const getCategoryIcon = (slug) => {
    const s = slug.toLowerCase()
    if (s.includes('phone') || s.includes('mobile')) return Smartphone
    if (s.includes('laptop') || s.includes('tablet')) return Laptop
    if (s.includes('fragrance') || s.includes('beauty') || s.includes('skin')) return Sparkles
    if (s.includes('grocer') || s.includes('kitchen')) return ShoppingBasket
    if (s.includes('furniture')) return Armchair
    if (s.includes('home') || s.includes('decor')) return Home
    if (s.includes('shirt') || s.includes('dress') || s.includes('top') || s.includes('clothe')) return Shirt
    if (s.includes('sunglass') || s.includes('glass')) return Glasses
    if (s.includes('watch')) return Watch
    if (s.includes('shoe')) return Footprints
    return Package
}

const ShopCategorySection = ({
    categories = [],
    selectedCategory = 'all',
    onSelectCategory = () => {},
    totalProducts = 0
}) => {
    return (
        <div className="mb-14">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 mb-6">
                <div>
                    <h3 className="text-2xl font-bold font-sans text-primary flex items-center gap-2">
                        <Layers size={22} className="text-primary" /> Browse by Category
                    </h3>
                    <p className="text-sm text-gry font-sans mt-0.5">
                        Select a category below to filter our product collection instantly
                    </p>
                </div>
                {selectedCategory !== 'all' && (
                    <button
                        onClick={() => onSelectCategory('all')}
                        className="text-xs font-bold text-primary border border-gray-300 px-3 py-1.5 rounded hover:bg-primary hover:text-white hover:border-primary transition-colors cursor-pointer"
                    >
                        View All Categories ({totalProducts})
                    </button>
                )}
            </div>

            {/* Category Cards Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 gap-3.5">
                {/* "All Categories" Card */}
                <button
                    onClick={() => onSelectCategory('all')}
                    className={`group relative p-4 rounded-xl border flex flex-col items-center justify-center text-center transition-all duration-300 cursor-pointer h-32 ${
                        selectedCategory === 'all'
                            ? 'bg-primary text-white border-primary shadow-lg -translate-y-1'
                            : 'bg-white text-primary border-gray-200 hover:border-primary hover:shadow-md hover:-translate-y-1'
                    }`}
                >
                    {selectedCategory === 'all' && (
                        <span className="absolute top-2 right-2 w-5 h-5 rounded-full bg-white text-primary flex items-center justify-center text-xs shadow-xs">
                            <Check size={12} />
                        </span>
                    )}
                    <div className={`w-11 h-11 rounded-full flex items-center justify-center mb-2.5 transition-colors ${
                        selectedCategory === 'all'
                            ? 'bg-white/20 text-white'
                            : 'bg-gray-100 text-primary group-hover:bg-primary group-hover:text-white'
                    }`}>
                        <Sparkle size={20} />
                    </div>
                    <span className="font-bold text-xs uppercase tracking-wider block truncate max-w-full">
                        All Products
                    </span>
                    <span className={`text-[11px] font-medium mt-1 ${
                        selectedCategory === 'all' ? 'text-gray-200' : 'text-gry'
                    }`}>
                        {totalProducts} items
                    </span>
                </button>

                {/* Individual Category Cards */}
                {categories.map((cat) => {
                    const isSelected = selectedCategory === cat.slug
                    const IconComponent = getCategoryIcon(cat.slug)
                    const formattedName = cat.name.replace(/-/g, ' ')

                    return (
                        <button
                            key={cat.slug}
                            onClick={() => onSelectCategory(cat.slug)}
                            className={`group relative p-4 rounded-xl border flex flex-col items-center justify-center text-center transition-all duration-300 cursor-pointer h-32 ${
                                isSelected
                                    ? 'bg-primary text-white border-primary shadow-lg -translate-y-1'
                                    : 'bg-white text-primary border-gray-200 hover:border-primary hover:shadow-md hover:-translate-y-1'
                            }`}
                        >
                            {isSelected && (
                                <span className="absolute top-2 right-2 w-5 h-5 rounded-full bg-white text-primary flex items-center justify-center text-xs shadow-xs">
                                    <Check size={12} />
                                </span>
                            )}
                            <div className={`w-11 h-11 rounded-full flex items-center justify-center mb-2.5 transition-colors ${
                                isSelected
                                    ? 'bg-white/20 text-white'
                                    : 'bg-gray-100 text-primary group-hover:bg-primary group-hover:text-white'
                            }`}>
                                <IconComponent size={20} />
                            </div>
                            <span className="font-bold text-xs uppercase tracking-wider capitalize block truncate max-w-full">
                                {formattedName}
                            </span>
                            <span className={`text-[11px] font-medium mt-1 ${
                                isSelected ? 'text-gray-200' : 'text-gry'
                            }`}>
                                {cat.count} items
                            </span>
                        </button>
                    )
                })}
            </div>
        </div>
    )
}

export default ShopCategorySection
