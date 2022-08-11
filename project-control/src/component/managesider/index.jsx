import React from 'react'
import {Link} from 'react-router-dom'
import { Layout, Menu } from 'antd';
import './index.css'

const { Sider } = Layout;

export default function ManageSider() {

  const items = [
    {
      key:1,
      label:<Link to='projectmonitoring'>项目监控</Link>
    },
    {
      key:2,
      label:'发布审核',
    }
  ];

  return (
      <Sider width={200} className="manageSider">
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          items={items}
          theme="light"
        />
      </Sider>
  )
}
