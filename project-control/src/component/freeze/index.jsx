import {
  Form,
  Input,
  Button,
  Select
} from 'antd';
import React from 'react';
import './index.css'
import Loading from '../loading'
import { useNavigate } from 'react-router-dom'

const { Option } = Select;

export default function Freeze(props) {
  const [load, setLoad] = React.useState(0)
  const navigate = useNavigate()

  const back = (i) => {
    props.setFreeze({ show: i })
  }

  const onFinish = (values) => {
    let time = values.time * 3600000 + Date.now() + ''
    setLoad({ left: '47.2895vw', top: '5.75vw' })
    //冻结用户
    if (props.type === 'user') {
      React.axios('post', 'http://106.13.18.48/monitor/api/user/freezeUser', setLoad, '',
        { userId: props.id, date: time }, back, '', props.getData).then(props.getData())
    }
    //冻结项目
    if (props.type === 'project') {
      React.axios('post', 'http://106.13.18.48/monitor/api/project/update', setLoad, '',
        { projectId: props.id, pass: '-1', time }, back, '', props.getData)
    }
  }
  return (
    <div className='Freeze-mask'>
      {load ? <Loading {...load} /> : ''}
      <div className='Freeze-Freeze'>
        <div className='Freeze-FreezeName'>{props.type === 'project' ? '冻结项目' : '冻结用户'}
          <button className='Freeze-cancelBtn' onClick={() => back(0)} style={{ background: '#3D6DB5', border: 'none' }}>X</button>
        </div>
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item
            style={{ marginTop: '10%' }}
            label="冻结时长(小时)  "
            name="time"
            rules={[
              {
                required: true,
                message: '',
              },
              {
                pattern: /^[+]{0,1}(\d+)$|^[+]{0,1}(\d+\.\d+)$/,
                message: '请输入正数'
              }
            ]}
          >
            <Input style={{width:'200px'}}/>
          </Form.Item>
          <Form.Item
            wrapperCol={{
              offset: 10,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              确定
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>

  )
}
