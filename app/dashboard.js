import React from 'react';
import ReactDOM from 'react-dom';
import Form from './Form';
import Results from './Results';
import {Grid, Row, Col, Clearfix, Panel, Well, Button, Glyphicon} from 'react-bootstrap';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem, Image, Jumbotron, FormGroup, FormControl, HelpBlock, ControlLabel} from 'react-bootstrap';
import { Router, Route, Link , IndexRoute} from 'react-router';

var Sidebar = require('react-sidebar').default;

var Menu = require('react-burger-menu').slide;



var Example = React.createClass({
  showSettings: function(event) {
    event.preventDefault();
  },
  render: function() {
    return (
      <Menu>
        <a id="home" className="menu-item" href="/">Home</a>
        <a id="about" className="menu-item" href="/">About</a>
        <a id="contact" className="menu-item" href="/">Contact</a>
        <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
      </Menu>
    );
  }
});

const navbarInstance = (
  <Navbar>
    <Navbar.Header>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav pullLeft>
          <NavItem eventKey={1} href="#">
          </NavItem>
      </Nav>
      <Nav pullRight>
        <NavItem eventKey={1} href="#">Project Sherpa</NavItem>
        <NavItem eventKey={2} href="#">Github</NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

// Full Dashboard

class Dashboard extends React.Component {
	constructor(props) {
	  super(props);
	}

	render() {
		return  (

			<Grid>
				<Row>
          <Col md={6} mdPull={6} />
            <Well>
              <h1>Avalanche V3</h1>
            </Well>
				</Row>
        <Row>
          <Col xs={6} md={6}><Form/></Col>
          <Col xs={6} md={6}><Results/></Col>
        </Row>
			</Grid>
		)
	}
}


class DashboardTester extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return  (

      <Grid>
        <Row>
          <Col md={6} mdPull={6} />
            <Well>
              <h1>Results</h1>
            </Well>
        </Row>
        <Row>
          <Col xs={6} md={6}><Form/></Col>
          <Col xs={6} md={6}><Results/></Col>
        </Row>
      </Grid>
    )
  }
}

/// Navigation Bar





/// Render

ReactDOM.render(navbarInstance, document.getElementById('nav'));

var destination = document.querySelector("#container");
  
ReactDOM.render(
  <Router>
    <Route path="/" component={Dashboard}>
    </Route>
    <Route path="/Results" component={DashboardTester}>
    </Route>
  </Router>,
  destination
);


