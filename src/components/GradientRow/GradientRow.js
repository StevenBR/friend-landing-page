import React, {Component} from 'react';

export default class GradientRow extends Component {
	render () {
		const styles = require ('./GradientRow.scss');
		return (
			<div className={`${styles.gradientRow} text-center`}>
		       	{this.props.children}
		    </div>
		);
	}
}