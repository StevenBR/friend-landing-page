import React, {Component} from 'react';
import { NumberCaptureForm } from 'components';

export default class Modal extends Component {
	render () {
		const styles = require ('./Modal.scss');
		return (
			<div className={styles.modal}>
				<i className="fa fa-times"></i>
				<div className={"panel panel-default " + styles.modalBox}>
					<div className="panel-body text-center">
						<h3>We're still building Hello, Friend.</h3>
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