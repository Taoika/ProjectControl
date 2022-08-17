import React, { useState } from 'react'
import { Button, Drawer, Radio, Space, Badge } from 'antd';
import Loading from '../loading'
export default function MyDrawer() {
    const [visible, setVisible] = useState(false);
    const [childrenDrawer, setChildrenDrawer] = useState(false)
    //是否显示加载中
    const [load, setLoad] = React.useState()
    const [data, setData] = React.useState([1, 2, 3, 1, 2, 1, 2, 1, 1, 1,])
    const agreeOrrefuse = (type) => {

    }
    const showDrawer = () => {
        setVisible(true);
        setLoad({ left: '47.2895vw', top: '5.75vw' })
        React.axios('get', 'http://39.98.41.126:31100/message/watch', setLoad).then(
            res => {
                console.log(res, '消息');
            },
        )
    };

    const onClose = () => {
        setVisible(false);
    };
    const showChildrenDrawer = () => {
        setChildrenDrawer(true);
    };

    const onChildrenDrawerClose = () => {
        setChildrenDrawer(false);
    };
    return (
        <>
            {load ? <Loading {...load} /> : ''}
            <Badge count='!' onClick={showDrawer}></Badge>
            <Drawer title="消息列表" placement="right" onClose={onClose} visible={visible}>
                {data.map(i => {
                    return (<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', borderBottom: '1px solid rgba(0,0,0,.1)', }}>
                        <div style={{ display: 'flex', height: '100%', width: '60%', }}> 一个项目啊啊啊啊啊啊啊啊啊爱爱爱爱啊啊啊啊啊啊啊aaaaaaaaaa&nbsp;</div><i style={{ width: '100px', }}>请求删除</i>
                        <div style={{ display: 'flex' }}><i onClick={() => agreeOrrefuse()} style={{ width: '30px', color: 'rgb(93, 177, 255)', cursor: 'pointer' }}>同意</i>
                            &nbsp;&nbsp;&nbsp;   <i onClick={() => agreeOrrefuse()} style={{ width: '30px', color: 'rgb(93, 177, 255)', cursor: 'pointer' }}>拒绝</i></div>
                    </div>)
                })}

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', borderBottom: '1px solid rgba(0,0,0,.1)', }}>
                    <div style={{ display: 'flex', height: '100%', width: '60%', }}><i style={{ color: 'rgb(106, 183, 255)', cursor: 'pointer' }} onClick={showChildrenDrawer} >项目名的adad娃大王adad爱我的阿萨德</i>
                        <Drawer
                            title="项目详情"
                            width={320}
                            closable={false}
                            onClose={onChildrenDrawerClose}
                            visible={childrenDrawer}
                        >
                            <div><strong>项目名称：</strong>&nbsp;项目名称：项目名称：项目名称：项目名称：项目名称</div>
                            <div style={{ marginTop: '10px' }}><strong>项目地址:</strong> &nbsp; <a href="www.baidu.com">www.baidu.com</a></div>
                            <div style={{ marginTop: '10px' }}><strong>项目简介:</strong> &nbsp; 项目简介</div>
                        </Drawer>&nbsp;</div><i style={{ width: '170px', }}>邀请你成为发布者</i>
                    <div style={{ display: 'flex' }}><i onClick={() => agreeOrrefuse()} style={{ width: '30px', color: 'rgb(93, 177, 255)', cursor: 'pointer' }}>同意</i>
                        &nbsp;&nbsp;&nbsp;   <i onClick={() => agreeOrrefuse()} style={{ width: '30px', color: 'rgb(93, 177, 255)', cursor: 'pointer' }}>拒绝</i></div>
                </div>
            </Drawer>
        </>
    );
}
