import React from 'react'
import { Outlet } from 'react-router-dom'
import ManageSider from '../../component/managesider/index'
import './index.css'
export default function projectpermission() {
    return (
        <div className='projectpermission-container'>
            <ManageSider mymonitorproject='我监控的项目' mypublishproject='我发布的项目' />
            <Outlet />
        </div>
    )
}