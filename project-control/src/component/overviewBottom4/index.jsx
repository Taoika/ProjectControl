import React from 'react'
import Areasource from '../areasource'
import Dropdown from '../dropdown'


export default function index() {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', width: '100%', marginLeft: '10px', justifyContent: 'space-between' }}><strong style={{ display: 'flex' }}>资源错误</strong><Dropdown /></div>
            <Areasource />
        </div>
    )
}
