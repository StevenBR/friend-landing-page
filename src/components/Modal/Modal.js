import React, {Component} from 'react';
import { NumberCaptureForm } from 'components';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {closeModal} from 'redux/modules/modal';

@connect(
	state => ({modalInfo: state.modal.modalInfo}),
	dispatch => bindActionCreators({closeModal}, dispatch))
export default class Modal extends Component {
	preventBubbling = (event) => {
		event.stopPropagation();		
	}	
	
	render () {
		const styles = require ('./Modal.scss');		
		let title;
		if (this.props.modalInfo.label === "Coming Soon") {
			title = (<h3>More bots and services coming soon...</h3>)
		} else {
			title = (<h3>We're still building {this.props.modalInfo.label}</h3>)
		}
		return (
			<div className={styles.modal} onClick={this.props.closeModal}>
				<i className="fa fa-times"></i>
				<div className={"panel panel-default " + styles.modalBox} onClick={this.preventBubbling}>
					<div className="panel-body text-center">					
						{title}
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