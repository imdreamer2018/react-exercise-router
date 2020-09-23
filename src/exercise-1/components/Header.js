import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="header">
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <Link className="nav-link active" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/my-profiles">My Profiles</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about-me">About Me</Link>
          </li>
        </ul>
      </div>
    )
  }
}

export default Header;
