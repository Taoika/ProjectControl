import React from 'react'
import DualAxes2 from '../dualaxes2'
import Dropdown from '../dropdown'
import { ClockCircleOutlined } from '@ant-design/icons';
import Loading from '../loading'

export default function Index() {
    const [time, setTime] = React.useState(1)
    const [load, setLoad] = React.useState()
    //时间和两个柱
    const [countData, setCountData] = React.useState([])
    //线和时间
    const [transformData, setTransformData] = React.useState([])
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
    React.useEffect(() => {
        setLoad({ left: '20.2895vw', top: '10.75vw' })
        React.axios('post', 'http://106.13.18.48/monitor/api/apiError/err', setLoad, '', { dateType: time.toString(), projectName: React.getCookie('monitorname') }).then(
            res => {
                let data1 = [];
                let data2 = [];
                res.map(i => {
                    data1.push({
                        time: i.dateStr,
                        value: i.defeatCount,
                        type: '错误次数',
                    })
                    data1.push({
                        time: i.dateStr,
                        value: i.count,
                        type: '成功次数',
                    })
                    data2.push(
                        {
                            time: i.dateStr,
                            成功率: i.percent,
                        },
                    )
                })
                setCountData(data1)
                setTransformData(data2)
            },
        )
    }, [time])
    return (
        <>
            <div className='monitorMask' style={{ position: 'absolute', zIndex: mask ? '1001' : '-1', left: '-10vw', top: '-10vh', width: '110vw', height: '110vh', background: mask ? 'rgba(0,0,0,.1)' : 'rgba(0,0,0,0)' }}></div>
            <div onMouseEnter={movein} onMouseLeave={moveout} style={{ boxShadow: show ? '0px 0px 10px 10px rgba(0,0,0,.1)' : '', transform: show ? 'scale(1.01)' : 'scale(1)', display: 'flex', position: 'relative', zIndex: show ? '1001' : '1', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
                {load ? <Loading {...load} /> : ''}
                <div style={{ display: 'flex', width: '100%', marginLeft: '10px', justifyContent: 'space-between' }}>
                    <strong style={{ display: 'flex' }}>API请求信息</strong>
                    <div><ClockCircleOutlined style={{ position: 'relative', right: '-90px', zIndex: '999' }} /><Dropdown func={setTime} option={['24小时', '30天', '12月']} /></div></div>
                <DualAxes2 countData={countData} transformData={transformData} />
            </div>
        </>
    )
}
