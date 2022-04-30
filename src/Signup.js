import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import axios from 'axios'

// IMAGES
import userSample from './img/user-sample.png';
import registerImage from './img/register.png';

// COMPONENTS
import Header from "./components/Header";
import Footer from "./components/Footer";

const Signup = () => {

    //SWITCH TO LOGIN PAGE
    const [page, setPage] = useState(false)
    let path = `/Login`;
    const history = useHistory();

    const routeChange = () => {
        setTimeout(function () {
            history.push(path);
        }, 1000);
    }

    //LOAD SELECTED PROFILE PICTURE
    const [emp_picture, setEmp_picture] = useState('')
    const [pic,setPic] = useState('')

    const [emp_number, setEmp_number] = useState('')
    const [fname, setFirst_name] = useState('')
    const [mname, setMiddle_name] = useState('')
    const [lname, setLast_name] = useState('')
    const [name_extension, setName_ex] = useState('')
    const [position, setPosition] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordCheck, setPasswordCheck] = useState('')

    const loadImage = (event) => {
        setEmp_picture(event.target.files[0]);
        setPic(URL.createObjectURL(event.target.files[0]))
    } 

    const registerEmp = async (e) => {
        e.preventDefault()

        const formData = new FormData()

        formData.append('emp_picture', emp_picture)
        formData.append('emp_number', emp_number)
        formData.append('fname', fname)
        formData.append('mname', mname)
        formData.append('lname', lname)
        formData.append('name_extension', name_extension)
        formData.append('position', position)
        formData.append('username', username)
        formData.append('email', email)
        formData.append('password', password)
        formData.append('passwordCheck', passwordCheck)

        // const formData = {
        //     emp_picture,
        //     emp_number,
        //     fname,
        //     mname,
        //     lname,
        //     name_extension,
        //     position,
        //     username,
        //     email,
        //     password,
        //     passwordCheck
        // }

        await axios.post("http://localhost:4000/api/register", formData)
            .then(res => {
                if (res.data.msg === "Verification email is sent to your email account") {
                    alert('Verification email is sent to your email account.')
                    history.push('/login')
                }
            })
            .catch(err => {
                console.log(err)
                if (err.response.data.err === "Password must atleast 8 characters") {
                    alert('Password must atleast 8 characters.')
                } else if (err.response.data.err === "Password must be same for verification") {
                    alert('Password must be same for verification.')
                } else if (err.response.data.err === 'The username is taken. Try another.') {
                    alert("The username is taken. Try another.")
                } else if (err.response.data.err === 'The email is taken. Try another.') {
                    alert("The email is taken. Try another.")
                }
            })
    }

    return (
        <>
        <Header/>
            <div
                className={
                    page ? "container-start" : "container-start sign-up-mode"
                }
                style={{ height: "120vh" }}
            >
                <div className="forms-container">
                    <div className="signin-signup">
                        {/*SIGN UP*/}
                        <form onSubmit={registerEmp} encType="multipart/form-data" className="sign-up-form">
                            <h2 className="title">SIGN UP </h2>
                            <p>
                                Fill out the form to give us your account information.
                            </p>
                            <div className="profile-pic">
                                <label className="label" for="file">
                                    <span><i className="fa fa-pencil"></i>&nbsp;Add Photo</span>
                                </label>
                                <input id="file" type="file" name="emp_picture" onChange={loadImage} required />
                                <img src={pic === '' ? userSample : pic} id="addprofilephoto" alt="" />
                            </div>
                            <br />
                            <div className="input-field">
                                <i className="fa-solid fa-id-card"></i>
                                <input type="number" onChange={(e) => setEmp_number(e.target.value)} value={emp_number} placeholder="Employee Number" required />
                            </div>
                            <div className="input-field">
                                <i className="fas fa-user"></i>
                                <input type="text" onChange={(e) => setFirst_name(e.target.value)} value={fname} placeholder="First Name" required />
                            </div>
                            <div className="input-field">
                                <i className="fas fa-user"></i>
                                <input type="text" onChange={(e) => setMiddle_name(e.target.value)} value={mname} placeholder="Middle Name (Not required)" />
                            </div>
                            <div className="input-field">
                                <i className="fas fa-user"></i>
                                <input type="text" onChange={(e) => setLast_name(e.target.value)} value={lname} placeholder="Last Name" required />
                            </div>
                            <div className="input-field">
                                <i className="fas fa-user"></i>
                                <input type="text" onChange={(e) => setName_ex(e.target.value)} value={name_extension} placeholder="Name Extension (Not required)" />
                            </div>
                            <div className="select">
                                    <select className="textIndent" name="position" onChange={(e) => setPosition(e.target.value)} value={position} id="position" required>
                                        <option selected disabled hidden>&#xf2c1; &nbsp;&nbsp;&nbsp;&nbsp; Select your Position</option>
                                        <option value="Faculty">&#xf2c1; &nbsp;&nbsp;&nbsp;&nbsp; Faculty</option>
                                        <option value="Area Chair">&#xf2c1; &nbsp;&nbsp;&nbsp;&nbsp; Area Chair</option>
                                        <option value="Department Head">&#xf2c1; &nbsp;&nbsp;&nbsp;&nbsp; Department Head</option>
                                    </select>
                                </div>
                            <div className="input-field">
                                <i className="fas fa-user-circle"></i>
                                <input type="text" onChange={(e) => setUsername(e.target.value)} value={username} placeholder="Username" required />
                            </div>
                            <div className="input-field">
                                <i className="fas fa-envelope"></i>
                                <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} placeholder="Email address" required />
                            </div>
                            <div className="input-field">
                                <i className="fas fa-lock"></i>
                                <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} placeholder="Password" required />
                            </div>
                            <div className="input-field">
                                <i className="fas fa-lock"></i>
                                <input type="password" onChange={(e) => setPasswordCheck(e.target.value)} value={passwordCheck} placeholder="Confirm Password" required />
                            </div>
                            <input type='submit' className="btn-start" value="Sign Up" />
                        </form>
                    </div>
                </div>

                {/*PAGE INFO FOR SIGN IN AND UP*/}
                <div className="panels-container">
                    <div className="panel left-panel">
                        <div className="content">
                            <button id="sign-up-btn" style={{ visibility: "hidden" }}></button>
                        </div>
                    </div>
                    <div className="panel right-panel">
                        <div className="content">
                            <h3>One of us?</h3>
                            <p>
                                Sign in to your account and upload your weekly accomplishments.
                            </p>
                            <button
                                className="btn-start transparent"
                                id="sign-in-btn"
                                onClick={
                                    () => { setPage(!page); routeChange(); }
                                }
                            >Sign In</button>
                        </div>
                        <img src={registerImage} className="image" alt="" />
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Signup
