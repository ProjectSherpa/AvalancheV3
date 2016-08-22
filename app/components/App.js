import React from 'react';
import ReactDOM from 'react-dom';
import {Grid, Row, Col, Clearfix, Panel, Well, Button, FormGroup, FormControl, Glyphicon} from 'react-bootstrap';
import * as d3 from "d3";


import NavigationBar from './Navbar';
import Sidebar from './Sidebar';
import ReportHeader from './ReportHeader';

class App extends React.Component {
	constructor(props) {
	  super(props);

    /// STATES 

    this.state = {
      loading: false,
      max: 50,
      min: null,
      mean: null,
      rps: null,
      duration: null,
      test: true
    };

    this.onResponse = this.onResponse.bind(this);
    this.startLoad = this.startLoad.bind(this); 
    this.endLoad = this.endLoad.bind(this);
  }

  onResponse(response) {
    response = JSON.parse(response);
    console.log(response);
    this.setState({
      max: response.maxLatencyMs,
      min: response.minLatencyMs,
      mean: response.meanLatencyMs,
      rps: response.rps,
      duration: response.totalTimeSeconds,

    }); 
  }

  startLoad() {
    this.setState({loading: true});
  }

  endLoad() {
    this.setState({loading: false});
  }


	render() {


    if (!this.props.test) {
      return (
      <div>
        <NavigationBar/>
        <ReportHeader/>
          <div>
            <Grid>
              <Row>
                <Col xs={12} md={12}>{this.props.children && React.cloneElement(this.props.children, {
                  response: this.state.response,
                  max: this.state.max,  
                  min: this.state.min,  
                  mean: this.state.mean,  
                  rps: this.state.rps,  
                  duration: this.state.duration,  
                  loading: this.state.loading,
                  onResponse: this.onResponse,
                  startLoad: this.startLoad,
                  endLoad: this.endLoad
                })}
                </Col>
              </Row>
            </Grid>
          </div>
      </div>
      ) 
    }

		return  (
      
      <div>
      <NavigationBar/>

  			<Grid>
          <Row>
            <Col xs={12} md={12}>{this.props.children && React.cloneElement(this.props.children, {
              response: this.state.response,
              max: this.state.max,  
              min: this.state.min,  
              mean: this.state.mean,  
              rps: this.state.rps,  
              duration: this.state.duration,  
              loading: this.state.loading,
              onResponse: this.onResponse,
              startLoad: this.startLoad,
              endLoad: this.endLoad
            })}
            </Col>
          </Row>
  			</Grid>
        </div>
  		)
  	}
  }

export default App;



