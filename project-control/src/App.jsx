import 'antd/dist/antd.min.css'
import React from 'react';
import { useRoutes } from 'react-router-dom'
import routes from './routes'
import Head from './component/head';
export default function App() {
    const element = useRoutes(routes);
    return (
        <div>
            <Head />
            <div style={{ height: '64px', width: '100vw' }}></div>
            {element}
        </div>
    )
}

