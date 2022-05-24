import React from 'react'
import SideBar from 'components/sideBar'
import HomeContent from 'components/homeContent'

const Homepage = () => {
    return (
        <>
            <div className="main-body">
                <SideBar/>
                <HomeContent/>
            </div>
        </>
    )
}

export default Homepage