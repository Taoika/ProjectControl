import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { DualAxes } from '@ant-design/plots';
import Loading from '../loading'

const DemoDualAxes = (props) => {
    const config = {
        data: props && props.data ? [props.data, props.data] : [[], []],
        smooth: true,
        xField: 'dateStr',
        yField: ['count', 'percent'],
        meta: {
            count: {
                alias: 'js错误数',
            },
            percent: {
                alias: 'js错误率',
                formatter: (v) => {
                    return `${v}%`;
                },
            },
        },
        legend: {
            itemName: {
                formatter: (text, item) => {
                    return item.value === 'count' ? 'js错误数' : 'js错误率';
                },
            },
        },
        geometryOptions: [
            {
                geometry: 'column',
                color: '#5B8FF9',
                columnWidthRatio: 0.4,
                label: {
                    position: 'middle',
                },
            },
            {
                geometry: 'line',
                smooth: true,
                color: '#5AD8A6',
            },
        ],
        animation: false


    };
    return <div style={{ display: 'flex', position: 'relative', width: '90%', height: '90%', marginBottom: '10px' }}>
        <DualAxes style={{ width: '100%', height: '100%' }}
            {...config} /></div>;
};
export default DemoDualAxes

// import { Line } from '@ant-design/plots';

// const DemoLine = () => {
//     const data = [
//         {
//             year: '0.00',
//             value: 139.15,
//         },
//         {
//             year: '0.50',
//             value: 148.95,
//         },
//         {
//             year: '1.00',
//             value: 158.70,
//         },
//         {
//             year: '1.50',
//             value: 168.35,
//         },
//         {
//             year: '2.00',
//             value: 178.05,
//         },
//         {
//             year: '2.50',
//             value: 186.70,
//         },
//         {
//             year: '3.00',
//             value: 196.45,
//         },
//         {
//             year: '3.50',
//             value: 206.60,
//         },
//     ];
//     const config = {
//         data,
//         xField: 'year',
//         yField: 'value',
//         label: {},
//         point: {
//             size: 5,
//             shape: 'diamond',
//             style: {
//                 fill: 'white',
//                 stroke: '#5B8FF9',
//                 lineWidth: 2,
//             },
//         },
//         meta: {
//             year: {
//                 alias: '砝码质量',
//                 formatter: (v) => {
//                     return `${v}g`;
//                 },
//             },
//             value: {
//                 alias: '平均读数',
//                 formatter: (v) => {
//                     return `${v}mV`;
//                 },
//             },
//         },
//         legend: true,
//         // legend: {
//         //     itemName: {
//         //         formatter: (text, item) => {
//         //             return item.value === 'year' ? '砝码质量 /10^(-3)kg' : '平均读数 /mV';
//         //         },
//         //     },
//         // },
//         yAxis: {
//             min: 135,
//             title: {
//                 text: '平均读数 /mV'
//             }

//         },
//         xAxis: {
//             title: {
//                 text: '砝码质量 /10^(-3)kg',
//             },
//             tickLine: {
//                 length: 6,
//             },
//             subTickLine: {
//                 count: 5,
//                 length: 3
//             }
//         },
//         tooltip: {
//             showMarkers: false,
//         },
//         state: {
//             active: {
//                 style: {
//                     shadowBlur: 4,
//                     stroke: '#000',
//                     fill: 'red',
//                 },
//             },
//         },
//         interactions: [
//             {
//                 type: 'marker-active',
//             },
//         ],
//     };
//     return <div style={{ display: 'flex', position: 'relative', width: '90%', height: '80%', marginBottom: '10px' }}>
//         <Line style={{ width: '100%', height: '100%' }}
//             {...config} /></div>;
// };

// export default DemoLine
