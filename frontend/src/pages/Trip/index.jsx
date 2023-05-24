import { Collapse, Select } from 'antd';
import { Location, Star1 } from 'iconsax-react';
import React, { useState } from 'react';

import EllipseActiveIcon from '../../components/Icons/Ellipse';

import SaveIcon from '../../components/Icons/SaveIcon';
const { Panel } = Collapse
const Trip = () => {
    const [tabActive, setTabActive] = useState(1)
    const handleChangeTab = (e) => {
        if (e.target.innerText === 'Danh lam thắng cảnh') {
            setTabActive(1)
        }
        if (e.target.innerText === 'Di tích lịch sử') {
            setTabActive(2)
        }
        if (e.target.innerText === 'Làng nghề truyền thống') {
            setTabActive(3)
        }
    }
    return (
        <div className='mt-[48px] mb-[56px] w-full'>
            <div className='flex gap-x-[92px]'>
                <div className='relative w-[633px] h-[645px]'>
                    <div>
                        <img className='w-[633px] h-[645px]' src="/images/map.png" alt="" />
                    </div>
                    <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                        <img src='/images/line-map.png' />
                        <div className='absolute top-0 -translate-x-[100%] -translate-y-[50%] '><EllipseActiveIcon /></div>
                        <div className='absolute top-[8%] -translate-x-[50%] -translate-y-[50%]'>
                            Thành phố Hồ Chí Minh
                        </div>
                        <div className='absolute top-[100%] right-[10%]'> <Location size="20" color="#D02F3D" variant="Bold" />
                        </div>
                        <div className='absolute top-[100%]   right-[0%] translate-y-[80%]'>
                            Bà rịa vũng tàu
                        </div>
                    </div>

                </div>
                <div className='flex flex-col gap-y-6 w-[620px]'>
                    <div className='flex flex-col gap-y-[10px] w-full'>
                        <h2 className='text-[#141716] text-[28px] leading-[36px] font-semibold'>Lộ trình của bạn</h2>
                        <div className='flex items-center gap-x-4 w-full'>
                            <Select className='w-full' placeholder='Chọn điểm đi' />
                            <Select className='w-full' placeholder='Chọn điểm đến' /> </div>
                    </div>
                    <div className='flex flex-col gap-y-[16px]'>
                        <h2 className='text-[#141716] text-[28px] leading-[36px] font-semibold'>Địa điểm đề xuất</h2>
                        <div className='flex gap-x-3'>
                            <div onClick={(e) => handleChangeTab(e)} style={tabActive === 1 ? { border: '1px solid #D02F3D' } : { border: '1px solid #EAEAEA' }} className={`w-fit py-1 px-3 ${tabActive === 1 ? 'text-[#D02F3D]' : 'text-[#888888]'} text-base font-medium bg-[#FAFBFC] rounded-[4px]`}>
                                Danh lam thắng cảnh
                            </div>
                            <div onClick={(e) => handleChangeTab(e)} style={tabActive === 2 ? { border: '1px solid #D02F3D' } : { border: '1px solid #EAEAEA' }} className={`w-fit py-1 px-3 ${tabActive === 2 ? 'text-[#D02F3D]' : 'text-[#888888]'} text-base font-medium bg-[#FAFBFC] rounded-[4px]`}>
                                Di tích lịch sử
                            </div>
                            <div onClick={(e) => handleChangeTab(e)} style={tabActive === 3 ? { border: '1px solid #D02F3D' } : { border: '1px solid #EAEAEA' }} className={`w-fit py-1 px-3 ${tabActive === 3 ? 'text-[#D02F3D]' : 'text-[#888888]'} text-base font-medium bg-[#FAFBFC] rounded-[4px]`}>
                                Làng nghề truyền thống
                            </div>
                        </div>
                    </div>
                    <div className=''>
                        <Collapse
                            defaultActiveKey={['1']}
                            expandIconPosition="end"
                            className="trip-collapse">
                            <Panel
                                header={
                                    <div className=" text-base font-semibold ">Thành phố Hồ Chí Minh(2)</div>
                                }
                                key="1">
                                <div className='w-full relative h-[168px]'>
                                    <div className='w-full rounded-lg'>
                                        <img className='w-full h-[168px] rounded-lg object-cover' src='https://ik.imagekit.io/tvlk/blog/2023/01/dinh-doc-lap-1.jpg?tr=dpr-2,w-675' />
                                    </div>
                                    <div className='bg-[#141716] w-full h-full absolute top-0 rounded-lg opacity-70 hover:opacity-40 cursor-pointer'>

                                    </div>
                                    <div className="cursor-pointer absolute w-[32px] h-[32px] rounded-[4px] flex items-center justify-center bg-primary top-[3.8%] right-[3.8%]">
                                        <SaveIcon />
                                    </div>
                                    <div className="cursor-pointer absolute py-2 px-3 rounded-[4px] flex items-center justify-center bg-primary top-[3.8%] left-[3.8%]">
                                        <div className='flex items-center'>
                                            <span className='mr-1'>4.5</span>
                                            <Star1 size="16" color="#dce775" variant="Bold" />
                                        </div>
                                    </div>
                                    <div className='flex flex-col absolute bottom-[8px] left-[8px]'>
                                        <h3 className='text-xl font-semibold text-[#FAFBFC]'>Dinh độc lập</h3>
                                        <span className='text-[#F1F1F1] text-sm font-normal'>106 Nguyễn Du, Quận 1, Thành phố Hồ Chí Minh</span>
                                    </div>
                                </div>
                            </Panel>
                            <Panel
                                header={<div className=" text-base font-semibold">Đồng Nai(4)</div>}
                                key="2">

                            </Panel>
                            <Panel
                                header={<div className=" text-base font-semibold">Bà Rịa - Vũng tàu(4)</div>}
                                key="3">

                            </Panel>
                        </Collapse></div>
                </div>
            </div>
        </div>
    );
};

export default Trip;