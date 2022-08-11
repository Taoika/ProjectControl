import { Badge } from 'antd';
import React, { useEffect } from 'react'
import './index.css'
import Search from '../../component/search'

export default function ProjectMonitoring() {
    useEffect(() => {
        window.addEventListener('resize', () => {
            const parent = document.querySelector('.projectMonitoring-content-all')
            for (let i = 0; i < parent.children.length; i++) {
                parent.children[i].style.marginLeft = ((window.innerWidth - 200) / Math.floor((window.innerWidth - 200) / 402) - 350) / 2 + 'px'
                parent.children[i].style.marginRight = ((window.innerWidth - 200) / Math.floor((window.innerWidth - 200) / 402) - 350) / 2 + 'px'
            }
        })
    }, [])
    return (
        <div className="projectMonitoring-right">
            <div className="projectMonitoring-search"><Search /></div>
            <div className="projectMonitoring-content-all">
                <Badge.Ribbon text="Running" color="green">
                    <div className="projectMonitoring-title">软件管理平台名字及这么短是不可能的省省吧</div>
                    <div className="projectMonitoring-synopsis">简介:&nbsp;&nbsp;&nbsp;这个平台功能欠打 你想用 用呗 跑不跑得动就另说了 你打这么多字上去我不上省略号才怪呢</div>
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
                        <button className="projectMonitoring-enter">进入监控</button>
                        <button className="projectMonitoring-freeze">冻结项目</button>
                    </div>
                </Badge.Ribbon>
                <Badge.Ribbon text="Running" color="green">
                    <div className="projectMonitoring-title">软件管理平台名字及这么短是不可能的省省吧</div>
                    <div className="projectMonitoring-synopsis">简介:&nbsp;&nbsp;&nbsp;这个平台功能欠打 你想用 用呗 跑不跑得动就另说了 你打这么多字上去我不上省略号才怪呢</div>
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
                        <button className="projectMonitoring-enter">进入监控</button>
                        <button className="projectMonitoring-freeze">冻结项目</button>
                    </div>
                </Badge.Ribbon>
                <Badge.Ribbon text="Running" color="green">
                    <div className="projectMonitoring-title">软件管理平台名字及这么短是不可能的省省吧</div>
                    <div className="projectMonitoring-synopsis">简介:&nbsp;&nbsp;&nbsp;这个平台功能欠打 你想用 用呗 跑不跑得动就另说了 你打这么多字上去我不上省略号才怪呢</div>
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
                        <button className="projectMonitoring-enter">进入监控</button>
                        <button className="projectMonitoring-freeze">冻结项目</button>
                    </div>
                </Badge.Ribbon>
                <Badge.Ribbon text="Running" color="green">
                    <div className="projectMonitoring-title">软件管理平台名字及这么短是不可能的省省吧</div>
                    <div className="projectMonitoring-synopsis">简介:&nbsp;&nbsp;&nbsp;这个平台功能欠打 你想用 用呗 跑不跑得动就另说了 你打这么多字上去我不上省略号才怪呢</div>
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
                        <button className="projectMonitoring-enter">进入监控</button>
                        <button className="projectMonitoring-freeze">冻结项目</button>
                    </div>
                </Badge.Ribbon>
                <Badge.Ribbon text="Running" color="green">
                    <div className="projectMonitoring-title">软件管理平台名字及这么短是不可能的省省吧</div>
                    <div className="projectMonitoring-synopsis">简介:&nbsp;&nbsp;&nbsp;这个平台功能欠打 你想用 用呗 跑不跑得动就另说了 你打这么多字上去我不上省略号才怪呢</div>
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
                        <button className="projectMonitoring-enter">进入监控</button>
                        <button className="projectMonitoring-freeze">冻结项目</button>
                    </div>
                </Badge.Ribbon>
                <Badge.Ribbon text="Running" color="green">
                    <div className="projectMonitoring-title">软件管理平台名字及这么短是不可能的省省吧</div>
                    <div className="projectMonitoring-synopsis">简介:&nbsp;&nbsp;&nbsp;这个平台功能欠打 你想用 用呗 跑不跑得动就另说了 你打这么多字上去我不上省略号才怪呢</div>
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
                        <button className="projectMonitoring-enter">进入监控</button>
                        <button className="projectMonitoring-freeze">冻结项目</button>
                    </div>
                </Badge.Ribbon>
                <Badge.Ribbon text="Running" color="green">
                    <div className="projectMonitoring-title">软件管理平台名字及这么短是不可能的省省吧</div>
                    <div className="projectMonitoring-synopsis">简介:&nbsp;&nbsp;&nbsp;这个平台功能欠打 你想用 用呗 跑不跑得动就另说了 你打这么多字上去我不上省略号才怪呢</div>
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
                        <button className="projectMonitoring-enter">进入监控</button>
                        <button className="projectMonitoring-freeze">冻结项目</button>
                    </div>
                </Badge.Ribbon>
                <Badge.Ribbon text="Running" color="green">
                    <div className="projectMonitoring-title">软件管理平台名字及这么短是不可能的省省吧</div>
                    <div className="projectMonitoring-synopsis">简介:&nbsp;&nbsp;&nbsp;这个平台功能欠打 你想用 用呗 跑不跑得动就另说了 你打这么多字上去我不上省略号才怪呢</div>
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
                        <button className="projectMonitoring-enter">进入监控</button>
                        <button className="projectMonitoring-freeze">冻结项目</button>
                    </div>
                </Badge.Ribbon>
                <Badge.Ribbon text="Running" color="green">
                    <div className="projectMonitoring-title">软件管理平台名字及这么短是不可能的省省吧</div>
                    <div className="projectMonitoring-synopsis">简介:&nbsp;&nbsp;&nbsp;这个平台功能欠打 你想用 用呗 跑不跑得动就另说了 你打这么多字上去我不上省略号才怪呢</div>
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
                        <button className="projectMonitoring-enter">进入监控</button>
                        <button className="projectMonitoring-freeze">冻结项目</button>
                    </div>
                </Badge.Ribbon>
                <Badge.Ribbon text="Running" color="green">
                    <div className="projectMonitoring-title">软件管理平台名字及这么短是不可能的省省吧</div>
                    <div className="projectMonitoring-synopsis">简介:&nbsp;&nbsp;&nbsp;这个平台功能欠打 你想用 用呗 跑不跑得动就另说了 你打这么多字上去我不上省略号才怪呢</div>
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
                        <button className="projectMonitoring-enter">进入监控</button>
                        <button className="projectMonitoring-freeze">冻结项目</button>
                    </div>
                </Badge.Ribbon>
                <Badge.Ribbon text="Running" color="green">
                    <div className="projectMonitoring-title">软件管理平台名字及这么短是不可能的省省吧</div>
                    <div className="projectMonitoring-synopsis">简介:&nbsp;&nbsp;&nbsp;这个平台功能欠打 你想用 用呗 跑不跑得动就另说了 你打这么多字上去我不上省略号才怪呢</div>
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
                        <button className="projectMonitoring-enter">进入监控</button>
                        <button className="projectMonitoring-freeze">冻结项目</button>
                    </div>
                </Badge.Ribbon>
                <Badge.Ribbon text="Running" color="green">
                    <div className="projectMonitoring-title">软件管理平台名字及这么短是不可能的省省吧</div>
                    <div className="projectMonitoring-synopsis">简介:&nbsp;&nbsp;&nbsp;这个平台功能欠打 你想用 用呗 跑不跑得动就另说了 你打这么多字上去我不上省略号才怪呢</div>
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
                        <button className="projectMonitoring-enter">进入监控</button>
                        <button className="projectMonitoring-freeze">冻结项目</button>
                    </div>
                </Badge.Ribbon>
                <Badge.Ribbon text="Running" color="green">
                    <div className="projectMonitoring-title">软件管理平台名字及这么短是不可能的省省吧</div>
                    <div className="projectMonitoring-synopsis">简介:&nbsp;&nbsp;&nbsp;这个平台功能欠打 你想用 用呗 跑不跑得动就另说了 你打这么多字上去我不上省略号才怪呢</div>
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
                        <button className="projectMonitoring-enter">进入监控</button>
                        <button className="projectMonitoring-freeze">冻结项目</button>
                    </div>
                </Badge.Ribbon>
                <Badge.Ribbon text="Running" color="green">
                    <div className="projectMonitoring-title">软件管理平台名字及这么短是不可能的省省吧</div>
                    <div className="projectMonitoring-synopsis">简介:&nbsp;&nbsp;&nbsp;这个平台功能欠打 你想用 用呗 跑不跑得动就另说了 你打这么多字上去我不上省略号才怪呢</div>
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
                        <button className="projectMonitoring-enter">进入监控</button>
                        <button className="projectMonitoring-freeze">冻结项目</button>
                    </div>
                </Badge.Ribbon>
            </div>
        </div>
    )
}
