import Loading from '../loading'
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Area } from '@ant-design/plots';
const DemoArea = (props) => {
    const [data, setData] = useState([]);
    const [load, setLoad] = React.useState(0)
    useEffect(() => {
        setLoad({ left: '17.2895vw', top: '10.75vw' })
        React.axios('post', 'http://39.98.41.126:31100/performance', setLoad, '', { dateType: props.type.toString(), type: props.dateType.toString(), projectName: 'Jiao' }).then(
            res => {
                setData(res)
            },
        )
    }, [props]);


    const config = {
        data,
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
        {load ? <Loading {...load} /> : ''} <Area style={{ display: 'flex', width: '100%', height: '100%' }} {...config} /></div>;
};

export default DemoArea