import React, { useEffect } from 'react'
import { Button, Result } from 'antd';
import './index.css'
import Search from '../../component/search'
import Loading from '../../component/loading'

export default function UserProject() {
    const [data, setData] = React.useState([])
    //是否显示加载中
    const [load, setLoad] = React.useState()
    //flag是阀门，不允许狂点按钮
    const [flag, setFlag] = React.useState(1)
    const [error, setError] = React.useState(0)
    const apply = (id) => {
        if (flag) {
            setLoad({ left: '47.2895vw', top: '5.75vw' })
            setFlag(0)
            React.axios('post', 'http://106.13.18.48/monitor/api/application/releaseApp', setLoad, setFlag,
                { projectId: id, number: '1' })
        }
    }
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
        setLoad({ left: '47.2895vw', top: '5.75vw' })
        React.axios('get', 'http://106.13.18.48/monitor/api/project/allProject', setLoad, '', '', '', setError).then(res => {
            setData(res)
        })

    }, [])
    return (
        <div className="userProject-right">
            {load ? <Loading {...load} /> : ''}
            {!error ? <div><div className="userProject-search">全部项目<Search type='project' func={setData} /></div>
                <div className="userProject-content-all">
                    {data.map(i => {
                        if (i.status === 1) {
                            return (<div key={i.projectId}>
                                <div className="userProject-title">{i.projectName}</div>
                                <div className="userProject-synopsis">简介:&nbsp;&nbsp;&nbsp;{i.projectDesc}</div>
                                <div className="userProject-button">
                                    <button onClick={() => apply(i.projectId)} className="userProject-apply">申请监控</button>
                                </div>
                            </div>)
                        }
                    })}
                    {/* 这一堆i标签是用来占位 可谓是烦得很 */}
                    <i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i>
                    <i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i>
                    <i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i>
                    <i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i>
                    <i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i>
                </div></div> : <Result
                style={{ width: '100vw', height: 'calc(100vh - 64px)' }}
                status="500"
                subTitle="抱歉，服务器发生了问题，或者是没有资源，正在抢修中....."
            // extra={<Button type="primary">Back Home</Button>}
            />}
        </div>
    )
}
