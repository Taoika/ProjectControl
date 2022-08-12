import { Badge } from 'antd';
import React from 'react'
import './index.css'
import Nav from '../nav/index'

export default function Head() {
    return (
        <Nav 
            dlzc={<Badge count='!'></Badge>} 
            manageproject='项目' 
            manageUser='用户管理' 
            log='日志' 
            monitor='监控' 
            userproject='全部项目'
            projectpublish='发布项目'
            projectpermission='权限查看'
        />
    )
}
