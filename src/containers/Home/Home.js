import React, { Component } from 'react';
import Helmet from 'react-helmet';

export default class Home extends Component {
  render() {
    const styles = require('./Home.scss');
    // require the logo image both from client and server
    return (
      <div className={styles.home}>
        <Helmet title="Home"/>
        <div className="container">
          <div className="text-center">
            <h2>Next Generation Messaging</h2>
            <p className="lead">Square One Labs is building next generation messaging products. Be the first to<br/> try them before they launch. We'll text you.</p>
          </div>
        </div>
      </div>
    );
  }
}
