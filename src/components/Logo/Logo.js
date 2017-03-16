import React, { Component } from 'react';
// import AutoLogo from '../../../static/hello-auto.png';

export default class Logo extends Component {
	render () {
		const styles = require ("./logo.scss");
		return (
			<div className={`${styles.logo} ${this.props.noFilter?styles.noFilter:""} col-sm-3`}>
	  			<div className="text-center">
	  				<img src={this.props.src} alt="" className="" />
	  				<br />
	  				<label>{this.props.label}</label>
	  				<p className="small">{this.props.text}</p>
	  			</div>
			</div>
		);
	}
}