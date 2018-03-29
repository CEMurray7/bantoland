import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
// import PortraitPage from './portrait/portrait';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
      <Link to={"/" }>

        <p><a href="/portrait">Portrait</a></p>
        <p><a href="/archive">Archive</a></p>
        <p><a href="newyork">New York</a></p>
        <p><a href="chicago">Chicago</a></p>

      </Link>
        </div>
        </Router>
    );
  }
}

export default App;
