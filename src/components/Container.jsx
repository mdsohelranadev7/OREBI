import React from 'react'

const Container = ({ children, className = '' }) => {
    return (
        <div className={`max-w-330 mx-auto px-4 sm:px-6 lg:px-8 xl:px-0 w-full ${className}`}>
            {children}
        </div>
    )
}

export default Container
