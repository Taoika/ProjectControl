import React from 'react'
import DualAxes2 from '../dualaxes2'
import Dropdown from '../dropdown'

export default function index() {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', width: '100%', marginLeft: '10px', justifyContent: 'space-between' }}><strong style={{ display: 'flex' }}>API请求信息</strong><Dropdown /></div>
            <DualAxes2 />
        </div>
    )
}
