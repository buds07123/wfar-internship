import React , { useState} from 'react'
import { NavLink } from 'react-router-dom'

// IMAGE
import logo from '../img/WFARLOGO.png'

const Header = () => {

    const [isNavExpanded, setIsNavExpanded] = useState(false)

    // REMOVE TOGGLE WHEN SCROLL
    window.onscroll = () =>{
        document.querySelector("#menu-btn").classList.remove("fa-times")
        document.querySelector("#menu-btn").classList.add("fa-bars")
        document.querySelector(".navbar-start").classList.remove("active")
    }

    return (
        <header className="header-start">
            <div className="logo">
                <NavLink exact to="/" className="logo"> 
                    <img src={logo} alt="Logo"/>
                </NavLink>
            </div>
            <nav 
                className={ 
                    isNavExpanded ? "navbar-start active" : "navbar-start"
                }
            >
                <NavLink exact to="/Signup" >
                    Sign up
                </NavLink>
                <NavLink exact to="/Login" className="navbar-btn-start">
                    Sign in
                </NavLink>
            </nav>
            <div 
                className={ 
                    isNavExpanded ? "fas fa-times" : "fas fa-bars" 
                } 
                id="menu-btn" 
                onClick={
                    () => {setIsNavExpanded(!isNavExpanded)}
                }
            ></div>
        </header>
    )
}

export default Header
