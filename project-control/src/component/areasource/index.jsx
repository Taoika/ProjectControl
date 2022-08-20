import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { DualAxes } from '@ant-design/plots';
import Loading from '../loading'

const DemoDualAxes = (props) => {
    const [load, setLoad] = React.useState()
    const [data, setData] = React.useState([])
    React.useEffect(() => {
        setLoad({ left: '17.2895vw', top: '10.75vw' })
        React.axios('post', 'http://39.98.41.126:31100/resource/err', setLoad, '', { type: props.type.toString(), dateType: props.dateType.toString(), projectName: 'Jiao' }).then(
            res => {
                setData(res)
            },
        )
    }, [props])
    const config = {
        data: [data, data],
        smooth: true,
        xField: 'dateStr',
        yField: ['count', 'percent'],
        meta: {
            count: {
                alias: '资源错误数',
            },
            percent: {
                alias: '资源错误率',
                formatter: (v) => {
                    return `${v}%`;
                },
            },
        },
        legend: {
            itemName: {
                formatter: (text, item) => {
                    return item.value === 'count' ? '资源错误数' : '资源错误率';
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
        {load ? <Loading {...load} /> : ''}<DualAxes style={{ width: '100%', height: '100%' }}
            {...config} /></div>;
};

export default DemoDualAxes