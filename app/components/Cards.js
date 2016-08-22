import React from 'react';
import ReactDOM from 'react-dom';

var Cards=React.createClass({
    render:function(){


        var color1=['#53c79f'];

        var RPS=color1.map(function(d,i){
            var style={
                'backgroundColor':d
            };
            return (
                <div className="col-xs-2 custom_padding margin-below-20" key={i}>
                    <div className="card" style={style}>
                        <div className="card_header">
                            <div className="pull-left">
                                RPS
                            </div>
                            <div className="pull-right">
                                
                            </div>
                        </div>
                        <hr className="hr-custom"/>
                        <div className="card_body">
                            348
                        </div>
                    </div>
                </div>
            );
        });

        var color2 = ['#64b0cc'];

        var Duration=color2.map(function(d,i){
            var style={
                'backgroundColor':d
            };
            return (
                <div className="col-xs-2 custom_padding margin-below-20" key={i}>
                    <div className="card" style={style}>
                        <div className="card_header">
                            <div className="pull-left">
                                Total Duration
                            </div>
                            <div className="pull-right">
                                70%
                            </div>
                        </div>
                        <hr className="hr-custom"/>
                        <div className="card_body">
                            98
                        </div>
                    </div>
                </div>
            );
        });

        var color3 = ['#64b0cc'];

        var averageLatency=color3.map(function(d,i){
            var style={
                'backgroundColor':d
            };
            return (
                <div className="col-xs-2 custom_padding margin-below-20" key={i}>
                    <div className="card" style={style}>
                        <div className="card_header">
                            <div className="pull-left">
                                Avg. Latency
                            </div>
                            <div className="pull-right">
                                70%
                            </div>
                        </div>
                        <hr className="hr-custom"/>
                        <div className="card_body">
                            98
                        </div>
                    </div>
                </div>
            );
        });

        var color4 = ['#64b0cc'];

        var concurrentUsers=color4.map(function(d,i){
            var style={
                'backgroundColor':d
            };
            return (
                <div className="col-xs-2 custom_padding margin-below-20" key={i}>
                    <div className="card" style={style}>
                        <div className="card_header">
                            <div className="pull-left">
                                Peak Users
                            </div>
                            <div className="pull-right">
                                70%
                            </div>
                        </div>
                        <hr className="hr-custom"/>
                        <div className="card_body">
                            98
                        </div>
                    </div>
                </div>
            );
        });

        var color5 = ['#64b0cc'];

        var minLatency=color5.map(function(d,i){
            var style={
                'backgroundColor':d
            };
            return (
                <div className="col-xs-2 custom_padding margin-below-20" key={i}>
                    <div className="card" style={style}>
                        <div className="card_header">
                            <div className="pull-left">
                                Min. Latency
                            </div>
                            <div className="pull-right">
                                70%
                            </div>
                        </div>
                        <hr className="hr-custom"/>
                        <div className="card_body">
                            98
                        </div>
                    </div>
                </div>
            );
        });

        var color6 = ['#64b0cc'];

        var maxLatency=color6.map(function(d,i){
            var style={
                'backgroundColor':d
            };
            return (
                <div className="col-xs-2 custom_padding margin-below-20" key={i}>
                    <div className="card" style={style}>
                        <div className="card_header">
                            <div className="pull-left">
                                Max. Latency
                            </div>
                            <div className="pull-right">
                                70%
                            </div>
                        </div>
                        <hr className="hr-custom"/>
                        <div className="card_body">
                            98
                        </div>
                    </div>
                </div>
            );
        });



        return(
            <div className="row">
                {RPS}
                {Duration}
                {averageLatency}
                {concurrentUsers}
                {minLatency}
                {maxLatency}
            </div>
        );
    }
});


export default Cards;