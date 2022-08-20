import React,{ useEffect,useState } from 'react'
import { useLocation } from 'react-router-dom'
import './index.css'

export default function LogDetail() {

    const [detail,setDetail]=useState([]);
    const location=useLocation();
    const uri=location.state.uri;

    console.log(uri);

    useEffect(()=>{
        console.log('uri',uri);
        React.axios('post', 'http://39.98.41.126:31100/apiError/detail', '', '',{ method:uri })
          .then(res => {
            if(res){
                console.log(res);
                let data=[]
                for(const x in res){
                    data.push({key:x,value:res[x]});
                }
                setDetail(data)
          
            }

          })
    },[]);
    
  return (
    <div className="logDetail-container">
        <div className="logDetail-title">
            <div className="logDetail-title-left">详情日志</div>
        </div>
        <div className="logDetail-content">
            {
                detail.map((i)=>{
                    return(
                        <p key={i.key}>{i.key}:&nbsp;&nbsp;&nbsp;{i.value}</p>
                    )
                })
           
            }
        </div>
    </div>
  )
}
