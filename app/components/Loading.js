import React from 'react';
import Spinner from 'react-spinkit';

class Loading extends React.Component {
  render () {
    return (
        <div>
            <Spinner spinnerName="three-bounce" />
        </div>

    )
  }
}

export default Loading;