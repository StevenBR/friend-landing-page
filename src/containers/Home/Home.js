import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { Hero, Logos, Clients, FeatureImage, GradientRow, Footer, MessagesProcessed } from 'components';
import TwilioLogo from '../../../static/twilio-logo.png';
import ImageOne from "../../../static/device-row-1.png";
import ImageTwo from "../../../static/device-row-2.png";
import ImageThree from "../../../static/device-row-3.png";



export default class Home extends Component {
  render() {
	const styles = require("./Home.scss");

    return (
      <div className={styles.home}>
        <Helmet title="Home"/>
        <Hero />
        <GradientRow>
        	<MessagesProcessed />
        	<p className="lead">Messages Processed</p>
        	<span>Powered by </span><img src={TwilioLogo} />
        </GradientRow>
			
		  <br />
		  <div className="text-center">
			  <h2>Welcome to Conversational Everything</h2>
			  <p className="lead">A whole new wave of experiences is here. Frictionless service on messaging channels you prefer.<br/> Connect to experts, services and organizations in the easiest way possible.</p>
		  </div>
		  <br />
		  <Logos />

		  <Clients />

		  <FeatureImage 
		  src={ImageOne}
		  title="No More Apps. No More Swiping."
		  subtitle="Conversational commerce is here to stay. Personal, concierge-style services are the easiest and most personal way to complete a transaction on your mobile device. Whatever you need, we’re here to help." />

		  <FeatureImage 
		  src={ImageTwo} 
		  offset={true}
		  title="Connect to Services You Need. Faster."
		  subtitle="Search engines can give you millions of results in less than a second. While that’s cool, our technology provides you with the most helpful, personal answer. It’s like texting a friend. Simple messaging experiences without third-party ads or spam." />

		  <FeatureImage 
		  src={ImageThree}
		  title="Smart. Innovative. Personal."
		  subtitle="Send a message for simple or complex tasks. From online research to shopping to storing something for later,our expert team, combined with complex AI and natural language understanding, can help get you the best answer the moment you need it. Meet your new best friend." />

      </div>
    );
  }
}
