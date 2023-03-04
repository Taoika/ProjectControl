import React from 'react'
import DualAxes from '../dualaxes'
import Dropdown from '../dropdown'
import { ClockCircleOutlined } from '@ant-design/icons';
import Loading from '../loading'

export default function Index() {
    const [time, setTime] = React.useState(1)
    const [show, setShow] = React.useState(0)
    const [mask, setMask] = React.useState(0)
    const [load, setLoad] = React.useState(0)
    const [data, setData] = React.useState([])

    React.useEffect(() => {
        setLoad({ left: '17.2895vw', top: '10.75vw' })
        React.axios('post', 'http://106.13.18.48/monitor/api/jsError/err', setLoad, '', { type: time.toString(), projectName: React.getCookie('monitorname') }).then(
            res => {
                setData(res)
            },
        )
    }, [time])
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
            <div onMouseEnter={movein} onMouseLeave={moveout} style={{ width: '40.5vw', boxShadow: show ? '0px 0px 10px 10px rgba(0,0,0,.1)' : '', transform: show ? 'scale(1.01)' : '', position: 'relative', zIndex: show ? '1001' : '1', display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
                {load ? <Loading {...load} /> : ''}
                <div style={{ display: 'flex', width: '100%', marginLeft: '10px', justifyContent: 'space-between' }}>
                    <strong style={{ display: 'flex' }}>JS错误数</strong>
                    <div><ClockCircleOutlined style={{ position: 'relative', right: '-90px', zIndex: '999' }} /><Dropdown func={setTime} option={['24小时', '30天', '12月']} /></div></div>
                <DualAxes data={data} />
            </div>
        </>
    )
}
