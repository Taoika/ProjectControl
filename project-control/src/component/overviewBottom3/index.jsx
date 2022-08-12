import React from 'react'
import Areaspeed from '../areaspeed'
import Dropdown from '../dropdown'
import Dropdown2 from '../dropdown2'

export default function index() {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', width: '100%', marginLeft: '10px', justifyContent: 'space-between' }}><strong style={{ display: 'flex' }}>访问速度&nbsp;&nbsp;&nbsp;<Dropdown2 /></strong><Dropdown /></div>
            <Areaspeed />
        </div>
    )
}
