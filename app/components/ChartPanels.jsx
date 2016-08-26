import React from 'react';
import PanelBody from './PanelBody';
import PanelHeader from './PanelHeader';

import NewChart from './NewChart';
import LineChart from './LineChart';

class ChartPanels extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6 custom_padding" >
                        <PanelBody>
                            <PanelHeader title="Response Breakdown">
                            </PanelHeader>
                            <NewChart
                                res200={this.props.res200}
                                res403={this.props.res403}
                                res404={this.props.res404}
                                res500={this.props.res500}
                                res503={this.props.res503}
                                res504={this.props.res504}
                            />
                        </PanelBody>
                    </div>
                    <div className="col-md-6 custom_padding" >
                        <PanelBody>
                            <PanelHeader title="Latency Results">
                            </PanelHeader>
                            <LineChart/>
                        </PanelBody>
                    </div>
                </div>
            </div>
        )
    }
}


export default ChartPanels;


