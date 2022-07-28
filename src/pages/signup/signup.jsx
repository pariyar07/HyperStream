import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "context/authContext";
import { useToast } from "custom/useToast";

export default function SignUp() {
  const { setIsLoggedIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const { showToast } = useToast();
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      let response = await axios.post("/api/auth/signup", {
        email: userEmail,
        password: password,
        username: userName,
      });
      localStorage.setItem("token", response.data.encodedToken);
      localStorage.setItem("user", JSON.stringify(response.data.createdUser));
      navigate(location?.state?.from?.pathname || "/", { replace: true });
      setIsLoggedIn((isLoggedIn) => !isLoggedIn);
      showToast("Successfully Signed Up", "success");
    } catch (error) {
      console.error(error);
      showToast("Error! Try Again", "error");
    }
    setUserName("");
    setUserEmail("");
    setPassword("");
    setCheckPassword("");
  };

  return (
    <>
      <section className="sign-up-wrapper">
        <div className="sign-up-left">
          <img className="rotate" src="assets/hyperstream.png" alt="logo" />
        </div>
        <div className="sign-up-right">
          <div className="sign-in-container">
            <div className="header">
              <h2>Sign-Up</h2>
            </div>
            <form id="form" className="form">
              <div className="form-control">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  id="username"
                  placeholder="Username"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                />
              </div>
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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="form-control">
                <label htmlFor="checkpassword">Check Password</label>
                <input
                  type="password"
                  id="checkpassword"
                  placeholder="Check Password"
                  value={checkPassword}
                  onChange={(e) => setCheckPassword(e.target.value)}
                />
              </div>
              <div className="sign-up button-group">
                <button onClick={handleSignUp}>Sign-Up</button>
                <Link to="/login">
                  <button>
                    Login <i className="fas fa-chevron-right"></i>
                  </button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
