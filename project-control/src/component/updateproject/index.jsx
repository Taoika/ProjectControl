import { Button, Form, Input, message, Popconfirm } from 'antd';
import React from 'react';
import './index.css'
import Tip from '../tip'
import Loading from '../../component/loading'
export default function Updateproject() {
  const text = '确定删除该项目吗?';
  const [flag, setFlag] = React.useState(1)
  const [load, setLoad] = React.useState(0)

  const [tip, setTip] = React.useState(0)
  // 输入框位置占比配置
  const formItemLayout = {
    // xs：超小号 sm:小号 md：中号 lg：大号 xl：超大号 xxl：最大号
    labelCol: {
      xs: { span: 24 },
      sm: { span: 3 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 20 },
    },
  };
  const confirm = () => {
    if (flag) {
      setLoad({ left: '47.2895vw', top: '5.75vw' })
      setFlag(0)
      React.axios('post', 'http://106.13.18.48/monitor/api/project/delete', setLoad, setFlag,
        { projectName: React.getCookie('managename') }).then()
    }
  };
  // 按钮位置占比配置
  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 10,
        offset: 9,
      },
      sm: {
        span: 10,
        offset: 11,
      },
    },
  };

  // 引入表单
  const [form] = Form.useForm();

  // 提交回调
  const onFinish = (values) => {
    if (flag) {
      setLoad({ left: '47.2895vw', top: '5.75vw' })
      setFlag(0)
      const { projectName, projectUrl, projectDesc } = values
      React.axios('post', 'http://106.13.18.48/monitor/api/project/update', setLoad, setFlag,
        { projectId: React.getCookie('manage'), projectName, projectUrl, projectDesc }).then()
    }
  };


  return (
    <div className="Updateproject-container">
      {load ? <Loading {...load} /> : ''}
      <div className='Updateproject'>
        <div className="Updateproject-head">更新项目</div>
        <div className="Updateproject-content">
          <div className="Updateproject-pack">
            <Popconfirm placement="top" title={text} onConfirm={confirm} okText="Yes" cancelText="No">
              <Button>删除项目</Button>
            </Popconfirm>
          </div>
          {/* 表单 */}
          <Form
            form={form}
            name="Updateproject"
            {...formItemLayout}
            onFinish={onFinish}
            colon={false}
          >
            {/* 项目名称 */}
            <Form.Item
              name="projectName"
              initialValue={React.getCookie('managename')}
              label="项目名称"
              rules={[
                {
                  required: true,
                  message: '请输入您的项目名称!',
                },
                {
                  type: 'string',
                  max: 40,
                },
              ]}
              labelCol={{
                xs: { span: 24 },
                sm: { span: 3 },
              }}
              wrapperCol={{
                xs: { span: 24 },
                sm: { span: 7 },
              }}
            >
              <Input />
            </Form.Item>
            {/* 项目地址 */}
            <Form.Item
              name="projectUrl"
              initialValue={React.getCookie('manageurl')}
              label="项目地址"
              rules={[
                {
                  required: true,
                  message: '请输入您的项目地址!',
                },
                {
                  type: 'url',
                  message: '项目地址格式错误'
                },
                {
                  max: '100',
                  message: '地址长度不超过100'
                },
              ]}
            >
              <Input />
            </Form.Item>

            {/* 项目简介 */}
            <Form.Item
              name="projectDesc"
              initialValue={React.getCookie('managedesc')}
              label="项目简介"
            >
              <Input.TextArea showCount maxLength={200} autoSize={{ minRows: 8 }} />
            </Form.Item>

            {/* 提交按钮 */}
            <Form.Item {...tailFormItemLayout}>
              <Button style={{ marginLeft: '80px' }} type="primary" htmlType="submit">
                确认保存
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
}
