import { Button, Modal } from 'antd';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { updateUser } from '../../actions/UserAction';
// import { updateUser } from '../../actions/userAction';
const ProfileModal = ({ openModal, setOpenModal, data }) => {
    const { password, ...other } = data;


    const [formData, setFormData] = useState(other);
    const [avatar, setAvatar] = useState(null)

    const dispatch = useDispatch()
    const param = useParams()
    const { user } = useSelector(state => state.authReducer.authData)

    const handleChange = (e) => {

        setFormData({ ...formData, [e.target.name]: e.target.value })
    }
    const onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            let img = event.target.files[0]
            setAvatar(img)
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault()

        const data = new FormData()
        data.append("name", formData.name)
        data.append("avatar", avatar)
        data.append("dob", formData.dob)
        data.append("job", formData.job)
        data.append("gender", formData.gender)
        data.append("contact", formData.contact)
        dispatch(updateUser(param.id, data))
        setOpenModal(false)
    }
    const showModal = () => {
        setOpenModal(true);
    };
    const handleOk = () => {
        setOpenModal(false);
    };
    const handleCancel = () => {
        setOpenModal(false);
    };
    return (
        <>
            <Button onClick={showModal}>
            </Button>
            <Modal title={null} footer={null} open={openModal} onOk={handleOk} onCancel={handleCancel}>
                <form onSubmit={handleSubmit} className='flex flex-col justify-center'>
                    <h3 className='text-center mb-5'>Your Info</h3>
                    <div className='grid w-full gap-5'>
                        <input value={formData?.name} onChange={handleChange} className='p-3 border outline-none bg-gray-300 rounded-xl' type='text' placeholder='Name' name='name'></input>

                    </div>
                    <div className='w-full my-2'><input value={formData?.contact} onChange={handleChange} className='w-full p-3 border outline-none bg-gray-300 rounded-xl' type='text' placeholder='Số điện thoại' name='contact'></input></div>
                    <div className='grid grid-cols-2 gap-5'>
                        <input value={formData?.gender} onChange={handleChange} className='p-3 border outline-none bg-gray-300 rounded-xl' type='text' placeholder='Giới tính' name='gender'></input>
                        <input value={formData?.job} onChange={handleChange} className='p-3 border outline-none bg-gray-300 rounded-xl' type='text' placeholder='Nghề nghiệp' name='job'></input>
                    </div>
                    <div className='w-full my-2'><input value={formData?.dob} onChange={handleChange} className='w-full p-3 border outline-none bg-gray-300 rounded-xl' type='text' placeholder='Ngày sinh' name='dob'></input></div>
                    <div className='grid grid-cols-2 gap-5'>
                        <div className='flex'>
                            <span>Avatar</span><input onChange={onImageChange} type='file' name='avatar'></input>
                        </div>

                    </div>
                    <button type='submit' className='flex bg-rose-500 items-center w-[7rem] self-end h-[2rem] px-[20px] justify-center text-white border-none rounded-[0.5rem] transition-all hover:cursor-pointer hover:text-[#fca61f] hover:bg-transparent hover:border-[2px] hover:border-[#fca61f]' >Update</button>
                </form>
            </Modal>
        </>
    );
};
export default ProfileModal;