import { Table } from 'antd';
import React from 'react'
import './index.css'
import { useNavigate } from 'react-router-dom'

import ApplyDetail from '../applyDetail'
export default function Mymonitorproject() {
    const navigate = useNavigate()
    const [load, setLoad] = React.useState(0)

    // 每页数据量
    // const [pageSize,setPageSize]=React.useState(100);
    // 总数据量
    // const [total,setTotal]=React.useState(0);
    // 当前页数
    // const [current,setCurrent]=React.useState(1);
    // 数据源
    const [data, setData] = React.useState([]);
    const [msg, setMsg] = React.useState({ show: 0, name: '', id: 0 })
    // 列头
    // const [title,setTitle]=React.useState([]);
    // 请求数据
    const gomonitor = (projectname) => {
        document.cookie = `monitorname=${projectname}`
        navigate('/monitor')
    }
    React.useEffect(() => {
        setLoad({ left: '47.2895vw', top: '5.75vw' })
        React.axios('post', 'http://106.13.18.48/monitor/api/userproject/MyProject', setLoad, '',
            { userId: React.getCookie('user') }).then(res => {
                let data = []
                res.map(i => {
                    if (i.appliType === 2) {
                        data.push({
                            key: i.projectName,
                            projectname: i.projectName,
                            url: <a href={i.projectUrl}>{i.projectUrl}</a>,
                            desc: i.projectDesc,
                            action: <button onClick={() => gomonitor(i.projectName)} className='Mymonitorproject-agree'>进入监控</button>
                        })
                    }
                })
                setData(data)
            })
    }, []);
    // 列描述数据对象
    const columns = [
        {
            // 列头显示文字
            title: '项目名',
            // 列数据对应的标识
            dataIndex: 'projectname',
            // 如果dataIndex不是唯一的 那么key就是必须的 唯一标识
            key: 'projectname',
            align: 'center',
        },
        {
            title: '地址',
            dataIndex: 'url',
            key: 'url',
            align: 'center',
        },
        {
            title: '简介',
            dataIndex: 'desc',
            key: 'desc',
            align: 'center',
        },
        {
            title: '操作',
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
        <div className='Mymonitorproject'>
            <div className="Mymonitorproject-content">
                {msg.show ? <ApplyDetail id={msg.id} name={msg.name} setMsg={setMsg} /> : ''}
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
