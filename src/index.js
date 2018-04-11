import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import NewYork from './newyork/newyork';
import Archive from './archive/archive';
import Portrait from './portrait/portrait';

ReactDOM.render((
<Router>
  <App />
</Router>
), document.getElementById('root'));
