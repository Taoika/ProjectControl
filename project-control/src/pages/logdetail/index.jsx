import { Pagination } from 'antd';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import './index.css'

export default function LogDetail() {

    const [detail, setDetail] = useState([]);
    const [current,setCurrent]=useState(1);
    const [total,setTotal]=useState(1);
    const location = useLocation();
    console.log('location ->',location);
    const uri = location.state?location.state.uri:'';

    function requestDetail(){
        React.axios('post', 'http://39.98.41.126:31100/apiError/detail', '', '', { method: uri, projectName:React.getCookie('monitorname'), currentPage:current })
        .then(res => {
            if (res) {
                console.log(res);
                let data = []
                for (const x in res[0]) {
                    data.push({ key: x, value: res[0][x] });
                }
                setTotal(res[0].pageSize)
                setDetail(data)
            }

        })
    }

    function handleChange(value){
        setCurrent(value);
    }

    useEffect(() => {
        requestDetail();
    }, [current]);
    
    return (
        <div className="logDetail-container">
            <div className="logDetail-title">
                <div className="logDetail-title-left">详情日志</div>
                <Pagination simple defaultCurrent={1} total={total} pageSize={1} showQuickJumper='true' onChange={handleChange}/>
            </div>
            <div className="logDetail-content">
                {
                    detail.map((i) => {
                        return (
                            <p key={i.key}>{i.key}:&nbsp;&nbsp;&nbsp;{i.value}</p>
                        )
                    })

                }
            </div>
        </div>
    )
}
