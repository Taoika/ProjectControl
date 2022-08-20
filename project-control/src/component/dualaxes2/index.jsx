import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { DualAxes } from '@ant-design/plots';

const DemoDualAxes = (props) => {
    const config = {
        data: props ? [props.countData, props.transformData] : [[], []],
        smooth: true,
        xField: 'time',
        yField: ['value', '成功率'],
        yAxis: {
            '成功率': {
                label: {
                    formatter: (v) => {
                        return `${v}%`;
                    },
                },
            },
        },
        meta: {
            '成功率': {
                label: {
                    formatter: (v) => {
                        return `${v}%`;
                    },
                },
            },
        },
        geometryOptions: [
            {
                geometry: 'column',
                isGroup: true,
                seriesField: 'type',
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
