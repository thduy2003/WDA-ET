import { Col, Dropdown, Popconfirm, Popover, Row, Select } from 'antd';
import { ArrowCircleRight2, Call, Clock, CloseCircle, Location, ProfileCircle, SearchNormal1, Star1 } from 'iconsax-react';
import React, { useEffect, useState } from 'react';
import { createSearchParams, Link, useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import Card from '../../components/Card';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';
import { InputGroup } from '../../components/InputGroup';
import Logo from '../../components/Logo';
import { CardData } from '../../data/CardData';
import { HistoryData } from '../../data/HistoryData';
import { LocationData } from '../../data/LocationData';
import { VillageData } from '../../data/VillageData';
import { useDebounce } from '../../hooks/useDebounce';
import axios from 'axios';
import { getProvince, searchProvince } from '../../api/ProvinceAPI';
import useQueryConfig from '../../hooks/useQueryConfig';
import { useDispatch, useSelector } from 'react-redux';
import { getAllLandMarksByType } from '../../api/LandMarkAPI';
import { logOut } from '../../actions/AuthAction';
import { serverPublic } from '../../utils';
const Home = () => {

    const [tabActive, setTabActive] = useState(1)
    const [search, setSearch] = useState('')
    const [provinces, setProvinces] = useState([]);
    const [dataProvince, setDataProvince] = useState([])
    const [provinceFrom, setProvinceFrom] = useState()
    const [provinceTo, setProvinceTo] = useState()
    const queryConfig = useQueryConfig()
    const [listLandMarks, setListLandMarks] = useState()
    const user = useSelector((state) => state.authReducer.authData)
    const navigate = useNavigate()
    const dispatch = useDispatch()
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
    const onChangeInput = (e) => {
        setSearch(e.target.value)
    }
    const handleChangeSelectFrom = (e) => {
        const selectedFrom = provinces.find(item => item.value === e).label;
        setProvinceFrom(selectedFrom)


    }
    const handleChangeSelectTo = (e) => {
        const selectedTo = provinces.find(item => item.value === e).label;
        setProvinceTo(selectedTo)


    }
    let debounceValue = ''

    debounceValue = useDebounce(search, 700)
    useEffect(() => {
        const fetchSearch = async () => {
            const result = await searchProvince({ search: debounceValue })
            setDataProvince(result.data)
        }
        if (debounceValue) {
            fetchSearch()
        }
    }, [debounceValue])

    useEffect(() => {
        const fetchProvince = async () => {
            const data = await getProvince()

            const provinceItems = data.data.map(province => ({
                value: province._id,
                label: province.name
            }));
            setProvinces(provinceItems);
        }
        fetchProvince()
    }, [])

    useEffect(() => {
        try {
            const fetchData = async () => {
                const result = await getAllLandMarksByType({ type: tabActive })
                setListLandMarks(result.data)
            }
            fetchData()
        } catch (error) {
            console.log(error)
        }
    }, [tabActive])
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
                <div className='flex items-center justify-between px-[92px] py-[16px]'>
                    <Link to='/'> <Logo color='white' /></Link>
                    <div className='flex text-[#FAFBFC] text-base font-medium flex-row gap-x-9 items-center'>
                        <Link to='/'>Trang chủ</Link>
                        <Link to='/trip'>Đề xuất lộ trình</Link>
                        <Link to='/forum'>Diễn đàn</Link>
                        {user ? <Popover content={<div className='cursor-pointer' onClick={() => {
                            dispatch(logOut())
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
                <div className='mx-auto text-[#FAFBFC] my-[115px] w-[780px] text-[57px] leading-[64px] font-semibold text-center'>
                    Khám phá nét đẹp tiềm ẩn của
                    Việt Nam
                </div>
                <div className='flex justify-center'>
                    <Popconfirm
                        placement="bottom"
                        description={<div>
                            {debounceValue.length > 0 ? <div>
                                <div className='p-6 bg-white min-w-[811px] '>
                                    <div>
                                        <h3 className='mb-4 text-[#141716] text-xl font-semibold'>Tỉnh</h3>
                                        <Link to={`/detail/${dataProvince && dataProvince[0]?._id}`} className='relative w-full'>
                                            <img className='w-full h-[102px] object-cover rounded-lg' src={`http://127.0.0.1:6789/public/images/provinces/${dataProvince && dataProvince[0]?.images[0]}`} />
                                            <div className='bg-[#141716] w-full h-full absolute top-0 rounded-lg opacity-50'>

                                            </div>
                                            <h2 className='text-base absolute top-[50%] left-[50%] -translate-x-1/2  -translate-y-1/2 font-medium text-[#FAFBFC]'>{dataProvince && dataProvince[0]?.name}</h2>
                                        </Link>
                                        <h3 className='mb-4 text-[#141716] text-xl font-semibold mt-9'>Địa điểm đề xuất</h3>
                                        <div className='flex flex-col  gap-y-3 mt-4'>
                                            <div className='flex justify-between items-center'>
                                                <div className='flex items-center'>
                                                    <img className='w-[54px] h-[54px] mr-4  rounded-lg' src="/images/tanlap.png" alt="" />
                                                    <div className='flex flex-col'>
                                                        <h3>Làng nổi Tân Lập</h3>
                                                        <span className='text-[#888888] text-sm'>Địa điểm: QL62, Tân Lập, Mộc Hóa, Long An</span>
                                                    </div>
                                                </div>
                                                <div className='flex items-center'>
                                                    <span className='text-sm font-medium mr-2'> 3.5</span>
                                                    <Star1 size="16" color="#DCE775" variant="Bold" />
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div> :

                                <><div className='p-6 bg-white min-w-[811px] '>
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
                                    </div> </>}
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
                                onChange={onChangeInput}
                            />
                        </>
                    </Popconfirm>



                </div>
                <div className='mt-6 flex items-center gap-x-4 w-fit mx-auto'>
                    <Select onChange={handleChangeSelectFrom} options={provinces} className='select-home ' placeholder='Chọn điểm đi'>

                    </Select>
                    <Select onChange={handleChangeSelectTo} options={provinces} className='select-home' placeholder='Chọn điểm đến'>

                    </Select>
                    <Button size='big' type='primary' onClick={() => {
                        if (provinceFrom && provinceTo) {
                            navigate({
                                pathname: '/trip',
                                search: createSearchParams({
                                    ...queryConfig,
                                    start: provinceFrom,
                                    end: provinceTo
                                }).toString()
                            })
                        } else {
                            alert('vui lòng chọn điểm đi và điểm đến')
                        }
                    }} iconPosition='right' iconRight={<ArrowCircleRight2 size="20" color="#FAFBFC" variant="Bold" />}  > Đề xuất lộ trình </Button>
                </div>
            </div>
            <div className='px-[92px] mt-[56px] mb-[120px] bg-white'>
                <h1 className='text-[28px] leading-[36px] text-[#141716] font-semibold'>Địa điểm được quan tâm</h1>
                <div className='w-fit flex mt-[24px] mb-6' style={{ borderBottom: '1.5px solid #C2C2C2' }}>
                    <div onClick={(e) => handleChangeTab(e)} className={`cursor-pointer pb-2 mb-[-1px] text-xl ${tabActive === 1 ? 'border-b-[1.5px] border-b-p1 font-semibold ' : 'text-third'}`} >Danh lam thắng cảnh</div>
                    <div onClick={(e) => handleChangeTab(e)} className={`mx-9 cursor-pointer pb-2 mb-[-1px] text-xl ${tabActive === 2 ? 'border-b-[1.5px] border-b-p1 font-semibold ' : 'text-third'}`}>Di tích lịch sử</div>
                    <div onClick={(e) => handleChangeTab(e)} className={`cursor-pointer pb-2 mb-[-1px] text-xl ${tabActive === 3 ? 'border-b-[1.5px] border-b-p1 font-semibold ' : 'text-third'}`}>Làng nghề truyến thống</div>
                </div>
                {listLandMarks && <div className='overflow-hidden'>
                    <Carousel
                        margin={32}
                        datas={listLandMarks ?? []}

                        items={5}
                        renderItem={item => {
                            return (
                                <Card data={item} widthImage={300} heightImage={257} />
                            );
                        }}
                    />
                </div>}
            </div>
            <Footer />
        </>
    );
};

export default Home;