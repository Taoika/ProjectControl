import { Navigate} from 'react-router-dom'
import Dlzc from '../pages/logandreg'
import Namel from '../component/namel'
import Register from '../component/register'
import Adminl from '../component/adminl'
import ManageUser from '../pages/manageUser'
import ManageProject from '../pages/manageproject'
import ProjectMonitoring from '../component/projectmonitoring'
import ProjectAduit from '../component/projectaduit'
import UserProject from '../pages/userproject'
 
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
    // 管理员项目相关
    {
        path:'manageproject/*',
        element:<ManageProject/>,
        children:[
            {
                path: 'projectmonitoring',
                element: <ProjectMonitoring/>
            },
            {
                path: 'projectaduit',
                element: <ProjectAduit/>
            },
            {
                path: '',
                element: <Navigate to='projectmonitoring' />
            }
        ]
    },
    // 用户全部项目
    {
        path: '/userproject',
        element: <UserProject />,
    }
 ]
 export default routes 