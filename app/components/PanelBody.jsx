import React from 'react';

class PanelBody extends React.Component {
	constructor(props) {
		super(props);
	
	}
	render() {
		return (
			<div className="bg">
			    {this.props.children}
			</div>
		)
	}
}

export default PanelBody;