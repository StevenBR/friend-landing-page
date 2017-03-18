import React, { Component } from 'react';

export default class Logo extends Component {
	state = {
		displayModal: false
	}

	showModal = () => {
		this.state.displayModal = true;
	}

	render () {
		const styles = require ("./Logo.scss");
		return (
			<div className={`${styles.logo} ${this.props.noFilter?styles.noFilter:""} col-sm-3`} onClick={this.showModal}>
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