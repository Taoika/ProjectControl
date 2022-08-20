import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom';
import Loading from '../loading'
import React from 'react';
import './index.css'

const Namel = () => {
    const navigate = useNavigate()
    //是否显示加载中
    const [load, setLoad] = React.useState()
    //flag是阀门，不允许狂点按钮
    const [flag, setFlag] = React.useState(1)
    const onFinish = (values) => {
        if (flag) {
            setLoad({ left: '47.2895vw', top: '5.75vw' })
            setFlag(0)
            React.axios('post', 'http://106.13.18.48/monitor/api/user/login', setLoad, setFlag,
                { username: values.username, password: values.password }).then(
                    res => {
                        document.cookie = `username=${res.username}`;
                        navigate('/userproject')
                    },
                )
        }
    };
    return (
        <div>
            {load ? <Loading {...load} /> : ''}
            <Form
                style={{ height: '31vh', }}
                name="normal_login"
                className="login-form"
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
            >
                {/* 用户名 */}
                <Form.Item
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Username!',
                        },
                        {
                            pattern: "^[\\u4e00-\\u9fa5a-zA-Z0-9]{4,12}$",
                            message: '用户名必须为4-12位字母/数字/中文'
                        }
                    ]}
                >
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                </Form.Item>
                {/* 密码 */}
                <Form.Item
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Password!',
                        },
                        {
                            pattern: "^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$",
                            message: '密码必须包含6-20个大小写字母、数字'

                        }
                    ]}
                >
                    <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="Password"
                    />
                </Form.Item>
                <Form.Item>
                    <Form.Item name="remember" valuePropName="checked" noStyle>
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Log in
                    </Button>

                </Form.Item>
            </Form>
        </div>

    );
};

export default Namel;