import React, { Component } from 'react';
import MaskedInput from 'react-text-mask';


export default class NumberCaptureForm extends Component {
	render () {
		const styles = require("./NumberCaptureForm.scss");
		return (
			<div className={styles.numberCaptureForm}>
				<form action="" className="form-inline">
					<div className="form-group">
						<MaskedInput
						mask={['(',/[1-9]/,/\d/,/\d/,')',' ',/\d/,/\d/,/\d/,'-',/\d/,/\d/,/\d/,/\d/]} 
						placeholder="(555) 555-5555"
						className="form-control"
						guide={false}
						/>
					</div>
					<button className={`btn btn-${this.props.buttonType}`}>TEXT ME</button>					
				</form>
			</div>
		);
	}
}