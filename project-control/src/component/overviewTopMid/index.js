import React from 'react'
import Area from '../area'
import green from '../../assets/images/green.png'
import blue from '../../assets/images/blue.png'
import Dropdown from '../dropdown'
import { ClockCircleOutlined } from '@ant-design/icons';
import Loading from '../loading'
export default function Index() {
  const [load, setLoad] = React.useState()
  const [data, setData] = React.useState([])
  const [show,setShow] = React.useState(0)
  const [time,setTime]=React.useState(1)
  React.useEffect(() => {
      setLoad({ left: '17.2895vw', top: '10.75vw' })
      React.axios('post', 'http://106.13.18.48/monitor/api/apiError/err ', setLoad, '', {dateType:time.toString(),projectName: React.getCookie('monitorname') }).then(
          res => {
              setData(res)
          },
      )
  }, [time])
const [mask,setMask] = React.useState(0)
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
      <div className='monitorMask' style={{ position:'absolute',zIndex:mask?'1001':'-1',left:'-10vw',top:'-10vh',width:'110vw',height:'110vh',background:mask?'rgba(0,0,0,.1)':'rgba(0,0,0,0)'}}></div>
    <div onMouseEnter={movein} onMouseLeave={moveout} style={{boxShadow:show?'0px 0px 10px 10px rgba(0,0,0,.1)':'', transform:show?'scale(1.01)':'scale(1)', position:'relative',zIndex:show?'1001':'1'}} className='overview-top-mid'>
      {load ? <Loading {...load} /> : ''}
    <div style={{display: 'flex',width:'100%',justifyContent:'end'}}>
    <ClockCircleOutlined style={{ position: 'relative', top: '9px', right: '-90px', zIndex: '999' }} />
        <Dropdown option={['24小时','30天','12月']} func={setTime} />
      </div>
      <div style={{display: 'flex',width:'100%',height:'10vh'}}>
        <div style={{display: 'flex',height:'100%',flexWrap:'wrap',marginLeft:'10px',alignContent:'start'}}>
          <span style={{display: 'flex',width:'100%'}}><img src={blue} alt='总PV' style={{width:'1vw',height:'2vh'}}/> 总PV</span>
          <span style={{display: 'flex',fontSize:'2vw',fontWeight:'700',marginTop:'-10px'}}>{data.length!==0?data[data.length-1].pV:0}</span>
        </div>
        <div style={{display: 'flex',height:'100%',flexWrap:'wrap',marginLeft:'10px',alignContent:'start'}}>
          <span style={{display: 'flex',width:'100%'}}><img src={green} alt='总PV' style={{width:'1vw',height:'2vh'}}/> 总UV</span>
          <span style={{display: 'flex',fontSize:'2vw',fontWeight:'700',marginTop:'-10px'}}>{data.length!==0?data[data.length-1].uV:0}</span>
        </div>
        
      </div>
      <div></div>
      <Area data={data}/>
    </div>
    </>
  )
}
