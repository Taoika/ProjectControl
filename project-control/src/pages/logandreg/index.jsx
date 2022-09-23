import React from 'react'
import img from '../../assets/images/chahua.png'
import './index.css'
import { NavLink, Outlet, Link } from 'react-router-dom'
// import video from '../../../src/assets/images/black.mp4'

export default function Dlzc() {
    return (
        <div>
            {/* <video style={{ width: '35vw', WebkitFilter: 'brightness(20)', position: 'absolute', zIndex: '999', mixBlendMode: 'screen' }} src={video} muted autoplay="autoplay" loop="loop"></video> */}
            <img className='dlzc-leftImg' src={img} alt="" />
            <div className='dlzc-box'>
                <NavLink className='dlzc-nameLogin' to='namel'>用户名登录</NavLink>
                <Link className='dlzc-registerBtn' to='register'>register now!</Link>
                <NavLink className='dlzc-mailLoign' to='adminl'>管理员登录</NavLink>
                <div className='dlzc-line'></div>
                <div className='dlzc-nameMain'></div>
            </div>
            <Outlet />
        </div>
    )
}
