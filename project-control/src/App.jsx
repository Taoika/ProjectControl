import 'antd/dist/antd.min.css'
import React from 'react';
import { useRoutes } from 'react-router-dom'
import routes from './routes'
import Head from './component/head';
// import Overview from './component/overview'

export default function App() {
    const element = useRoutes(routes);
    React.useEffect(() => {
    }, [])
    return (
        <div>
            <Head />
            <div style={{ height: '64px', width: '100vw' }}></div>
            {element}
        </div>
    )
}

