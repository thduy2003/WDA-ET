import { Call, Location } from 'iconsax-react';
import React from 'react';
import Logo from '../Logo';

const Footer = () => {
    return (
        <div className='bg-white ' style={{ borderTop: '1px solid #888888' }}>
            <div className='px-[92px] py-[72px]'>

                <div>
                    <Logo />
                    <span className='text-[#141716] text-base leading-[19px] font-light'>Việt Nam trong tầm tay</span>
                </div>
                <div className='flex justify-between mt-6'>
                    <div className='flex flex-col max-w-[371px]'>
                        <p className='text-base font-normal'>Sứ mạng của chúng tôi là mang những nét đẹp văn hóa Việt Nam vào trong các hành trình du lịch cho con người Việt Nam.</p>
                        <div className='flex items-center mt-[32px]'>
                            <Call size="20" color="#D02F3D" variant="Bold" />
                            <p className='text-[#141716] ml-[13px] text-base'>Liên hệ: 0987654321</p>
                        </div>
                        <div className='flex items-center mt-[16px] '>
                            <Location size="20" color="#D02F3D" variant="Bold" />
                            <p className='text-[#141716] ml-[13px] text-base'>Địa điểm: 123 Đường Lê Lợi, Quận 1, Thành phố Hồ Chí Minh, Việt Nam.</p>
                        </div>

                    </div>
                    <div className='flex flex-col w-fit'>
                        <p className='text-[#141716] text-base font-medium '>Dịch vụ</p>
                        <div className='text-[#888888] flex flex-col mt-6 text-base font-normal gap-y-4'>
                            <p>Hướng dẫn sử dụng</p>
                            <p>FAQs</p>
                            <p>Điều khoản sử dụng</p>
                            <p>Chính sách bảo mật</p>
                        </div>
                    </div>
                    <div className='flex flex-col w-fit'>
                        <p className='text-[#141716] text-base font-medium '>Về chúng tôi</p>
                        <div className='text-[#888888] flex flex-col mt-6 text-base font-normal gap-y-4'>
                            <p>Sứ mạng</p>
                            <p>Tầm nhìn</p>

                        </div>
                    </div>
                    <div className='flex flex-col w-fit'>
                        <p className='text-[#141716] text-base font-medium '>Kết nối với chúng tôi</p>
                        <div className='text-[#888888] flex flex-col mt-6 text-base font-normal gap-y-4'>
                            <p>Hướng dẫn sử dụng</p>
                            <p>FAQs</p>

                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Footer;