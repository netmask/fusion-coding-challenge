import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";

charts(FusionCharts);

const chartConfigs = {
    type: 'scrollbar2d',
    width: "100%",
    height: 600,
    dataFormat: 'json'
};

function dataAdapter({Countries}) {
    let categories = [];
    let values = [];

    Countries.sort((a, b) => b.TotalRecovered - a.TotalRecovered )
        .forEach(({Country, TotalRecovered}) => {
            categories.push({label: Country});
            values.push({value: TotalRecovered});
        });

    return {
        categories: [{category: categories}],
        dataset: [{data: values}],
        chart: {
            caption: "Total number of people recovered from COVID 19",
            xaxisname: "Country",
            yaxisname: "Recovered",
            theme: "fusion"
        }
    }
}

export default function CurrentRecoveredVisualisation(props) {
    let options = {...chartConfigs, dataSource: dataAdapter(props.data)};
    return <ReactFusioncharts {...options} />;
}