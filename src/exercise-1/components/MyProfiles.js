import React, {Component} from 'react';

class MyProfiles extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <p>User name: XXX</p>
        <p>Gender: male</p>
        <p>Work: IT industry</p>
        <p>Website: '/my-profiles'</p>
      </div>
    )
  }
}

export default MyProfiles;
