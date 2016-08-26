import React from 'react';
import ReactDOM from 'react-dom';
import SingleCard from './SingleCard';

class Cards extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="row">
                <SingleCard
                header='Request Type'
                val='GET'
                />
                <SingleCard
                header='Requests Per Second'
                val={this.props.rps}
                />
                <SingleCard
                header='Duration'
                val={this.props.duration}
                />
                <SingleCard
                header='Mean Latency (secs)'
                val={this.props.mean}
                />
                <SingleCard
                header='Min. Latency (secs)'
                val={this.props.min}
                />
                <SingleCard
                header='Max. Latency (secs)'
                val={this.props.max}
                />
            </div>

        )
    }
}

export default Cards;