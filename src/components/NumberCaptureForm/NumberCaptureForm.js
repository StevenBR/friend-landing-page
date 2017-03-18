import React, { Component } from 'react';

export default class NumberCaptureForm extends Component {
	render () {
		const styles = require("./NumberCaptureForm.scss");
		return (
			<div className={styles.numberCaptureForm}>
				<form action="" className="form-inline">
					<div className="form-group">
						<input type="text" placeholder="(555) 555-5555" className="form-control"/>
					</div>
					<button className={`btn btn-${this.props.buttonType}`}>TEXT ME</button>					
				</form>
			</div>
		);
	}
}