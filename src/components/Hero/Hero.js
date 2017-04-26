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
			      <p className="lead">We’re a technology company building frictionless messaging products to help you access services you’ll love.<br/> Be the first to try them before they launch. We’ll text you.</p>
			      <NumberCaptureForm buttonType="gradient" />
			      <br />
			      <p>or send a text to <b className="text-success">+1 650-600-9614</b></p>			      
			    </div>

		      <div className={styles.device}>
						{/*<img src="chat.gif" alt="chat_gif" className={styles.chat_gif}/>*/}
					</div>
			  </div>
			  
			</div>
		);
	}
}