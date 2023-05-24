import React from 'react'
import { Navigate, Outlet, useRoutes } from 'react-router-dom';
import AdminLayout from './layout/AdminLayout';
import MainLayout from './layout/MainLayout';
import Detail from './pages/Detail';
import EditLandMark from './pages/EditLandMark';
import EditProvince from './pages/EditProvince';
import Forum from './pages/Forum';
import Home from './pages/Home';
import ManageLandMark from './pages/ManageLandMark';
import NotFound from './pages/NotFound';

import Trip from './pages/Trip';

const useRouteElement = () => {
    // function ProtectedRoute() {
    //     const isLogged = window.localStorage.getItem('loggedIn');
    //     if (!isLogged) {
    //         alert('Bạn phải đăng nhập trước khi vào trang chi tiết')
    //     }
    //     return isLogged ? <Outlet /> : <Navigate to='/login' />
    // }
    // function ProtectedResetRoute() {
    //     const isReset = window.localStorage.getItem('resetPass')
    //     if (!isReset) {
    //         alert('Bạn phải vào quên mật khẩu trước khi vào reset ')
    //     }
    //     return isReset ? <Outlet /> : <Navigate to='/' />
    // }
    const routeElements = useRoutes([
        {
            path: '/',
            index: true,
            element: <Home />
        },
        {
            path: '/trip',
            element: <MainLayout>
                <Trip />
            </MainLayout>,

        },
        {
            path: '/forum',
            element: <MainLayout>
                <Forum />
            </MainLayout>,

        },
        {
            path: 'detail',
            element: <Detail />
        },

        {
            path: 'admin',
            element: <AdminLayout />,
            children: [
                {
                    path: '/admin/create-landmark',
                    element: <EditLandMark />
                },
                {
                    path: '/admin/landmark',
                    element: <ManageLandMark />
                },
                {
                    path: '/admin/create-province',
                    element: <EditProvince />
                }
            ]
        },
        {
            path: '*',
            element: <NotFound />
        }
        // }, {
        //     path: '/login',
        //     element: <LoginPage /> }
        // }, {
        //     path: '/register',
        //     element: <RegisterPage />
        // },
        // {
        //     path: '/forgot-password',
        //     element: <ForgotPassword />
        // },
        // {
        //     path: '',
        //     element: <ProtectedResetRoute />,
        //     children: [
        //         {
        //             path: 'reset-password',
        //             element: <ResetPassword />
        //         }
        //     ]
        // },

        // {
        //     path: '',
        //     element: <ProtectedRoute />,
        //     children: [
        //         {
        //             path: '/users',
        //             element: <UserDetail />
        //         }
        //     ]
        // }
    ])
    return routeElements
}
export default useRouteElement