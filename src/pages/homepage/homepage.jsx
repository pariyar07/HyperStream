import React from 'react'
import MainNav from "components/mainNav"
import SideBar from 'components/sideBar'
import HomeContent from 'components/homeContent'

const Homepage = () => {
    return (
        <>
            <MainNav/>
            <div className="main-body">
                <SideBar/>
                <HomeContent/>
            </div>
        </>
    )
}

export default Homepage