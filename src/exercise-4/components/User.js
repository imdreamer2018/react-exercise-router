import React from 'react';
import NotMatch from "./NotMatch";

const User = (props) => {
  console.log(props.match.params.user);
  console.log(isNaN(props.match.params.user));
  if(!isNaN(props.match.params.user)) {
    return (
      <div>
        User profile page.
      </div>
    );
  }else {
    return <NotMatch/>
  }


};

export default User;
