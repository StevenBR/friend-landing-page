import React, {Component} from 'react';
// import image from "../../../static/device-row-1.png";

export default class FeatureImageText extends Component {
	render () {	
		return (
			<div className={`col-sm-6 ${this.props.offset?"col-sm-offset-6":""}`}>
				<h2>{this.props.title}</h2>
				<p className="lead">{this.props.subtitle}</p>
			</div>
		);
	}
}