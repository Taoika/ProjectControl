import { UserOutlined } from '@ant-design/icons';
import { Button, Form, Input, } from 'antd';
import Loading from '../loading'
import React from 'react';
import './index.css'
import { useNavigate } from 'react-router-dom';



export default function Adminl() {
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
                { username: 'Admin', password: values.command }).then(
                    res => {
                        // navigate('/home')
                        navigate('/manageproject')
                    },
                )
        }
    };
    return (
        <div>
            {load ? <Loading {...load} /> : ''}
            <Form
                style={{ height: '31vh', }}
                name="adminl"
                className="login-form"
                onFinish={onFinish}
            >
                {/* 用户名 */}
                <Form.Item
                    name="command"
                    rules={[
                        {
                            required: true,
                            message: '请输入管理员口令',
                        },
                    ]}
                >
                    <Input className='admin-command' prefix={<UserOutlined className="site-form-item-icon" />} placeholder="口令" />

                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" className="admin-form-button">
                        Log in
                    </Button>

                </Form.Item>
            </Form>
        </div>

    );
}

