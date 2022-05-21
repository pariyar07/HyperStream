import React from 'react'
import MainNav from "components/mainNav"
import SideBar from 'components/sideBar'
import ExploreContent from "components/exploreContent"

const Explore = () => {
    return (
    <>
        <MainNav/>
        <div className="main-body">
            <SideBar/>
            <ExploreContent/>
        </div>
    </>
    )
}

export default Explore