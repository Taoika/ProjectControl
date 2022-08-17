import { Table, Badge, Modal, Button, Form, Input } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import Loading from '../loading'
import Search from '../search'

import React, { useState } from 'react'
import './index.css'
export default function Publisher() {
    const [load, setLoad] = React.useState(0)
    // 每页数据量
    // const [pageSize,setPageSize]=React.useState(100);
    // 总数据量
    // const [total,setTotal]=React.useState(0);
    // 当前页数
    // const [current,setCurrent]=React.useState(1);
    // 数据源
    const [data, setData] = React.useState([]);
    const [invitor, setInvitor] = React.useState([])
    const [flag, setFlag] = React.useState(1)
    // 列头
    // const [title,setTitle]=React.useState([]);


    React.useEffect(() => {

    }, []);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const invite = (id) => {
        if (flag) {
            setLoad({ left: '47.2895vw', top: '5.75vw' })
            setFlag(0)
            React.axios('post', 'http://39.98.41.126:31100/application/releaseApp', setLoad, setFlag,
                { userId: id, projectId: React.getCookie('manage'), number: '2' })
        }
    }
    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    for (let i = 30; i > 0; i--) {
        data.push({
            name: '用户名',
            state: <span><Badge status="success" />在线</span>,

        })
    }
    // 列描述数据对象
    const columns = [
        {
            // 列头显示文字
            title: '发布者',
            // 列数据对应的标识
            dataIndex: 'name',
            // 如果dataIndex不是唯一的 那么key就是必须的 唯一标识
            key: 'name',
            align: 'center',
        },
        {
            // 列头显示文字
            title: '状态',
            // 列数据对应的标识
            dataIndex: 'state',
            // 如果dataIndex不是唯一的 那么key就是必须的 唯一标识
            key: 'state',
            align: 'center',
        },
        {
            title: <>
                <Button type="primary" onClick={showModal}>
                    邀请发布者
                </Button>
                <Modal width={400} title="邀请发布者" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                    <Search type='user' func={setInvitor} />
                    <ul style={{ display: 'flex', flexWrap: 'wrap', width: '100%', marginTop: '10px' }}>
                        {invitor.map(i => {
                            return (<li style={{ display: 'flex', width: '100%' }} ><UserOutlined />&nbsp;{i.username}
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i style={{ color: 'skyblue', cursor: 'pointer' }} onClick={() => invite(i.userId)}>邀请</i>
                            </li>)
                        })}
                    </ul>
                </Modal>
            </>,
            key: 'action',
            align: 'center',
        },
    ];

    // 处理分页
    // function handleChange(page,pageSize){
    //     setCurrent(page);
    //     setPageSize(pageSize);
    // }

    return (
        <div className='Publisher'>
            {load ? <Loading {...load} /> : ''}
            <div style={{ display: 'flex', width: 'calc(100% - 150px)', fontSize: '1.5vw' }}>{React.getCookie('managename')}</div>
            <div className="Publisher-content">
                <Table
                    // 列的配置项
                    columns={columns}
                    // 数据数组
                    dataSource={data}
                    // // 滚动配置
                    scroll={{
                        scrollToFirstRowOnChange: true,
                        y: 'calc(100vh - 235px)',
                    }}
                    pagination={false}
                // 分页设置
                // pagination={{
                //     pageSize:pageSize,
                //     total:total,
                //     current:current,
                //     onChange:handleChange,
                // }}
                />
            </div>
        </div>
    );
}
