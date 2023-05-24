import { Form, Input } from 'antd';
import React from 'react';
import InputEditor from '../../components/InputEditor';
import Button from '../../components/Button'

const EditProvince = () => {
    const [form] = Form.useForm()
    const [data, setData] = React.useState({
        overview: "",
        enjoyContent: ''
    });
    const [image, setImage] = React.useState();
    const fileOnChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setImage(file);
        } else {
            setImage(null);
            alert("Please select a file.");
        }
    };


    return (
        <div className='bg-[#f1f1f1] w-full '>
            <Form form={form} layout='vertical' className='px-6 pt-10'>
                <div className='bg-white rounded-lg p-6 w-full' style={{ boxShadow: '0px 2px 8px 2px rgba(0, 0, 0, 0.08)' }}>
                    <h2 className='text-xl font-semibold'>Thông tin chính</h2>
                    <div className='flex w-full gap-x-4'>
                        <Form.Item className='w-full' label="Tên tỉnh" name='province'>
                            <Input placeholder="Nhập tên tỉnh" />
                        </Form.Item>
                        <Form.Item className='w-full' label="Diện tích" name='area'>
                            <Input placeholder="Nhập diện tích" />
                        </Form.Item>
                    </div>
                    <div className='flex w-full gap-x-4'>
                        <Form.Item className='w-full' label="Khách du lịch" name='guest_num'>
                            <Input placeholder="Nhập số khách du lịch" />
                        </Form.Item>
                        <Form.Item className='w-full' label="Số lượng địa danh tham quan" name='place_num'>
                            <Input placeholder="Nập số địa danh tham quan" />
                        </Form.Item>
                    </div>
                </div>
                <div className='bg-white rounded-lg p-6 w-full mt-4' style={{ boxShadow: '0px 2px 8px 2px rgba(0, 0, 0, 0.08)' }}>
                    <h2 className='text-xl font-semibold'>Thông tin phụ</h2>
                    <InputEditor
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
                            <input type='file' onChange={fileOnChange} />
                        </div>
                    </Form.Item>
                </div>
                <Form.Item className='mt-2 mb-2 flex justify-end'>
                    <Button siez='small' type='primary'
                        onClick={() => {
                            form.validateFields().then((values) => {
                                console.log(values)
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

export default EditProvince;