import React from 'react'

import { Outlet } from 'react-router'
import Navber from '../Nerber/Navber'
import Footer from '../Footer/Footer'

export const Root = () => {
    return (
        <div>
            <Navber></Navber>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    )
}
