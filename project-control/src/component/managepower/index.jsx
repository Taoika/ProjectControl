import { Table } from 'antd';
import React from 'react'
import { useNavigate } from 'react-router-dom'

import './index.css'
import ApplyDetail from '../applyDetail'
export default function Managepower() {
    const [load, setLoad] = React.useState(0)

    // 每页数据量
    // const [pageSize,setPageSize]=React.useState(100);
    // 总数据量
    // const [total,setTotal]=React.useState(0);
    // 当前页数
    // const [current,setCurrent]=React.useState(1);
    // 数据源
    const [data, setData] = React.useState([]);
    // 列头
    // const [title,setTitle]=React.useState([]);
    const cancelpower = (userId) => {
        setLoad(1)
        React.axios('post', 'http://106.13.18.48/monitor/api/userproject/updatePermission', setLoad, '',
            { userId, projectName: React.getCookie('managename') }, '', '', getData)
    }
    const getData = () => {
        setLoad(1)
        React.axios('post', 'http://106.13.18.48/monitor/api/userproject/viewPermission', setLoad, '',
            { projectName: React.getCookie('managename') }).then(res => {
                let data = [];
                res.map(i => {
                    if (i.type === 2) {
                        data.push({
                            key: i,
                            name: i.username,
                            action: <button onClick={() => cancelpower(i.userId)} className='Managepower-refuse'>撤销权限</button>
                        })
                    }
                })
                setData(data)
            })
    }
    React.useEffect(() => {
        getData()
    }, []);
    // 列描述数据对象
    const columns = [
        {
            // 列头显示文字
            title: '监控者',
            // 列数据对应的标识
            dataIndex: 'name',
            // 如果dataIndex不是唯一的 那么key就是必须的 唯一标识
            key: 'name',
            align: 'center',
        },
        {
            title: '',
            dataIndex: 'action',
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
        <div className='Managepower'>
            <div style={{ display: 'flex', width: 'calc(100% - 150px)', fontSize: '1.5vw' }}>{React.getCookie('managename')}</div>
            <div className="Managepower-content">
                <Table
                    // 列的配置项
                    columns={columns}
                    loading={load ? true : false}
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
