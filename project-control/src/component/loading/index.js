import { Spin } from 'antd';
import React from 'react';
import './index.css'

const App = (props) => (
  <Spin 
    tip="Loading..."
    style={{
      position:'absolute',zIndex:'999999999999999999999999!important',left:props.left,top:props.top,
      background:'rgba(0,0,0,0)!important'
      }}>
  </Spin>
);

export default App;