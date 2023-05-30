
import { Location, ProfileCircle } from 'iconsax-react';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Button from '../../components/Button';
import Card from '../../components/Card';
import Carousel from '../../components/Carousel';

import Logo from '../../components/Logo';
import { CardData } from '../../data/CardData';
import { HistoryData } from '../../data/HistoryData';

import { VillageData } from '../../data/VillageData';

import Comment from './Comment/Comment';
import { Archive, Layer, Airplane } from 'iconsax-react';

import Gallery from './Gallery/Gallery';
import SliderImage from './Gallery/SliderImage';

import { useDispatch, useSelector } from 'react-redux';
import { getLandmarkById } from '../../api/LandMarkAPI';
import { serverPublic } from '../../utils';
import { Popover } from 'antd';
import { logOut } from '../../actions/AuthAction';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

const DetailLandMark = ({ position = "Long An" }) => {
    let [zoom, setZoom] = useState('false');
    const [tabActive, setTabActive] = useState(1)
    const { id } = useParams()
    const dispatch = useDispatch()
    const [detail, setDetail] = useState()
    const user = useSelector((state) => state.authReducer.authData)
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

    useEffect(() => {
        const fetchDetail = async () => {
            const result = await getLandmarkById(id)
            setDetail(result.data)
        }
        if (id) {
            fetchDetail()
        }
    }, [id])

    if (!detail) {
        return 'Không có bài chi tiết này'
    }
    const imageBanner = `${serverPublic}landmarks/${detail?.images[0]}`

    if (detail)
        return (
            // container
            <>
                <div className='banner-home' style={{
                    backgroundImage: `url("${imageBanner}")`,
                    height: '478px',
                    width: '100%',
                    backgroundSize: '100%',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    position: 'relative',
                    zIndex: 0
                }}>
                    <div
                        className="overlay"
                        style={{
                            backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust the opacity by changing the last value (0.5 in this case)
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            zIndex: -2
                        }}
                    ></div>
                    <Header isBorder={false} colorLogo='white' textColor='white' />
                    <div className='mx-auto text-[#FAFBFC] my-[100px] text-[25px] md:my-[115px] md:w-[780px] md:text-[57px] leading-[64px] font-semibold text-center'>
                        {detail?.name ?? ''}
                    </div>
                </div>
                <div className={`flex flex-col items-center justify-center relative`}>
                    {
                        zoom == 'false' ?
                            <>
                                <div className="flex max-sm:flex-col-reverse justify-between gap-9 md:gap-14  w-[90%] mt-14">
                                    {/* Main */}
                                    <div className="md:w-[75%]">
                                        <div className='text-2xl font-semibold mb-2'>1. Tổng quan</div>
                                        <div className='style_images_detail' dangerouslySetInnerHTML={{ __html: detail?.overview }}>

                                        </div >
                                        <div className='mt-4 text-2xl font-semibold mb-2'>2. Những điều thú vị</div>
                                        <div className='style_images_detail' dangerouslySetInnerHTML={{ __html: detail?.funfact }}>

                                        </div>
                                        <div>
                                            <div className="text-[28px] leading-[36px] text-[#141716] font-semibold mb-6">  Đánh giá </div>
                                            <Comment pos={position} landmarkId={id}>
                                            </Comment>
                                        </div>
                                    </div>
                                    {/* Sidebar */}
                                    <div className="md:w-[30%] max-w-[361px]">
                                        <Button iconPosition={"left"} type={"primary"} onClick={() => { }} iconLeft={<Archive variant='Bold'></Archive>} style={{
                                            borderRadius: "8px",
                                            width: "100%",
                                            display: "flex",
                                            justifyContet: "center",
                                            alignItem: "center",
                                            paddingTop: "12px",
                                            paddingBottom: "12px"
                                        }} > Lưu địa điểm </Button>

                                        <div className="mt-6 p-4 shadow-md rounded-md">
                                            <div className="text-[20px] leading-[28px] text-[#141716] font-semibold mb-4">Thông tin chung </div>
                                            <div className="flex flex-col gap-2">
                                                <div className="flex gap-4">
                                                    <Layer size="20" color="#D02F3D" variant="Bold" />
                                                    <p>Loại hình: {detail && detail.type === 1 ? 'Danh lam thắng cảnh' : '-'}</p>
                                                </div>
                                                <div className="flex gap-4">
                                                    <Airplane size="20" color="#D02F3D" variant="Bold" />
                                                    <p>Giờ mở cửa: {detail ? detail.open_time : '-'}</p>
                                                </div>
                                                <div className="flex gap-4">
                                                    <Location size="20" color="#D02F3D" variant="Bold" />
                                                    <p>Phí vào cổng:  {detail ? detail.entrance_fee : '-'} </p>
                                                </div>
                                                <div className="flex gap-4">
                                                    <Location size="20" color="#D02F3D" variant="Bold" />
                                                    <p>Liên hệ:  {detail ? detail.phone : '-'}</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mt-6 p-4 shadow-md rounded-md">
                                            <div className="text-[20px] leading-[28px] text-[#141716] font-semibold mb-4">Các hình ảnh liên quan </div>
                                            <Gallery onZoom={() => {
                                                console.log(zoom)
                                                setZoom('true')
                                            }} imagesData={detail?.images ?? []}></Gallery>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-[90%]">
                                    <div className='mt-[56px] mb-[120px] bg-white py-14'>
                                        <h1 className='text-[28px] leading-[36px] text-[#141716] font-semibold'>Địa điểm được quan tâm</h1>
                                        <div className='w-fit flex mt-[24px] mb-6' style={{ borderBottom: '1.5px solid #C2C2C2' }}>
                                            <div onClick={(e) => handleChangeTab(e)} className={`cursor-pointer pb-2 mb-[-1px] text-xl ${tabActive === 1 ? 'border-b-[1.5px] border-b-p1 font-semibold ' : 'text-third'}`} >Danh lam thắng cảnh</div>
                                            <div onClick={(e) => handleChangeTab(e)} className={`mx-9 cursor-pointer pb-2 mb-[-1px] text-xl ${tabActive === 2 ? 'border-b-[1.5px] border-b-p1 font-semibold ' : 'text-third'}`}>Di tích lịch sử</div>
                                            <div onClick={(e) => handleChangeTab(e)} className={`cursor-pointer pb-2 mb-[-1px] text-xl ${tabActive === 3 ? 'border-b-[1.5px] border-b-p1 font-semibold ' : 'text-third'}`}>Làng nghề truyến thống</div>
                                        </div>
                                        <div className='overflow-hidden'>
                                            <Carousel
                                                margin={32}
                                                datas={[]}

                                                items={5}
                                                renderItem={item => {
                                                    return (
                                                        <Card data={item} widthImage={300} heightImage={257} />
                                                    );
                                                }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </>
                            : <SliderImage imagesData={detail?.images ?? []} onChangeZoom={() => setZoom('false')}></SliderImage>
                    }
                </div>
                <Footer />
            </>
        );
};

export default DetailLandMark;