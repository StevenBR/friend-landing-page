import React, {Component} from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router';

export default class Hello extends Component {
  render() {
    return (
      <div>
        <h1>Helllo, hoku1</h1>
        <Helmet title="hoku!"/>
        Have a wonderful day!
      </div>
    );
  }
}
