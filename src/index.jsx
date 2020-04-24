// Общие стили
import style from './styles/index.scss';

// React 
import React from 'react';
import ReactDOM from 'react-dom';

// Router
import { BrowserRouter, Switch, Route } from "react-router-dom";

// Redux
import initStore from './store.js'
import { Provider } from 'react-redux';

import Layout from './components/Layout/Layout.jsx';

ReactDOM.render (
   <Provider store = { initStore () }>
      <Layout></Layout>
   </Provider>,
   document.getElementById('root'),
)