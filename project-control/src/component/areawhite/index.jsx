import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { DualAxes } from '@ant-design/plots';

const DemoDualAxes = (props) => {

    const config = {
        data: props ? [props.data, props.data] : [[], []],
        smooth: true,
        xField: 'dateStr',
        yField: ['count', 'percent'],
        meta: {
            count: {
                alias: '白屏次数',
            },
            percent: {
                alias: '白屏率',
                formatter: (v) => {
                    return `${v}%`;
                },
            },
        },
        legend: {
            itemName: {
                formatter: (text, item) => {
                    return item.value === 'count' ? '白屏次数' : '白屏率';
                },
            },
        },
        // yAxis: {
        //     'percent': {
        //         label: {
        //             formatter: (v) => {
        //                 return `${v}%`;
        //             },
        //         },
        //     },
        // },
        geometryOptions: [
            {
                geometry: 'column',
            },
            {
                geometry: 'line',
                lineStyle: {
                    lineWidth: 2,
                },
            },
        ],
    };
    return <div style={{ display: 'flex', position: 'relative', width: '90%', height: '90%', marginBottom: '10px' }}>
        <DualAxes style={{ width: '100%', height: '100%' }}
            {...config} /></div>;
};

export default DemoDualAxes