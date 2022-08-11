import { Navigate} from 'react-router-dom'
 import Dlzc from '../pages/logandreg'
 import Namel from '../component/namel'
 import Register from '../component/register'
 import Adminl from '../component/adminl'
 import ManageUser from '../pages/manageUser'
 import ManageProject from '../pages/manageproject'
 import ProjectMonitoring from '../component/projectmonitoring'
 
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
    
    {
        path:'manageproject',
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
 ]
 export default routes 