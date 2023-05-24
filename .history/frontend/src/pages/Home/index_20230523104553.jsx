import { Col, Dropdown, Popconfirm, Row, Select } from 'antd';
import { ArrowCircleRight2, Call, Clock, CloseCircle, Location, ProfileCircle, SearchNormal1 } from 'iconsax-react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import Card from '../../components/Card';
import Carousel from '../../components/Carousel';
import { InputGroup } from '../../components/InputGroup';
import Logo from '../../components/Logo';
import { CardData } from '../../data/CardData';
import { HistoryData } from '../../data/HistoryData';
import { LocationData } from '../../data/LocationData';
import { VillageData } from '../../data/VillageData';
import Banner from '../../../public'

const Home = () => {

    const [tabActive, setTabActive] = useState(1)

    const handleChangeTab = (e) => {
        if (e.target.innerText === 'Danh lam thắng cảnh') {
            setTabActive(1)
        }
        if (e.target.innerText === 'Di tích lịch sử') {
            setTabActive(2)
        }
        if (e.target.innerText === 'Làng nghề truyến thống') {
            setTabActive(3)
        }
    }


    return (
        <>
            <div className='banner-home' style={{
                backgroundImage: 'url(/images/banner.png)',
                height: '680px',
                width: '100%',
                backgroundSize: '100%',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}>
                <div className='flex items-center justify-between px-[92px] py-[30.6px]'>
                    <Logo color='white' />
                    <div className='flex text-[#FAFBFC] text-base font-medium flex-row gap-x-9 items-center'>
                        <Link to='/'>Trang chủ</Link>
                        <Link to='/'>Đề xuất lộ trình</Link>
                        <Link to='/'>Diễn đàn</Link>
                        <Link to='/'><Button size='small' type='outline-white' iconPosition='left' iconLeft={<ProfileCircle size="20" color="#FAFBFC" variant="Bold" />}>Đăng kí</Button></Link>
                    </div>
                </div>
                <div className='mx-auto text-[#FAFBFC] my-[115px] w-[780px] text-[57px] leading-[64px] text-center'>
                    Khám phá nét đẹp tiềm ẩn của
                    Việt Nam
                </div>
                <div className='flex justify-center'>
                    <Popconfirm
                        placement="bottom"
                        description={<div>
                            <div className='p-6 bg-white min-w-[811px] '>
                                <div>
                                    <h3 className='mb-4 text-[#141716] text-xl font-semibold'>Lịch sử tìm kiếm</h3>
                                    <div className='flex flex-col gap-y-3'>
                                        <div className='flex justify-between'>
                                            <div className='flex'>
                                                <Clock size="20" color="#FF8A65" variant="Outline" />
                                                <p className='ml-2 text-[#141716] text-base font-medium'>lễ hội ẩm thực ở Hội An</p>
                                            </div>
                                            <div>
                                                <CloseCircle size="20" color="#D02F3D" variant="Bold" />
                                            </div>
                                        </div>
                                        <div className='flex justify-between'>
                                            <div className='flex'>
                                                <Clock size="20" color="#FF8A65" variant="Outline" />
                                                <p className='ml-2 text-[#141716] text-base font-medium'>truyền thống Thanh Hóa</p>
                                            </div>
                                            <div>
                                                <CloseCircle size="20" color="#D02F3D" variant="Bold" />
                                            </div>
                                        </div>
                                        <div className='flex justify-between'>
                                            <div className='flex'>
                                                <Clock size="20" color="#FF8A65" variant="Outline" />
                                                <p className='ml-2 text-[#141716] text-base font-medium'>làng nổi Tân Lập Long An</p>
                                            </div>
                                            <div>
                                                <CloseCircle size="20" color="#D02F3D" variant="Bold" />
                                            </div>
                                        </div>
                                    </div>
                                    <h3 className='mt-9 mb-4 text-[#141716] text-xl font-semibold'>Từ khóa được tìm kiếm nhiều nhất</h3>
                                </div>
                            </div>
                            <div className='pl-6 overflow-hidden'>
                                <Carousel
                                    margin={32}
                                    datas={LocationData}
                                    auto
                                    hiddenButton={true}
                                    items={3}
                                    renderItem={item => {
                                        return (
                                            <img src={item.image} className='w-[197px] h-[102px] select-none pointer-events-none	 ' />
                                        );
                                    }}
                                />
                            </div>
                        </div>}
                        arrow={false}
                        title={false}
                        icon={false}
                        okButtonProps={{
                            style: {
                                display: 'none',
                            },
                        }}
                        cancelButtonProps={{
                            style: {
                                display: 'none',
                            },
                        }}>
                        <>
                            <InputGroup
                                className="md:block w-[811px] hidden text"
                                left={<SearchNormal1 size="16" color="#FAFBFC" variant="Outline" />}
                                placeholder={'Tìm kiếm địa điểm, danh lam thắng cảnh,...'}
                            />
                        </>
                    </Popconfirm>



                </div>
                <div className='mt-6 flex items-center gap-x-4 w-fit mx-auto'>
                    <Select className='select-home ' placeholder='Chọn điểm đi' />
                    <Select className='select-home' placeholder='Chọn điểm đến' />
                    <Button size='big' type='primary' iconPosition='right' iconRight={<ArrowCircleRight2 size="20" color="#FAFBFC" variant="Bold" />}  > Đề xuất lộ trình </Button>
                </div>
            </div>
            <div className='px-[92px] mt-[56px] mb-[120px] bg-white'>
                <h1 className='text-[28px] leading-[36px] text-[#141716] font-semibold'>Địa điểm được quan tâm</h1>
                <div className='w-fit flex mt-[24px] mb-6' style={{ borderBottom: '1.5px solid #C2C2C2' }}>
                    <div onClick={(e) => handleChangeTab(e)} className={`cursor-pointer pb-2 mb-[-1px] text-xl ${tabActive === 1 ? 'border-b-[1.5px] border-b-p1 font-semibold ' : 'text-third'}`} >Danh lam thắng cảnh</div>
                    <div onClick={(e) => handleChangeTab(e)} className={`mx-9 cursor-pointer pb-2 mb-[-1px] text-xl ${tabActive === 2 ? 'border-b-[1.5px] border-b-p1 font-semibold ' : 'text-third'}`}>Di tích lịch sử</div>
                    <div onClick={(e) => handleChangeTab(e)} className={`cursor-pointer pb-2 mb-[-1px] text-xl ${tabActive === 3 ? 'border-b-[1.5px] border-b-p1 font-semibold ' : 'text-third'}`}>Làng nghề truyến thống</div>
                </div>
                <div className='overflow-hidden'>
                    <Carousel
                        margin={32}
                        datas={tabActive === 1 ? CardData : tabActive === 2 ? HistoryData : VillageData}

                        items={5}
                        renderItem={item => {
                            return (
                                <Card data={item} widthImage={300} heightImage={257} />
                            );
                        }}
                    />
                </div>
            </div>
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

        </>
    );
};

export default Home;