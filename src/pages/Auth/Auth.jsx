import './Auth.scss';
import React, { Component } from 'react';

export default class Auth extends Component {
    render() {
        return (
            <>
                <div className="autorization">
                    <h1>TaskUp</h1>
                    <div className="autorization-field">
                        <h2>Sign in</h2>
                        <input type="text" placeholder="Email" className="autorization-email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]$"></input>
                        <input type="text" placeholder="Password" className="autorization-password" pattern="[A-Za-zА-Яа-яЁё0-9]"></input>
                        <button value="Sign up" className="autorization-button">Sign in</button>
                    </div>
                </div>
            </>
        )
    }
}