import { DownOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Dropdown, Menu, message, Space } from 'antd';
import React from 'react';



const handleMenuClick = (e) => {
    message.info('Click on menu item.');
    console.log('click', e);
};

export default function Index(props) {
    const menu = (
        <Menu
            onClick={handleMenuClick}
            items={[
                {
                    label: '1st menu item',
                    key: '1',
                    icon: <UserOutlined />,
                },
                {
                    label: '2nd menu item',
                    key: '2',
                    icon: <UserOutlined />,
                },
                {
                    label: '3rd menu item',
                    key: '3',
                    icon: <UserOutlined />,
                },
            ]}
        />
    );
    return (
        <Dropdown overlay={menu}>
            <Button>
                <Space>
                    Button
                    <DownOutlined />
                </Space>
            </Button>
        </Dropdown>
    )
}



