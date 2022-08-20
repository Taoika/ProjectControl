import React from 'react'
import Pie from '../pie'
import EasyTable from '../easyTable'
export default function Index() {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignContent: 'space-around', width: '90%', height: "calc(100vh - 64px)", overflow: 'auto', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#FFFFFF', width: '95%', marginTop: '10px', height: '55%', boxShadow: '0px 0px 2px rgba(0, 0, 0, 0.25)' }}>
                <strong style={{ position: 'absolute', left: '250px', top: '100px', fontSize: '1.5vw', fontWeight: '700', }}>资源错误占比</strong><Pie /></div>
            <div style={{ display: 'flex', background: '#FFFFFF', width: '95%', height: '40%', boxShadow: '0px 0px 2px rgba(0, 0, 0, 0.25)' }}>
                <EasyTable />
            </div>
        </div>
    )
}
