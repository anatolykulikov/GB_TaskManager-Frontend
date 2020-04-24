import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Header from './Header/Header.jsx'
import Tasks from './Tasks/Tasks.jsx';
import Archive from './Archive/Archive.jsx';
import Home from './Home/Home.jsx';

export default class Main extends Component {
    render() {
        return(
            <BrowserRouter>
                    <Header></Header>
                    <Switch>
                        <Route path="/tasks" component={Tasks} />
                        <Route path="/archive" component={Archive} />
                        <Route path="/home" component={Home} />
                        <Route path="/auth">
                            <Redirect to="/tasks"></Redirect>
                        </Route>
                    </Switch>
            </BrowserRouter>
        )
    }
}
