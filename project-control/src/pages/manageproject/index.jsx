import React from 'react'
import { Outlet } from 'react-router-dom'
import './index.css'
import ManageSider from '../../component/managesider/index'

export default function ManageProject() {
  return (
    <div className='manageProject-container'>
      <ManageSider projectmonitoring='项目监控' projectaduit='审核项目' />
      <Outlet />
    </div>
  )
}
