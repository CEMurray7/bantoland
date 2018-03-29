import React, { Component } from 'react';
// import { BrowserRouter as Router, Link } from 'react-router-dom';

export default class PortraitPage extends React.Component {
  render() {
    const images = [
      {
      // original: 'https://s3.amazonaws.com/sean.banton/pipes.JPG',
      item1: 'https://s3.amazonaws.com/sean.banton/pipes.JPG',
    },
    {
      // original: 'https://s3.amazonaws.com/sean.banton/lake.JPG',
      item2: 'https://s3.amazonaws.com/sean.banton/lakethumb.JPG',
    },
    {
        // original: 'https://s3.amazonaws.com/sean.banton/hostel.jpg',
        item3: 'https://s3.amazonaws.com/sean.banton/hostelthumb.jpg',
      },
      {
        // original: 'https://s3.amazonaws.com/sean.banton/whore.jpg',
        item4: 'https://s3.amazonaws.com/sean.banton/whorethumb.jpg',
      },
      // {},
      // {},
      // {},
      // {},
  
    ]
    return (
      <PortraitPage items={images} />
    );
  }
}
