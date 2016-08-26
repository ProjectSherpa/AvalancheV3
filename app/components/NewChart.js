import React from 'react';
import {Doughnut} from 'react-chartjs-2';

export default React.createClass({
  render() {
  	const data = {
  		labels: [
  			'200',
  			'403',
  			'404',
  			'500',
  			'503',
  			'504'
  		],
  		datasets: [{
  			data: [this.props.res200, this.props.res403, this.props.res404, this.props.res500, this.props.res503, this.props.res504],
  			backgroundColor: [
  			'#77FF33',
  			'#FF6384',
  			'#FF6384',
  			'#FFCE56',
  			'#FFCE56',
  			'#FFCE56'
  			],
  			hoverBackgroundColor: [
  			'#FF6384',
  			'#36A2EB',
  			'#FFCE56',
  			'#FF6384',
  			'#36A2EB',
  			'#FFCE56'
  			]
  		}]
  	};
  	
    return (
      <div>
        <Doughnut data={data} />
      </div>
    );
  }
});