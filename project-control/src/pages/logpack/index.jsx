import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Table } from 'antd';
import './index.css'

export default function LogPack() {

  const [load, setLoad] = useState(0);
  const [load1, setLoad1] = React.useState(0)
  const [data, setData] = useState([]);
  const [expandeddata, setExpandeddata] = React.useState({});

  const navigate = useNavigate();

  // 列描述数据对象
  const columns = [
    {
      title: '依赖包',
      dataIndex: 'packageName',
      key: 'packageName',
      align: 'center',
    },
    {
      title: '访问量',
      dataIndex: 'visits',
      key: 'visits',
      align: 'center',
    },
    {
      title: '访问人数',
      dataIndex: 'visits_people',
      key: 'visits_people',
      align: 'center',
    },
    {
      title: '异常数量',
      dataIndex: 'defeatCount',
      key: 'defeatCount',
      align: 'center',
    },
    {
      title: '平均响应时间',
      dataIndex: 'avgResponseTime',
      key: 'avgResponseTime',
      align: 'center',
    },
    {
      title: '成功率',
      dataIndex: 'rate',
      key: 'rate',
      align: 'center',
    },
  ];

  // 请求数据
  const getData = () => {
    setLoad({ left: '47.2895vw', top: '5.75vw' })
    React.axios('get', 'http://106.13.18.48/monitor/api/apiError/serverPackage', setLoad, '')
      .then(res => {
        let data = [];
        res.map(i => {
          data.push({
            key: i.id,
            packageName: i.packageName,
            visits: i.visits,
            visits_people: i.visits_people,
            defeatCount: i.defeatCount,
            avgResponseTime: `${i.avgResponseTime}ms`,
            rate: `${i.rate * 100}%`,
          }
          );
        });
        setData(data);
      })
  }

  // 展开页配置
  const expandedRowRender = (record) => {
    const columns = [
      {
        title: '接口',
        dataIndex: 'uri',
        key: 'uri',
        align: 'center',
      },
      {
        title: '访问量',
        dataIndex: 'visits',
        key: 'visits',
        align: 'center',
      },
      {
        title: '访问人数',
        dataIndex: 'visits_people',
        key: 'visits_people',
        align: 'center',
      },
      {
        title: '异常数量',
        dataIndex: 'defeatCount',
        key: 'defeatCount',
        align: 'center',
      },
      {
        title: '平均响应时间',
        dataIndex: 'avgResponseTime',
        key: 'avgResponseTime',
        align: 'center',
      },
      {
        title: '成功率',
        dataIndex: 'rate',
        key: 'rate',
        align: 'center',
      },
      {
        title: '更多',
        dataIndex: 'action',
        key: 'action',
        align: 'center',
      },
    ];
    return <Table loading={load1 ? true : false} columns={columns} dataSource={expandeddata[record.packageName]} pagination={false} />;
  };

  // 展开页数据
  const getExpandData = (expanded, record) => {
    if (expanded && expandeddata[record.packageName] === undefined) {
      setLoad1({ left: '47.2895vw', top: '5.75vw' });
      React.axios('post', 'http://106.13.18.48/monitor/api/apiError/serverMethod', setLoad1, '', { packageName: record.packageName })
        .then(res => {
          expandeddata[record.packageName] = res.map(i => {
            return ({
              key: i.id,
              uri: i.uri,
              packageName: i.packageName,
              visits: i.visits,
              visits_people: i.visits_people,
              defeatCount: i.defeatCount,
              avgResponseTime: `${i.avgResponseTime}ms`,
              rate: `${i.rate * 100}%`,
              action: <a onClick={() => handleDetail(i)}>详细信息</a>
            })
          });
          setExpandeddata(expandeddata)
        })
    }
  }

  // 详情信息
  function handleDetail(i) {
    navigate('/logdetail', { state: i });
  }

  useEffect(() => {
    getData();
  }, [])

  return (
    <div className="logPack-container">
      <div className="logPack-title">
        <div className="logPack-title-left">日志</div>
      </div>
      <div className="logPack-table">
        <Table
          columns={columns}
          dataSource={data}
          expandable={{
            expandedRowRender: (record) => expandedRowRender(record),
            onExpand: (expanded, record) => { getExpandData(expanded, record) },
          }}
          loading={load ? true : false}
          pagination={false}
          scroll={{
            scrollToFirstRowOnChange: true,
            y: 'calc(100vh - 200px)',
          }}
        />
      </div>
    </div>
  )
}
