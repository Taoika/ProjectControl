import {
  Form,
  Input,
  Button,
  Select
} from 'antd';
import React from 'react';
import './index.css'
const { Option } = Select;

export default function Tip(props) {

  //关闭提示
  const back = () => {
    props.setTip(0)
  }
  function handleJump(e){
    e.preventDefault();
    // 在react中想要跳转并且打开新页面得这样
    const w=window.open('about:blank');
    w.location.href="https://github.com/JIaaoooo/MonitorServer/tree/monitor-client"
  }
  return (

    <div className='Tip-mask'>
      <div className='Tip-Tip'>
        <div className='Tip-TipName'>请加入我们的监控
          <button className='Tip-cancelBtn' onClick={back} style={{ background: '#3D6DB5', border: 'none' }}>X</button>
        </div>
        <div style={{ display: 'flex', alignContent: 'space-around', flexWrap: 'wrap', width: '90%', height: '10%', }}>
          <strong style={{ display: 'flex', width: '100%' }}>1. 引入npm包</strong>
          <div style={{ display: 'flex', fontWeight: '700', width: '100%', fontSize: '1.5vw', background: '#E9E9E9', paddingLeft: '35%' }}>
            npm i furikurix
          </div>
        </div>
        <div style={{ display: 'flex', alignContent: 'space-around', flexWrap: 'wrap', width: '90%', height: '30%', }}>
          <strong style={{ display: 'flex', width: '100%' }}>2. 初始化</strong>
          <div style={{ display: 'flex', height: '90%', width: '100%', fontSize: '1.5vw', background: '#E9E9E9', paddingLeft: '5%' }}>
            在最先执行的地方导入&nbsp;&nbsp; <i className='red'>import</i> &nbsp;&nbsp;start <i className='red'>&nbsp;&nbsp;from</i> &nbsp;&nbsp;<i className='orange'>'furikurix'</i>   <br />

          </div>
        </div>
        <div style={{ display: 'flex', alignContent: 'space-around', flexWrap: 'wrap', width: '90%', height: '10%', }}>
          <strong style={{ display: 'flex', width: '100%' }}>3. 下载依赖包</strong>
          <div style={{ display: 'flex', width: '100%', fontSize: '1.5vw', }}>
            <a onClick={(e)=>handleJump(e)} href="#">https://github.com/JIaaoooo/MonitorServer/tree/monitor-client</a>
          </div>
        </div>
      </div>
    </div>

  )
}
