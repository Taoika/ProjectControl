import React, { useState, useEffect } from 'react';
import { Area } from '@ant-design/plots';

const DemoArea = () => {
    const [data, setData] = useState([]);

    useEffect(() => {

        setData([
            {
                date: '01/08 00:00',
                value: 0,
                category: '总PV'
            },
            {
                date: '01/08 00:00',
                value: 0,
                category: '总UV'
            },
            {
                date: '02/08 00:00',
                value: 5,
                category: '总PV'
            },
            {
                date: '02/08 00:00',
                value: 2,
                category: '总UV'
            },
            {
                date: '03/08 00:00',
                value: 11,
                category: '总PV'
            },
            {
                date: '03/08 00:00',
                value: 5,
                category: '总UV'
            },
            {
                date: '04/08 00:00',
                value: 2,
                category: '总PV'
            },
            {
                date: '04/08 00:00',
                value: 2,
                category: '总UV'
            },
            {
                date: '05/08 00:00',
                value: 0,
                category: '总PV'
            },
            {
                date: '05/08 00:00',
                value: 0,
                category: '总UV'
            },
            {
                date: '06/08 00:00',
                value: 0,
                category: '总PV'
            },
            {
                date: '06/08 00:00',
                value: 0,
                category: '总UV'
            },
        ])
    }, [])
    const config = {
        data,
        smooth: true,
        xField: 'date',
        yField: 'value',
        isStack: false,
        seriesField: 'category',
        // xAxis: {
        //     type: 'category',
        // },
        // yAxis: {
        //     label: {
        //         // 数值格式化为千分位
        //         formatter: (v) => `${v}`.replace(/\d{1,3}(?=(\d{3})+$)/g, (s) => `${s},`),
        //     },
        // },
        legend: false
    };

    return <Area style={{ display: 'flex', width: '90%', height: '70%', marginBottom: '10px' }} {...config} />;
};

export default DemoArea