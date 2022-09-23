import React from 'react'
import './index.css'
import OverviewTopMid from '../overviewTopMid';
import OverviewTopLeft from '../overviewTopLeft';
import OverviewTopRight from '../overviewTopRight';
import OverviewBottom1 from '../overviewBottom1'
import OverviewBottom2 from '../overviewBottom2'
import OverviewBottom3 from '../overviewBottom3'
import OverviewBottom4 from '../overviewBottom4'
import OverviewBottom5 from '../overviewBottom5'

import { createContext } from 'react'
export const Context = createContext()
export default function Overview() {
  const [wsdata,setWsdata] = React.useState()
  let [wsarr,setWsarr] = React.useState([])
  let [last,setLast] = React.useState(0)

React.useEffect(()=>{
  var socket; // 判断当前浏览器是否支持webSocket
  if (window.WebSocket && window.WebSocket.flag === undefined) {
      window.WebSocket.flag = 1
      socket = new WebSocket("ws://39.98.41.126:31108/ws?projectName=Jiao") // 相当于channel的read事件，ev 收到服务器回送的消息 
      if (socket) {
          socket.onmessage = function (ev) {
              var rt = document.getElementById("responseText");
              if (rt) {
                  rt.value = rt.value + "\n" + ev.data;
              }
              console.log('有狗在叫: ', JSON.parse(`${ev.data}`));
              setWsdata( JSON.parse(`${ev.data}`))
              if(wsarr.length>=1){
                if(Date.now()-wsarr[wsarr.length-1]>10000){
                  wsarr.splice(0,wsarr.length,Date.now())
                  setWsarr(wsarr)
                }
                else if(wsarr.length>9) {
                  if(Date.now()-wsarr[0]>=10000){
                    wsarr.push(Date.now())
                    wsarr.splice(0,1)
                    setWsarr(wsarr)
                  }
                  else {
                    wsarr=[]
                    setWsarr(wsarr)
                   if(!last||Date.now()-last>10000){
                      console.log('报警啦！');
                      React.axios('post','http://39.98.41.126:31106/mail','','',{
                          subject:"yincansb",
                          text:"yincansb",
                          projectName:"Jiao"
                        })
                    }
                    last=Date.now()
                    setLast(last)
                   
                  }
                }
                else {
                  wsarr.push(Date.now())
                  setWsarr(wsarr)
                }
              }
              else {
                wsarr.push(Date.now())
                setWsarr(wsarr)
              }
              console.log(wsarr,'arr');
             
          } // 相当于连接开启 
          socket.onopen = function (ev) {
              var rt = document.getElementById("responseText");
              if (rt) {
                  rt.value = "连接开启了...";
              }
              console.log('连接开启...');
          } // 相当于连接关闭
          socket.onclose = function (ev) {
              var rt = document.getElementById("responseText");
              if (rt) {
                  rt.value = rt.value + "\n" + "连接关闭了...";
              }
              console.log('连接关闭');
          }
      }
      else {
          console.log('ws连接失败');
      }

  } else if (!window.WebSocket) { alert("当前浏览器不支持webSocket") }
},[])
  return (
    <div className='overview' >
        <strong className='overview-title'>{React.getCookie('monitorname')}</strong>
        <Context.Provider value={{wsdata,wsarr}}>
        <div className='overview-top'>
          <OverviewTopLeft />
          <OverviewTopMid />
          <OverviewTopRight/>    
        </div>
        <div className='overview-bottom'>
          <OverviewBottom1 />
          <OverviewBottom2/>
          <OverviewBottom3/>
          <OverviewBottom4/>
          <OverviewBottom5/>
        </div>
      </Context.Provider>
    </div>
  )
}
