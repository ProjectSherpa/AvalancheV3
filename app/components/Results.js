import React from 'react';
import ReactDOM from 'react-dom';

class Results extends React.Component {

	constructor(props) {
	  super(props);
	}
	 render() {
	 	return (
	 		<div>
		 		<h3>Results of your test</h3>
		 		<p>Max Latency: </p>
		 		<p>Min Latency: </p>
		 		<p>Mean Latency: </p>
		 		<p>RPS: </p>
		 		<p>Test Duration: </p>

	 		</div>
	 	)
	 }
}

 export default Results;