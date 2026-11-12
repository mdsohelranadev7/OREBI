import React from 'react'
import Heder from './Heder'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

const RootLayout = () => {
    return (
        <>
            <div className="font-sans flex flex-col min-h-screen">
                <Heder />
                <div className="flex-1">
                    <Outlet />
                </div>
                <Footer />
            </div>
        </>
    )
}

export default RootLayout
