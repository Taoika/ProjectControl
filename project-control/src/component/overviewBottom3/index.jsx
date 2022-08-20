import React from 'react'
import Areaspeed from '../areaspeed'
import Dropdown from '../dropdown'
import { ClockCircleOutlined } from '@ant-design/icons';
import Loading from '../loading'
export default function Index() {

    const [dateType, setDateType] = React.useState('1');
    const [time, setTime] = React.useState('1')
    const [data, setData] = React.useState([]);
    const [load, setLoad] = React.useState(0)
    React.useEffect(() => {
        setLoad({ left: '17.2895vw', top: '10.75vw' })
        React.axios('post', 'http://106.13.18.48/monitor/api/performance', setLoad, '', { dateType: dateType.toString(), type: time.toString(), projectName: React.getCookie('monitorname') }).then(
            res => {
                setData(res)
            },
        )
    }, [time, dateType]);
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
            <div onMouseEnter={movein} onMouseLeave={moveout} style={{ width: '40.5vw', boxShadow: show ? '0px 0px 10px 10px rgba(0,0,0,.1)' : '', transform: show ? 'scale(1.01)' : 'scale(1)', display: 'flex', position: 'relative', zIndex: show ? '1001' : '1', display: 'flex', justifyContent: 'center', alignContent: 'space-between', flexWrap: 'wrap' }}>
                {load ? <Loading {...load} /> : ''}
                <div style={{ display: 'flex', width: '100%', marginLeft: '10px', justifyContent: 'space-between' }}><strong style={{ display: 'flex' }}>性能监控&nbsp;&nbsp;&nbsp;
                    <Dropdown min func={setDateType} option={['FP', 'FCP', 'DOM Ready', 'DNS', 'FID', 'LCP', 'FMP', '卡顿', '首次可交互', '完整加载时间',]} /></strong>
                    <div></div><ClockCircleOutlined style={{ position: 'relative', top: '9px', right: '-12vw', zIndex: '999' }} /><Dropdown option={['24小时', '30天', '12月',]} func={setTime} /></div>
                <Areaspeed data={data} />
            </div>
        </>
    )
}
