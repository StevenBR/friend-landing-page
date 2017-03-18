import React, {Component} from 'react';
import {GradientRow,NumberCaptureForm} from 'components';
import Logo from '../../../static/squareonelabs-logo-3-light.png';

export default class Footer extends Component {
	render () {
		const styles = require ("./Footer.scss");
		return (
			<GradientRow>
				<div className={styles.footer}>
					<h2>Be the first to know about product launches</h2>
					<br/>
					<NumberCaptureForm buttonType="primary" />
					<br/>
					<img src={Logo} alt="" style={{filter: "grayscale(100%)"}} height="40px" />
					<br/>
					<br/>
					<ul className="list-inline">
						<li>About Us</li>
						<li>Help</li>
						<li>Blog</li>
					</ul>
				</div>

			</GradientRow>
		);
	}
}