import React, {Component} from 'react';
// import image from "../../../static/device-row-1.png";
import { FeatureImageText } from 'components';

export default class FeatureImage extends Component {
	render () {	
		const styles = require ("./FeatureImage.scss");
		return (
			<div className={`${styles.featureImage} container`}>
				<FeatureImageText 
				offset={this.props.offset}
				title={this.props.title}
				subtitle={this.props.subtitle} 
				/>
				<img src={this.props.src} alt="" />
			</div>
		);
	}
}