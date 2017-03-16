import React, { Component } from 'react';
import { NumberCaptureForm } from 'components';

export default class Hero extends Component {
	render () {
		const styles = require("./Hero.scss");
		return (
			<div className={styles.hero}>
			  <div className="container">
			    <div className="text-center">
			      <h2>Next Generation Messaging</h2>
			      <p className="lead">Square One Labs is building next generation messaging products. Be the first to<br/> try them before they launch. We'll text you.</p>
			      <p>Enter your number to begin</p>
			      <NumberCaptureForm />
			      <br />
			      <p>or send a text to <b className="text-success">+1 650-600-9614</b></p>			      
			    </div>
		      	<div className={styles.device}></div>
			  </div>
			  
			</div>
		);
	}
}