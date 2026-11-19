import React from 'react'
import { FaChevronRight, FaTimes } from 'react-icons/fa'
import { Layers } from 'lucide-react'

const Shopbycatagory = ({
    categories = [],
    selectedCategory = 'all',
    onSelectCategory = () => {}
}) => {
    return (
        <div className="font-sans">
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-[20px] font-sans font-bold text-primary flex items-center gap-2">
                    <Layers size={18} /> Shop by Category
                </h3>
                {selectedCategory !== 'all' && (
                    <button
                        onClick={() => onSelectCategory('all')}
                        className="text-xs text-red-500 hover:underline flex items-center gap-1 font-semibold"
                    >
                        <FaTimes size={10} /> Reset
                    </button>
                )}
            </div>

            <div className="space-y-1">
                {/* All Categories Option */}
                <button
                    onClick={() => onSelectCategory('all')}
                    className={`w-full flex items-center justify-between py-3 px-3 rounded text-sm transition-all cursor-pointer ${
                        selectedCategory === 'all'
                            ? 'bg-primary text-white font-bold'
                            : 'text-gry hover:bg-gray-100 hover:text-primary font-medium'
                    }`}
                >
                    <span>All Categories</span>
                    <FaChevronRight size={10} className={selectedCategory === 'all' ? 'text-white' : 'text-gray-400'} />
                </button>

                {/* Dynamic Category List */}
                {categories.map((cat) => {
                    const isSelected = selectedCategory === cat.slug
                    const displayName = cat.name.replace(/-/g, ' ')

                    return (
                        <button
                            key={cat.slug}
                            onClick={() => onSelectCategory(cat.slug)}
                            className={`w-full flex items-center justify-between py-2.5 px-3 rounded text-sm capitalize transition-all cursor-pointer ${
                                isSelected
                                    ? 'bg-primary text-white font-bold'
                                    : 'text-gry hover:bg-gray-100 hover:text-primary font-medium'
                            }`}
                        >
                            <span className="truncate pr-2">{displayName}</span>
                            <div className="flex items-center gap-2 shrink-0">
                                <span className={`text-[11px] px-2 py-0.5 rounded-full ${
                                    isSelected ? 'bg-white/20 text-white font-bold' : 'bg-gray-100 text-gray-500'
                                }`}>
                                    {cat.count}
                                </span>
                                <FaChevronRight size={10} className={isSelected ? 'text-white' : 'text-gray-400'} />
                            </div>
                        </button>
                    )
                })}
            </div>
        </div>
    )
}

export default Shopbycatagory
