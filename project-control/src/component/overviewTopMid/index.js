import React from 'react'
import Area from '../area'
import green from '../../assets/images/green.png'
import blue from '../../assets/images/blue.png'
import Dropdown from '../dropdown'

export default function index() {
  return (
    <div className='overview-top-mid'>
    <div style={{display: 'flex',width:'100%',justifyContent:'end'}}>
        <Dropdown/>
      </div>
      <div style={{display: 'flex',width:'100%',height:'10vh'}}>
        <div style={{display: 'flex',height:'100%',flexWrap:'wrap',marginLeft:'10px',alignContent:'start'}}>
          <span style={{display: 'flex',width:'100%'}}><img src={blue} alt='总PV' style={{width:'1vw',height:'2vh'}}/> 总PV</span>
          <span style={{display: 'flex',fontSize:'2vw',fontWeight:'700',marginTop:'-10px'}}>99999</span>
          <span style={{display: 'flex',marginTop:'8px',marginLeft:'10px'  }}>周同比 <strong className='green'>&nbsp;&nbsp;--%↑</strong></span>
        </div>
        <div style={{display: 'flex',height:'100%',flexWrap:'wrap',marginLeft:'10px',alignContent:'start'}}>
          <span style={{display: 'flex',width:'100%'}}><img src={green} alt='总PV' style={{width:'1vw',height:'2vh'}}/> 总UV</span>
          <span style={{display: 'flex',fontSize:'2vw',fontWeight:'700',marginTop:'-10px'}}>99999</span>
          <span style={{display: 'flex',marginTop:'8px',marginLeft:'10px'  }}>周同比 <strong className='green'>&nbsp;&nbsp;--%↑</strong></span>
        </div>
        
      </div>
      <div></div>

      <Area/>
    </div>
  )
}