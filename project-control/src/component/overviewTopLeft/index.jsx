import React from 'react'

export default function Index() {
    const [data, setData] = React.useState({})
    React.useEffect(() => {
        React.axios('post', 'http://106.13.18.48/monitor/api/SDK/whole ', '', '', { projectName: React.getCookie('monitorname') }).then(
            res => {
                console.log(res);
                setData(res)
            },
        )
    }, [])
    const [show, setShow] = React.useState(0)
    const [mask, setMask] = React.useState(0)
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
            <div onMouseEnter={movein} onMouseLeave={moveout} style={{ boxShadow: show ? '0px 0px 10px 10px rgba(0,0,0,.1)' : '', transform: show ? 'scale(1.01)' : 'scale(1)', position: 'relative', zIndex: show ? '1001' : '1' }} className='overview-top-left'>
                <div className='overview-top-left1'>
                    <div className='overview-top-left1-top'>
                        <div>
                            <strong className='overview-top-left1-top-value'>{data.jsThisWeekCount ? data.jsThisWeekCount : '--'}</strong>
                            <span>JS错误数</span>
                            <span>周增长率:&nbsp;&nbsp;&nbsp; <strong className='red'>{data.jsCountIncreRate ? data.jsCountIncreRate + '%' : '--%↑'}</strong></span>
                        </div>
                        <div>
                            <strong className='overview-top-left1-top-value'>{data.JsThisWeekDefeatRate ? data.JsThisWeekDefeatRate + '%' : '--%'}</strong>
                            <span>JS错误率</span>
                            <span>周增长率:&nbsp;&nbsp;&nbsp; <strong className='red'>{data.jsCountIncreRate ? data.jsCountIncreRate + '%' : '--%↑'}</strong></span>
                        </div>
                    </div>
                    <div style={{ width: '20vw',fontSize:'1vw' }}>新增错误数&nbsp;<span className='red'>{data.jsCountIncre ? data.jsCountIncre : 0}</span></div>
                </div>
                <div className='overview-top-left1'>
                    <div className='overview-top-left1-top'>
                        <div>
                            <strong className='overview-top-left1-top-value'>{data.apiThisWeekCount ? data.apiThisWeekCount : '--'}</strong>
                            <span>API错误数</span>
                            <span>周增长率:&nbsp;&nbsp;&nbsp; <strong className='red'>{data.apiCountIncreRate ? data.apiCountIncreRate + '%' : '--%↑'}</strong></span>
                        </div>
                        <div>
                            <strong className='overview-top-left1-top-value'>{data.ApiThisWeekDefeatRate ? data.ApiThisWeekDefeatRate + '%' : '--%'}</strong>
                            <span>API错误率</span>
                            <span>周增长率:&nbsp;&nbsp;&nbsp; <strong className='red'>{data.apiCountIncreRate ? data.apiCountIncreRate + '%' : '--%↑'}</strong></span>
                        </div>
                    </div>
                    <div style={{ width: '20vw',fontSize:'1vw'  }}>新增错误数&nbsp;<span className='red'>{data.apiCountIncre ? data.apiCountIncre : 0}</span></div>
                </div>
            </div>
        </>
    )
}
