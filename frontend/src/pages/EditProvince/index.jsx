import { Form, Input } from 'antd';
import React from 'react';
import InputEditor from '../../components/InputEditor';
import Button from '../../components/Button'
import { postProvince } from '../../api/ProvinceAPI';

const EditProvince = () => {
    const [form] = Form.useForm()
    const [dataInfo, setDataInfo] = React.useState({
        overview: "",
        funfact: ''
    });
    const [images, setImages] = React.useState();
    const fileOnChange = (event) => {

        const files = event.target.files;
        if (files) {
            setImages([...files]);
        } else {
            setImages(null);
            alert("Please select a file.");
        }
    };


    return (
        <div className='bg-[#f1f1f1] w-full '>
            <Form form={form} layout='vertical' className='px-6 pt-10'>
                <div className='bg-white rounded-lg p-6 w-full' style={{ boxShadow: '0px 2px 8px 2px rgba(0, 0, 0, 0.08)' }}>
                    <h2 className='text-xl font-semibold'>Thông tin chính</h2>
                    <div className='flex w-full gap-x-4'>
                        <Form.Item className='w-full' label="Tên tỉnh" name='name'>
                            <Input placeholder="Nhập tên tỉnh" />
                        </Form.Item>
                        <Form.Item className='w-full' label="Diện tích" name='area'>
                            <Input placeholder="Nhập diện tích" />
                        </Form.Item>
                    </div>
                    <div className='flex w-full gap-x-4'>
                        <Form.Item className='w-full' label="Khách du lịch" name='num_traveler'>
                            <Input placeholder="Nhập số khách du lịch" />
                        </Form.Item>
                        <Form.Item className='w-full' label="Số lượng địa danh tham quan" name='place_num'>
                            <Input disabled placeholder="Nập số địa danh tham quan" />
                        </Form.Item>
                    </div>
                </div>
                <div className='bg-white rounded-lg p-6 w-full mt-4' style={{ boxShadow: '0px 2px 8px 2px rgba(0, 0, 0, 0.08)' }}>
                    <h2 className='text-xl font-semibold'>Thông tin phụ</h2>
                    <InputEditor
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

                                    data.append("name", values.name)
                                    data.append("area", values.area)
                                    data.append("num_traveler", values.num_traveler)
                                    data.append("overview", dataInfo.overview)
                                    data.append("funfact", dataInfo.funfact)
                                    for (const image of images) {
                                        data.append("images", image);
                                    }

                                    const result = await postProvince(data)
                                    if (result) {
                                        alert('Đăng thành công')
                                    }
                                } catch (error) {
                                    console.log(error)
                                }
                            });
                        }}
                    >
                        Đăng tải tỉnh thành
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default EditProvince;