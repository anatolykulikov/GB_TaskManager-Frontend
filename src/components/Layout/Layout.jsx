import React, { Component } from 'react';
import { connect } from 'react-redux'

import { BrowserRouter, Switch, Route } from "react-router-dom";

import SiteRouter  from '../SiteRouter/SiteRouter.jsx';
import Main from '../Main/Main.jsx';
import { UserLogInReducer } from '../../reducers/userReducers.js';

class Layout extends Component {
    render() {

        if (Object.keys(this.props.currentUser).length == 0) {
            
            return (
                <SiteRouter></SiteRouter>
            )

        }
        else {

            return (
                <Main></Main>
            )

        }

        
    }
}

let mapStateToProps = ({ UserReducer }) => ({
    currentUser: UserReducer.currentUser
})

export default connect (mapStateToProps) (Layout)