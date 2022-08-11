import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Layout, Menu } from 'antd';
import './index.css'

const { Sider } = Layout;

export default function ManageSider(props) {
  const items = []
  for (let i in props) {
    items.push({
      key: i,
      label: <Link to={i}>{props[i]}</Link>
    })
  }
  return (
    <Sider width={200} className="manageSider" >
      <Menu
        mode="inline"
        defaultSelectedKeys={['1']}
        items={items}
        theme="light"
      />
    </Sider >
  )
}
