import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "context/authContext";
import { useToast } from "custom/useToast";

const Login = () => {
  const { setIsLoggedIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const { showToast } = useToast();
  const [userEmail, setUserEmail] = useState();
  const [userPassword, setUserPassword] = useState();

  const handleGuestLogin = async (e) => {
    e.preventDefault();
    try {
      let response = await axios.post("/api/auth/login", {
        email: "satyam@hyperstream.com",
        password: "satyam123",
      });
      localStorage.setItem("token", response.data.encodedToken);
      localStorage.setItem("user", response.data.foundToken);
      setIsLoggedIn((isLoggedIn) => !isLoggedIn);
      showToast("Successfully Logged In", "success");
      navigate(location?.state?.from?.pathname || "/", { replace: true });
    } catch (error) {
      console.error(error);
      showToast("Error! Could not login", "error");
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      let response = await axios.post("/api/auth/login", {
        email: userEmail,
        password: userPassword,
      });
      localStorage.setItem("token", response.data.encodedToken);
      localStorage.setItem("dealUser", JSON.stringify(response.data.foundUser));
      setIsLoggedIn((isLoggedIn) => !isLoggedIn);
      navigate(location?.state?.from?.pathname || "/", { replace: true });
      showToast("Successfully Logged In", "success");
    } catch (error) {
      console.error(error);
      showToast("Error! Try again later", "error");
    }
  };

  return (
    <section className="sign-up-wrapper">
      <div className="sign-up-left">
        <img className="rotate" src="assets/hyperstream.png" alt="logo" />
      </div>
      <div className="sign-up-right">
        <div className="sign-in-container">
          <div className="header">
            <h2>Log-In</h2>
          </div>
          <form id="form" className="form">
            <div className="form-control">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Email"
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
              />
            </div>
            <div className="form-control">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Password"
                value={userPassword}
                onChange={(e) => setUserPassword(e.target.value)}
              />
            </div>
            <div>
              <div className="keep-signed">
                <input type="checkbox" id="keepMeLogged" />
                <label htmlFor="keepMeLogged">Keep me Logged in</label>
              </div>
              <span className="guest-login" onClick={handleGuestLogin}>
                Log in as Guest
              </span>
            </div>
            <div className="sign-up button-group">
              <button onClick={handleLogin}>Log-In</button>
              <Link to="/signup">
                <button>
                  Sign-Up <i className="fas fa-chevron-right"></i>
                </button>
              </Link>
              <div className="forgot-password">Forgot Password?</div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
