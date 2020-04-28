import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";

charts(FusionCharts);

const chartConfigs = {
    type: 'scrollcolumn2d',
    width: "100%",
    height: 600,
    dataFormat: 'json'
};

function dataAdapter({Countries}) {
    let categories = [];
    let values = [];

    Countries.forEach(({Country, TotalConfirmed}) => {
            categories.push({label: Country});
            values.push({value: TotalConfirmed});
        });

    return {
        categories: [{category: categories}],
        dataset: [{data: values}],
        chart: {
            caption: "Total number of confirmed COVID 19 cases",
            xaxisname: "Country",
            yaxisname: "Recovered",
            theme: "fusion"
        }
    }
}

export default function CurrentCasesVisualisation(props) {
    let options = {...chartConfigs, dataSource: dataAdapter(props.data)};
    return <ReactFusioncharts {...options} />;
}