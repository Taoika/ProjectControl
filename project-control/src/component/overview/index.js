import React from 'react'
import './index.css'
export default function Overview() {
  return (
    <div className='overview'>
        <strong className='overview-title'>项目名称</strong>
        <div className='overview-top'>
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
              <div style={{width:'20vw'}}>环比新增错误&nbsp;<span className='red'>0类</span></div>
            </div>
            <div className='overview-top-left1'>
            <div className='overview-top-left1-top'>
                <div>
                <strong className='overview-top-left1-top-value'>0</strong>
                <span>API错误数</span>
                <span>周同比:&nbsp;&nbsp;&nbsp; <strong className='red'>--%↑</strong></span>
                </div>
                <div>
              <strong className='overview-top-left1-top-value'>--%</strong>
                <span>API错误率</span>
                <span>周同比:&nbsp;&nbsp;&nbsp; <strong className='red'>--%↑</strong></span>
                </div>
              </div>
              <div style={{width:'20vw'}}>环比新增错误&nbsp;<span className='red'>0类</span></div>
            </div>
          </div>
          <div className='overview-top-mid'></div>
          <div className='overview-top-right'>
            <div className='overview-top-right1'>1</div>
            <div className='overview-top-right2'>2</div>
          </div>
        </div>
        <div className='overview-bottom'>
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
        </div>
       
    </div>
  )
}
