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
    const getData = (page, pageSize) => {
        React.axios('get', props.url, 200, setLoad, '', data).then(
            res => {
                setData(res)
                setTotal(res.total);
                setTitle(Object.keys(res[0]));
            }
        )
    }
    React.useEffect(() => {
        // getData(1, 10);
    }, []);

    const handleChange = (page, pageSize) => {
        getData(page, pageSize)
    }
    // 设置列配置
    React.useEffect(() => {
        // 列描述数据对象
        setColumns(
            title.map((i) => {
                return {
                    // 列头显示文字
                    title: i,
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
                loading={load}
                // 数据数组
                dataSource={data}
                // 分页设置
                pagination={{
                    defaultPageSize: 10,
                    total: total,
                    onChange: handleChange,
                    showQuickJumper: true,
                }}
            />
        </>
    );
}