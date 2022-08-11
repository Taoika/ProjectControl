import { Table } from 'antd';
import React from 'react'
import { axiosJSONPost } from '../../utils/request';
import './index.css'

export default function ProjectAduit() {

    // 每页数据量
    const [pageSize,setPageSize]=React.useState(100);
    // 总数据量
    const [total,setTotal]=React.useState(0);
    // 当前页数
    const [current,setCurrent]=React.useState(1);
    // 数据源
    const [data,setData]=React.useState([]);
    // 列头
    const [title,setTitle]=React.useState([]);

    // 请求数据
    React.useEffect(()=>{
        axiosJSONPost('http://localhost:8000/projectAduit',{current:current,pageSize:pageSize})
        .then(
            response=>{
                // 设置数据源
                setData(response.data.data);
                // 设置总条数
                setTotal(response.data.total);
                // 设置列头
                setTitle(Object.keys(response.data.data[0]));
            },
            error=>{
                console.log(error);
            }
        )
    },[current]);

    // 列描述数据对象
    const columns = [
        {
            // 列头显示文字
            title: '申请人',
            // 列数据对应的标识
            dataIndex: 'applicant',
            // 如果dataIndex不是唯一的 那么key就是必须的 唯一标识
            key: 'application',
            align:'center',
        },
        {
            title: '时间',
            dataIndex: 'time',
            key: 'time',
            align:'center',
        },
        {
            title: '项目名称',
            dataIndex: 'projectName',
            key: 'projectName',
            align:'center',
        },
        {
            title: '操作',
            dataIndex: '',
            key:'action',
            align:'center',
            render: () => (
                <div className='projectAduit-btn'>
                  <button className='projectAduit-agree'>同意</button>
                  <button className='projectAduit-refuse'>拒绝</button>
                </div>

              ),
        },
    ];

    // 处理分页
    function handleChange(page,pageSize){
        setCurrent(page);
        setPageSize(pageSize);
    }

    return (
    <div className='projectAduit'>
        <div className="projectAduit-content">
            <Table
                // 列的配置项
                columns={columns}
                // 数据数组
                dataSource={data}
                // // 滚动配置
                scroll={{
                    scrollToFirstRowOnChange:true,
                    y:'calc(100vh - 235px)',
                }}
                // 分页设置
                pagination={{
                    pageSize:pageSize,
                    total:total,
                    current:current,
                    onChange:handleChange,
                }}
            />
        </div>
    </div>
    );
}
