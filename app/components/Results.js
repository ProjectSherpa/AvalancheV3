import React from 'react';
import ReactDOM from 'react-dom';
import Chart from 'chart.js'



class Results extends React.Component {

	constructor(props) {
	  super(props);
	}
	 render() {
	 	if (this.props.loading) {
	 		return (
	 		<div>Loading...</div>
	 		)	
	 	}
	 	return (
	 		<div>
		 		<h3>Results of your test</h3>
		 		<p>Max Latency: {this.props.max}</p>
		 		<p>Min Latency: {this.props.min}</p>
		 		<p>Mean Latency: {this.props.mean}</p>
		 		<p>RPS: {this.props.rps}</p>
		 		<p>Test Duration: {this.props.duration}</p>

	 		</div>
	 	)
	 }
}

 export default Results;