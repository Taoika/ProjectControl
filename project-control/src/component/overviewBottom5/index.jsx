import React from 'react'
import Areawhite from '../areawhite'
import Dropdown from '../dropdown'
import { ClockCircleOutlined } from '@ant-design/icons';

export default function Index() {
    const [time, setTime] = React.useState(1)
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignContent: 'space-between', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', width: '100%', marginLeft: '10px', justifyContent: 'space-between' }}>
                <strong style={{ display: 'flex' }}>白屏监控</strong>
                <div><ClockCircleOutlined style={{ position: 'relative', right: '-90px', zIndex: '999' }} /><Dropdown func={setTime} option={['24小时', '30天', '12月']} /></div></div>
            <Areawhite type={time} />
        </div>
    )
}
