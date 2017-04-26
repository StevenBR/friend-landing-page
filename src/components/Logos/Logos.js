import React, { Component } from 'react';
import { Logo } from 'components';
// import ComingSoon from '../../../static/coming-soon.png';
// import Auto from '../../../static/auto.png';
// import Friend from '../../../static/friend.png';
// import Home from '../../../static/home.png';
// import Lingo from '../../../static/lingo.png';
// import Fitness from '../../../static/fitness.png';

import ComingSoon from '../../../static/coming-soon.svg';
import Auto from '../../../static/autobuddy.svg';
import Friend from '../../../static/friend.svg';
import Home from '../../../static/home-tap.svg';
import Lingo from '../../../static/lingo.svg';
import Fitness from '../../../static/get-fit.svg';

export default class Logos extends Component {

	state = {
		logos: [
			{
				id: 1,
				src: Friend,
				label: "Friend",
				text: "A personal, friendly digital assistant to answer your daily questions.",
				noFilter: true
				
			},
			{
				id: 2,
				src: Auto,
				label: "AutoBuddy",
				text: "Instant auto expertise through text.",
				noFilter: true
				
			},
			{
				id: 3,
				src: Home,
				label: "HomeTap",
				text: "Control your home and appliances through messaging.",
				noFilter: true
				
			},
			{
				id: 4,
				src: Lingo,
				label: "Lingo",
				text: "Connect to a language expert through text.",
				noFilter: true
				
			},
			{
				id: 5,
				src: Fitness,
				label: "GetFit",
				text: "Get motivated by your personal trainer, through text.",
				noFilter: true
				
			},
			{
				id: 6,
				src: ComingSoon,
				label: "Coming Soon",
				text: "More bots and services on the way.",
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