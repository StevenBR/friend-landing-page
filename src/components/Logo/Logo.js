import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {showModal} from 'redux/modules/modal';

@connect (
	state => ({
		modalVisible: state.modalVisible
	}),
	dispatch => bindActionCreators({showModal},dispatch))
export default class Logo extends Component {
	
	render () {
		const styles = require ("./Logo.scss");
		return (
			<div className={`${styles.logo} ${this.props.noFilter?styles.noFilter:""} col-sm-3`} onClick={this.props.showModal}>
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