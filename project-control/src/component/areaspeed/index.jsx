import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Area } from '@ant-design/plots';
const DemoArea = (props) => {



    const config = {
        data: props ? props.data : [],
        xField: 'dateStr',
        yField: 'consumeTime',
        meta: {
            consumeTime: {
                alias: '平均耗时',
                formatter: (v) => {
                    return `${v}s`;
                },
            },
        },

        // yAxis: {
        //     label: {
        //         formatter: (v) => {
        //             return `${v}s`;
        //         },
        //     },
        // },
        // xAxis: {
        //     range: [0, 1],
        // },
    };

    return <div style={{ display: 'flex', position: 'relative', width: '90%', height: '80%', marginBottom: '10px' }}>
        <Area style={{ display: 'flex', width: '100%', height: '100%' }} {...config} /></div>;
};

export default DemoArea