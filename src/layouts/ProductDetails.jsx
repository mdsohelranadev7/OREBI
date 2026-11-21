import React from 'react'
import Container from '../components/Container'
import { Link, useParams } from 'react-router-dom'

const ProductDetails = () => {
    const { id } = useParams()

    return (
        <div className="py-12 md:py-20">
            <Container>
                <div className="text-sm text-gry mb-6">
                    <Link to="/" className="hover:text-primary">Home</Link> &gt; <Link to="/shop" className="hover:text-primary">Shop</Link> &gt; <span className="text-primary font-medium">Product #{id}</span>
                </div>
                <h1 className="text-2xl md:text-3xl font-bold text-primary mb-4">Product Details #{id}</h1>
                <p className="text-gry text-sm md:text-base mb-6">
                    Full product specifications, gallery, and reviews are being loaded.
                </p>
                <Link
                    to="/shop"
                    className="inline-block bg-primary text-white text-sm font-bold px-6 py-3 hover:bg-black transition-colors rounded"
                >
                    Continue Shopping
                </Link>
            </Container>
        </div>
    )
}

export default ProductDetails