import React from 'react'
import { useRoutes,Outlet } from 'react-router-dom'
import './index.css'
import routes from '../../routes'
import ManageSider from '../../component/managesider/index'

export default function ManageProject() {
  const element = useRoutes(routes);
  return (
    <div className='manageProject-container'>
        <ManageSider/>     
        <Outlet/>
    </div>
  )
}
