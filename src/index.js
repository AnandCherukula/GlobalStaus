import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch, BrowserRouter as Router, Link, IndexRoute } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';
import '../scss/style.scss'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux';
import Login from './views/Login'
import configureStore from './configureStore'
import Full from './containers/Full/';
import Home from './views/Pages/Home';
import SignUp from './views/Pages/SignUp';
const { persistor, store } = configureStore();


ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <HashRouter >
        <Switch>
          <Route exact path='/' component={Login} />
          <Route exact path='/register' component={SignUp} />
          
         <Full />
          
        </Switch>
      </HashRouter>
    </PersistGate>
  </Provider>, 

  document.getElementById('root'));
