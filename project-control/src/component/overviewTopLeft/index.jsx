import React from 'react'

export default function index() {
    return (
        <div className='overview-top-left'>
            <div className='overview-top-left1'>
                <div className='overview-top-left1-top'>
                    <div>
                        <strong className='overview-top-left1-top-value'>0</strong>
                        <span>JS错误数</span>
                        <span>周同比:&nbsp;&nbsp;&nbsp; <strong className='red'>--%↑</strong></span>
                    </div>
                    <div>
                        <strong className='overview-top-left1-top-value'>--%</strong>
                        <span>JS错误率</span>
                        <span>周同比:&nbsp;&nbsp;&nbsp; <strong className='red'>--%↑</strong></span>
                    </div>
                </div>
                <div style={{ width: '20vw' }}>环比新增错误&nbsp;<span className='red'>0类</span></div>
            </div>
            <div className='overview-top-left1'>
                <div className='overview-top-left1-top'>
                    <div>
                        <strong className='overview-top-left1-top-value'>--</strong>
                        <span>API错误数</span>
                        <span>周同比:&nbsp;&nbsp;&nbsp; <strong className='red'>--%↑</strong></span>
                    </div>
                    <div>
                        <strong className='overview-top-left1-top-value'>--%</strong>
                        <span>API错误率</span>
                        <span>周同比:&nbsp;&nbsp;&nbsp; <strong className='red'>--%↑</strong></span>
                    </div>
                </div>
                <div style={{ width: '20vw' }}>环比新增错误&nbsp;<span className='red'>0类</span></div>
            </div>
        </div>
    )
}
