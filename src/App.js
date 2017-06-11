import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import routes from './routes.js';

import NavBar from './components/NavBar';
import Footer from './components/Footer';

import Splash from './components/Splash';
import Home from './containers/Home';
import RSVP from './containers/RSVP';
import './App.css';

const App = () => (
  <Router>
    <div className="App">
      <NavBar />
      {routes.map((route, i) => (
        <Route
          key={i}
          exact
          path={route.path}
          component={route.component}
        />
      ))}
      <Footer />
    </div>
  </Router>
)

export default App;
