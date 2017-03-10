import React, { Component } from 'react';
// import AutoLogo from '../../../static/hello-auto.png';


export default class Logo extends Component {
	render () {
		return (
			<div className="col-sm-3 text-center">
	  			<img src={this.props.src} alt="" className="" />
	  			<br />
	  			<label>{this.props.label}</label>
	  			<p className="small">Phasellus condimentum odio elit, in placerat augue congue ac.</p>
			</div>
		);
	}
}