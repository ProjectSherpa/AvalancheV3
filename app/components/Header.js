import React from 'react';
import ReactDOM from 'react-dom';

class Header extends React.Component {
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
		</Grid>
		)
	}
}

 export default Header;