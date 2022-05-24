import React from 'react'
import SideBar from 'components/sideBar'
import ExploreContent from "components/exploreContent"
import PlaylistModal from 'components/playlistModal'

const Explore = () => {
    return (
    <>
        <div className="main-body">
            <SideBar/>
            <ExploreContent/>
            <PlaylistModal/>
        </div>
    </>
    )
}

export default Explore