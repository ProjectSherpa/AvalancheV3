import React from 'react';
import Spinner from 'react-spinkit';

class Loading extends React.Component {
  render () {
  	var SpinnerStyle = {
  		paddingLeft: '43%',
  		paddingTop: '15%'
  	}

  	var TextStyle = {
  		paddingLeft: '29%',
  		paddingTop: '2%',
  		fontSize: '1.5em'
  	}

    return (
        <div>
            <Spinner spinnerName="three-bounce" style={SpinnerStyle} />
            <div style = {TextStyle}>Your server results are being generated - hang tight!</div>
        </div>

    )
  }
}

export default Loading;