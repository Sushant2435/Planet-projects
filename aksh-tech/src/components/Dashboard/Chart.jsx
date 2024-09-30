// SplineAreaChart.js
import React from 'react';
import ApexCharts from 'react-apexcharts';
import GraphHeader from './GraphHeader';

const SalesChart = () => {
    const chartOptions = {
        chart: {
            type: 'area',
            height: 350,
            toolbar: {
                show: true, // Show the toolbar
                tools: {
                    download: false, // Hide download button
                    selection: false, // Hide selection button
                    zoom: false, // Hide zoom button
                    zoomin: false, // Hide zoom in button
                    zoomout: false, // Hide zoom out button
                    pan: false, // Hide pan button
                    reset: false
                }
            }
        },
        stroke: {
            curve: 'smooth',
        },
        title: {
            text: '',
            align: 'Center',
        },
        dataLabels: {
            enabled: false,
        },
        fill: {
            type: 'gradient',
            gradient: {
                shade: 'light',
                type: 'horizontal',
                shadeIntensity: 0.5,
                gradientToColors: ['#F64C72'],
                inverseColors: true,
                opacityFrom: 0.5,
                opacityTo: 0.1,
                stops: [0, 100],
            },
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
        },
        yaxis: {
            title: {
                text: 'Value',
            },
        },
        tooltip: {
            shared: true,
            intersect: false,
        },
    };

    const chartSeries = [
        {
            name: 'Sales',
            data: [31, 40, 28, 51, 42, 109, 100, 12, 32],
        },
        {
            name: 'Revenue',
            data: [11, 32, 45, 32, 34, 52, 41, 23, 24],
        },
    ];
    return (
        <div>
            <GraphHeader />
            <ApexCharts options={chartOptions} series={chartSeries} type="area" height={350} />
        </div >
    );
};

export default SalesChart;
