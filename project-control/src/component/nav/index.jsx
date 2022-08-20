import { Layout, Menu, } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import React from 'react'
import { Link, useNavigate, Outlet } from 'react-router-dom'
import './index.css'
import MyDrawer from '../drawer';
import logo from '../../assets/images/projectcontrol.png'

export default function Nav(props) {

    const navigate = useNavigate();
    const { Header } = Layout;
    const logout = () => {
        React.axios('get', 'http://106.13.18.48/monitor/api/user/logout')
        navigate('/dlzc')
        document.cookie.split(';').forEach(cookie => document.cookie = cookie.replace(/^ +/, '').replace(/=.*/, `=;expires=${new Date(0).toUTCString()};path=/`));
        if(React.getCookie('user')){
            document.cookie = `user=`;
        }
    }
    // 点击logo
    function handleClick() {
        if(React.getCookie('user')){
            React.getCookie('user')==='root'? navigate('/manageproject'):navigate('userproject')
        }
    }

    // 根据props动态生成items props为对象 键值对分别对应key和展示条目
    const items = [];
    // 获取默认值
    let defaultSelectedKeys = '';
    let k = 1;
    for (const i in props) {
        defaultSelectedKeys = (k++) === 2 ? i : defaultSelectedKeys;
        if (props[i]) {
            if (i === 'out') {
                items.push({
                    key: i,
                    label: <a onClick={logout}>{props[i]}</a>
                })
                continue
            }
            if (i === 'message') {
                items.push({
                    key: i,
                    label: <MyDrawer />
                })
                continue
            }
            if (i === 'username') {
                items.push({
                    key: i,
                    label: <div style={{ cursor: 'default' }}><UserOutlined />&nbsp;&nbsp;{props[i]}</div>
                })
                continue
            }
            items.push({
                key: i,
                label: <Link to={`/${i}`}>{props[i]}</Link>
            })
        }
    }

    return (
        <div className='head'>
            <Header className="head-header" >
                <div style={{ overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }} className="head-logo" onClick={handleClick}>
                    <img src={logo} alt="项目管控平台" />
                    项目管控平台
                </div>
                <Menu style={{ displat: 'flex', justifyContent: 'flex-end', width: '80%' }} mode="horizontal" defaultSelectedKeys={[defaultSelectedKeys]} items={items} />
            </Header >
            <Outlet />
        </div >
    )
}
