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
      max: 50,
      min: 23,
      mean: 35,
      rps: 200,
      duration: 60,
      mailBarToggle: true,
      loading: false,
      endpoint: null,

      res200: 92,
      res403: 43,
      res404: 65,
      res500: 31,
      res503: 19,
      res504: 28,
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


    if (this.state.mailBarToggle === false) {
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
                  endLoad: this.endLoad,
                  res200: this.state.res200,
                  res403: this.state.res403,
                  res404: this.state.res404,
                  res500: this.state.res500,
                  res503: this.state.res503,
                  res504: this.state.res504
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
              endLoad: this.endLoad,
              res200: this.state.res200,
              res403: this.state.res403,
              res404: this.state.res404,
              res500: this.state.res500,
              res503: this.state.res503,
              res504: this.state.res504
            })}
            </Col>
          </Row>
  			</Grid>
        </div>
  		)
  	}
  }

export default App;



