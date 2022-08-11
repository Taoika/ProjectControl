import React from 'react'
import { Outlet } from 'react-router-dom'
import './index.css'
import ManageSider from '../../component/managesider/index'

export default function ManageProject() {
  return (
    <div className='manageProject-container'>
      <ManageSider projectmonitoring='项目监控' publish='发布审核' />
      <Outlet />
    </div>
  )
}
