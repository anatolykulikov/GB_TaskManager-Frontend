import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import  Auth  from './Auth/Auth.jsx';
import Registration  from './Registration/Registration.jsx';
import Landing  from './Landing/Landing.jsx';

export default class SiteRouter extends Component {
    render() {
        return (
                <BrowserRouter>
                    <Switch>
                    <Route path="/auth" component={Auth} />
                    <Route path="/reg" component={Registration} />
                    <Route path="/" component={Landing} />
                    </Switch>
                </BrowserRouter>
        )
    }
}