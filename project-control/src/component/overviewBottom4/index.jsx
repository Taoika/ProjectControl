import React from 'react'
import Areasource from '../areasource'
import Dropdown from '../dropdown'
import { ClockCircleOutlined } from '@ant-design/icons';
import Loading from '../loading'

export default function Index() {
    const [load, setLoad] = React.useState()
    const [data, setData] = React.useState([])
    const [dateType, setDateType] = React.useState('1');
    const [type, setType] = React.useState('1')
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
        setLoad({ left: '17.2895vw', top: '10.75vw' })
        React.axios('post', 'http://106.13.18.48/monitor/api/resource/err', setLoad, '', { type: type.toString(), dateType: dateType.toString(), projectName: React.getCookie('monitorname') }).then(
            res => {
                setData(res)
            },
        )
    }, [type, dateType])
    return (
        <>
            <div className='monitorMask' style={{ position: 'absolute', zIndex: mask ? '1001' : '-1', left: '-10vw', top: '-10vh', width: '110vw', height: '110vh', background: mask ? 'rgba(0,0,0,.1)' : 'rgba(0,0,0,0)' }}></div>
            <div onMouseEnter={movein} onMouseLeave={moveout} style={{ boxShadow: show ? '0px 0px 10px 10px rgba(0,0,0,.1)' : '', transform: show ? 'scale(1.01)' : 'scale(1)', position: 'relative', zIndex: show ? '1001' : '1', display: 'flex', justifyContent: 'center', alignContent: 'space-between', flexWrap: 'wrap' }}>
                {load ? <Loading {...load} /> : ''}
                <div style={{ display: 'flex', width: '100%', marginLeft: '10px', justifyContent: 'space-between' }}>
                    <strong style={{ display: 'flex' }}>资源错误&nbsp;&nbsp;&nbsp;<Dropdown func={setType} option={['全部', '<link>错误', '<script>错误', '<img>错误', '<object>错误']} />
                    </strong><div><ClockCircleOutlined style={{ position: 'relative', top: '1px', right: '-90px', zIndex: '999' }} /><Dropdown func={setDateType} option={['24小时', '30天', '12月']} /></div></div>
                <Areasource data={data} />
            </div>
        </>
    )
}
