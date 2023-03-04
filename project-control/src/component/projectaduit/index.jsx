import { Table } from 'antd';
import React from 'react'
import './index.css'
import ApplyDetail from '../applyDetail'
import Loading from '../loading'

export default function ProjectAduit() {

    // 每页数据量
    // const [pageSize,setPageSize]=React.useState(100);
    // 总数据量
    // const [total,setTotal]=React.useState(0);
    // 当前页数
    // const [current,setCurrent]=React.useState(1);
    // 数据源
    const [load, setLoad] = React.useState(0)
    const [flag, setFlag] = React.useState(1)
    const [data, setData] = React.useState([]);
    const [msg, setMsg] = React.useState({ show: 0, name: '', url: '', desc: '' })
    // 列头
    // const [title,setTitle]=React.useState([]);
    const detail = (name, url, desc) => {
        setMsg({ show: 1, name, url, desc })
    }
    const agreeOrRefuse = (status, projectId) => {
        if (flag) {
            setLoad({ left: '47.2895vw', top: '5.75vw' })
            setFlag(0)
            React.axios('post', 'http://106.13.18.48/monitor/api/project/update', setLoad, setFlag,
                { projectId, pass: status }, '', '', getData)
        }
    }
    // 请求数据
    const getData = () => {
        setLoad({ left: '47.2895vw', top: '5.75vw' })
        React.axios('get', 'http://106.13.18.48/monitor/api/project/allProject', setLoad, '',
        ).then(res => {
            let data = [];
            res.map(i => {
                if (i.status === 0) {
                    data.push({
                        key: i.projectId,
                        applicant: i.username,
                        time: i.registerDate.replace('T', ' '),
                        projectName: <i style={{ cursor: 'pointer', color: 'rgb(93, 178, 255)' }} onClick={() => detail(i.projectName, i.projectUrl, i.projectDesc)}>{i.projectName}</i>,
                        action: <div className='projectAduit-btn'>
                            <button onClick={() => agreeOrRefuse('1', i.projectId)} className='projectAduit-agree'>同意</button>
                            <button onClick={() => agreeOrRefuse('2', i.projectId)} className='projectAduit-refuse'>拒绝</button>
                        </div>
                    }
                    )
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
            title: '申请人',
            // 列数据对应的标识
            dataIndex: 'applicant',
            // 如果dataIndex不是唯一的 那么key就是必须的 唯一标识
            key: 'application',
            align: 'center',
        },
        {
            title: '时间',
            dataIndex: 'time',
            key: 'time',
            align: 'center',
        },
        {
            title: '项目名称',
            dataIndex: 'projectName',
            key: 'projectName',
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
        <div className='projectAduit'>
            <div className="projectAduit-content">
                {msg.show ? <ApplyDetail desc={msg.desc} url={msg.url} name={msg.name} setMsg={setMsg} /> : ''}
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
