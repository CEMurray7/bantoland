import React, { Component } from 'react';
// import { BrowserRouter as Router, NavLink } from 'react-router-dom';

class Chicago extends React.Component {

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
      <Chicago items={images} />
    );
  }
}

export default Chicago;
