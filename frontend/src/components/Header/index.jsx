import { ProfileCircle } from 'iconsax-react';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from '../Button';
import Logo from '../Logo';

const Header = () => {
    const user = useSelector((state) => state.authReducer.authData)
    return (
        <div className='flex items-center justify-between px-[92px] py-[16px]' style={{ borderBottom: '1px solid #EAEAEA' }}>
            <Logo />
            <div className='flex text-[#141716] text-base font-medium flex-row gap-x-9 items-center'>
                <Link to='/'>Trang chủ</Link>
                <Link to='/trip'>Đề xuất lộ trình</Link>
                <Link to='/'>Diễn đàn</Link>
                {user ? <div className='flex items-center'>
                    <ProfileCircle size="20" color="#FAFBFC" variant="Bold" />
                    <div className='ml-1'>{user.user.name}</div>
                </div> : <Link to='/auth'><Button size='small' type='outline-white' iconPosition='left' iconLeft={<ProfileCircle size="20" color="#D02F3D" variant="Bold" />}>Đăng kí</Button></Link>}
            </div>
        </div>
    );
};

export default Header;