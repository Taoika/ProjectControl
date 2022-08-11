import { Layout, Menu } from 'antd';
import React from 'react'
import { Link,useNavigate,Outlet } from 'react-router-dom'
import './index.css'
import logo from '../../assets/images/projectcontrol.png'

export default function Nav(props) {

    const navigate=useNavigate();
    const { Header } = Layout;

    // 点击logo
    function handleClick(){
        navigate('userproject');
    }

    // 根据props动态生成items props为对象 键值对分别对应key和展示条目
    const items=[];
    for(const i in props){
        items.push({
            key:i,
            label:<Link to={`/${i}`}>{props[i]}</Link>
        })
    }

    return (
        <div>
            <Header className="head-header" >
                <div className="head-logo" onClick={handleClick}>
                    <img src={logo} alt="项目管控平台" />
                    项目管控平台
                </div>
                <Menu mode="horizontal" defaultSelectedKeys={['2']} items={items} />
            </Header >
            <Outlet/>
        </div >
    )
}
