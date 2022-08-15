import React from 'react'
import Areawhite from '../areawhite'
import Dropdown from '../dropdown'
import { ClockCircleOutlined } from '@ant-design/icons';

export default function index() {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignContent: 'space-between', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', width: '100%', marginLeft: '10px', justifyContent: 'space-between' }}>
                <strong style={{ display: 'flex' }}>白屏监控</strong>
                <div><ClockCircleOutlined style={{ position: 'relative', right: '-90px', zIndex: '999' }} /><Dropdown option={['今日', '今月', '今年']} /></div></div>
            <Areawhite />
        </div>
    )
}
