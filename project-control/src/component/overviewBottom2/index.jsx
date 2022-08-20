import React from 'react'
import DualAxes2 from '../dualaxes2'
import Dropdown from '../dropdown'
import { ClockCircleOutlined } from '@ant-design/icons';

export default function Index() {
    const [time, setTime] = React.useState(1)
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', width: '100%', marginLeft: '10px', justifyContent: 'space-between' }}>
                <strong style={{ display: 'flex' }}>API请求信息</strong>
                <div><ClockCircleOutlined style={{ position: 'relative', right: '-90px', zIndex: '999' }} /><Dropdown func={setTime} option={['24小时', '30天', '12月']} /></div></div>
            <DualAxes2 dateType={time} />
        </div>
    )
}
