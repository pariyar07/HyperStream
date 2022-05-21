import {Link} from "react-router-dom";
import MainNav from "components/mainNav"

export default function SignUp() {
    return (
        <>
        <MainNav />
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
                                <input type="text" id="username" placeholder="Username" />
                            </div>
                            <div className="form-control">
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" placeholder="Email" />
                            </div>
                            <div className="form-control">
                                <label htmlFor="password">Password</label>
                                <input type="password" id="password" placeholder="Password" />
                            </div>
                            <div className="form-control">
                                <label htmlFor="checkpassword">Check Password</label>
                                <input type="password" id="checkpassword" placeholder="Check Password" />
                            </div>
                            <div className="sign-up button-group">
                                <button id="sign-btn">Sign-Up</button>
                                <Link to="/login"><button id="sign-btn">Login <i className="fas fa-chevron-right"></i></button></Link>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
}