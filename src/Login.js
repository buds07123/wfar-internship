import React, { useState } from 'react'
import { useHistory } from "react-router-dom"
import { NavLink } from 'react-router-dom'
import axios from 'axios'

// IMAGE
import loginImage from './img/login.png'

// COMPONENTS
import Header from "./components/Header";
import Footer from "./components/Footer";

const Login = () => {

    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    // SWITCH TO SIGN UP PAGE

    const [page, setPage] = useState(false)
    let path = `/Signup`;
    let pathToFaculty = `/Faculty`;
    const history = useHistory();

    const routeChange = () => {
        setTimeout(function(){
            history.push(path);
        }, 1000);
    }

    const routeToFaculty = () => {
        history.push(pathToFaculty);
        // window.location.reload(true);
    }

    const loginEmp = async (e) => {
        e.preventDefault()

        try {
             const loginData = {
                email,
                password
            }
        
            await axios.post("http://localhost:4000/api/login",loginData)
            routeToFaculty()
        } catch (error) {
            console.log(error)
            if(error.response.data.err === "invalid password"){
                alert('Invalid Password.')
            }else if(error.response.data.err === "The email or username is not existing"){
                alert('The email or username is not existing.')
            }else if(error.response.data.err === "Verify your account first in your email account"){
                alert('Verify your account first in your email account.')
            }
        }
    }

    return (
        <>
        <Header/>
            <div 
                className={
                    page ? "container-start sign-up-mode" : "container-start"
                }
            >
                <div className="forms-container">
                    <div className="signin-signup" style={{marginTop: "-10%"}}> 
                        {/* SIGN IN */}
                        <form onSubmit={loginEmp} className="sign-in-form">
                            <h2 className="title">SIGN IN </h2>
                            <p>Welcome back, Instructors! <i className="fa-solid fa-hand"></i>
                                <br/> Please login to continue.
                            </p>
                            <div className="input-field">
                                <i className="fas fa-envelope"></i>
                                <input type="text" onChange={(e) => setEmail(e.target.value)} value={email} placeholder="Username or Email address" required />
                            </div>
                            <div className="input-field">
                                <i className="fas fa-lock"></i>
                                <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} placeholder="Password" required />
                            </div>
                            <span><NavLink to="/">Forgot password?</NavLink></span>
                            <input type="submit" name="login" value="Sign In" className="btn-start"/>
                        </form>
                    </div>
                </div>
                {/* PAGE INFO FOR SIGN IN AND UP */}
                <div className="panels-container">
                    <div className="panel left-panel">
                        <div className="content">
                            <h3>New here?</h3>
                            <p>
                                Register and manage your submission of individual weekly accomplishment reports with ease.
                            </p>
                            <button 
                                className="btn-start transparent" 
                                id="sign-up-btn"
                                onClick={
                                    () => { setPage(!page); routeChange(); }
                                }
                            >Sign Up</button>
                        </div>
                        <img src={loginImage} className="image" alt="" />
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Login
