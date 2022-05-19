import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from 'context/authContext';

const Login = () => {
    const { setIsLoggedIn } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const handleGuestLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`/api/auth/login`, {
                email: "adarshbalika@neog.camp",
                password: "adarshBalika",
            });
            console.log(response);
            localStorage.setItem("token", response.data.encodedToken);
        } catch (error) {
            console.log(error);
        }
        setIsLoggedIn((isLoggedIn) => !isLoggedIn);
        navigate(location?.state?.from?.pathname, { replace: true });
    }

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
                            <input type="email" id="email" placeholder="Email" />
                        </div>
                        <div className="form-control">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" placeholder="Password" />
                        </div>
                        <div>
                            <div className="keep-signed">
                                <input type="checkbox" id="keepMeLogged" />
                                <label htmlFor="keepMeLogged">Keep me Logged in</label>
                            </div>
                            <span className="guest-login" onClick={handleGuestLogin}>Log in as Guest</span>
                        </div>
                        <div className="sign-up button-group">
                            <button id="sign-btn">Log-In</button>
                            <Link to="/signup"><button id="sign-btn">Sign-Up <i className="fas fa-chevron-right"></i></button></Link>
                        </div>
                        <Link to="/"><p className="forgot-password">Forgot Password?</p></Link>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Login