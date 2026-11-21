import React from 'react'
import { Link } from 'react-router-dom'
import Container from '../components/Container'

const Error = () => {
  return (
    <div className="py-20 md:py-32">
      <Container className="text-center max-w-xl">
        <h1 className="text-7xl md:text-9xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-2xl md:text-3xl font-bold text-primary mb-3">Page Not Found</h2>
        <p className="text-gry text-sm md:text-base mb-8">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link
          to="/"
          className="inline-block bg-primary text-white text-sm font-bold px-8 py-3.5 hover:bg-black transition-colors rounded"
        >
          Back to Home
        </Link>
      </Container>
    </div>
  )
}

export default Error