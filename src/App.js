import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Portrait from './portrait/portrait';
import NewYork from './newyork/newyork';
import Chicago from './chicago/chicago';
import Archive from './archive/archive';
// import Main from './main/main';
import './App.css';


class App extends React.Component {
  render() {
    return (
      <Router>
      <div className="App">
      <NavLink to={"/" }>
      <div>
      <NavLink>  <Route path="/portrait" component={Portrait} />Portrait</NavLink>
      </div>
      <div>
        <NavLink><Route path="/archive" component={Archive}/>Archive</NavLink>
      </div>
      <div>
        <NavLink><Route path="/newyork" component={NewYork}/>New York</NavLink>
        </div>
      <div>
        <NavLink><Route path="/chicago" component={Chicago}/>Chicago</NavLink>
      </div>
  </NavLink>
</div>
        </Router>
// <Main />
    );

  }
}

export default App;
