import { Button, Form, Input } from 'antd';
import React from 'react';
import './index.css'
import Tip from '../tip'
export default function ProjectPublish() {
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
  const onFinish = (values) => {    // React.axios()
  };
  const showTip = () => {
    setTip(1)
  }
  
  return (
    <div className="projectPublish-container">
      {tip ? <Tip setTip={setTip} /> : ''}
      <div className='projectPublish'>
        <div className="projectPublish-head">发布项目</div>
        <div className="projectPublish-content">
          <div className="projectPublish-pack"><a href="javascript:;" onClick={showTip}>如何加入监控？</a></div>
          {/* 表单 */}
          <Form
            form={form}
            name="projectPublish"
            {...formItemLayout}
            onFinish={onFinish}
            colon={false}
          >
            {/* 项目名称 */}
            <Form.Item
              name="projectName"
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

            {/* 项目口令 */}
            <Form.Item
              name="password"
              label="项目口令"
              tooltip="此口令是您可以管理项目的重要依据"
              rules={[
                {
                  required: true,
                  message: '请输入您的项目口令!',
                },
                {
                  pattern: "^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$",
                  message: '项目口令必须为6-20个字母、数字'
                }
              ]}
            >
              <Input />
            </Form.Item>

            {/* 项目地址 */}
            <Form.Item
              name="url"
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
              ]}
            >
              <Input />
            </Form.Item>

            {/* 项目简介 */}
            <Form.Item
              name="introduce"
              label="项目简介"
            >
              <Input.TextArea showCount maxLength={200} autoSize={{ minRows: 8 }} />
            </Form.Item>

            {/* 提交按钮 */}
            <Form.Item {...tailFormItemLayout}>
              <Button type="primary" htmlType="submit">
                确认发布
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
}
