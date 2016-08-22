import React from 'react';
import DonutChart from './DonutChart';
import NewChart from './NewChart';
import LineChart from './LineChart';

var Panel=React.createClass({
    render:function() {
        return (
            <div className="bg">
                {this.props.children}
            </div>
        );
    }
});

var PanelHeader=React.createClass({
    propTypes: {
        title:React.PropTypes.string
    },
    render: function () {
        return (
            <div className="panel-header">
                <div className="pull-left panel-title">{this.props.title}</div>
                <div className="pull-right line-height-30">
                    {this.props.children}
                </div>

            </div>
        );
    }
});

var SubContainer=React.createClass({
    render:function(){
        return(
            <div className="row">
                <div className="col-md-6 custom_padding" >
                    <Panel>
                        <PanelHeader title="Traffic Source">
                        </PanelHeader>
                    </Panel>
                </div>
                <div className="col-md-6 custom_padding" >
                    <Panel>
                        <PanelHeader title="Traffic Source">

                        </PanelHeader>
                    </Panel>
                </div>
            </div>
        );
    }
});

var MainContainer=React.createClass({
    render:function(){
        return(
            <div className="row">
                <div className="col-md-6 custom_padding" >
                    <Panel>
                        <PanelHeader title="Response Breakdown">
                        </PanelHeader>
                        <NewChart/>
                    </Panel>
                </div>
                <div className="col-md-6 custom_padding" >
                    <Panel>
                        <PanelHeader title="Latency Results">
                        </PanelHeader>
                        <LineChart/>
                    </Panel>
                </div>
            </div>
        );
    }
});

var Panels=React.createClass({
    render:function(){
        return(
            <div className="container">
                <MainContainer />
            </div>
        );
    }
});

export default Panels;