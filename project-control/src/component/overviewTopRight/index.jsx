import React from 'react'

export default function Index() {
    const [show, setShow] = React.useState(0)
    const [mask, setMask] = React.useState(0)
    let [data, setData] = React.useState({})
    React.useEffect(() => {
        React.axios('post', 'http://106.13.18.48/monitor/api/SDK/whole ', '', '', { projectName: React.getCookie('monitorname') }).then(
            res => {
                console.log(res);
                data = { ...data, ...res }
                setData(data)
            },
        )
        React.axios('post', 'http://106.13.18.48/monitor/api/performance/FP ', '', '', { projectName: React.getCookie('monitorname') }).then(
            res => {
                data = { ...data, ...res }
                setData(data)
            },
        )
    }, [])
    const movein = () => {
        setMask(1)
        setShow(1)
    }
    const moveout = () => {
        setMask(0)
        setShow(0)
    }
    return (
        <>
            <div className='monitorMask' style={{ position: 'absolute', zIndex: mask ? '1001' : '-1', left: '-10vw', top: '-10vh', width: '110vw', height: '110vh', background: mask ? 'rgba(0,0,0,.1)' : 'rgba(0,0,0,0)' }}></div>
            <div onMouseEnter={movein} onMouseLeave={moveout} style={{ boxShadow: show ? '0px 0px 10px 10px rgba(0,0,0,.1)' : '', transform: show ? 'scale(1.01)' : 'scale(1)', position: 'relative', zIndex: show ? '1001' : '1' }} className='overview-top-right'>
                <div className='overview-top-left1'>
                    <div style={{ width: '50%' }} className='overview-top-left1-top'>
                        <div>
                            <strong style={{width:'9vw',height:'5vh'}} className='overview-top-left1-top-value'>{data.ThisWeekAvgTime ? data.ThisWeekAvgTime.toFixed(2) + 'ms' : '0ms'}</strong>
                            <span>首次渲染耗时</span>
                            <span>周增长率:&nbsp;&nbsp;&nbsp; <strong className='red'>{data.rate ? data.rate + '%' : '--%↑'}</strong></span>
                        </div>
                    </div>
                </div>

                <div className='overview-top-left1'>
                    <div style={{ width: '40%' }} className='overview-top-left1-top'>
                        <div>
                            <strong className='overview-top-left1-top-value'>{data.resourceThisWeekCount ? data.resourceThisWeekCount : '--'}</strong>
                            <span>资源错误</span>
                            <span>周增长率:&nbsp;&nbsp;&nbsp; <strong className='red'>{data.resourceCountIncreRate ? data.resourceCountIncreRate + '%' : '--%↑'}</strong></span>
                        </div>
                    </div>
                    <div style={{ width: '20vw',fontSize:'1vw'  }}>新增错误数&nbsp;<span className='red'>{data.resourceCountIncre ? data.resourceCountIncre : 0}</span></div>

                </div>
            </div>
        </>
    )
}
