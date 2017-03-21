import React, {Component} from 'react';
import { NumberCaptureForm } from 'components';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {closeModal} from 'redux/modules/modal';

@connect(
	state => ({modalInfo: state.modal.modalInfo}),
	dispatch => bindActionCreators({closeModal}, dispatch))
export default class Modal extends Component {
	
	
	render () {
		const styles = require ('./Modal.scss');
		return (
			<div className={styles.modal}>
				<i className="fa fa-times" onClick={this.props.closeModal}></i>
				<div className={"panel panel-default " + styles.modalBox}>
					<div className="panel-body text-center">
						<h3>We're still building {this.props.modalInfo.label}</h3>
						<p className="lead">Leave your number to get early access.</p>
						<NumberCaptureForm
						buttonType="primary"
						/>						
					</div>
				</div>
			</div>
		);
	}
}