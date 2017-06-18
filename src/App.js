import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

import routes from './routes.js';

import NavBar from './components/NavBar';
import Footer from './components/Footer';

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
