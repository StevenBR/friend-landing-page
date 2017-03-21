import React, { Component } from 'react';
import { Logo } from 'components';
import ComingSoon from '../../../static/coming-soon.png';
import Auto from '../../../static/auto.png';
import Friend from '../../../static/friend.png';
import Home from '../../../static/home.png';
import Lingo from '../../../static/lingo.png';
import Fitness from '../../../static/fitness.png';

export default class Logos extends Component {

	state = {
		logos: [
			{
				id: 1,
				src: Friend,
				label: "Hello, Friend",
				text: "Phasellus condimentum odio elit, in placerat augue congue ac.",
				noFilter: true
				
			},
			{
				id: 2,
				src: Auto,
				label: "Hello, Auto",
				text: "Phasellus condimentum odio elit, in placerat augue congue ac.",
				noFilter: true
				
			},
			{
				id: 3,
				src: Home,
				label: "Hello, Home",
				text: "Phasellus condimentum odio elit, in placerat augue congue ac.",
				noFilter: true
				
			},
			{
				id: 4,
				src: Lingo,
				label: "Hello, Lingo",
				text: "Phasellus condimentum odio elit, in placerat augue congue ac.",
				noFilter: true
				
			},
			{
				id: 5,
				src: Fitness,
				label: "Hello, Fitness",
				text: "Phasellus condimentum odio elit, in placerat augue congue ac.",
				noFilter: true
				
			},
			{
				id: 6,
				src: ComingSoon,
				label: "Coming Soon",
				text: "Phasellus condimentum odio elit, in placerat augue congue ac.",
				noFilter: true
			}
		]
	}

	render () {
		const noFilter = true;
		return (
			<div className="container">
				<div className="row" style={{paddingBottom: 20}}>
					{this.state.logos.map(logo => {
						return (
							<Logo
							key={logo.id}
							src={logo.src}
							label={logo.label}
							text={logo.text}
							noFilter={logo.noFilter}
							/>
						);
					})}		
				</div>
			</div>
		);
	}
}