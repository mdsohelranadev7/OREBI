import React from 'react'
import Heder from './Heder'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

const RootLayout = () => {
    return (
        <div className="font-sans flex flex-col min-h-screen overflow-x-hidden w-full">
            <Heder />
            <main className="flex-1 w-full">
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default RootLayout
