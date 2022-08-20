import React from 'react'
import Areasource from '../areasource'
import Dropdown from '../dropdown'
import { ClockCircleOutlined } from '@ant-design/icons';


export default function Index() {
    const [dateType, setDateType] = React.useState('1');
    const [type, setType] = React.useState('1')
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignContent: 'space-between', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', width: '100%', marginLeft: '10px', justifyContent: 'space-between' }}>
                <strong style={{ display: 'flex' }}>资源错误&nbsp;&nbsp;&nbsp;<Dropdown func={setType} option={['全部', '<link>错误', '<script>错误', '<img>错误', '<object>错误']} />
                </strong><div><ClockCircleOutlined style={{ position: 'relative', top: '1px', right: '-90px', zIndex: '999' }} /><Dropdown func={setDateType} option={['24小时', '30天', '12月']} /></div></div>
            <Areasource type={type} dateType={dateType} />
        </div>
    )
}
