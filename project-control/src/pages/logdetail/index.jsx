import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import './index.css'

export default function LogDetail() {

    const [detail, setDetail] = useState([]);
    const location = useLocation();
    const uri = location.state.uri;


    useEffect(() => {
        React.axios('post', 'http://106.13.18.48/monitor/api/apiError/detail', '', '', { method: uri })
            .then(res => {
                if (res) {
                    let data = []
                    for (const x in res) {
                        data.push({ key: x, value: res[x] });
                    }
                    setDetail(data)

                }

            })
    }, []);

    return (
        <div className="logDetail-container">
            <div className="logDetail-title">
                <div className="logDetail-title-left">详情日志</div>
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
