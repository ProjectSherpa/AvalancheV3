import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem, Image, Jumbotron, FormGroup, FormControl, HelpBlock, ControlLabel, FieldGroup, Button, Checkbox} from 'react-bootstrap';
import { Router, Route, Link , IndexRoute} from 'react-router';

class LoadTest extends React.Component {

	constructor(props) {
	  super(props);
	  this.state = {
	  	endpoint: '',
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
      <form>
      <h3>Avalanche Configuration</h3>
        <FormGroup controlId="formBasicText">
          <ControlLabel>Endpoint w/ Port</ControlLabel>
          <FormControl
            type="text"
            value={this.state.value}
            placeholder="Enter Endpoint with http prefix"
            onChange={this.endpointChange.bind(this)}
          />
          <FormControl.Feedback />
        </FormGroup>

        <FormGroup controlId="formBasicText2">
          <ControlLabel>Duration</ControlLabel>
          <FormControl
            type="text"
            value={this.state.value}
            placeholder="Enter duration in seconds"
            onChange={this.durationChange.bind(this)}
          />
          <FormControl.Feedback />
        </FormGroup>

        <FormGroup controlId="formBasicText3">
          <ControlLabel>Concurrent Threads</ControlLabel>
          <FormControl
            type="text"
            value={this.state.value}
            placeholder="Enter number of users"
            onChange={this.concurrencyChange.bind(this)}
          />
          <FormControl.Feedback />
        </FormGroup>

        <FormGroup controlId="formBasicText4">
          <ControlLabel>Requests Per Second</ControlLabel>
          <FormControl
            type="text"
            value={this.state.value}
            placeholder="Optional Override Parameter"
            onChange={this.rpsChange.bind(this)}
          />
          <FormControl.Feedback />
        </FormGroup>
          <Link role="button" to="/results" onClick={this.simulationSubmit.bind(this)}>
            Simulate
          </Link>
      </form>
    );
  }
};

export default LoadTest;