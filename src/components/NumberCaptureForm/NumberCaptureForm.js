import React, { Component } from 'react';
import MaskedInput from 'react-text-mask';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {submitNumber} from 'redux/modules/submitNumber';
import {PhoneNumber} from 'helpers/PhoneNumberApi';

@connect(null,
	dispatch => bindActionCreators({submitNumber},dispatch))
export default class NumberCaptureForm extends Component {
	submitNumber = (e) => {
		e.preventDefault();
		let submittedNumber = this.refs.number.inputElement.value;
		let formattedNumber = submittedNumber.replace('(','').replace(')','').replace('-','').replace(' ','');
		this.props.submitNumber(PhoneNumber.post({"mobile":formattedNumber}));
		this.refs.number.inputElement.value = "";
	}

	render () {
		const styles = require("./NumberCaptureForm.scss");
		return (
			<div className={styles.numberCaptureForm}>
				<form action="" className="form-inline" onSubmit={this.submitNumber}>
					<div className="form-group">
						<MaskedInput
						mask={['(',/[1-9]/,/\d/,/\d/,')',' ',/\d/,/\d/,/\d/,'-',/\d/,/\d/,/\d/,/\d/]} 
						placeholder="(555) 555-5555"
						className="form-control"
						guide={false}
						ref="number"
						/>
					</div>
					<button className={`btn btn-${this.props.buttonType}`}>TEXT ME</button>					
				</form>
			</div>
		);
	}
}