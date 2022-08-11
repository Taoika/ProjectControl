import { Navigate} from 'react-router-dom'
 import Dlzc from '../pages/logandreg'
 import Namel from '../component/namel'
 import Register from '../component/register'
 import Adminl from '../component/adminl'
 import ManageUser from '../pages/manageUser'
 import ManageProject from '../pages/manageproject'
 import ProjectMonitoring from '../component/projectmonitoring'
 import Monitor from '../pages/monitor'
 import Overview from '../component/overview'
const routes = [
    //登录注册
    {
        path: '/dlzc',
        element: <Dlzc />,
        children: [
            {
                path: 'namel',
                element:<Namel/>,
            },
            {
                path: 'adminl',
                element:<Adminl/>
            },
            {
                path: 'register',
                element:<Register/>
            },
            {
                path: '',
                element: <Navigate to='namel' />
            }
        ]
    },
    //用户管理
    {
        path: '/manageUser',
        element: <ManageUser />,
    },
    //项目管理
    {
        path:'/manageproject',
        element:<ManageProject/>,
        children:[
            {
                path: 'projectmonitoring',
                element: <ProjectMonitoring/>
            },
            {
                path: '',
                element: <Navigate to='projectmonitoring' />
            }
        ]
    },
    //监控
    {
        path: '/monitor',
        element: <Monitor />,
        children:[
            {
                path: 'overview',
                element: <Overview />,
            },
            {
                path: 'jsError',
                // element: <JsError />,
            },
            {
                path: 'apiRequest',
                // element: <ApiRequest />,
            },
            {
                path: 'visit',
                // element: <Visit />,
            },
            {
                path: 'resourError',
                // element: <ResourError />,
            },
            {
                path: '',
                element: <Navigate to='overview' />
            }
        ]
    },
    
 ]
 export default routes 