import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import NewyorkPage from './newyork/newyork';
import ArchivePage from './archive/archive';
import PortraitPage from './portrait/portrait.js'

ReactDOM.render((
<Router>
  <App />
</Router>
), document.getElementById('root'));
