import React from 'react'
import DualAxes from '../dualaxes'
import Dropdown from '../dropdown'

export default function index() {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', width: '100%', marginLeft: '10px', justifyContent: 'space-between' }}><strong style={{ display: 'flex' }}>JS错误数</strong><Dropdown /></div>
            <DualAxes />
        </div>
    )
}
