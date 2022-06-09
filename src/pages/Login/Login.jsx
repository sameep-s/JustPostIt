import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { loginUser } from '../../features/authSlice';
import "./login.css";

const Login = () => {

    const [loginFormData, setLoginFormData] = useState({ email: "", password: "" });
    const navigate = useNavigate();
    const location = useLocation();

    const dispatch = useDispatch();
    const authState = useSelector((state) => state.auth);


    const { isLoggedIn } = authState;

    useEffect(() => {
        if (isLoggedIn) {
            navigate(location?.state?.from || '/home', { replace: true });
        }
    }, [isLoggedIn]);



    const loginHandler = () => {
        if (loginFormData.username && loginFormData.password === "") {
            alert("Please Fill out form correctly");
        }

        dispatch(loginUser(loginFormData.username, loginFormData.password));

        if (isLoggedIn) {
            navigate("/", { replace: true });
        }

        setLoginFormData(() => ({ email: "", password: "" }));
    }

    const testLoginHandler = () => {

        dispatch(loginUser({ username: "sameep", password: "p123" }))
        setLoginFormData(() => ({ email: "", password: "" }));
    }

    console.log('state', isLoggedIn);


    return (
        <>
            <main className="container__main__login">
                <form onSubmit={(e) => {
                    e.preventDefault();
                    loginHandler()
                }} className="form-wrapper">
                    <div className="form-heading">Welcome Back</div>

                    <div className="form-body">

                        <label htmlFor="email" className="form-label mt-3">
                            Enter your Email.
                        </label>

                        <input
                            type="text"
                            name=""
                            id="email"
                            className="form-input mt-1"
                            value={loginFormData.username}
                            autoComplete="off"
                            onChange={(e) => {
                                setLoginFormData(() => ({ ...loginFormData, email: e.target.value }))
                            }}
                        />

                        <label htmlFor="password" className="form-label mt-3">
                            Enter your password
                        </label>

                        <input
                            type="password"
                            name=""
                            id="password"
                            value={loginFormData.password}
                            className="form-input mt-1"
                            autoComplete="off"
                            onChange={e =>
                                setLoginFormData(() => ({ ...loginFormData, password: e.target.value }))
                            }
                        />
                    </div>

                    <div className="form-utility mt-2">

                        <div className="form-utility-1 flex a-item-center">
                            <input type="checkbox" id="remembercheck" className="form-checkbox" />

                            <label htmlFor="remembercheck " className="form-check ml-1">
                                Remember Me
                            </label>

                            <a href="" className="forgot-pwrd">Forgot Password?</a>
                        </div>

                        <div className="form-utility-2 mt-2">
                            By logging in, you agree to our
                            <a href="" className="form-link"> Privary Policy</a> and
                            <a href="" className="form-link"> Terms of service.</a>
                        </div>

                    </div>

                    <div className="form-button mt-3">
                        <button type='button' className="btn-sq btn-light" onClick={() => loginHandler()} >Login</button>
                        <button type='button' className="btn-sq btn-dark mt-2" onClick={() => testLoginHandler()}>Test Login</button>
                    </div>

                    <div className="form-end form-utility mt-1">
                        Not a Member? <Link to={'/signup'} className="form-link">Sign in.</Link>
                    </div>

                </form>

            </main>
        </>
    );
}

export default Login;