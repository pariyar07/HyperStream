import React from 'react'
import MainNav from "components/mainNav"
import SideBar from 'components/sideBar'
import ExploreContent from "components/exploreContent"
import PlaylistModal from 'components/playlistModal'

const Explore = () => {
    return (
    <>
        <MainNav/>
        <div className="main-body">
            <SideBar/>
            <ExploreContent/>
            <PlaylistModal/>
        </div>
    </>
    )
}

export default Explore