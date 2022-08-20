import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { DualAxes } from '@ant-design/plots';
import Loading from '../loading'

const DemoDualAxes = (props) => {
    const [load, setLoad] = React.useState()
    //时间和两个柱
    const [countData, setCountData] = React.useState([])
    //线和时间
    const [transformData, setTransformData] = React.useState([])
    React.useEffect(() => {
        console.log();
        setLoad({ left: '17.2895vw', top: '10.75vw' })
        React.axios('post', 'http://39.98.41.126:31100/apiError/err', setLoad, '', { dateType: props.dateType.toString(), projectName: 'Jiao' }).then(
            res => {
                let data1 = [];
                let data2 = [];
                res.map(i => {
                    data1.push({
                        time: i.dateStr,
                        value: i.defeatCount,
                        type: '错误次数',
                    })
                    data1.push({
                        time: i.dateStr,
                        value: i.count,
                        type: '成功次数',
                    })
                    data2.push(
                        {
                            time: i.dateStr,
                            成功率: i.percent,
                        },
                    )
                })
                setCountData(data1)
                setTransformData(data2)
            },
        )
    }, [props])

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
    return <div style={{ display: 'flex', position: 'relative', width: '90%', height: '90%', marginBottom: '10px' }}>
        {load ? <Loading {...load} /> : ''}<DualAxes style={{ width: '100%', height: '100%' }}
            {...config} /></div>;
};

export default DemoDualAxes
