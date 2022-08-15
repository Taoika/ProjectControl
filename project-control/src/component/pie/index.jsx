import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Pie } from '@ant-design/plots';
const data = [
    {
        type: 'link 错误',
        value: 27,
    },
    {
        type: 'script 错误',
        value: 25,
    },
    {
        type: 'img 错误',
        value: 18,
    },
    {
        type: 'object 错误',
        value: 15,
    },
];
const config = {
    appendPadding: 10,
    data,
    // width: 680,
    autoFit: true,
    angleField: 'value',
    colorField: 'type',
    radius: 0.8,
    label: {
        type: 'outer',
        content: '{name} {percentage}',
    },
    interactions: [
        {
            type: 'pie-legend-active',
        },
        {
            type: 'element-active',
        },
    ],
};
export default function Index() {

    return (
        <Pie style={{ display: 'flex', width: '95%', height: '95%' }} {...config} />
    )
}

