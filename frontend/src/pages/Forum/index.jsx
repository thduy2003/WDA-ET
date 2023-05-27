import React, { useEffect, useState } from 'react';
import UserList from './User/UserList';
import PostList from './Post/PostList';
import { ProfileCircle, User } from 'iconsax-react';
import TopWeek from './TopWeek';
import PostForm from './Post/PostForm';
import CommentList from './Post/CommentList';
import { getAllUsers } from '../../api/userAPI';
import { useSelector } from 'react-redux';
import { getAllLandMarksByType } from '../../api/LandMarkAPI';

import { serverPublic } from '../../utils';
const Forum = () => {

    const [post, setPost] = useState(false)
    const [comment, setComment] = useState(false)
    const [allUsers, setAllUsers] = useState([])
    const [listLandMarks, setListLandMarks] = useState([])
    const { user } = useSelector((state) => state.authReducer.authData)
    const [choosedPost, setChoosedPost] = useState()
    useEffect(() => {
        try {
            const fetchData = async () => {
                const result = await getAllUsers()
                setAllUsers(result)
            }
            fetchData()
        } catch (error) {
            console.log(error)
        }

    }, [])
    const listUsers = allUsers.filter((i) => i._id !== user._id)
    useEffect(() => {
        try {
            const fetchData = async () => {
                const result = await getAllLandMarksByType({ type: 1 })
                setListLandMarks(result?.data?.slice(0, 3))
            }
            fetchData()
        } catch (error) {
            console.log(error)
        }
    }, [])

    return (
        <div className="relative">
            {post == true
                ?
                <div className="w-full h-screen fixed bg-black z-10 bg-opacity-10 top-[-10px]" >
                    <PostForm setModal={setPost}></PostForm>
                    <div className="w-full h-screen  bg-black bg-opacity-10 z-0 top-0" onClick={() => setPost(false)}></div>
                </div>
                : ""}
            {comment == true
                ?
                <div className="w-full h-screen fixed bg-black z-10 bg-opacity-10 top-[-10px]" >
                    <CommentList choosedPost={choosedPost}></CommentList>
                    <div className="w-full h-screen  bg-black bg-opacity-10 z-0 top-0" onClick={() => setComment(false)}></div>
                </div>
                : ""}
            <div className='mt-[36px] px-[30px] relative'>
                <div className='grid grid-cols-12 gap-14'>
                    <div className='col-span-3 text-[0px] flex flex-col'>
                        <p className="mb-6 text-[#141716] font-semibold text-[28px]"> Bạn có thể biết </p>
                        <UserList allUsers={listUsers}></UserList>
                    </div>
                    <div className='col-span-6'>
                        <div className="flex gap-3 p-4 shadow-lg rounded-[8px]">
                            <ProfileCircle
                                size="48"
                                color="black"
                                variant="Bold"
                            />
                            <div className='bg-[#EAEAEA] w-full rounded-[8px] p-4 cursor-pointer' onClick={() => setPost(true)}>
                                <p className="text-[#888888]">Bắt đầu đăng bài</p>
                            </div>
                        </div>
                        <PostList showComment={() => setComment(true)} getPostId={(id) => setChoosedPost(id)}></PostList>
                    </div>
                    <div className='col-span-3'>
                        <div className='col-span-3 text-[0px] flex flex-col'>
                            <p className="mb-6 text-[#141716] font-semibold text-[28px]"> Địa điểm của tuần </p>

                            <div className="flex flex-col gap-4">
                                {listLandMarks?.length > 0 && listLandMarks?.map((item, index) => {
                                    return <TopWeek key={index} img={`${serverPublic}landmarks/${item.images[0]}`} top={(index + 1).toString()} name={item.name} province={item.address} view={"6.4K"} ></TopWeek>
                                })}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Forum;