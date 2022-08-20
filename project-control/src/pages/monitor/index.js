import React from 'react'
import { Outlet } from 'react-router-dom'
import ManageSider from '../../component/managesider'
export default function Monitor() {  return (
    <div className='manageProject-container'>
        <ManageSider overview='总览' jsError='JS错误' apiRequest='API请求' resourceError='资源错误' />
        <Outlet/>
    </div>
  )
}
