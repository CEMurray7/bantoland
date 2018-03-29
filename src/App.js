import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import ReactDOM from 'react-dom';
import PortraitPage from './portrait/portrait';
import './App.css';


class App extends Component {
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

    );
  }
}
// ReactDOM.render(
//   <Router>
//   <App />
//   </Router>
// );
// const App = () => (
//   <div>
//     <nav>
//       <Link to="/portrait">Portrait</Link>
//       </nav>
//   <div>
//     <Route path="/portrait" component={PortraitPage} />
//   </div>
//   </div>
// )

export default App;
