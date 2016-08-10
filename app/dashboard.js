import React from 'react';
import ReactDOM from 'react-dom';
import Form from './Form';
import Results from './Results';
import {Grid, Row, Col, Clearfix, Panel, Well, Button, Glyphicon} from 'react-bootstrap';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem, Image, Jumbotron, FormGroup, FormControl, HelpBlock, ControlLabel} from 'react-bootstrap';


// tutorial1.js
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

/// Navigation Bar

const navbarInstance = (
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#">Avalanche V3</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <NavDropdown eventKey={3} title="Scenarios" id="basic-nav-dropdown">
          <MenuItem eventKey={3.1}>Avalanche-01</MenuItem>
          <MenuItem eventKey={3.2}>Avalanche-02</MenuItem>
          <MenuItem eventKey={3.3}>Avalanche-03</MenuItem>
        </NavDropdown>
      </Nav>
      <Nav pullRight>
        <NavItem eventKey={1} href="#">Project Sherpa</NavItem>
        <NavItem eventKey={2} href="#">Github</NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);


/// Render

ReactDOM.render(navbarInstance, document.getElementById('nav'));
ReactDOM.render(<Dashboard />, document.getElementById('content'));

