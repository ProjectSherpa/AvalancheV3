import React from 'react';
import ReactDOM from 'react-dom';
import {Grid, Row, Col, Clearfix, Panel, Well, Button, FormGroup, FormControl, Glyphicon} from 'react-bootstrap';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem, Image, Jumbotron, HelpBlock, ControlLabel} from 'react-bootstrap';

class NavigationBar extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
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
    }
}

export default NavigationBar;
