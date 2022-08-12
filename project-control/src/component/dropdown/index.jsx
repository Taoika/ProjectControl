import { Select } from 'antd';
import React from 'react';
import { ClockCircleOutlined } from '@ant-design/icons';
const { Option } = Select;

const handleChange = (value) => {
    console.log(`selected ${value}`);
};

const App = () => (
    <>

        <Select
            defaultValue='时间范围'
            style={{
                width: 120,
            }}
            onChange={handleChange}
        >
            <Option value="jack"><ClockCircleOutlined />&nbsp;今日</Option>
            <Option value="lucy"><ClockCircleOutlined />&nbsp;今月</Option>
            <Option value="Yiminghe"><ClockCircleOutlined />&nbsp;今年</Option>
        </Select>
    </>
);

export default App;