import React, { useState, useEffect } from 'react';
import { Area } from '@ant-design/plots';

const DemoArea = (props) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        if (props.data) {
            let data1 = []
            props.data.map(i => {
                if (i.dateStr) {
                    data1.push({
                        date: i.dateStr,
                        value: i.visits,
                        category: '总PV'
                    })
                    data1.push({
                        date: i.dateStr,
                        value: i.visits_people,
                        category: '总UV'
                    })
                }

            })
            setData(data1)
        }
    }, [props])
    const config = {
        data,
        smooth: true,
        xField: 'date',
        yField: 'value',
        isStack: false,
        seriesField: 'category',
        xAxis: {
            type: 'category',
        },
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