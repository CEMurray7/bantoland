import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

const PrimaryLayout = () => (
  <div className="primary-layout">
    <header>
    SEAN FRANCIS BANTON
    </header>
    <main>
      <Route path="/" exact component={HomePage} />
      <Route path="/archive" component={ArchivePage} />
      <Route path="/portrait" component={PortraitPage} />
      <Route path="/chicago" component={ChicagoPage} />
      <Route path="/newyork" component={NewyorkPage} />
    </main>
  </div>
)

const HomePage = () => <div>Home Page </div>
const ArchivePage = () => <div>Archive Page </div>
const PortraitPage = () => <div>Portrait Page </div>
const ChicagoPage = () => <div> Chicago Page </div>
const NewyorkPage = () => <div> New York Page </div>
