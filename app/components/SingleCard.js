import React from 'react';
import ReactDOM from 'react-dom';


class SingleCard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
    	var color = ['#64b0cc'];

    	var style = {'backgroundColor': color[0]};
    	console.log(this.props.val)
	    return (
	        <div className="col-xs-2 custom_padding margin-below-20">
	            <div className="card" style={style}>
	                <div className="card_header">
	                    <div className="pull-left">
	                        {this.props.header}
	                    </div>
	                    <div className="pull-right">
	                    </div>
	                </div>
	                <hr className="hr-custom"/>
	                <div className="card_body">
	                    {this.props.val}
	                </div>
	            </div>
	        </div>
	    );
	};
}

export default SingleCard;

