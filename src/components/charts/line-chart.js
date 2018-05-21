import React, { Component } from 'react';
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

const series = [{
    data: [1, 3, 2]
}, {
    data: [5, 11, 7]
}, {
    data: [13, 19, 17]
}];

class LineChart extends Component {
    render() {
        return (
            <div>
                <Chart width={400} height={400} series={series} minY={0}>
                <Lines
                    interpolation='monotone' />
                </Chart>
            </div>
        );
    }
}

export default LineChart;