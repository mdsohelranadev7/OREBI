import { createSlice } from '@reduxjs/toolkit'

const loadCartFromStorage = () => {
    try {
        if (typeof window !== 'undefined' && window.localStorage) {
            const stored = localStorage.getItem('orebi_cart')
            return stored ? JSON.parse(stored) : []
        }
        return []
    } catch {
        return []
    }
}

const saveCartToStorage = (items) => {
    try {
        if (typeof window !== 'undefined' && window.localStorage) {
            localStorage.setItem('orebi_cart', JSON.stringify(items))
        }
    } catch {
        // Silently catch storage errors
    }
}

const parsePrice = (price) => {
    if (typeof price === 'number') return price
    if (typeof price === 'string') {
        const cleaned = price.replace(/[^0-9.]/g, '')
        const parsed = parseFloat(cleaned)
        return isNaN(parsed) ? 0 : parsed
    }
    return 0
}

const initialState = {
    cartItems: loadCartFromStorage(),
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const item = action.payload
            const numericPrice = parsePrice(item.price)
            const itemId = item.id ? String(item.id) : `${item.name || item.productname}_${item.image || item.productimg}`

            const existingIndex = state.cartItems.findIndex((cartItem) => String(cartItem.id) === itemId)

            if (existingIndex >= 0) {
                state.cartItems[existingIndex].quantity += 1
                state.cartItems[existingIndex].totalPrice =
                    state.cartItems[existingIndex].quantity * state.cartItems[existingIndex].price
            } else {
                state.cartItems.push({
                    id: itemId,
                    name: item.name || item.productname || 'Product',
                    price: numericPrice,
                    image: item.image || item.productimg || '',
                    badge: item.badge || item.badgename || '',
                    quantity: 1,
                    totalPrice: numericPrice,
                })
            }
            saveCartToStorage(state.cartItems)
        },
        removeFromCart: (state, action) => {
            const targetId = String(action.payload)
            state.cartItems = state.cartItems.filter((item) => String(item.id) !== targetId)
            saveCartToStorage(state.cartItems)
        },
        increaseQuantity: (state, action) => {
            const targetId = String(action.payload)
            const existing = state.cartItems.find((item) => String(item.id) === targetId)
            if (existing) {
                existing.quantity += 1
                existing.totalPrice = existing.quantity * existing.price
                saveCartToStorage(state.cartItems)
            }
        },
        decreaseQuantity: (state, action) => {
            const targetId = String(action.payload)
            const existing = state.cartItems.find((item) => String(item.id) === targetId)
            if (existing) {
                if (existing.quantity > 1) {
                    existing.quantity -= 1
                    existing.totalPrice = existing.quantity * existing.price
                } else {
                    state.cartItems = state.cartItems.filter((item) => String(item.id) !== targetId)
                }
                saveCartToStorage(state.cartItems)
            }
        },
        updateQuantity: (state, action) => {
            const { id, quantity } = action.payload
            const targetId = String(id)
            const q = Math.max(1, parseInt(quantity, 10) || 1)
            const existing = state.cartItems.find((item) => String(item.id) === targetId)
            if (existing) {
                existing.quantity = q
                existing.totalPrice = existing.quantity * existing.price
                saveCartToStorage(state.cartItems)
            }
        },
        clearCart: (state) => {
            state.cartItems = []
            saveCartToStorage([])
        },
    },
})

export const {
    addToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    updateQuantity,
    clearCart,
} = cartSlice.actions

export default cartSlice.reducer
