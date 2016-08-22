import React from 'react';

class ReportHeader extends React.Component {
	constructor(props) {
		super(props);

	}


	render() {

		var headerBox = {
		    width: '100%',
		    height: '75px',
		    backgroundColor: '#ffffff',
		    borderBottom: '1px solid #d5d5d6',
		    marginBottom: '10px'
		};

		var headerBox2 = {
			backgroundColor: '#e58c72',
			height: '100%',
			width: '150px',
			lineHeight: '75px',
			textAlign: 'center',
			color: '#FFFFFF',
			fontSize: '1.5em',
		    float: 'right'

		};

		var headerBox3 = {
		    lineHeight: '75px',
		    marginLeft: '20px',
		    color: '#6e6e74',
		    fontSize: '2em',
		    textAlign: 'center',
		    float: 'left'
		};

		return (
			<div style={headerBox}>
			    <div style={headerBox3}>
			    	WWW.SCALABILITYSHERPA.COM - 9/12
			    </div>
			    	<div style={headerBox2}>
			            Email
			        </div>
			</div>
		)
	}
}

export default ReportHeader;
