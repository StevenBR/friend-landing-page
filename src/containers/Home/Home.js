import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { Hero } from 'components';

export default class Home extends Component {
  render() {
    // require the logo image both from client and server
    return (
      <div>
        <Helmet title="Home"/>
        <Hero />    
      </div>
    );
  }
}
