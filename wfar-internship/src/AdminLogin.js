import React from 'react'

// IMAGES
import waveImages from './img/wave.png'
import loginImage from './img/login1.png'
import cictLogo from './img/cict-logo.png'

const AdminLogin = () => {
    return (
        <>
            <img class="wave" src={waveImages}/>
                <div class="container">
                    <div class="img">
                        <img src={loginImage}/>
                    </div>
                    <div class="login-content">
                        <form class="login-form" action="#">
                            <div class="text-center mb-4 logo">
                                <img src={cictLogo} alt=""/>
                            </div>
                            <h3 class="h3 text-center mb-3">SIGN IN TO YOUR ACCOUNT</h3>
                            <div class="input-div one">
                                <div class="i">
                                    <i class="ti-user"></i>
                                </div>
                                <div class="div">
                                    <input type="text" class="input" placeholder="Username or Email"/>
                                </div>
                            </div>
                            <div class="input-div pass">
                                <div class="i">
                                    <i class="ti-lock"></i>
                                </div>
                                <div class="div">
                                    <input type="password" class="input" placeholder="Password"/>
                                </div>
                            </div>
                            <a href="#">Forgot Password?</a>
                            <input type="submit" class="btn-login" value="Sign in" style={{width: "100%"}}/>
                        </form>
                    </div>
                </div>
            </>
            )
}

            export default AdminLogin
