import React from 'react';
import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = ({dataPoints}) => {
    const dataPointValues = dataPoints.map(data => data.value);
    const totalMaximum = Math.max(...dataPointValues)

    return (
        <div className="chart">
            {dataPoints.map(dataPoint => <ChartBar
                value={dataPoint.value}
                maxValue={totalMaximum}
                label={dataPoint.label}
                key={dataPoints.label}/>)}
        </div>
    );
};

export default Chart;