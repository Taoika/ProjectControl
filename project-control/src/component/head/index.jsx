import React from 'react'
import './index.css'
import Nav from '../nav/index'

export default function Head() {
    //-1未登录   //0普通用户  //1管理员
    const [type, setType] = React.useState(-1)
    React.useEffect(() => {
        if (React.getCookie('user')) {
            if (React.getCookie('user') === 'root') {
                setType(1)
            }
            else {
                setType(0)
            }
        }
        else {
            setType(-1)
        }
    }, [React.getCookie('user')])
    return (
        <Nav
            message={type === 0 ? '1' : ''}
            dlzc={type === -1 ? '登录注册' : ''}
            manageproject={type === 1 ? '项目管理' : ''}
            manageUser={type === 1 ? '用户管理' : ''}
            logpack={type === 1 ? '日志' : ''}
            userproject={type === 0 ? '全部项目' : ''}
            projectpublish={type === 0 ? '发布项目' : ''}
            projectpermission={type === 0 ? '权限查看' : ''}
            out={type !== -1 ? '退出登录' : ''}
            username={React.getCookie('user')?React.getCookie('username'):''}
        />
    )
}
