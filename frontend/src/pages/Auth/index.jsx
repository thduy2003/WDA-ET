import { Form, Input } from 'antd';
import React, { useEffect, useState } from 'react';
import Button from '../../components/Button';
import Logo from '../../components/Logo';
import { useDispatch, useSelector } from 'react-redux';
import { logIn, signUp } from '../../actions/AuthAction';
import { Navigate, useNavigate } from 'react-router-dom';
const Auth = () => {
    const [isSignup, setIsSignup] = useState(true)
    const [form] = Form.useForm()
    const [errorMessage, setErrorMessage] = useState(null)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const user = useSelector((state) => state.authReducer.authData)
    let error = useSelector((state) => state.authReducer.error)
    const loading = useSelector(state => state.authReducer.loading)


    return (
        <div className='grid grid-cols-3 h-[100vh] '>
            <div className='col-span-2'>
                <img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1662380916685-acb5f7af8c48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="" />
            </div>
            <div className='py-16 px-[92px] transition-all'>
                <Logo />
                <div className='w-fit flex mt-[51px] mb-9' style={{ borderBottom: '1.5px solid #C2C2C2' }}>
                    <div onClick={() => {
                        setIsSignup(true)
                        setErrorMessage(null)
                        form.resetFields()
                    }} className={`mr-9 pb-2 mb-[-1px] cursor-pointer text-xl ${isSignup ? 'border-b-[1.5px] border-b-p1 font-semibold ' : 'text-third'}`} >Đăng ký</div>
                    <div onClick={() => {
                        setIsSignup(false)
                        setErrorMessage(null)
                        form.resetFields()
                    }} className={`pb-2 text-xl cursor-pointer ${isSignup ? 'text-third' : 'border-b-[1.5px] border-b-p1 font-semibold '}mb-[-1px]`}>Đăng nhập</div>
                </div>

                <Form className='auth-form' form={form} layout='vertical'>
                    <Form.Item label="Email" rules={[
                        {
                            required: true,
                            message: 'Trường email không được để trống'
                        }
                    ]} name='email'>
                        <Input placeholder="Nhập email của bạn" />
                    </Form.Item>
                    <Form.Item rules={[
                        {
                            required: true,
                            message: 'Mật khẩu không được trống'
                        }
                    ]} label="Mật khẩu" name='password'>
                        <Input type='password' placeholder="Nhập mật khẩu" />
                    </Form.Item>
                    {isSignup ? <Form.Item label="Xác nhận mật khẩu" rules={
                        [
                            {
                                validator: (rule, value, callback) => {
                                    if (value && value !== form.getFieldValue('password')) {
                                        callback('Mật khẩu xác nhận không khớp!');
                                    } else {
                                        callback();
                                    }
                                }
                            },
                            {
                                required: true,
                                message: 'Trường này không được trống'
                            }
                        ]
                    } name='confirm_password'>
                        <Input type='password' placeholder="Nhập mật khẩu" />
                    </Form.Item> : ''}
                    <Form.Item>
                        <Button onClick={() => {
                            form.validateFields().then(async (values) => {

                                try {
                                    if (isSignup) {

                                        values.password === values.confirm_password && await dispatch(signUp({
                                            email: values.email,
                                            password: values.password,
                                            confirm_password: values.confirm_password,
                                            name: values.email
                                        }))
                                    } else {
                                        await dispatch(logIn({
                                            email: values.email,
                                            password: values.password,
                                        }))
                                    }

                                } catch (error) {
                                    console.log(error)
                                }
                            });
                        }} style={{ width: '100%', display: 'flex', justifyContent: 'center' }} type='primary'>{loading ? 'Loading...' : isSignup ? 'Đăng Ký' : 'Đăng nhập'}</Button>
                    </Form.Item>
                </Form>
            </div>

        </div>
    );
};

export default Auth;