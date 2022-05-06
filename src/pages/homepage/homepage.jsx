import React from 'react'
import HomeNav from "components/homeNav"
import HomeSideBar from 'components/homeSideBar'
import HomeContent from 'components/homeContent'

const Homepage = () => {
    return (
        <>
            <HomeNav/>
            <div className="home-body">
                <HomeSideBar/>
                <HomeContent/>
            </div>
        </>
    )
}

export default Homepage