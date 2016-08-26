import React from 'react';
import ReactDOM from 'react-dom';
import Chart from 'chart.js';
import DonutChart from './DonutChart';
import DonutChartUpdate from './DonutChartUpdate';
import Cards from './Cards';
import ChartPanels from './ChartPanels';
import ReportHeader from './ReportHeader';
import Loading from './Loading';




class Results extends React.Component {

	constructor(props) {
	  super(props);

	}

	 render() {
	 	if (this.props.loading) {
	 		return (
	 		<Loading/>
	 		)	
	 	}
	 	return (
	 		<div>
		 		<Cards 
		 			max={this.props.max}
		 			min={this.props.min}
		 			mean={this.props.mean}
		 			rps={this.props.rps}
		 			duration={this.props.duration}
		 		/>
		 		<ChartPanels
		 			res200={this.props.res200}
		 			res403={this.props.res403}
		 			res404={this.props.res404}
		 			res500={this.props.res500}
		 			res503={this.props.res503}
		 			res504={this.props.res504}
		 		/>
	 		</div>
	 	)
	 }
}

 export default Results;