import { Layout, Menu } from 'antd';
import React from 'react'
import './index.css'



export default function Head() {

    const { Header } = Layout;

    const items1 = ['1', '2', '3'].map((key) => ({
        key,
        label: `nav ${key}`,
      }));

    return (
        <Layout>
            <Header className="header">
                <div className="logo" />
                <Menu mode="horizontal" defaultSelectedKeys={['1']} items={items1} />
            </Header>
        </Layout>
    )
}
