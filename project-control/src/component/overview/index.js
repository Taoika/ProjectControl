import React from 'react'
import './index.css'
import OverviewTopMid from '../overviewTopMid';
import OverviewTopLeft from '../overviewTopLeft';
import OverviewTopRight from '../overviewTopRight';
import OverviewBottom1 from '../overviewBottom1'
import OverviewBottom2 from '../overviewBottom2'
import OverviewBottom3 from '../overviewBottom3'
import OverviewBottom4 from '../overviewBottom4'

export default function Overview() {
  return (
    <div className='overview'>
        <strong className='overview-title'>项目名称</strong>
        <div className='overview-top'>
          <OverviewTopLeft/>
          <OverviewTopMid/>
          <OverviewTopRight/>    
        </div>
        <div className='overview-bottom'>
          <OverviewBottom1/>
          <OverviewBottom2/>
          <OverviewBottom3/>
          <OverviewBottom4/>
        </div>
    </div>
  )
}
