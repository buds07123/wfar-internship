import React from 'react'

// IMAGES
import waveImages from './img/wave.png'
import signupImage from './img/signup.png'
import cictLogo from './img/cict-logo.png'

const AdminRegister = () => {
    return (
        <>
            <img class="wave" src={waveImages}/>
                <div class="container">
                    <div class="img">
                        <img src={signupImage} />
                    </div>
                    <div class="register" style={{marginTop: "10%"}}>
                        <form class="login-form" action="#" >
                            <div class="text-center mb-4 logo">
                                <img src={cictLogo} alt="" />
                            </div>
                            <h3 class="h3 text-center mb-3">CREATE YOUR ACCOUNT</h3>
                            <div class="input-div one">
                                <div class="i">
                                    <i class="ti-user"></i>
                                </div>
                                <div class="div">
                                    <input type="text" class="input" placeholder="First name" />
                                </div>
                            </div>
                            <div class="input-div one">
                                <div class="i">
                                    <i class="ti-user"></i>
                                </div>
                                <div class="div">
                                    <input type="text" class="input" placeholder="Middle name (Not required)" />
                                </div>
                            </div>
                            <div class="input-div one">
                                <div class="i">
                                    <i class="ti-user"></i>
                                </div>
                                <div class="div">
                                    <input type="text" class="input" placeholder="Last name" />
                                </div>
                            </div>
                            <div class="input-div one">
                                <div class="i">
                                    <i class="ti-user"></i>
                                </div>
                                <div class="div">
                                    <input type="text" class="input" placeholder="Username" required />
                                </div>
                            </div>
                            <div class="input-div one">
                                <div class="i">
                                    <i class="ti-email"></i>
                                </div>
                                <div class="div">
                                    <input type="email" class="input" placeholder="Email" required />
                                </div>
                            </div>
                            <div class="input-div pass">
                                <div class="i">
                                    <i class="ti-lock"></i>
                                </div>
                                <div class="div">
                                    <input type="password" class="input" placeholder="Password" required />
                                </div>
                            </div>
                            <div class="input-div pass">
                                <div class="i">
                                    <i class="ti-lock"></i>
                                </div>
                                <div class="div">
                                    <input type="password" class="input" placeholder="Confirm password" required />
                                </div>
                            </div>
                            <input type="submit" class="btn-login" value="Sign up" style={{width: "100%"}}/>
                        </form>
                    </div>
                </div>
            </>
            )
}

export default AdminRegister
