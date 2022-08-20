import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Pie } from '@ant-design/plots';
import Loading from '../loading'



export default function Index() {
    const [load, setLoad] = React.useState()
    const [data, setData] = React.useState([])
    React.useEffect(() => {
        setLoad({ left: '50.2895vw', top: '8.75vw' })
        React.axios('post', 'http://106.13.18.48/monitor/api/resource/count', setLoad, '', { projectName: React.getCookie('monitorname') }).then(
            res => {
                let count = [{}, {}, {}, {}]
                res.map((i, index) => {
                    count[index].type = i.tagname + ' 错误'
                    count[index].value = i.count
                })
                setData(count)
            },
        )
    }, [])
    const config = {
        appendPadding: 10,
        data: data,
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
    return (
        <div style={{ display: 'flex', width: '95%', height: '95%' }}>{load ? <Loading {...load} /> : ''}<Pie style={{ display: 'flex', width: '95%', height: '95%' }} {...config} /></div>
    )
}

