import { Modal, Popover } from 'antd';
import { CloseCircle, HambergerMenu, ProfileCircle } from 'iconsax-react';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logOut } from '../../actions/AuthAction';
import { serverPublic } from '../../utils';
import Button from '../Button';
import Logo from '../Logo';

const Header = ({ isBorder = true, colorLogo, textColor = 'black' }) => {
    const user = useSelector((state) => state.authReducer.authData)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [navBarOpen, setNavBarOpen] = useState(false);
    const showNavbarModal = () => {
        setNavBarOpen(true);
    };

    const handleNavbarOk = () => {
        setNavBarOpen(false);
    };

    const handleNavbarCancel = () => {
        setNavBarOpen(false);
    };

    return (
        <div className='flex items-center justify-between md:px-[92px] p-3 md:py-[16px]' style={isBorder ? { borderBottom: '1px solid #EAEAEA' } : {}}>
            <Link to='/' > <Logo color={colorLogo ? colorLogo : ''} /></Link>
            <div className={`hidden md:flex ${textColor === 'black' ? 'text-[#141716]' : 'text-[#FAFBFC]'}   text-base font-medium flex-row gap-x-9 items-center`}>
                <Link to='/'>Trang chủ</Link>
                <Link to='/trip'>Đề xuất lộ trình</Link>
                <Link to='/forum'>Diễn đàn</Link>
                {user ? <Popover content={<div className='cursor-pointer' onClick={() => {
                    dispatch(logOut())
                    navigate('/auth')


                }}>Đăng xuất</div>} title={null}>
                    <Link to={`/profile/${user.user._id}`} className='flex items-center'>
                        <div className='w-5 h-5 rounded-full'>
                            <img className='w-5 h-5 rounded-full' src={`${serverPublic}profile/${user?.user?.avatar}`} />
                        </div>
                        <div className='ml-1'>{user.user.name}</div>
                    </Link>
                </Popover> : <Link to='/auth'><Button size='small' type='outline-white' iconPosition='left' iconLeft={<ProfileCircle size="20" color="#FAFBFC" variant="Bold" />}>Đăng kí</Button></Link>}
            </div>
            <div className='flex items-center cursor-pointer md:hidden' onClick={showNavbarModal} >
                <HambergerMenu size="32" color={`${textColor === 'black' ? "#000000" : "#FAFBFC"}`} />
            </div>
            <Modal
                className="NavbarModal"
                // title="Tìm kiếm"
                closeIcon
                open={navBarOpen}
                footer={null}
                // onOk={handleOk}
                onCancel={handleNavbarCancel}>
                <div className='p-5 flex flex-col relative gap-y-5'>
                    <div className='cursor-pointer absolute top-0 right-0' onClick={handleNavbarCancel}><CloseCircle size="32" color="#D02F3D" /></div>
                    <Link onClick={handleNavbarCancel} className='bg-[#D02F3D] text-center mt-8 text-white rounded-lg p-2' to='/'>Trang chủ</Link>
                    <Link onClick={handleNavbarCancel} className='bg-[#D02F3D] text-center text-white rounded-lg p-2' to='/trip'>Đề xuất lộ trình</Link>
                    <Link onClick={handleNavbarCancel} className='bg-[#D02F3D] text-center text-white rounded-lg p-2' to='/forum'>Diễn đàn</Link>
                    {user ?
                        <Link to={`/profile/${user.user._id}`} className='flex items-center justify-center'>
                            <div className='w-5 h-5 rounded-full'>
                                <img className='w-5 h-5 rounded-full' src={`${serverPublic}profile/${user?.user?.avatar}`} />
                            </div>
                            <div className='ml-1'>{user.user.name}</div>
                        </Link>
                        : <Link to='/auth'><Button size='small' type='outline-white' iconPosition='left' iconLeft={<ProfileCircle size="20" color="#FAFBFC" variant="Bold" />}>Đăng kí</Button></Link>}
                    {
                        user ? <div onClick={() => {
                            dispatch(logOut())
                            navigate('/auth')


                        }} className='bg-gray-600 text-center text-white rounded-lg p-2' to='/forum'>Đăng xuất</div> : <></>
                    }
                </div>
            </Modal>
        </div>
    );
};

export default Header;