import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import ReactDOM from 'react-dom';
import PortraitPage from './portrait/portrait';
import NewyorkPage from './newyork/newyork';
import ChicagoPage from './chicago/chicago';
import Main from './main/main';
import './App.css';


class App extends React.Component {
  render() {
    return (
      <Router>
      <div className="App">
      <NavLink to={"/" }>
      <div>
        <NavLink to="/portrait">Portrait</NavLink>
      </div>
      <div>
        <NavLink to="/archive">Archive</NavLink>
      </div>
      <div>
        <NavLink to="newyork">New York</NavLink>
        </div>
      <div>
        <NavLink to="chicago">Chicago</NavLink>
      </div>
  </NavLink>
</div>
        </Router>
// <Main />
    );

  }
}

export default App;
