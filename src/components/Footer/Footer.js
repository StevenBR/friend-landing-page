import React, {Component} from 'react';
import {GradientRow,NumberCaptureForm} from 'components';

export default class Footer extends Component {
	render () {
		return (
			<GradientRow>
				<h2>Be the first to know about product launches</h2>
				<NumberCaptureForm buttonType="primary" />

			</GradientRow>
		);
	}
}