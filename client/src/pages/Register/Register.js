import "./register.css";
import { useRef } from 'react';
import axios from "axios";
import { useHistory } from "react-router";

const Register = () => {

    const username = useRef();
    const email = useRef();
    const password = useRef();
    const passwordAgain = useRef();
    const history = useHistory();

    const handleClick = async (e) => {
        e.preventDefault();
        if (passwordAgain.current.value !== password.current.value) {
            passwordAgain.current.setCustomValidity("Passwords don't match!")
        } else {
            const user = {
                username: username.current.value,
                email: email.current.value,
                password: password.current.value,
            };
            try {
                await axios.post("/auth/register", user);
                history.push("/login");
            } catch (error) {
                console.log(error)
            }
        }
    };


    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">SMedia</h3>
                    <span className="loginDesc">Connect with friends and the world</span>
                </div>
                <div className="loginRight">
                    <form className="loginBox" onSubmit={handleClick}>
                        <input placeholder="Username" required ref={username} className="loginInput" />
                        <input placeholder="Email" required className="loginInput" ref={email} type="email" />
                        <input placeholder="Password" required className="loginInput" ref={password} type="password" minLength="6" />
                        <input placeholder="Password Again" required className="loginInput" ref={passwordAgain} type="password" />
                        <button className="loginButton" type="submit">Sign Up</button>
                        <button className="loginRegisterButton">Log into Account</button>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default Register;
