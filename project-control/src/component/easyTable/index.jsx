import { Table } from 'antd';
import React from 'react';

// 封装了但没完全封装的Table
// pageSize可选 默认为10 url必选
export default function MyTable(props) {

    // 每页数据量
    // const [pageSize, setPageSize] = React.useState(props.pageSize ? props.pageSize : 30);
    // 总数据量
    const [total, setTotal] = React.useState(0);
    // 当前页数
    // const [current, setCurrent] = React.useState(1);
    // 数据源
    const [data, setData] = React.useState([]);
    // 列头
    const [title, setTitle] = React.useState([]);
    // 列描述数据对象
    const [columns, setColumns] = React.useState([]);
    //加载中
    const [load, setLoad] = React.useState(false)
    // 请求数据
    const getResourceData = (props) => {
        setLoad(1)
        React.axios('post', 'http://106.13.18.48/monitor/api/resource/brr', setLoad, '', { projectName: React.getCookie('monitorname') }).then(
            res => {
                // setData(res)
                // setTitle(Object.keys(res[0]));
                let data1 = []
                let max = 0;
                res.map(i => {
                    if (i.length > max) {
                        max = i.length
                    }
                })
                for (let i = 0; i < max; i++) {
                    res.map(j => {
                        if (i <= j.length - 1) {
                            data1[i] = { ...data1[i], ...{ [j[i].tagname]: j[i].filename } }
                        }
                    })
                }
                setTitle(['link', 'object', 'img', 'script']);
                setData(data1)
            }
        )
    }
    const getJsData = () => {
        setLoad(1)
        React.axios('post', 'http://106.13.18.48/monitor/api/jsError/urlErr', setLoad, '', { projectName: React.getCookie('monitorname') }
        ).then(
            res => {
                setData(res)
                setTitle(Object.keys(res[0]));

            },
        )
    }
    const getApiData = () => {
        setLoad(1)
        React.axios('post', 'http://106.13.18.48/monitor/api/apiError/methodError', setLoad, '', { projectName: React.getCookie('monitorname') }
        ).then(
            res => {
                setData(res)
                setTitle(Object.keys(res[0]));

            },
        )
    }
    React.useEffect(() => {
        props.type === 'js' ? getJsData() : props.type === 'resource' ? getResourceData() : getApiData()
    }, [props]);

    // const handleChange = (page, pageSize) => {
    //     getData(page, pageSize)
    // }
    // 设置列配置
    React.useEffect(() => {
        // 列描述数据对象
        setColumns(
            title.map((i) => {
                return {
                    // 列头显示文字
                    title: i === 'url' ? '页面' : i === 'count' ? 'js错误数' : i === 'percent' ? 'js错误率(%)' : i === 'uri' ? '接口' : i === 'avgResponseTime' ? '平均响应时间(ms)' : i === 'rate' ? '失败率(%)' :i === 'method' ? '请求方法' : i,
                    // 列数据对应的标识
                    dataIndex: i,
                    // 如果dataIndex不是唯一的 那么key就是必须的 唯一标识
                    key: i,
                    align: 'center',
                }
            }));
    }, [title])


    return (
        <>
            {/* 默认是可以换行显示的 还行 */}
            <Table
                style={{ width: '100%', height: '100%' }}
                // 列的配置项
                columns={columns}
                loading={load ? true : false}
                // 数据数组
                dataSource={data}
                // 分页设置
                pagination={false}
            // pagination={{
            //     defaultPageSize: 10,
            //     total: total,
            //     onChange: handleChange,
            //     showQuickJumper: true,
            // }}
            />
        </>
    );
}