import { Popover } from 'antd';
import { ProfileCircle } from 'iconsax-react';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logOut } from '../../actions/AuthAction';
import { serverPublic } from '../../utils';
import Button from '../Button';
import Logo from '../Logo';

const Header = () => {
    const user = useSelector((state) => state.authReducer.authData)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    return (
        <div className='flex items-center justify-between px-[92px] py-[16px]' style={{ borderBottom: '1px solid #EAEAEA' }}>
            <Link to='/'> <Logo /></Link>
            <div className='flex text-[#141716] text-base font-medium flex-row gap-x-9 items-center'>
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
        </div>
    );
};

export default Header;