import { DatePicker, Form, Input, Select, TimePicker } from 'antd';
import React, { useEffect, useRef } from 'react';
import InputEditor from '../../components/InputEditor';
import Button from '../../components/Button'
import dayjs from 'dayjs'
import { GeocoderAutocomplete } from '@geoapify/geocoder-autocomplete';
import { postProvince } from '../../api/ProvinceAPI';
import axios from 'axios';
import { getProvince } from '../../api/ProvinceAPI';
import { postLandmark } from '../../api/LandMarkAPI';
const geoapify = "2e8f62d864414a2780fdcbcf30589685";
const EditLandMark = () => {
    const [form] = Form.useForm()
    const [dataInfo, setDataInfo] = React.useState({
        overview: "",
        funfact: ''
    });
    const [dataLocation, setDataLocation] = React.useState()
    const [images, setImages] = React.useState()
    const [provinces, setProvinces] = React.useState([]);
    const fileOnChange = (event) => {

        const files = event.target.files;
        if (files) {
            setImages([...files]);
        } else {
            setImages(null);
            alert("Please select a file.");
        }
    };
    const autocompleteRef = useRef(null)


    useEffect(() => {
        const input = document.getElementsByClassName('geoapify-autocomplete-input')
        if (input.length === 0) {
            let autocompleteInput = new GeocoderAutocomplete(
                autocompleteRef.current,
                `${geoapify}`,
                {
                    bounds: {
                        south: 8.175093,
                        west: 102.144033,
                        north: 23.393395,
                        east: 109.469721,
                    },
                }
            );

            autocompleteInput.on('select', (location) => {
                setDataLocation(location)
                console.log(location)
            });

            autocompleteInput.on('suggestions', (suggestions) => {
                // Xử lý gợi ý tại đây
            });
        }

    }, []);
    useEffect(() => {
        const fetchProvinces = async () => {
            try {
                const dataInfo = await getProvince()
                const data = dataInfo.data;
                const formattedProvinces = data.map(province => ({
                    value: province._id,
                    label: province.name,
                    id: province._id
                }));
                setProvinces(formattedProvinces);
            } catch (error) {
                console.error(error);
            }
        };
        fetchProvinces();
        return () => {
        };
    }, []);
    return (
        <div className='bg-[#f1f1f1] w-full '>
            <Form form={form} layout='vertical' className='px-6 pt-10'>
                <div className='bg-white rounded-lg p-6 w-full' style={{ boxShadow: '0px 2px 8px 2px rgba(0, 0, 0, 0.08)' }}>
                    <h2 className='text-xl font-semibold'>Thông tin chính</h2>
                    <div className='flex w-full gap-x-4'>
                        <Form.Item label='Gợi ý' className='w-full' >
                            <div ref={autocompleteRef} className="autocomplete-container" style={{ position: "relative" }}></div>
                        </Form.Item>
                        <Form.Item className='w-full' label='Tên địa danh' name='name' >
                            <Input placeholder='Tên địa danh'></Input>
                        </Form.Item>
                        <Form.Item className='w-full' label="Loại hình" name='type'>
                            <Select placeholder='Chọn loại địa danh' className='select-admin' options={[
                                { value: 1, label: 'Danh lam thắng cảnh' },
                                { value: 2, label: 'Di tích lịch sử' },
                                { value: 3, label: 'Làng nghề truyền thống' },

                            ]} />
                        </Form.Item>
                        <Form.Item className='w-full' label="Tỉnh thành" name='province'>
                            <Select placeholder='Chọn tỉnh thành' className='select-admin'>
                            {provinces.map(province => (
                            <Option key={province.value} value={province.value}>
                                {province.label}
                            </Option>
                        ))}
                            </Select>
                        </Form.Item>
                    </div>
                    <div className='flex w-full gap-x-4 justify-between'>
                        <div>
                            {dataLocation?.properties?.address_line2}
                        </div>
                        <div>
                            {dataLocation?.properties?.lat && `https://www.google.com/maps/search/${dataLocation?.properties?.lat},${dataLocation?.properties?.lon}`}
                        </div>
                    </div>
                    <div className='flex w-full gap-x-4'>

                        <Form.Item className='w-full' label="Địa chỉ" name='address'>

                            <Input placeholder="Nhập địa chỉ" />
                        </Form.Item>

                        <Form.Item className='w-full' label="Google Map" name='map'>
                            <Input placeholder="Nhập link" />
                        </Form.Item>
                    </div>
                    <div className='flex w-full gap-x-4'>

                        <div className='flex w-full items-center gap-x-4'>
                            <Form.Item className='w-full' label="Giờ mở cửa" name='open_time'> 
                                <Input placeholder="Nhập giờ mở cửa" /> 
                            </Form.Item>

                            <span>Đến</span>
                            <Form.Item className='w-full' label="Giờ đóng cửa" name='close_time'> 
                                <Input placeholder="Nhập đóng cửa" /> 
                            </Form.Item>
                        </div>

                        <Form.Item className='w-full' label="Ngày trong tuần" name='days'>
                            <Input placeholder="Chọn ngày" />
                        </Form.Item>
                    </div>
                    <div className='flex w-full gap-x-4'>

                        <div className='flex w-full items-center gap-x-4'>
                            <Form.Item className='w-full' label="Phí vào cổng thấp nhất" name='price_min'> 
                                <Input placeholder="Nhập phí thấp nhất" /> 
                            </Form.Item>

                            <span>Đến</span>
                            <Form.Item className='w-full' label="Phí vào cổng cao nhất" name='price_max'> 
                                <Input placeholder="Nhập phí cao nhất" /> 
                            </Form.Item>
                        </div>

                        <Form.Item className='w-full' label="Số điện thoại liên hệ" name='phone'>
                            <Input placeholder="Nhập số điện thoại" />
                        </Form.Item>
                    </div>
                    <Form.Item className='w-full' label="Website địa danh" name='website'>
                        <Input placeholder="Nhập link website" />
                    </Form.Item>

                </div>
                <div className='bg-white rounded-lg p-6 w-full mt-4' style={{ boxShadow: '0px 2px 8px 2px rgba(0, 0, 0, 0.08)' }}>
                    <h2 className='text-xl font-semibold'>Thông tin phụ</h2>
                    <InputEditor
                        id='overview'
                        name="overview"
                        label="Tổng quan"

                        initialValue={dataInfo.overview}
                        onChange={(value) => {

                            dataInfo.overview = value.html ?? "";
                            setDataInfo(dataInfo);
                        }}
                    />
                    <InputEditor
                        name="funfact"
                        label="Những điều thú vị"

                        initialValue={dataInfo.funfact}
                        onChange={(value) => {
                            dataInfo.funfact = value.html ?? "";
                            setDataInfo(dataInfo);
                        }}
                    />
                </div>
                <div className='bg-white rounded-lg p-6 w-full mt-4' style={{ boxShadow: '0px 2px 8px 2px rgba(0, 0, 0, 0.08)' }}>
                    <h2 className='text-xl font-semibold'>Hình ảnh</h2>
                    <Form.Item name='images' label='Hình ảnh'>
                        <div>
                            <input name='images' multiple accept="image/png, image/gif, image/jpeg" type='file' onChange={fileOnChange} />
                        </div>
                    </Form.Item>
                </div>
                <Form.Item className='mt-2 mb-2 flex justify-end'>
                    <Button siez='small' type='primary'
                        onClick={() => {
                            form.validateFields().then(async (values) => {
                                try {
                                    const data = new FormData()
                                    data.append("province_id", values.province)
                                    data.append("name", values.name)
                                    data.append("type", values.type)
                                    data.append("address", values.address)
                                    data.append("rating", 0)
                                    data.append("entrance_fee", values.price_max)
                                    data.append("open_time", values.open_time)
                                    data.append("close_time", values.close_time)
                                    data.append("phone", values.phone)
                                    data.append("website", values.website)
                                    data.append("overview", dataInfo.overview)
                                    data.append("funfact", dataInfo.funfact)
                                    for (const image of images) {
                                        data.append("images", image);
                                    }

                                    const result = await postLandmark(data)
                                    if (result) {
                                        alert('Đăng thành công')
                                    }
                                } catch (error) {
                                    console.log(error)
                                }
                            });
                        }}
                    >
                        Đăng tải địa danh
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default EditLandMark;