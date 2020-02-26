import './Registration.scss';
import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class Registration extends Component {
    render() {
        return (
            <>
                <div className="registration">
                    <div className="registration__wrapper">
                        <h1><Link to="/">TaskUp</Link></h1>
                        <div className="registration-field">
                            <h2>Sign up</h2>
                            <input type="text" placeholder="Name" className="registration-name" pattern="[A-Za-zА-Яа-яЁё]"></input>
                            <input type="text" placeholder="Email" className="registration-email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]$"></input>
                            <input type="text" placeholder="Password" className="registration-password" pattern="[A-Za-zА-Яа-яЁё0-9]"></input>
                            <button value="Sign up" className="registration-button">Sign up</button>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}