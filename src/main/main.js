import React, { Component } from 'react';
import { BrowserRouter as Route, NavLink } from 'react-router-dom';

const Main = () => (
  <div className="primary-layout">
    <header>
    SEAN FRANCIS BANTON
    </header>
    <Main>
      <Route path="/" exact component={MainPage} />
      <Route path="/archive" component={ArchivePage} />
      <Route path="/portrait" component={PortraitPage} />
      <Route path="/chicago" component={ChicagoPage} />
      <Route path="/newyork" component={NewyorkPage} />
    </Main>
  </div>
)

const MainPage = () => <NavLink>Main Page </NavLink>
const ArchivePage = () => <div>Archive Page </div>
const PortraitPage = () => <div>Portrait Page </div>
const ChicagoPage = () => <div> Chicago Page </div>
const NewyorkPage = () => <div> New York Page </div>

export default Main;
