import { DownOutlined } from '@ant-design/icons';
import { Badge, Table, Dropdown, Menu, Space, } from 'antd';
import React from 'react';
import './index.css'

// const menu = (
//     <Menu
//         items={[
//             {
//                 key: '1',
//                 label: 'Action 1',
//             },
//             {
//                 key: '2',
//                 label: 'Action 2',
//             },
//         ]}
//     />
// );

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

const expandedRowRender = () => {
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
    const data = [];

    for (let i = 0; i < 3; ++i) {
        data.push({
            key: i.toString(),
            projectname: '项目名称项目名称项目名称项目名称项目名称项目名称项目名称项目名称',
            url: <a href="www.baidu.com">www.baidu.comwww.baidu.comwww.baidu.com</a>,
            desc: '项目简介项目简介项目简介项目简介项目简介项目简介项目简介项目简介项目简介项目简介项目简介项目简介项目简介项目简介项目简介项目简介项目简介项目简介项目简介项目简介项目简介项目简介项目简介项目简介项目简介项目简介项目简介项目简介项目简介项目简介项目简介项目简介项目简介项目简介项目简介项目简介项目简介项目简介项目简介项目简介项目简介项目简介项目简介项目简介项目简介项目简介项目简介项目简介项目简介项目简介项目简介项目简介项目简介项目简介项目简介项目简介项目简介项目简介项目简介项目简介项目简介项目简介项目简介项目简介项目简介项目简介项目简介项目简介项目简介项目简介项目简介项目简介项目简介项目简介项目简介项目简介项目简介项目简介项目简介项目简介项目简介项目简介项目简介项目简介项目简介项目简介项目简介项目简介项目简介项目简介项目简介项目简介项目简介项目简介',
        });
    }

    return <Table columns={columns} dataSource={data} pagination={false} />;
};
export default function ManageUser(props) {

    // 总数据量
    const [total, setTotal] = React.useState(0);
    // 数据源
    const [data, setData] = React.useState([]);
    //加载中
    const [load, setLoad] = React.useState(0)
    //flag是阀门，不允许狂点按钮
    const [flag, setFlag] = React.useState(1)
    // 请求数据
    const getData = (current, pageSize) => {
        if (flag) {
            setLoad(1)
            setFlag(0)
            React.axios('post', 'url', 'code', setLoad, setFlag,
                { current, pageSize }).then(
                    res => {
                        console.log(res, 'app');
                        // setData(res)
                    },
                )
        }
    }
    React.useEffect(() => {
        // getData(1, 10)
    }, []);

    for (let i = 10; i > 0; i--) {
        data.push({
            key: i,
            username: '用户名',
            state: <span><Badge status="success" />在线</span>,
            regdate: '2022-8-9',

            control:

                <Space size="middle">
                    <a>强制下线</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Dropdown overlay={
                        <Menu
                            items={[
                                {
                                    key: '1',
                                    label: '1天',
                                },
                                {
                                    key: '2',
                                    label: '1月',
                                },
                                {
                                    key: '3',
                                    label: '1年',
                                },
                            ]}
                        />}>
                        <a>
                            冻结用户 <DownOutlined />
                        </a>
                    </Dropdown>
                </Space>


        })
    }

    // 处理分页
    function handleChange(page, pageSize) {
        getData(page, pageSize)
    }

    return (
        <div className='manageUser'> <strong className='manageUser-title'>用户管理</strong>
            {/* 默认是可以换行显示的 还行 */}

            <Table
                // 列的配置项
                expandable={{
                    expandedRowRender,
                    defaultExpandedRowKeys: ['0'],
                }}
                columns={columns}
                loading={load ? true : false}
                // 数据数组
                dataSource={data}
                // 分页设置
                pagination={{
                    defaultPageSize: 10,
                    total: total,
                    onChange: handleChange,
                    showQuickJumper: true,
                }}
            />
        </div>

    );
}