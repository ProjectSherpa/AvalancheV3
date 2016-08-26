import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem, Image, Jumbotron, FormGroup, FormControl, HelpBlock, ControlLabel, FieldGroup, Button, Checkbox} from 'react-bootstrap';
import { Router, Route, Link , IndexRoute} from 'react-router';
import RangeSlider from './RangeSlider';



class LoadTest extends React.Component {

	constructor(props) {
	  super(props);
	  this.state = {
	  	endpoint: 'http://www.google.com',
	  	duration: 30,
	  	concurrency: 30,
	  	rps: ''
	  };
	}	

	simulationSubmit() {

    this.props.startLoad();
		axios.post('http://localhost:3001/avalanche', {
			url: this.state.endpoint, 
			maxSeconds: this.state.duration, 
			concurrency: this.state.concurrency, 
			requestsPerSecond: this.state.rps, 
		})
		.then((response) => {                                           /// Note
		    this.props.endLoad();
        console.log(response.data);
        console.log(this.props.max);
        this.props.onResponse(JSON.stringify(response.data));
        console.log(this.props.max);
		  })
	  .catch(error => {
      this.props.endLoad();
	    console.log(error);
	  });
	}

	getValidationState() {
    const val = this.state.value;
    if ((val.includes('http')) && val.length > 1) return 'success';
    else return 'error';
	}

	endpointChange(e) {
	   this.setState({endpoint: e.target.value});
	}

	durationChange(e) {
	   this.setState({duration: e.target.value});
	}

	concurrencyChange(e) {
	   this.setState({concurrency: e.target.value});
	}

	rpsChange(e) {
	   this.setState({rps: e.target.value});
	}

  render() {
    return (
      <form className='loadTestParams'>
      <div className="panel-header testText">
        Avalanche Configuration
      </div>
        <FormGroup controlId="formBasicText">
          <FormControl
            type="text"
            value={this.state.value}
            placeholder="Endpoint with Prefix (http://www.google.com)"
            onChange={this.endpointChange.bind(this)}
          />
          <FormControl.Feedback />
        </FormGroup>
       

        <FormGroup controlId="formBasicText2">
          <FormControl
            type="text"
            value={this.state.value}
            placeholder="Duration in Seconds (example: 60)"
            onChange={this.durationChange.bind(this)}
          />
          <FormControl.Feedback />
        </FormGroup>

        <FormGroup controlId="formBasicText3">
          <FormControl
            type="text"
            value={this.state.value}
            placeholder="Concurrent User Count (example: 200)"
            onChange={this.concurrencyChange.bind(this)}
          />
          <FormControl.Feedback />
        </FormGroup>

        <FormGroup controlId="formBasicText4">
          <FormControl
            type="text"
            value={this.state.value}
            placeholder="Requests Per Second (Optional)"
            onChange={this.rpsChange.bind(this)}
          />
          <FormControl.Feedback />
        </FormGroup>
          <Link role="button" className="myButton" to="/results" onClick={this.simulationSubmit.bind(this)}>
            Run Simulation
          </Link>
      </form>
    );
  }
};

export default LoadTest;