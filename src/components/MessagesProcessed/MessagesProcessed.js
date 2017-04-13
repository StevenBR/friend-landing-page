import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getMessages} from 'redux/modules/messagesProcessed';
import {Messages} from '../../helpers/MessagesApi';

@connect(state => ({data: state.messagesProcessed.data}),
	dispatch => bindActionCreators({getMessages}, dispatch))
export default class MessagesProcessed extends Component {		

	componentWillMount () {
		this.props.getMessages(Messages.post());
	}

	returnMessageCount = () => {
		if (this.props.data) {
			let messageCount = this.props.data.body.result * 2;
			return (messageCount.toLocaleString());
		}
		return ('counting...');
	}

	render () {
		return (
			<div>				
				<h2>{this.returnMessageCount()}</h2>
			</div>
		)
	}
}