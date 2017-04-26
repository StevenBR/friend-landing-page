import React, {Component} from 'react';
import {GradientRow,NumberCaptureForm} from 'components';
import {LinkContainer} from 'react-router-bootstrap';
import Logo from '../../../static/logo.svg';

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
					<img src={Logo} alt="" />
					<br/>
					<br/>
					<ul className="list-inline">						
													
						<LinkContainer to="/about">
							<li><a href="">About Us</a></li>
						</LinkContainer>
						<LinkContainer to="/faq">
							<li><a href="">FAQ</a></li>
						</LinkContainer>
							<li><a href="https://medium.com/square-one-labs">Blog</a></li>
						<LinkContainer to="/terms-service">
							<li><a href="">Terms of Service</a></li>
						</LinkContainer>
						<LinkContainer to="/privacy-policy">
							<li><a href="">Privacy Policy</a></li>
						</LinkContainer>

					</ul>
				</div>

			</GradientRow>
		);
	}
}