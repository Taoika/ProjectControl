import React from 'react'
import Areaspeed from '../areaspeed'
import Dropdown from '../dropdown'
import { ClockCircleOutlined } from '@ant-design/icons';

export default function Index() {
    const [option, setOption] = React.useState(0);
    React.useEffect(() => {
        console.log(option, 'option');
    }, [option])
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignContent: 'space-between', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', width: '100%', marginLeft: '10px', justifyContent: 'space-between' }}><strong style={{ display: 'flex' }}>性能监控&nbsp;&nbsp;&nbsp;
                <Dropdown min option={['FP', 'FCP', 'DOM Ready', 'DNS', 'FID', 'LCP', 'FMP', '卡顿', '首次可交互', '完整加载时间',]} /></strong>
                <div></div><ClockCircleOutlined style={{ position: 'relative', top: '9px', right: '-12.5vw', zIndex: '999' }} /><Dropdown option={['今日', '今月', '今年',]} func={setOption} /></div>
            <Areaspeed />
        </div>
    )
}
