import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { DualAxes } from '@ant-design/plots';

const DemoDualAxes = () => {
    const data = [
        {
            time: '2019-03',
            '错误次数': 350,
            '错误率': 0,
        },
        {
            time: '2019-04',
            '错误次数': 900,
            '错误率': 10,
        },
        {
            time: '2019-05',
            '错误次数': 300,
            '错误率': 20,
        },
        {
            time: '2019-06',
            '错误次数': 450,
            '错误率': 20,
        },
        {
            time: '2019-07',
            '错误次数': 470,
            '错误率': 10,
        },
    ]
    const config = {
        data: [data, data],
        smooth: true,
        xField: 'time',
        yField: ['错误次数', '错误率'],

        yAxis: {
            '错误率': {
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
            },
            {
                geometry: 'line',
                lineStyle: {
                    lineWidth: 2,
                },
            },
        ],
    };
    return <DualAxes style={{ display: 'flex', width: '90%', height: '90%', marginBottom: '10px' }
    } {...config} />;
};

export default DemoDualAxes