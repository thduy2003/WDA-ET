import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import Logo from '../components/Logo';

const AdminLayout = () => {
    return (
        <div className='px-[20px]'>
            <div className='grid grid-cols-12'>
                <div className='col-span-3 h-full'>
                    <div className='sticky top-0 flex flex-col'>
                        <div className='my-[24px] flex items-center justify-center'>
                            <Logo></Logo>
                        </div>
                        <div className='px-4 flex flex-col gap-y-5'>
                            <NavLink to='/admin/create-landmark' className={({ isActive }) =>
                                isActive ? 'bg-[#D02F3D] font-bold p-3 rounded-lg text-[#FAFBFC]' : 'text-base font-medium  p-3'
                            }>
                                Đăng thông tin địa danh
                            </NavLink>
                            <NavLink to='/admin/province' className={({ isActive }) =>
                                isActive ? 'bg-[#D02F3D] font-bold p-3 rounded-lg text-[#FAFBFC]' : 'text-base font-medium p-3'
                            }>
                                Quản lý địa danh
                            </NavLink>
                            <NavLink to='/admin/create-province' className={({ isActive }) =>
                                isActive ? 'bg-[#D02F3D] font-bold p-3 rounded-lg text-[#FAFBFC]' : 'text-base font-medium  p-3'
                            }>
                                Đăng thông tin tỉnh
                            </NavLink>
                        </div>
                    </div>
                </div>
                <div className='col-span-9'><Outlet /></div>
            </div>
        </div>
    );
};

export default AdminLayout;