import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { DualAxes } from '@ant-design/plots';

const DemoDualAxes = () => {
    //时间和两个柱
    const countData = [
        {
            time: '2019-03',
            value: 350,
            type: '成功次数',
        },
        {
            time: '2019-04',
            value: 900,
            type: '成功次数',
        },
        {
            time: '2019-05',
            value: 300,
            type: '成功次数',
        },
        {
            time: '2019-06',
            value: 450,
            type: '成功次数',
        },
        {
            time: '2019-07',
            value: 470,
            type: '成功次数',
        },
        {
            time: '2019-03',
            value: 220,
            type: '错误次数',
        },
        {
            time: '2019-04',
            value: 300,
            type: '错误次数',
        },
        {
            time: '2019-05',
            value: 250,
            type: '错误次数',
        },
        {
            time: '2019-06',
            value: 220,
            type: '错误次数',
        },
        {
            time: '2019-07',
            value: 362,
            type: '错误次数',
        },
    ];
    //线和时间
    const transformData = [
        {
            time: '2019-03',
            成功率: 800,
        },
        {
            time: '2019-04',
            成功率: 600,
        },
        {
            time: '2019-05',
            成功率: 400,
        },
        {
            time: '2019-06',
            成功率: 380,
        },
        {
            time: '2019-07',
            成功率: 220,
        },
    ];
    const config = {
        data: [countData, transformData],
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
    return <DualAxes style={{ display: 'flex', width: '90%', height: '90%', marginBottom: '10px' }} {...config} />;
};

export default DemoDualAxes
