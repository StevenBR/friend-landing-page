import React, {Component} from 'react';

export default class MessagesProcessed extends Component {		

	state = {}

	componentWillMount () {
		console.log('Component WILL MOUNT!');		
		this.state.hoku = "hhooo";
	}

	render () {
		return (
			<div>
				<h2>1,234</h2>
				<h5>{this.state.hoku}</h5>										
			</div>
		)
	}
}