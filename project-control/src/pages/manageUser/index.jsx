import { DownOutlined } from '@ant-design/icons';
import { Badge, Table, Dropdown, Menu, Space, } from 'antd';
import React from 'react';
import Loading from '../../component/loading'
import Freeze from '../../component/freeze'
import Search from '../../component/search'
import './index.css'
const columns = [
    {
        title: '用户名',
        // 列数据对应的标识
        dataIndex: 'username',
        // 如果dataIndex不是唯一的 那么key就是必须的 唯一标识
        key: 'username',
        align: 'center',

    },
    {
        title: '状态',
        // 列数据对应的标识
        dataIndex: 'state',
        // 如果dataIndex不是唯一的 那么key就是必须的 唯一标识
        key: 'state',
        align: 'center',
    },
    {
        title: '注册日期',
        // 列数据对应的标识
        dataIndex: 'regdate',
        // 如果dataIndex不是唯一的 那么key就是必须的 唯一标识
        key: 'regdate',
        align: 'center',
    },
    {
        title: '管理',
        // 列数据对应的标识
        dataIndex: 'control',
        // 如果dataIndex不是唯一的 那么key就是必须的 唯一标识
        key: 'control',
        align: 'center',
    },
]


export default function ManageUser(props) {

    // 总数据量
    const [total, setTotal] = React.useState(0);
    // 数据源
    const [data, setData] = React.useState([]);
    const [expandeddata, setExpandeddata] = React.useState({});
    //加载中
    const [load, setLoad] = React.useState(0)
    const [load1, setLoad1] = React.useState(0)
    const [load2, setLoad2] = React.useState(0)
    const [freeze, setFreeze] = React.useState({ show: 0, id: 0 })

    //flag是阀门，不允许狂点按钮
    const [flag, setFlag] = React.useState(1)
    const freezeProject = (id) => {
        setFreeze({ show: 1, id })
    }
    const logout = (id) => {
        if (flag) {
            setLoad2({ left: '47.2895vw', top: '5.75vw' })
            setFlag(0)
            React.axios('post', 'http://106.13.18.48/monitor/api/user/forceLogout', setLoad2, setFlag, { userId: id }).then(
                getData()
            )
        }
    }
    const handleData = (obj) => {
        setData(obj.map(i => {
            return ({
                key: i.userId,
                username: i.username,
                state: <span><Badge status={i.onLive ? "success" : i.position === -1 ? 'processing' : 'default'} />{i.onLive ? "在线" : i.position === -1 ? '已冻结' : '离线'}</span>,
                regdate: i.registerDate ? i.registerDate.split('T')[0] + '  ' + i.registerDate.split('T')[1] : '',
                control:
                    <Space size="middle">
                        {i.onLive ? <a onClick={() => logout(i.userId)}>强制下线</a> : ''}
                        {i.position === 0 ? <a onClick={() => freezeProject(i.userId)}>冻结用户</a> : ''}
                    </Space>
            })
        }))
    }
    // 请求数据
    const getData = () => {
        setLoad(1)
        React.axios('get', 'http://106.13.18.48/monitor/api/user/getAllUser', setLoad,
        ).then(
            res => {
                handleData(res)
                if (res.length !== total) {
                    setTotal(res.length)
                }
            },
        )
    }

    React.useEffect(() => {
        getData()
    }, []);


    // 处理分页
    // function handleChange(page, pageSize) {
    //     getData(page, pageSize)
    // }
    const expandedRowRender = (record) => {
        const columns = [
            {
                title: '监控项目',
                dataIndex: 'projectname',
                key: 'projectname',
                width: '18.625vw',
                align: 'left',
                ellipsis: true
            },
            {
                title: '项目地址',
                dataIndex: 'url',
                key: 'url',
                align: 'left',
                width: '21.625vw',
            },
            {
                title: '项目简介',
                dataIndex: 'desc',
                key: 'desc',
                align: 'left'

            },
        ];
        return <Table loading={load1 ? true : false} columns={columns} dataSource={expandeddata[record.key]} pagination={false} />;
    };

    const getExpandData = (expanded, record) => {
        if (expanded && expandeddata[record.key] === undefined) {
            setLoad1({ left: '47.2895vw', top: '5.75vw' })
            React.axios('post', 'http://106.13.18.48/monitor/api/userproject/MyProject', setLoad1, '',
                { userId: record.key }).then(res => {
                    expandeddata[record.key] = res.map(i => {
                        return ({
                            key: i.projectId,
                            projectname: i.projectName,
                            url: <a href={i.projectUrl}>{i.projectUrl}</a>,
                            desc: i.projectDesc
                        })
                    });
                    setExpandeddata(expandeddata)
                })
        }
    }

    return (
        <>
            {freeze.show === 1 ? <Freeze setFreeze={setFreeze} id={freeze.id} type={'user'} getData={getData} /> : ''}
        <div className='manageUser'> <div style={{ display: 'flex', marginBottom: '20px', width: '100%', justifyContent: 'space-between' }}><strong style={{ display: 'flex', width: '50%' }} className='manageUser-title'>用户管理</strong>
            <div style={{ display: 'flex' }}><Search type='user' func={handleData} /></div></div>
            {/* 默认是可以换行显示的 还行 */}
            {load2 ? <Loading {...load2} /> : ''}
            <Table
                // 列的配置项
                // expandable={{

                //     defaultExpandedRowKeys: ['0'],
                // }}
                expandable={{
                    expandedRowRender: (record) => expandedRowRender(record),
                    onExpand: (expanded, record) => getExpandData(expanded, record)
                }}
                // expandedRowRender
                defaultPageSize={10}
                columns={columns}
                loading={load ? true : false}
                // 数据数组
                dataSource={data}
                // 分页设置
                pagination={false}
            // pagination={{
            //     defaultPageSize: 10,
            //     total: total,
            //     onChange: handleChange,
            //     showQuickJumper: true,
            // }}
            />
        </div>
        </>
    );
}