import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import Splash from './components/Splash';
import Home from './containers/Home';
import './App.css';


const App = () => (
  <Router>
    <div className="App">
      <Route exact path="/" component={Home}/>
      <Route path="/splash" component={Splash}/>
    </div>
  </Router>
)

export default App;
