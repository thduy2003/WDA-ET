import { DatePicker, Form, Input, Select, TimePicker } from 'antd';
import React, { useEffect, useRef } from 'react';
import InputEditor from '../../components/InputEditor';
import Button from '../../components/Button'
import dayjs from 'dayjs'
import { GeocoderAutocomplete } from '@geoapify/geocoder-autocomplete';
import { postProvince } from '../../api/ProvinceAPI';
const geoapify = "2e8f62d864414a2780fdcbcf30589685";
const EditLandMark = () => {
    const [form] = Form.useForm()
    const [data, setData] = React.useState({
        overview: "",
        enjoyContent: ''
    });
    const [dataLocation, setDataLocation] = React.useState()
    const [image, setImage] = React.useState();
    const [endTime, setEndTime] = React.useState();
    const [starTime, setStartTime] = React.useState();
    const fileOnChange = (event) => {
        console.log(event.target.files)
        // const file = event.target.files[0];
        // if (file) {
        //     setImage(file);
        // } else {
        //     setImage(null);
        //     alert("Please select a file.");
        // }
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
            });

            autocompleteInput.on('suggestions', (suggestions) => {
                // Xử lý gợi ý tại đây
            });
        }

    }, []);

    return (
        <div className='bg-[#f1f1f1] w-full '>
            <Form form={form} layout='vertical' className='px-6 pt-10'>
                <div className='bg-white rounded-lg p-6 w-full' style={{ boxShadow: '0px 2px 8px 2px rgba(0, 0, 0, 0.08)' }}>
                    <h2 className='text-xl font-semibold'>Thông tin chính</h2>
                    <div className='flex w-full gap-x-4'>
                        <Form.Item className='w-full' label="Tên địa danh" name='name'>
                            <div ref={autocompleteRef} className="autocomplete-container" style={{ position: "relative" }}></div>
                        </Form.Item>
                        <Form.Item className='w-full' label="Loại hình" name='type'>
                            <Select placeholder='Chọn loại địa danh' className='select-admin' options={[
                                { value: 1, label: 'Danh lam thắng cảnh' },
                                { value: 2, label: 'Di tích lịch sử' },
                                { value: 3, label: 'Làng nghề truyền thống' },

                            ]} />
                        </Form.Item>
                    </div>
                    <div className='flex w-full gap-x-4'>
                        <Form.Item className='w-full' label="Địa chỉ" name='address'>
                            {dataLocation?.properties?.address_line2}
                            <Input placeholder="Nhập địa chỉ" />
                        </Form.Item>
                        <Form.Item className='w-full' label="Google Map" name='map'>

                            <Input placeholder="Nhập link" />
                        </Form.Item>
                    </div>
                    <div className='flex w-full items-center gap-x-4'>

                        <div className='flex w-full  gap-x-4'>
                            <Form.Item

                                name='start_time'
                                label='Giờ mở cửa'

                            >
                                <TimePicker

                                    onChange={(_, dateString) => {
                                        if (dateString) {
                                            setStartTime(dateString);
                                        }
                                    }}
                                    showTime
                                />
                            </Form.Item>
                            <span>Đến</span>
                            <Form.Item

                                name='end_time'
                                label='Giờ đóng cửa'

                            >
                                <TimePicker

                                    onChange={(_, dateString) => {
                                        if (dateString) {
                                            setEndTime(dateString);
                                        }
                                    }}
                                    showTime
                                />
                            </Form.Item>
                        </div>

                        <Form.Item className='w-full' label="Ngày trong tuần" name='days'>
                            <Input placeholder="Chọn ngày" />
                        </Form.Item>
                    </div>
                    <div className='flex w-full gap-x-4'>

                        <div className='flex w-full items-center gap-x-4'>
                            <Form.Item className='w-full' label="Phí vào cổng thấp nhất" name='price_min'> <Input placeholder="Nhập phí thấp nhất" /> </Form.Item>

                            <span>Đến</span>
                            <Form.Item className='w-full' label="Phí vào cổng cao nhất" name='price_max'> <Input placeholder="Nhập phí cao nhất" /> </Form.Item>
                        </div>

                        <Form.Item className='w-full' label="Số điện thoại liên hệ" name='phone'>
                            <Input placeholder="Nhập số điện thoại" />
                        </Form.Item>
                    </div>
                    <Form.Item className='w-full' label="Link địa danh" name='link'>
                        <Input placeholder="Nhập link" />
                    </Form.Item>

                </div>
                <div className='bg-white rounded-lg p-6 w-full mt-4' style={{ boxShadow: '0px 2px 8px 2px rgba(0, 0, 0, 0.08)' }}>
                    <h2 className='text-xl font-semibold'>Thông tin phụ</h2>
                    <InputEditor
                        id='overview'
                        name="overview"
                        label="Tổng quan"

                        initialValue={data.overview}
                        onChange={(value) => {

                            data.overview = value.html ?? "";
                            setData(data);
                        }}
                    />
                    <InputEditor
                        name="enjoyContent"
                        id='enjoyContent'
                        label="Những điều thú vị"

                        initialValue={data.enjoyContent}
                        onChange={(value) => {

                            data.enjoyContent = value.html ?? "";
                            setData(data);
                        }}
                    />
                </div>
                <div className='bg-white rounded-lg p-6 w-full mt-4' style={{ boxShadow: '0px 2px 8px 2px rgba(0, 0, 0, 0.08)' }}>
                    <h2 className='text-xl font-semibold'>Hình ảnh</h2>
                    <Form.Item name='picture' label='Hình ảnh'>
                        <div>
                            <input multiple accept="image/png, image/gif, image/jpeg" type='file' onChange={fileOnChange} />
                        </div>
                    </Form.Item>
                </div>
                <Form.Item className='mt-2 mb-2 flex justify-end'>
                    <Button siez='small' type='primary'
                        onClick={() => {
                            form.validateFields().then((values) => {

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