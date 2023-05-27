import { MessageEdit } from 'iconsax-react';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getAllLikedLandMarks } from '../../api/LandMarkAPI';
import { getUser } from '../../api/userAPI';
import Button from '../../components/Button';
import Card from '../../components/Card';
import { serverPublic } from '../../utils';
import ProfileModal from './ProfileModal';

const Profile = () => {
    const [modalOpened, setModalOpened] = React.useState(false)
    const dispatch = useDispatch()
    const params = useParams()
    const profileUserId = params.id
    const [profileUser, setProfileUser] = useState({})
    const [likedLandmark, setLikedLandMark] = useState([])
    const { user } = useSelector((state) => state.authReducer.authData)
    const [tabActive, setTabActive] = useState(1)
    const handleChangeTab = (e) => {
        if (e.target.innerText === 'Trang cá nhân') {
            setTabActive(1)
        }
        if (e.target.innerText === 'Bạn bè') {
            setTabActive(2)
        }
        if (e.target.innerText === 'Địa điểm đã lưu') {
            setTabActive(3)
        }
    }
    useEffect(() => {
        const fetchProfileUser = async () => {
            if (profileUserId === user._id) {
                setProfileUser(user)
            } else {
                const profileUser = await getUser(profileUserId)
                setProfileUser(profileUser)
            }
        }
        fetchProfileUser()
    }, [user])
    useEffect(() => {
        const fetchData = async () => {
            const result = await getAllLikedLandMarks({ landmarkIdArr: user?.favorite_landmark })
            setLikedLandMark(result.data)
        }
        fetchData()
    }, [])
    if (!profileUser) return <span>No data</span>
    return (
        <div className='px-[92px]'>
            <div className='w-full h-[200px] mb-2'>
                <img className='w-full h-[200px] object-cover' src='/images/banner.png'></img>
            </div>
            <div className='flex justify-between items-center mb-5'>
                <div className='flex items-center'>
                    <div className='w-[60px h-[60px] rounded-full mr-6'>
                        <img className='w-[60px h-[60px] rounded-full ' src={`${serverPublic}profile/${profileUser?.avatar}`} />
                    </div>
                    <div className='text-[#141716] text-2xl font-semibold'>
                        {profileUser?.name}
                    </div>
                </div>
                <div className='profile_user'>
                    <ProfileModal openModal={modalOpened} setOpenModal={setModalOpened} data={user} />
                    <Button onClick={() => setModalOpened(true)} iconPosition='left' size='small' type='primary' iconLeft={<MessageEdit size="20" color="#FAFBFC" variant="Bold" />}>Chỉnh sửa thông tin cá nhân</Button>
                </div>
            </div>
            <div className='w-fit flex mt-[24px] mb-6' style={{ borderBottom: '1.5px solid #C2C2C2' }}>
                <div onClick={(e) => handleChangeTab(e)} className={`cursor-pointer pb-2 mb-[-1px] text-xl ${tabActive === 1 ? 'border-b-[1.5px] border-b-p1 font-semibold ' : 'text-third'}`} >Trang cá nhân</div>
                <div onClick={(e) => handleChangeTab(e)} className={`mx-9 cursor-pointer pb-2 mb-[-1px] text-xl ${tabActive === 2 ? 'border-b-[1.5px] border-b-p1 font-semibold ' : 'text-third'}`}>Bạn bè</div>
                <div onClick={(e) => handleChangeTab(e)} className={`cursor-pointer pb-2 mb-[-1px] text-xl ${tabActive === 3 ? 'border-b-[1.5px] border-b-p1 font-semibold ' : 'text-third'}`}>Địa điểm đã lưu</div>
            </div>
            {tabActive === 1 && <div className='grid grid-cols-12 gap-x-3'>
                <div className='col-span-4'>
                    <div className='p-5 bg-[#FAFBFC] rounded-lg mb-4' style={{ boxShadow: '0px 2px 8px 2px rgba(0, 0, 0, 0.08)' }}>
                        <h3 className='text-[#141716] text-lg font-semibold'>Giới thiệu</h3>
                        <div className='flex flex-col gap-y-2'>
                            <div className='flex items-center'>
                                <p>Ngày sinh: {profileUser?.dob}</p>
                            </div>
                            <div className='flex items-center'>
                                <p>Giới tính: {profileUser?.gender}</p>
                            </div>
                            <div className='flex items-center'>
                                <p>Nơi sinh sống: Thành phố Hồ Chí Minh</p>
                            </div>
                            <div className='flex items-center'>
                                <p>Liên hệ: {profileUser?.contact}</p>
                            </div>
                            <div className='flex items-center'>
                                <p>Người theo dõi: {profileUser?.follower?.length} bạn</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-span-5'>

                </div>
                <div className='col-span-3'>

                </div>
            </div>}
            {
                tabActive === 3 && <div className='flex gap-x-3 flex-wrap mt-3 mb-3'>
                    {likedLandmark.map((data, index) => <Card data={data} widthImage={250} heightImage={200} key={index} />)}
                </div>
            }
        </div>
    );
};

export default Profile;