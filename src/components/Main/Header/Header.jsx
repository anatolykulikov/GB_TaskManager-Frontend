import React, { Component } from 'react';
import style from './Header.scss';
import { Link } from "react-router-dom";

export default class Header extends Component {
    render() {
        return( 
            <header className="header">
                <div className="menu-logo-container">
                    <a href="#" className="logo">TaskUp</a>
                    <nav className="menu">
                        <ul className="menu-ul">
                            <li className="menu-item"><Link to="/home" className="menu-link">
                                <span className="menu-link-text">Home</span> 
                            </Link></li>
                            <li className="menu-item"><Link to="/tasks" className="menu-link">
                                <span className="menu-link-text">Tasks</span>
                            </Link></li>
                            <li className="menu-item"><Link to="/archive" className="menu-link">
                                <span className="menu-link-text">Archive</span>
                            </Link></li>
                        </ul>
                    </nav>
                </div>
                <div className="username">
                    <a href="autorization.html" className="username-link">
                        <span className="username-text">username@email.com</span>
                        <svg className="username-icon" xmlns="http://www.w3.org/2000/svg" width="21pt" height="21pt" viewBox="0 0 21 21" version="1.1">
                            <g id="surface1">
                            <path d="M 10.5 0 C 4.726562 0 0 4.726562 0 10.5 C 0 16.273438 4.726562 21 10.5 21 C 16.273438 21 21 16.273438 21 10.5 C 21 4.726562 16.273438 0 10.5 0 Z M 10.5 3.5 C 12.425781 3.5 14 5.425781 14 7.875 C 14 10.324219 12.425781 12.25 10.5 12.25 C 8.574219 12.25 7 10.324219 7 7.875 C 7 5.425781 8.574219 3.5 10.5 3.5 Z M 16.273438 17.0625 C 14.789062 18.375 12.6875 19.25 10.5 19.25 C 8.3125 19.25 6.210938 18.375 4.726562 17.0625 C 4.375 16.710938 4.289062 16.1875 4.636719 15.835938 C 5.601562 14.699219 6.914062 13.914062 8.3125 13.476562 C 9.011719 13.824219 9.710938 14 10.5 14 C 11.289062 14 11.988281 13.824219 12.6875 13.476562 C 14.175781 13.914062 15.398438 14.699219 16.363281 15.835938 C 16.710938 16.1875 16.710938 16.710938 16.273438 17.0625 Z M 16.273438 17.0625 "/>
                            </g>
                        </svg>
                    </a>
                </div>
            </header>
        )
    }
}
