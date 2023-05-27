import { Collapse, Popover, Select, Timeline, Tooltip } from 'antd';
import { Location, Star1 } from 'iconsax-react';
import React, { useEffect, useState } from 'react';
import { createSearchParams, useLocation, useNavigate } from 'react-router-dom';
import { getProvince } from '../../api/ProvinceAPI';
import qs from 'qs';
import EllipseActiveIcon from '../../components/Icons/Ellipse';

import SaveIcon from '../../components/Icons/SaveIcon';
import { getLandMarks, getTrip } from '../../api/TripAPI';
import useQueryConfig from '../../hooks/useQueryConfig';
import QueryString from 'qs';
import { serverPublic } from '../../utils';
const { Panel } = Collapse
const Trip = () => {
    const [tabActive, setTabActive] = useState(1)
    const [listProvinces, setListProvinces] = useState([])
    const [provinceFrom, setProvinceFrom] = useState()
    const [provinceTo, setProvinceTo] = useState()
    const [cityRoute, setCityRoute] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [landMarks, setLandMarks] = useState([])

    const navigate = useNavigate()





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
    const queryConfig = useQueryConfig()


    const handleChangeSelectFrom = (e) => {
        const selectedFrom = listProvinces.find(item => item.value === e).label;
        setProvinceFrom(selectedFrom)
        if (provinceTo) {
            navigate({
                pathname: '/trip',
                search: createSearchParams({
                    ...queryConfig,
                    start: selectedFrom,
                    end: provinceTo
                }).toString()
            })
        }

    }
    const handleChangeSelectTo = (e) => {
        const selectedTo = listProvinces.find(item => item.value === e).label;
        setProvinceTo(selectedTo)
        if (provinceFrom) {
            navigate({
                pathname: '/trip',
                search: createSearchParams({
                    ...queryConfig,
                    start: provinceFrom,
                    end: selectedTo
                }).toString()
            })
        }

    }




    useEffect(() => {
        const fetchProvince = async () => {
            const data = await getProvince()

            const provinceItems = data.data.map(province => ({
                value: province._id,
                label: province.name
            }));
            setListProvinces(provinceItems);
        }
        fetchProvince()
    }, [])


    useEffect(() => {


        if (queryConfig.start && queryConfig.end) {
            try {
                setIsLoading(true)
                setProvinceFrom(queryConfig.start)
                setProvinceTo(queryConfig.end)
                const fetchTrip = async () => {
                    const result = await getTrip({
                        start: queryConfig.start, end: queryConfig.end
                    })
                    console.log(result.length)
                    if (!result) {
                        setIsLoading(true)
                    } else {
                        setIsLoading(false)
                        setCityRoute(result.data.cityRoute)
                    }

                }
                fetchTrip()

            } catch (error) {
                console.log(error)
            }
        }
    }, [queryConfig.start, queryConfig.end])

console.log(cityRoute);
    const provinceArr = [].concat(...cityRoute).map((obj) => obj.label)
    const provinceObjArr = [].concat(...cityRoute).map((obj) => {
    
        return {value: obj._id, label: obj.label}})
    useEffect(() => {

        try {
            const fetchData = async () => {
                const result = await getLandMarks({ provinceArr, typeId: tabActive })
                setLandMarks(result.data)
     
            }
            fetchData()
        } catch (error) {
            console.log(error)
        }
    }, [cityRoute, tabActive])

    return (
        <div className='mt-[48px] mb-[56px] w-full ' style={{ backgroundImage: 'url(/images/map.png)' }}>
            <div className='flex gap-x-[92px]'>
                <div className=' w-[680px] h-full'>

                    <div className='flex flex-row gap-x-2 '>
                        {cityRoute?.length > 0 ? cityRoute?.map((a, i) => {
                            return <div key={i} className='w-full  flex flex-col mt-5  items-center'>
                                {

                                    <div >
                                        <div className='px-1 cursor-pointer py-1 flex flex-col items-center rounded min-w-[170px]' style={{ border: '1px solid rgb(44, 56, 130)' }}>
                                            <div className='flex items-center'>
                                                <span className='mr-2'><Location /></span>
                                                <p className='font-bold text-[#2C3882] text-sm '>  {a[0].label}</p>
                                            </div>
                                        </div>
                                        {a.map((b, x) => {


                                            if (x > 0 && x < a.length - 1)

                                                return <div key={x} className=' flex w-[100%]   justify-center items-center'>
                                                    <div className='w-full flex justify-between items-center'>
                                                        <div className='flex flex-col lg:flex-row  justify-end items-stretch lg:items-center flex-1'>
                                                            <div className='px-0 lg:px-2 py-0 lg:py-4 max-w-xl'>

                                                            </div>
                                                        </div>
                                                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: 'max-content' }}>
                                                            <div className={`w-0.5	 bg-[#2C3882] ${x > 0 ? 'h-[48px]' : 'h-[11px]'} self-center`}></div>
                                                            {x > 0 && <div className='bg-[#2C3882] cursor-pointer  p-2  mx-5 text-white flex rounded-full justify-center text-center items-center w-[12px] h-[12px]'>

                                                            </div>}
                                                            <div className={` w-0.5 bg-[#2C3882] self-center ${x > 0 ? 'h-[48px]' : 'h-[21px]'}`}></div>
                                                        </div>
                                                        <div className='flex flex-col lg:flex-row  justify-start items-stretch lg:items-center flex-1'>
                                                            <div className='flex items-center'>
                                                                {b.label}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                        })}

                                        <div className=' flex w-[100%]   justify-center items-center'>
                                            <div className='cursor-pointer px-4 py-1 flex flex-col items-center rounded' style={{ border: '1px solid rgb(44, 56, 130)' }}>
                                                <div className='flex items-center'>
                                                    <span className='mr-2'><Location /></span>
                                                    <p className='font-bold text-[#2C3882] text-sm '>  {a[a.length - 1].label}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                }

                            </div>
                        }) : <div className='flex mt-16 mx-auto'>
                            <h1 className='text-xl'>{isLoading ? 'Đang tìm kiếm lộ trình. Bạn chờ chút nhé ...' : 'Chọn lộ trình của bạn để xem các tỉnh đi qua theo cung đường ngắn nhất'}</h1>
                        </div>}


                    </div>

                </div>
                <div className='flex flex-col gap-y-6 w-[620px] h-full'>

                    <div className='flex flex-col gap-y-[10px] w-full'>
                        <h2 className='text-[#141716] text-[28px] leading-[36px] font-semibold'>Lộ trình của bạn</h2>
                        <div className='flex items-center gap-x-4 w-full'>
                            <Select value={provinceFrom ? listProvinces.find(item => item.label === provinceFrom)?.value : undefined} onChange={handleChangeSelectFrom} defaultValue={provinceFrom ? listProvinces.find(item => item.label === provinceFrom)?.value : undefined} options={listProvinces} className='w-full' placeholder='Chọn điểm đi' />
                            <Select value={provinceTo ? listProvinces.find(item => item.label === provinceTo)?.value : undefined} onChange={handleChangeSelectTo} defaultValue={provinceTo ? listProvinces.find(item => item.label === provinceTo)?.value : undefined} options={listProvinces} className='w-full' placeholder='Chọn điểm đến' /> </div>
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
                    {provinceArr.length > 0 ? <div className='h-[500px] overflow-auto overflow-y-auto overflow-x-hidden'>

                        <Collapse
                            defaultActiveKey={['1']}

                            expandIconPosition="end"
                            className="trip-collapse">

                            {provinceObjArr.map((item, index) => {

                                return <Panel
                                    header={<div className=" text-base font-semibold">{item.label}(4)</div>}
                                    key={(index + 1).toString()}>
                                    {landMarks && landMarks.length > 0 && landMarks.map((landmark, id) => {
                                        if (landmark.province_id === item.value) {
                                            return <div onClick={() => navigate(`/detail/landmark/${landmark._id}`)} key={id} className='w-full relative h-[168px] mb-2'>
                                                <div className='w-full rounded-lg'>
                                                    <img className='w-full h-[168px] rounded-lg object-cover' src={`${serverPublic}landmarks/${landmark?.images[0]}`} />
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
                                                    <h3 className='text-xl font-semibold text-[#FAFBFC]'>{landmark?.name}</h3>
                                                    <span className='text-[#F1F1F1] text-sm font-normal'>{landmark?.address}</span>
                                                </div>
                                            </div>
                                        }
                                    })}
                                </Panel>
                            })}
                        </Collapse></div> : <span>Vui lòng chọn lộ trình để xem địa điểm</span>}

                </div>
            </div>
        </div>
    );
};

export default Trip;