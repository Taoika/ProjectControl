import { Select } from 'antd';
import React from 'react';
const { Option } = Select;


export default function Index(props) {
    
    const handleChange = (v) => {
        if (props.func) {
            props.func(v)
        }
    }

    return (
        <Select
            defaultValue={1}
            style={{
                width: 120,
                fontSize: props && props.min ? '14px' : '16px'
            }}
            onChange={handleChange}
        >{props && props.option ? props.option.map((v, i) => {
            return (<Option key={i + 1} value={i + 1}>&nbsp;{v}</Option>)
        }) : ''}
        </Select>
    )
}


