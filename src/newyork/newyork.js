import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import ReactDOM from 'react-dom';

class NewYork extends React.Component {

  render() {
    const images = [
      {
        original: 'https://s3.amazonaws.com/sean.banton/chicago1.JPG',
        thumbnail: 'https://s3.amazonaws.com/sean.banton/chicago1thumb.JPG',
      },
      {
        original: 'https://s3.amazonaws.com/sean.banton/chicago2.JPG',
        thumbnail: 'https://s3.amazonaws.com/sean.banton/chicago2thumb.JPG',
      },
      {
        original: 'https://s3.amazonaws.com/sean.banton/chicago3.JPG',
        thumbnail: 'https://s3.amazonaws.com/sean.banton/chicago3thumb.JPG',
      },
      {
        original: 'https://s3.amazonaws.com/sean.banton/hostel.jpg',
        thumbnail: 'https://s3.amazonaws.com/sean.banton/hostelthumb.jpg',
      },
      {
        original: 'https://s3.amazonaws.com/sean.banton/whore.jpg',
        thumbnail: 'https://s3.amazonaws.com/sean.banton/whorethumb.jpg',
      }
    ]
    return (
      <NewYork items={images} />
    );
  }
}

export default NewYork;
// ReactDOM.render(<NewYork />, document.getElementById('root'));
