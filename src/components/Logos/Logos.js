import React, { Component } from 'react';
import { Logo } from 'components';
import ComingSoon from '../../../static/coming-soon.png';
import Auto from '../../../static/auto.png';
import Friend from '../../../static/friend.png';
import Home from '../../../static/home.png';
import Lingo from '../../../static/lingo.png';
import Fitness from '../../../static/fitness.png';

export default class Logos extends Component {
	render () {
		const noFilter = true;
		return (
			<div className="container">
				<div className="row" style={{paddingBottom: 20}}>
					<Logo
					src={Friend}
					label="Hello, Friend"
					text="Phasellus condimentum odio elit, in placerat augue congue ac."
					/>
					<Logo
					src={Auto}
					label="Hello, Auto"
					text="Phasellus condimentum odio elit, in placerat augue congue ac."
					/>
					<Logo
					src={Home}
					label="Hello, Home"
					text="Phasellus condimentum odio elit, in placerat augue congue ac."
					/>
					<Logo
					src={Lingo}
					label="Hello, Lingo"
					text="Phasellus condimentum odio elit, in placerat augue congue ac."
					/>
					<Logo
					src={Fitness}
					label="Hello, Fitness"
					text="Phasellus condimentum odio elit, in placerat augue congue ac."
					/>		
					<Logo
					src={ComingSoon}
					label="Coming soon..."
					noFilter={noFilter}
					
					/>			
				</div>
			</div>
		);
	}
}