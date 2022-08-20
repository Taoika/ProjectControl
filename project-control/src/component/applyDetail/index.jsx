import {
  Form,
  Input,
  Button,
  Select
} from 'antd';
import React from 'react';
import './index.css'
const { Option } = Select;

export default function ApplyDetail(props) {
  const back = () => {
    props.setMsg({ show: 0 })
  }

  return (
    <div className='ApplyDetail-mask'>
      <div className='ApplyDetail-ApplyDetail'>
        <div className='ApplyDetail-ApplyDetailName'>{props.name}
          <button className='ApplyDetail-cancelBtn' onClick={back} style={{ background: '#3D6DB5', border: 'none' }}>X</button>
        </div>
        <div style={{ overflow: 'auto', width: '90%', height: '90%', marginLeft: '5%', marginTop: '5%' }}>
          地址&nbsp;:&nbsp; <a href={props.url}>{props.url}</a><br /><br />
          简介&nbsp;:&nbsp; {props.desc}
        </div>
      </div>
    </div>

  )
}
