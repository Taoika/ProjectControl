import {
  Form,
  Input,
  Button,
  Select
} from 'antd';
import React from 'react';
import './index.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const { Option } = Select;

export default function Register() {
  const navigate = useNavigate();
  const back = () => {
    navigate(-1);
  }
  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    </Form.Item>
  );
  const onFinish = (values) => {
    const { username, password, email, phone_number } = values;
    axios({
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      url: 'http://106.13.18.48/users/register',
      data: JSON.stringify({ username, password, email, phone_number })
    }).then(
      response => {
        const { data } = response;
        if (data.code === 60101) {
          console.log(response);
          alert('注册成功！');
          back();
        }
        else {
          alert(data.msg);
        }

      },
    )
    console.log('Received values of form: ', values);
  };
  return (
    <div className='register-mask'>
      <div className='register-register'>
        <div className='register-registerName'>用户注册
          <button className='register-cancelBtn' onClick={back} style={{ background: '#3D6DB5', border: 'none' }}>X</button>
        </div>
        <div className='register-fix'>
          <Form
            name="register"
            onFinish={onFinish}>
            <Form.Item
              name="email"
              label="E-mail"
              rules={[
                {
                  pattern: "^\\s*\\w+(?:\\.{0,1}[\\w-]+)*@[a-zA-Z0-9]+(?:[-.][a-zA-Z0-9]+)*\\.[a-zA-Z]+\\s*$",
                  message: '邮箱格式错误,应为：-xxx@xxx'
                },
                {
                  required: true,
                  message: 'Please input your E-mail!',
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="phone_number"
              label="Phone Number"
              rules={[
                {
                  pattern: "^((13[0-9])|(14[0|5|6|7|9])|(15[0-3])|(15[5-9])|(16[6|7])|(17[2|3|5|6|7|8])|(18[0-9])|(19[1|8|9]))\\d{8}$",
                  message: '手机号应为11位数字'
                },
                {
                  required: true,
                  message: 'Please input your phone number!',
                },
              ]}
            >
              <Input
                addonBefore={prefixSelector}
                style={{
                  width: '100%',
                }}
              />
            </Form.Item>
            <Form.Item
              name="username"
              label="Username"
              rules={[
                {
                  pattern: "^[\\u4e00-\\u9fa5a-zA-Z0-9]{6,12}$",
                  message: '用户名必须为6-12位字母/数字/中文'
                },
                {
                  required: true,
                  message: 'Please input your Username',
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="password"
              label="Password"
              rules={[
                {
                  required: true,
                  message: 'Please input your password!',
                },
                {
                  pattern: "^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$",
                  message: '密码必须为6-20个字母、数字'

                }
              ]}
              hasFeedback
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              name="confirm"
              label="Confirm Password"
              dependencies={['password']}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: 'Please confirm your password!',
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue('password') === value) {
                      return Promise.resolve();
                    }

                    return Promise.reject(new Error('The two passwords that you entered do not match!'));
                  },
                }),
              ]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item >
              <Button type="primary" style={{ position: 'absolute', left: '50%', top: '10%', transform: 'translateX(-50%)' }} htmlType="submit">
                Register
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>

  )
}
