import { Pagination } from 'antd';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import './index.css'

export default function LogDetail() {

    const [detail, setDetail] = useState([]);
    const [current, setCurrent] = useState(1);
    const [total, setTotal] = useState(1);
    const location = useLocation();
    console.log('location ->', location);
    const uri = location.state ? location.state.uri : '';

    function requestDetail() {
        React.axios('post', 'http://39.98.41.126:31113/apiError/detail', '', '', { method: uri, projectName: React.getCookie('monitorname'), currentPage: current })
            .then(res => {
                if (res) {
                    console.log(res);
                    let data = []
                    for (const x in res[0]) {
                        data.push({ key: x, value: res[0][x] });
                    }
                    setTotal(res[0].pageSize)
                    setDetail(data)
                }

            })
    }

    function handleChange(value) {
        setCurrent(value);
    }

    useEffect(() => {
        requestDetail();
    }, [current]);

    return (
        <div className="logDetail-container">
            <div className="logDetail">
                <div className="logDetail-title">
                    <div className="logDetail-title-left">详情日志</div>
                    <Pagination simple defaultCurrent={1} total={total} pageSize={1} showQuickJumper='true' onChange={handleChange}/>
                </div>
                <div className="logDetail-content">
                    {
                        <>
                            <p className='logDetail-content-title'>
                                <span>项目名: {`${detail.projectName}`}</span>
                                <span>项目地址: {`${detail.projectUrl}`}</span>
                                <span>请求时间: {`${detail.visitDate}`}</span>
                            </p>
                            <p>包名: {`${detail.packageName}`}</p>
                            <p>接口: {`${detail.uri}`}</p>
                            <p>方法名: {`${detail.method}`}</p>
                            <p>异常信息: {`${detail.exception?detail.exception:'null'}`}</p>
                            <p>入参: {`${detail.inParameters}`}</p>
                            <p>出参: {`${detail.outParameters}`}</p>
                            <p>ip地址: {`${detail.ip}`}</p>
                            <p>响应时间: {`${detail.responseTime}`}ms</p>
                            <p>自定义特征: {`${detail.traits}`}</p>
                        </>
                    }
                </div>
            </div>
        </div>
    )
}
