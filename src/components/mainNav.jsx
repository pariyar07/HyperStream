import { Link } from "react-router-dom";
import { useAuth } from "context/authContext";
import { useVideo } from "context/videoContext";
import { useLocation } from "react-router-dom";

const MainNav = () => {
  const { isLoggedIn, setIsLoggedIn } = useAuth();
  const { filterDispatch } = useVideo();
  const location = useLocation();

  return (
    <>
      <nav className="video-nav-content">
        <div className="video-brand">
          <img src="assets/hyperstream.png" alt="logo" className="brand-img" />
          <a href=".">
            <h2 className="video-nav-title">Hyper Stream</h2>
          </a>
        </div>
        {location.pathname === "/explore" && (
          <div className="video-nav-search">
            <a href=".">
              <i className="fa fa-search"></i>
            </a>
            <input
              type="search"
              placeholder="Search for a video..."
              onChange={(e) => {
                filterDispatch({
                  type: "FILTER_BY_SEARCH",
                  payload: e.target.value.toLowerCase(),
                });
              }}
            />
          </div>
        )}
        <div className="video-nav-list">
          <div className="dropdown">
            <button className="dropbtn">
              Account &nbsp;
              <i className="fa fa-caret-down"></i>
            </button>
            {isLoggedIn ? (
              <div className="dropdown-content">
                <Link
                  to="/"
                  onClick={() => {
                    setIsLoggedIn(false);
                  }}
                >
                  Log Out
                </Link>
              </div>
            ) : (
              <div className="dropdown-content">
                <Link to="/login">Log In</Link>
                <Link to="/signup">Sign Up</Link>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default MainNav;
