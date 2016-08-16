import React from 'react';
import ReactDOM from 'react-dom';
import {Grid, Row, Col, Clearfix, Panel, Well, Button, FormGroup, FormControl, Glyphicon} from 'react-bootstrap';

import NavigationBar from './Navbar';
import Sidebar from './Sidebar';

class App extends React.Component {
	constructor(props) {
	  super(props);

    /// STATES 

    this.state = {
      loading: false,
      max: null,
      min: null,
      mean: null,
      rps: null,
      duration: null
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
		return  (
  			<Grid>
          <Sidebar/>
          <NavigationBar/>
  				<Row>
            <Col md={6} mdPull={6} />
              <Well>
                <h1>Avalanche V3</h1>
              </Well>
  				</Row>
          <Row>
            <Col xs={6} md={6}>{this.props.children && React.cloneElement(this.props.children, {
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
  		)
  	}
  }

export default App;


