import React from 'react'

const HomeNav = () => {
    return (
        <>
        <nav className="video-nav-content">
                    <div className="video-brand">
                        <img src="assets/hyperstream.png" alt="logo" className="brand-img"/>
                        <a href="."><h2 className="video-nav-title">Hyper Stream</h2></a>
                    </div>
                    <div className="video-nav-search">
                        <a href="."><i className="fa fa-search"></i></a>
                        <input type="search" placeholder="Search for a video..." />
                    </div>
                    <div className="video-nav-list">
                        <div className="dropdown">
                            <button className="dropbtn">Account &nbsp;
                                <i className="fa fa-caret-down"></i>
                            </button>
                            <div className="dropdown-content">
                                <a href=".">Sign Up</a>
                                <a href=".">Sign In</a>
                                <a href=".">Log Out</a>
                            </div>
                        </div>
                    </div>
                </nav>
        </>
    )
}

export default HomeNav