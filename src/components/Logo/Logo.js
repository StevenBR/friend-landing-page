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

	showModal = () => {
		// console.log(this.props.label);
		this.props.showModal(this.props);
	}
	
	render () {
		const styles = require ("./Logo.scss");
		return (
			<div className={`${styles.logo} col-sm-3`} onClick={this.showModal}>
	  			<div className="text-center">
	  				<img src={this.props.src} alt="" className="" />
	  				<br />
	  				<p className="small">{this.props.text}</p>
	  			</div>
			</div>
		);
	}
}