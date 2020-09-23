import React, {Component} from 'react';
import {Link} from "react-router-dom";

class AboutUs extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <p>Company: ThoughtWorks local</p>
        <p>Location: Wu'Han</p>
        <br/>
        <p>For more information please!</p>
        <p>view our <Link to="/">website.</Link></p>
      </div>
    )
  }
}

export default AboutUs;
