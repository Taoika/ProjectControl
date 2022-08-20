import React from 'react'
import { Outlet } from 'react-router-dom'
import ManageSider from '../../component/managesider/index'
import './index.css'
export default function Managepublishproject() {
    return (
        <div className='Managepublishproject-container'>
            <ManageSider managepower='权限管理' updateproject='更新项目' publisher='发布管理' />
            <Outlet />
        </div>
    )
}