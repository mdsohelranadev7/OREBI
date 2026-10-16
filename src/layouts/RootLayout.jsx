import React from 'react'
import Heder from './Heder'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

const RootLayout = () => {
    return (
        <>
            <div className="font-sans">
                <Heder />
                <Outlet />
                <Footer />
            </div>
        </>
    )
}

export default RootLayout