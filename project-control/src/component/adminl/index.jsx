import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Alert } from 'antd';
import { useNavigate } from 'react-router-dom';
import Loading from '../loading'
import React from 'react';
import './index.css'
import axios from 'axios'

const Namel = () => {
    const navigate = useNavigate();
    //是否显示加载中
    const [load, setLoad] = React.useState()
    //flag是阀门，不允许狂点按钮
    const [flag, setFlag] = React.useState(1)
    const onFinish = (values) => {
        if (flag) {
            setLoad({ left: '47.2895vw', top: '5.75vw' })
            setFlag(0)
            React.axios('post', 'http://106.13.18.48/users', 60001, setLoad, setFlag,
                { username: values.username, password: values.password }).then(
                    res => {
                        console.log(res, 'app');
                        // navigate('/home')
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
                onFinish={onFinish}
            >
                {/* 用户名 */}
                <Form.Item

                    name="command"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your command!',
                        },
                        {
                            pattern: "^[\\u4e00-\\u9fa5a-zA-Z0-9]{6,12}$",
                            message: '用户名必须为6-12位字母/数字/中文'
                        }
                    ]}
                >
                    <Input className='admin-command' prefix={<UserOutlined className="site-form-item-icon" />} placeholder="command" />
                    <Button type="primary" htmlType="submit" className="admin-form-button">
                        Log in
                    </Button>

                </Form.Item>
            </Form>
        </div>

    );
};

export default Namel;