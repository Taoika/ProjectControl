import { Layout, Menu } from 'antd';
import React from 'react'
import { Link, useNavigate, Outlet } from 'react-router-dom'
import './index.css'
import MyDrawer from '../drawer';
import logo from '../../assets/images/projectcontrol.png'

export default function Nav(props) {

    const navigate = useNavigate();
    const { Header } = Layout;
    const logout = () => {
        React.axios('get', 'http://39.98.41.126:31100/user/logout')
        navigate('/dlzc')
        document.cookie.split(';').forEach(cookie => document.cookie = cookie.replace(/^ +/, '').replace(/=.*/, `=;expires=${new Date(0).toUTCString()};path=/`));
    }
    // 点击logo
    function handleClick() {
        navigate('userproject');
    }

    // 根据props动态生成items props为对象 键值对分别对应key和展示条目
    const items = [];
    // 获取默认值
    let defaultSelectedKeys = '';
    let k = 1;
    for (const i in props) {
        defaultSelectedKeys = (k++) === 2 ? i : defaultSelectedKeys;
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
        items.push({
            key: i,
            label: <Link to={`/${i}`}>{props[i]}</Link>
        })
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
