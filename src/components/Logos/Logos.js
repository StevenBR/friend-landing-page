import React, { Component } from 'react';
import { Logo } from 'components';
import AutoLogo from '../../../static/hello-auto.png';

export default class Logos extends Component {
	render () {
		return (
			<div className="container">
				<div className="row">
					<Logo
					src={AutoLogo}
					label="Hello Auto"
					/>
					<Logo />
					<Logo />
					<Logo />
					<Logo />
				</div>
			</div>
		);
	}
}