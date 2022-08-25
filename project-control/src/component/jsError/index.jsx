import React from 'react'
import EasyTable from '../easyTable'
export default function Index() {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignContent: 'space-around', width: '90%', height: "calc(100vh - 64px)", overflow: 'auto', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', background: '#FFFFFF', overflow:'auto',width: '95%', height: '90%', boxShadow: '0px 0px 2px rgba(0, 0, 0, 0.25)' }}>
                <EasyTable type='js' />
            </div>
        </div>
    )
}
