import React from 'react'
import { useState } from "react";
import { NavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './Nav.css'

function Nav() {

    const [activeLink, setActiveLink] = useState("ABOUT");

    const handleClick = (link) => {
        setActiveLink(link);
    };
    const handleBrandClick = () => setActiveLink("");

    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container">
                <NavLink className="navbar-brand" onClick={handleBrandClick} to="/">START FRAMEWORK</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink
                            className={`nav-link ${activeLink === "ABOUT" ? "active" : ""}`}
                            to="/about"
                            onClick={() => handleClick("ABOUT")}
                            >
                            ABOUT
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                            className={`nav-link ${activeLink === "PORTFOLIO" ? "active" : ""}`}
                            to="/portfolio"
                            onClick={() => handleClick("PORTFOLIO")}
                            >
                            PORTFOLIO
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                            className={`nav-link ${activeLink === "CONTACT" ? "active" : ""}`}
                            to="/contact"
                            onClick={() => handleClick("CONTACT")}
                            >
                            CONTACT
                            </NavLink>
                        </li>
                        
                    </ul>
                
                </div>
            </div>
        </nav>
    )
}

export default Nav