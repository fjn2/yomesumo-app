import React, { Component } from 'react'
import createReactClass from 'create-react-class'

import styles from './home.css';

const HomePage = () => {
  const me = new Component();

  me.state = {};

  me.getInitialState = () => {
    return {count: 0};
  },
  me.render = () => {
    console.log('me', me.props);
    return (
      <div>Home Page</div>
    );
  }
  return me;
};




export default HomePage;