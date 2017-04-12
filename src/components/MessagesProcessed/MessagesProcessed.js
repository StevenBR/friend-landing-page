import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getMessages} from 'redux/modules/messagesProcessed';
import {Messages} from '../../helpers/MessagesApi';

@connect(state => ({messagesPromise: state.messagesProcessed.messagesPromise}),
	dispatch => bindActionCreators({getMessages}, dispatch))
export default class MessagesProcessed extends Component {		

	componentWillMount () {
		this.props.getMessages(Messages.post());
		console.log('Component WILL MOUNT!');		

	}

	returnMessageCount = () => {
		if (this.props.messagesPromise) {
			let messageCount = this.props.messagesPromise.result * 2;
			return (messageCount.toLocaleString());
		}
		return ('loading');
	}

	render () {
		return (
			<div>				
				<h2>{this.returnMessageCount()}</h2>
			</div>
		)
	}
}