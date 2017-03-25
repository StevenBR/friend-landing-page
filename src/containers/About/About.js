import React, {Component} from 'react';
import Helmet from 'react-helmet';

export default class About extends Component {

  render() {
    return (
      <div className="container narrow-container">
        <h1 className="text-center">About Us</h1>
        <h4>What is Square One Labs?</h4>
        <p><span>Square One Labs is a startup studio in pursuit of better messaging experiences. We&rsquo;re a technology company that provides you with messaging services that help you automate and enhance every day tasks. No more app downloads, questionable targeted ads, mobile browser pop ups or calling and being put on hold. In other words, we&rsquo;re here to help you get things done. </span></p>
        <h4>Who is part of the Square One Labs team?</h4>
        <p><span>Our team is made up of serial entrepreneurs, engineers and product designers who personally review every line of code and message that takes place on the platform. Our engineers have an average of 10 years experience and are ex-employees at some of the most prestigious technology corporations. </span></p>
      </div>
    );
  }
}
