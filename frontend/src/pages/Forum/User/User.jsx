import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { followUser, unFollowUser } from '../../../actions/UserAction';
import { serverPublic } from '../../../utils';

const User = ({ data }) => {
    const dispatch = useDispatch()
    const { user } = useSelector((state) => state.authReducer.authData)

    const [following, setFollowing] = useState(user?.follow?.includes(data._id))

    const handleFollow = async () => {

        if (following) {
            dispatch(unFollowUser(data._id, user))

        } else {

            dispatch(followUser(data._id, user))
        }
        setFollowing(prev => !prev)

    }

    return (
        <div className="flex justify-between items-center">
            <div className="flex gap-4">
                <div className="flex gap-4">
                    <div className='w-[30px] h-[30px] rounded-full'>
                        <img className='w-[30px] h-[30px] object-cover rounded-full' src={`${serverPublic}profile/${data?.avatar}`}></img>
                    </div>
                    <div className="flex flex-col">
                        <div className="text-[#141716] font-semibold text-[14px]">{data.name}</div>
                        <div className="text-[#888888] text-[12px]">{data?.job ?? '-'}</div>
                    </div>
                </div>
            </div>
            {

                <div className={`py-2 px-3 ${following ? 'text-black bg-[#F1F1F1]' : 'text-[#D02F3D] border-[#D02F3D]'}   text-[14px] font-semibold border  rounded-[4px] cursor-pointer`} onClick={handleFollow}>
                    {following ? 'Bỏ theo dõi' : 'Theo dõi'}
                </div>

            }
        </div>
    );
};

export default User;