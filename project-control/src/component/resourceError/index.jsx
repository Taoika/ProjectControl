import React from 'react'
import Pie from '../pie'
import EasyTable from '../easyTable'
export default function Index() {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignContent: 'space-around', width: '90%', height: "calc(100vh - 64px)", overflow: 'auto', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#FFFFFF', width: '95%', marginTop: '10px', height: '45%', boxShadow: '0px 0px 2px rgba(0, 0, 0, 0.25)' }}>
                <strong style={{ marginLeft: '1.875vw', marginTop: '-30vh', width: '10vw', fontSize: '1.5vw', fontWeight: '700', }}>资源错误占比</strong><Pie /></div>
            <div style={{ display: 'flex', background: '#FFFFFF', width: '95%', height: '50%', boxShadow: '0px 0px 2px rgba(0, 0, 0, 0.25)' }}>
                <EasyTable type='resource' />
            </div>
        </div>
    )
}
