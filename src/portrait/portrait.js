import React, { Component } from 'react';
// import { BrowserRouter as Router, Link } from 'react-router-dom';

export default class Portrait extends React.Component {
  render() {
    const images = [
    {
      original: 'https://s3.amazonaws.com/sean.banton/pipes.JPG',
      thumbnail: 'https://s3.amazonaws.com/sean.banton/pipes.JPG',
    },
    {
      original: 'https://s3.amazonaws.com/sean.banton/lake.JPG',
      thumbnail: 'https://s3.amazonaws.com/sean.banton/lakethumb.JPG',
    },
    {
        original: 'https://s3.amazonaws.com/sean.banton/hostel.jpg',
        thumbnail: 'https://s3.amazonaws.com/sean.banton/hostelthumb.jpg',
      },
      {
        original: 'https://s3.amazonaws.com/sean.banton/whore.jpg',
        thumbnail: 'https://s3.amazonaws.com/sean.banton/whorethumb.jpg',
      },


    ]
    return (
      <Portrait items={images} />
    );
  }
}

console.log("am i showing up?")
