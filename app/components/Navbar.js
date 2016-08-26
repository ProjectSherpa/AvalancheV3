import React from 'react';
import ReactDOM from 'react-dom';
import {Grid, Row, Col, Clearfix, Panel, Well, Button, FormGroup, FormControl, Glyphicon} from 'react-bootstrap';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem, Image, Jumbotron, HelpBlock, ControlLabel} from 'react-bootstrap';
import {Link} from 'react-router';

class NavigationBar extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
        	<Navbar>
        	  <Navbar.Header>
        	    <Navbar.Toggle />
                <Navbar.Brand>
                <Link to='/loadtest'>
                    <Glyphicon glyph="equalizer"/>
                    Avalanche.io
                </Link>
                </Navbar.Brand>
        	  </Navbar.Header>
        	  <Navbar.Collapse>
        	    <Nav pullLeft>
        	        <NavItem eventKey={1} href="#">
        	        </NavItem>
        	    </Nav>
        	    <Nav pullRight>
                <NavItem eventKey={1} href="#">FAQ</NavItem>
                <NavItem eventKey={2} href="#">Community</NavItem>
                <NavItem eventKey={2} href="#">Github</NavItem>
        	      <NavItem eventKey={1} href="#">Scalability Sherpa</NavItem>
                <a className="github-button" href="https://github.com/ntkme/github-buttons" data-icon="octicon-star" data-style="mega" data-count-href="/ntkme/github-buttons/stargazers" data-count-api="/repos/ntkme/github-buttons#stargazers_count" data-count-aria-label="# stargazers on GitHub" aria-label="Star ntkme/github-buttons on GitHub">Star</a>
        	    </Nav>
        	  </Navbar.Collapse>
        	</Navbar>
        );
    }
}

export default NavigationBar;
