import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { Hero, Logos, Clients, FeatureImage } from 'components';
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

		<div className={`${styles.messagesRow} text-center`}>
	       	<h2>7,421,234</h2>
	       	<p className="lead">Messages Processed</p>
	       	<span>Powered by </span><img src={TwilioLogo} />
	    </div>
		  <br />
		  <div className="text-center">
			  <h2>Welcome to Conversational Everything</h2>
			  <p className="lead">We’re building the tools to allow you to communicate with businesses, experts<br /> and organizations in the easiest way possible.</p>
		  </div>
		  <Logos />

		  <Clients />

		  <FeatureImage 
		  src={ImageOne}
		  title="No More Apps. No More Swiping."
		  subtitle="Conversational commerce is growing, and personal, concierge-style services are becoming the most personal way people will transact on their mobile devices." />

		  <FeatureImage 
		  src={ImageTwo} 
		  offset={true}
		  title="Connect to Services You Need. Faster."
		  subtitle="Forget 9,630,000 results in 0.59 seconds. Sometimes people need just one answer: the best answer. This answer should be instant, like a Friend." />

		  <FeatureImage 
		  src={ImageThree}
		  title="Smart. Innovative. Personal."
		  subtitle="Turkey pig pork corned beef, shankle fatback doner salami pork belly capicola ground round short loin t-bo" />		 

      </div>
    );
  }
}
