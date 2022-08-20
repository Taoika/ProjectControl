import { Badge } from 'antd';
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Loading from '../loading'
import { Button, Result } from 'antd';

import './index.css'
import Search from '../../component/search'
import Freeze from '../../component/freeze'
export default function ProjectMonitoring() {
    const navigate = useNavigate()
    const [load, setLoad] = React.useState(0)
    const [freeze, setFreeze] = React.useState({ show: 0, id: 0 })
    const [error, setError] = React.useState(0)
    const [data, setData] = React.useState([])
    const freezeProject = (id) => {
        setFreeze({ show: 1, id })
    }
    const gomonitor = (name) => {
        document.cookie = `monitorname=${name}`
        navigate('/monitor')
    }
    const getData = () => {
        setLoad({ left: '47.2895vw', top: '5.75vw' })
        React.axios('get', 'http://106.13.18.48/monitor/api/project/allProject', setLoad, '', '', '', setError).then(res => {
            setData(res)
        })
    }
    // 解决布局问题 我甚至读不懂这一段代码
    useEffect(() => {
        // 只要大小改变了就会触发此事件
        // window.addEventListener('resize', () => {
        //     const parent = document.querySelector('.projectMonitoring-content-all')
        //     for (let i = 0; i < parent.children.length; i++) {
        //         let len = window.innerWidth - 200;
        //         parent.children[i].style.marginLeft = (len / Math.floor(len / 402) - 350) / 2 + 'px'
        //         parent.children[i].style.marginRight = (len / Math.floor(len / 402) - 350) / 2 + 'px'
        //     }
        // })
        getData()

    }, [])
    return (
        <>
        {freeze.show === 1 ? <Freeze setFreeze={setFreeze} id={freeze.id} type='project' getData={getData} /> : ''}
        <div className="projectMonitoring-right">
            {load ? <Loading {...load} /> : ''}
            {!error ? <div><div className="projectMonitoring-search"><Search type='project' func={setData} /></div>
                <div className="projectMonitoring-content-all">
                    {data.map(i => {
                        if (i.status === 1 || i.status === -1) {
                            return (<Badge.Ribbon key={i.projectId} text={i.status === 1 ? '运行中' : '已冻结'} color={i.status === 1 ? 'green' : 'blue'}>
                                <div className="projectMonitoring-title">{i.projectName}</div>
                                <div className="projectMonitoring-synopsis">简介:&nbsp;&nbsp;&nbsp;{i.projectDesc}</div>
                                <div className="projectMonitoring-PVAndUVAndTime">
                                    <span className="projectMonitoring-PV">{i.pV > 9999999 ? '9999999+' : `PV:${i.pV}`}</span>
                                    <span className="projectMonitoring-UV">{i.uV > 9999999 ? '9999999+' : `UV:${i.uV}`}</span>
                                    <span className="projectMonitoring-time">{i.registerDate ? '创建时间: ' + i.registerDate.replace('T', '  ') : 'adadwasd'}</span>
                                </div>
                                <div className="projectMonitoring-JSAndAPI">
                                    <span className="projectMonitoring-JS">{i.username ? '创建用户: ' + i.username : ''}</span>
                                    <span className="projectMonitoring-API">{i.rate ? 'API成功率: ' + i.rate + '' : ''}</span>
                                </div>
                                <div className="projectMonitoring-button">
                                    <button onClick={() => gomonitor(i.projectName)} className="projectMonitoring-enter">进入监控</button>
                                    {i.status === 1 ? <button onClick={() => freezeProject(i.projectId)} className="projectMonitoring-freeze">冻结项目</button> : ''}
                                </div>
                            </Badge.Ribbon>)
                        }

                    })}
                    {/* 这一堆i标签是用来占位 可谓是烦得很 */}
                    <i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i>
                    <i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i>
                    <i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i>
                    <i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i>
                    <i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i>
                </div></div> : <Result
                style={{ width: '100%', height: '100%' }}
                status="500"
                subTitle="抱歉，服务器发生了问题，或者是没有资源，正在抢修中....." />
            }
        </div>
        </>
    )
}

