import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate, Outlet, useNavigate, useRoutes } from 'react-router-dom';
import AdminLayout from './layout/AdminLayout';
import MainLayout from './layout/MainLayout';
import Auth from './pages/Auth';
import Detail from './pages/Detail';
import DetailLandMark from './pages/DetailLandMark';
import EditLandMark from './pages/EditLandMark';
import EditProvince from './pages/EditProvince';
import Forum from './pages/Forum';
import Home from './pages/Home';

import ManageProvince from './pages/ManageProvince';
import NotFound from './pages/NotFound';
import Profile from './pages/Profile';

import Trip from './pages/Trip';

const useRouteElement = () => {
    const user = useSelector((state) => state.authReducer.authData)

    const navigate = useNavigate()
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
            element: user ? <MainLayout> <Forum /> </MainLayout> : <Navigate to='../auth' />
        },
        {
            path: '/detail/:id',
            element:
                <Detail />

        },
        {
            path: '/detail/landmark/:id',
            element: <DetailLandMark />
        },
        {
            path: '/profile/:id',
            element: <MainLayout>
                <Profile />
            </MainLayout>
        },
        {
            path: 'auth',
            element: user ? <Navigate to='../' /> : <Auth />
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
                    path: '/admin/province',
                    element: <ManageProvince />
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