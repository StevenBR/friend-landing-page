import React, {Component} from 'react';
import Slack from "../../../static/slack.png";
import WhatsApp from "../../../static/whatsapp.png";
import Messenger from "../../../static/messenger.png";

export default class Clients extends Component {
	
	state = {
		clients:  [
			{
				id: 1,
				company: "Slack",
				src: Slack
			},
			{
				id: 2,
				company: "WhatsApp",
				src: WhatsApp
			},
			{
				id: 3,
				company: "Facebook Messenger",
				src: Messenger
			}
		]
	}

	render () {
		const styles = require ("./Clients.scss");

		return (
			<div className={styles.clients + " text-center"}>
				<p className="lead">You can also find us on</p>
				<ul className="list-inline">
					{				
						this.state.clients.map(client => (
							 <li key={client.id}>
							 	<img src={client.src} alt="" />
							 </li>
							)
						)
					}
				</ul>
				
			</div>
		);
	}
}