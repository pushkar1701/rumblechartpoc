import React, { Component } from 'react';
const series = [{
    data: [1, 2, 4]
}];
const {
    // main component
    Chart, 
    // graphs
    Bars, Labels, Lines, Pies, Title,
    // wrappers
    Layer, Animate, Transform, Handlers,
    // helpers
    DropShadow, Gradient, helpers
  } = require('rumble-charts');

class BarChart extends Component {
    render() {
        return (
            <div>
                <Chart width={400} height={400} series={series} minY={0}>
                    <Bars />
                </Chart>
            </div>
        );
    }
}

export default BarChart;