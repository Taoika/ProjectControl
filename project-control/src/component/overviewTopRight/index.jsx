import React from 'react'

export default function index() {
    return (
        <div className='overview-top-right'>
            <div className='overview-top-left1'>
                <div style={{ width: '50%' }} className='overview-top-left1-top'>
                    <div>
                        <strong className='overview-top-left1-top-value'>0ms</strong>
                        <span>首次渲染耗时</span>
                        <span>周同比:&nbsp;&nbsp;&nbsp; <strong className='red'>--%↑</strong></span>
                    </div>
                </div>
            </div>

            <div className='overview-top-left1'>
                <div style={{ width: '40%' }} className='overview-top-left1-top'>
                    <div>
                        <strong className='overview-top-left1-top-value'>--</strong>
                        <span>资源错误</span>
                        <span>周同比:&nbsp;&nbsp;&nbsp; <strong className='red'>--%↑</strong></span>
                    </div>
                </div>
                <div style={{ width: '20vw' }}>环比新增错误&nbsp;<span className='red'>0类</span></div>

            </div>
        </div>
    )
}
