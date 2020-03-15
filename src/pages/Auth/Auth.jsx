import './Auth.scss';
import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux'
import { userLoginFetch } from '../../actions/userActions.js'

class Auth extends Component {

    constructor(props) {
        super(props)

        this.state = {
            email: "",
            password: ""
        }
    }

    inputChangeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    buttonClickHandler = (e) => {
        this.props.userLoginFetch({email: this.state.email, password: this.state.password});
    }

    render() {
        return (
            <>
                <div className="autorization">
                    <div className="autorization__wrapper">
                        <h1><Link to="/">TaskUp</Link></h1>
                        <div className="autorization-field">
                            <h2>Sign in</h2>
                            <input onChange={this.inputChangeHandler} value={this.state.email}  name="email" type="text" placeholder="Email" className="autorization-email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]$"></input>
                            <input onChange={this.inputChangeHandler} value={this.state.password} name="password" type="password" placeholder="Password" className="autorization-password" pattern="[A-Za-zА-Яа-яЁё0-9]"></input>
                            <button onClick={this.buttonClickHandler} value="Sign up" className="autorization-button">Sign in</button>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    userLoginFetch: usrObj => dispatch(userLoginFetch(usrObj))
})

export default connect(null, mapDispatchToProps)(Auth)