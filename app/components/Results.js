import React from 'react';
import ReactDOM from 'react-dom';
import Chart from 'chart.js';
import DonutChart from './DonutChart';
import DonutChartUpdate from './DonutChartUpdate';
import Cards from './Cards';
import fullPanel from './fullPanel';
import Panels from './Panels';
import ReportHeader from './ReportHeader';




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
		 		<Cards/>
		 		<Panels/>
	 		</div>
	 	)
	 }
}

 export default Results;