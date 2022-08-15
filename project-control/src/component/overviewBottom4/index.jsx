import React from 'react'
import Areasource from '../areasource'
import Dropdown from '../dropdown'
import { ClockCircleOutlined } from '@ant-design/icons';


export default function index() {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignContent: 'space-between', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', width: '100%', marginLeft: '10px', justifyContent: 'space-between' }}>
                <strong style={{ display: 'flex' }}>资源错误&nbsp;&nbsp;&nbsp;<Dropdown option={['全部', '<link>错误', '<script>错误', '<img>错误', '<object>错误']} />
                </strong><div><ClockCircleOutlined style={{ position: 'relative', top: '1px', right: '-90px', zIndex: '999' }} /><Dropdown option={['今日', '今月', '今年']} /></div></div>
            <Areasource />
        </div>
    )
}
