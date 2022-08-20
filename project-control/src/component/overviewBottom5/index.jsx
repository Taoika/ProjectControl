import React from 'react'
import Areawhite from '../areawhite'
import Dropdown from '../dropdown'
import { ClockCircleOutlined } from '@ant-design/icons';
import Loading from '../loading'
export default function Index() {
    const [time, setTime] = React.useState(1)
    const [load, setLoad] = React.useState()
    const [data, setData] = React.useState([])
    const [show, setShow] = React.useState(0)
    const [mask, setMask] = React.useState(0)
    React.useEffect(() => {
        setLoad({ left: '35.2895vw', top: '5.75vw' })
        React.axios('post', 'http://106.13.18.48/monitor/api/blankError/brr', setLoad, '', { type: time.toString(), projectName: React.getCookie('monitorname') }).then(
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
            <div onMouseEnter={movein} onMouseLeave={moveout} style={{ boxShadow: show ? '0px 0px 10px 10px rgba(0,0,0,.1)' : '', transform: show ? 'scale(1.01)' : 'scale(1)', position: 'relative', zIndex: show ? '1001' : '1', display: 'flex', justifyContent: 'center', alignContent: 'space-between', flexWrap: 'wrap' }}>
                {load ? <Loading {...load} /> : ''}
                <div style={{ display: 'flex', width: '100%', marginLeft: '10px', justifyContent: 'space-between' }}>
                    <strong style={{ display: 'flex' }}>白屏监控</strong>
                    <div><ClockCircleOutlined style={{ position: 'relative', right: '-90px', zIndex: '999' }} /><Dropdown func={setTime} option={['24小时', '30天', '12月']} /></div></div>
                <Areawhite data={data} />
            </div>
        </>
    )
}
