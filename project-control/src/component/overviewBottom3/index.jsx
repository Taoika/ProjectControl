import React from 'react'
import Areaspeed from '../areaspeed'
import Dropdown from '../dropdown'
import { ClockCircleOutlined } from '@ant-design/icons';

export default function Index() {
    const [dateType, setDateType] = React.useState('1');
    const [time, setTime] = React.useState('1')
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignContent: 'space-between', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', width: '100%', marginLeft: '10px', justifyContent: 'space-between' }}><strong style={{ display: 'flex' }}>性能监控&nbsp;&nbsp;&nbsp;
                <Dropdown min func={setDateType} option={['FP', 'FCP', 'DOM Ready', 'DNS', 'FID', 'LCP', 'FMP', '卡顿', '首次可交互', '完整加载时间',]} /></strong>
                <div></div><ClockCircleOutlined style={{ position: 'relative', top: '9px', right: '-12.5vw', zIndex: '999' }} /><Dropdown option={['24小时', '30天', '12月',]} func={setTime} /></div>
            <Areaspeed type={time} dateType={dateType} />
        </div>
    )
}
