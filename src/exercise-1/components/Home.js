import React, {Component} from 'react';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h2>This is a home page.</h2>
        <p>And the url is '/'</p>
      </div>
    )
  }
}

export default Home;
