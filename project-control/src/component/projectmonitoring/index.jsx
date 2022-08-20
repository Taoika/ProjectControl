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
    const gomonitor = (id) => {
        document.cookie = `monitor=${id}`
        navigate('/monitor')
    }
    const getData = () => {
        setLoad({ left: '47.2895vw', top: '5.75vw' })
        React.axios('get', 'http://39.98.41.126:31100/project/allProject', setLoad, '', '', '', setError).then(res => {
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
        <div className="projectMonitoring-right">
            {load ? <Loading {...load} /> : ''}
            {freeze.show === 1 ? <Freeze setFreeze={setFreeze} id={freeze.id} type='project' getData={getData} /> : ''}
            {!error ? <div><div className="projectMonitoring-search"><Search type='project' func={setData} /></div>
                <div className="projectMonitoring-content-all">
                    {data.map(i => {
                        if (i.status === 1 || i.status === -1) {
                            return (<Badge.Ribbon key={i.projectId} text={i.status === 1 ? '运行中' : '已冻结'} color={i.status === 1 ? 'green' : 'blue'}>
                                <div className="projectMonitoring-title">{i.projectName}</div>
                                <div className="projectMonitoring-synopsis">简介:&nbsp;&nbsp;&nbsp;{i.projectDesc}</div>
                                <div className="projectMonitoring-PVAndUVAndTime">
                                    <span className="projectMonitoring-PV">PV:99999999+</span>
                                    <span className="projectMonitoring-UV">UV:99999999+</span>
                                    <span className="projectMonitoring-time">首次渲染时间:9999999ms</span>
                                </div>
                                <div className="projectMonitoring-JSAndAPI">
                                    <span className="projectMonitoring-JS">JS错误率:100%</span>
                                    <span className="projectMonitoring-API">API成功率:100%</span>
                                </div>
                                <div className="projectMonitoring-button">
                                    <button onClick={() => gomonitor(6)} className="projectMonitoring-enter">进入监控</button>
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
    )
}

