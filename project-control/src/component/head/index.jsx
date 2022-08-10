import { Layout, Menu,Badge } from 'antd';
import React from 'react'
import {Link} from 'react-router-dom'
import './index.css'
import logo from '../../assets/images/projectcontrol.png'

export default function Head() {

    const { Header } = Layout;

    const items1 = [
        {
            key:1,
            label:  <Link to=''><Badge count='!'></Badge></Link>
        },
        {
            key:2,
            label:<Link to=''>项目</Link>,
        },
        {
            key:3,
            label:<Link to=''>用户管理</Link>,
        },
        {
            key:4,
            label:<Link to=''>日志</Link>,
        }
    ];

    return (
        <Layout >
            <Header className="head-header" >
                <div className="head-logo">
                    <img src={logo} alt="项目管控平台" />
                    项目管控平台
                </div>
                <Menu mode="horizontal" defaultSelectedKeys={['2']} items={items1}/>
            </Header>
        </Layout>
    )
}
