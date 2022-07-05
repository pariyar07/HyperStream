import React from "react";
import { AiFillHome, AiOutlinePlus } from "react-icons/ai";
import { BsCollectionPlayFill } from "react-icons/bs";
import { MdOutlineFavorite, MdWatchLater } from "react-icons/md";
import { FaHistory } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useVideo } from "context/videoContext";

function navActive({ isActive }) {
  return {
    color: isActive ? "var(--primary-clr)" : "",
    background: isActive ? "var(--string-clr)" : "",
    border: isActive ? "none" : "none",
  };
}

const SideBar = () => {
  const location = useLocation();
  const { filterDispatch } = useVideo();
  return (
    <>
      <div className="home-sidebar">
        <div className="sidebar-top-list">
          <NavLink to="/" style={navActive} className="navlinks">
            <AiFillHome />
            &nbsp; Home
          </NavLink>
          <NavLink to="/explore" style={navActive} className="navlinks">
            <BsCollectionPlayFill />
            &nbsp; Explore
          </NavLink>
          <NavLink to="/playlist" style={navActive} className="navlinks">
            <MdOutlineFavorite />
            &nbsp; Your Playlist
          </NavLink>
          <NavLink to="/liked" style={navActive} className="navlinks">
            <MdOutlineFavorite />
            &nbsp; Liked Videos
          </NavLink>
          <NavLink to="/watch-later" style={navActive} className="navlinks">
            <MdWatchLater />
            &nbsp; Watch Later
          </NavLink>
          <NavLink to="/history" style={navActive} className="navlinks">
            <FaHistory />
            &nbsp; History
          </NavLink>
        </div>
        {location.pathname === "/explore" && (
          <button
            className="show-all-video"
            onClick={() => {
              filterDispatch({ type: "CLEAR_FILTER" });
            }}
          >
            Show all Videos
          </button>
        )}
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
            <AiOutlinePlus className="sub-plus" />
          </div>
          <ul>
            <li>
              <img src="https://picsum.photos/id/1011/20" alt="sub 1" />
              &nbsp; Sub 1
            </li>
            <li>
              <img src="https://picsum.photos/id/1042/20" alt="sub 2" />
              &nbsp; Sub 2
            </li>
            <li>
              <img src="https://picsum.photos/id/1058/20" alt="sub 3" />
              &nbsp; Sub 3
            </li>
            <li>
              <img src="https://picsum.photos/id/1077/20" alt="sub 4" />
              &nbsp; Sub 4
            </li>
            <li>
              <img src="https://picsum.photos/id/1079/20" alt="sub 5" />
              &nbsp; Sub 5
            </li>
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
  );
};

export default SideBar;
