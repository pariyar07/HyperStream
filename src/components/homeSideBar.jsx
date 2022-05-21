import React from 'react'
import {AiFillHome, AiOutlinePlus} from "react-icons/ai"
import {BsCollectionPlayFill} from "react-icons/bs"
import {MdOutlineFavorite, MdWatchLater} from "react-icons/md"
import {FaHistory} from "react-icons/fa"

const HomeSideBar = () => {
    return (
        <>
            <div className="home-sidebar">
                <ul className="sidebar-top-list">
                    <li><AiFillHome/>&nbsp; Home</li>
                    <li><BsCollectionPlayFill/>&nbsp; Your Playlist</li>
                    <li><MdOutlineFavorite/>&nbsp; Favourites</li>
                    <li><FaHistory/>&nbsp; History</li>
                    <li><MdWatchLater/>&nbsp; Watch Later</li>
                </ul>
                <div className="sidebar-sub-list">
                    <h3>Subscription</h3>
                    <div className="sub-pics">
                        <img src="https://picsum.photos/id/1011/45" alt="sub 1" />
                        <img src="https://picsum.photos/id/1042/45" alt="sub 2" />
                        <img src="https://picsum.photos/id/1058/45" alt="sub 3" />
                        <img src="https://picsum.photos/id/1077/45" alt="sub 4" />
                        <img src="https://picsum.photos/id/1079/45" alt="sub 5" />
                        <img src="https://picsum.photos/id/1058/45" alt="sub 6" />
                        <img src="https://picsum.photos/id/1042/45" alt="sub 7" />
                        <AiOutlinePlus className="sub-plus"/>
                    </div>
                    <ul>
                        <li><img src="https://picsum.photos/id/1011/20" alt="sub 1" />&nbsp; Sub 1</li>
                        <li><img src="https://picsum.photos/id/1042/20" alt="sub 2" />&nbsp; Sub 2</li>
                        <li><img src="https://picsum.photos/id/1058/20" alt="sub 3" />&nbsp; Sub 3</li>
                        <li><img src="https://picsum.photos/id/1077/20" alt="sub 4" />&nbsp; Sub 4</li>
                        <li><img src="https://picsum.photos/id/1079/20" alt="sub 5" />&nbsp; Sub 5</li>
                        <button>See More...</button>
                    </ul>
                </div>
                <div className="premium-banner">
                    <h3>Get 3 months of Premium for free</h3>
                    <p>Enjoy ad-free content, offline content and more</p>
                    <button>Get Premium</button>
                </div>
            </div>
        </>
    )
}

export default HomeSideBar