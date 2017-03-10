import React, { Component } from 'react';

export default class HeroText extends Component {
	render () {
		const styles = require("./HeroText.scss");
		return (
			<div className={styles.heroText}>
				<h2>{this.props.title}</h2>
				<p className="lead">{this.props.subtitle}</p>
			</div>
		);
	}
}
