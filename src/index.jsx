// Общие стили
import './styles/index.scss';

// React 
import React from 'react';
import ReactDOM from 'react-dom';

// Router
import { BrowserRouter, Switch, Route } from "react-router-dom";

// Redux
import initStore from './store.js'
import { Provider } from 'react-redux';

// Общие страницы
import Landing from 'pages/Landing/Landing.jsx';
import Auth from 'pages/Auth/Auth.jsx';
import Registration from 'pages/Registration/Registration.jsx';
import RegistrationVerify from 'pages/RegistrationVerify/RegistrationVerify.jsx';

// Dashboard-страницы
import DashboardMain from 'pages/DashboardMain/DashboardMain.jsx';
import DashboardTasks from 'pages/DashboardTasks/DashboardTasks.jsx';
import DashboardTask from 'pages/DashboardTask/DashboardTask.jsx';
import DashboardArchive from 'pages/DashboardArchive/DashboardArchive.jsx';

ReactDOM.render (
   <Provider store = { initStore () }>
      <BrowserRouter>
         <Switch>
            <Route path="/" component={Landing} exact />
            <Route path="/auth" component={Auth} />
            <Route path="/reg" component={Registration} />
            <Route path="/verify" component={RegistrationVerify} />
            <Route path="/dashboard" component={DashboardMain} exact />
            <Route path="/dashboard/tasks" component={DashboardTasks} />
            <Route path="/dashboard/new" component={DashboardTask} />
            <Route path="/dashboard/archive" component={DashboardArchive} />
         </Switch>
      </BrowserRouter>
   </Provider>,
   document.getElementById('root'),
)