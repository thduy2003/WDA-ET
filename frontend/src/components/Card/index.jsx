import React, { useEffect, useState } from 'react';



import { Popover } from 'antd';

import SaveIcon from '../Icons/SaveIcon';
import { Link } from 'react-router-dom';
import { serverPublic } from '../../utils';
import { ArchiveTick } from 'iconsax-react';
import { useDispatch, useSelector } from 'react-redux';
import { likeLandmark, unLikeLandmark } from '../../actions/UserAction';

const Card = props => {
    const { data, widthImage, heightImage } = props;
    const user = useSelector(state => state.authReducer.authData)
    const dispatch = useDispatch()

    const [liked, setLiked] = useState(user?.favorite_landmark?.includes(data?._id) ?? false)
    const handleClick = () => {
        if (!user) {
            alert('Bạn cần phải đăng nhập trước khi dùng chức năng này')
        } else {
            if (liked) {
                dispatch(unLikeLandmark(data?._id, user))

            } else {

                dispatch(likeLandmark(data?._id, user))
            }
            setLiked(prev => !prev)
        }
    }
    const classNameImage = `rounded-t-lg w-full max-w-[${widthImage}px] h-[${heightImage}px] flex-shrink-0 object-cover`;
    const classCard = `min-w-[${widthImage}px] flex flex-col  bg-white border border-gray-200 rounded-xl relative hover:shadow-lg hover:shadow-gray-100`;


    return (
        <div
            className={classCard}
            style={{ minWidth: `${widthImage}px`, maxWidth: `${widthImage}px`, boxShadow: '0px 2px 8px 2px rgba(0, 0, 0, 0.04)' }}>
            <div onClick={handleClick} className="cursor-pointer absolute w-[36px] h-[36px] rounded-[4px] flex items-center justify-center bg-primary top-[3.8%] right-[3.8%]">
                {liked ? <ArchiveTick size="20" color="#D02F3D" variant="Bold" /> : <SaveIcon />}
            </div>

            <Link
                to={`/detail/landmark/${data?._id}`}>
                <img className={classNameImage} style={{ width: widthImage, height: heightImage }} src={`${serverPublic}/landmarks/${data?.images[0]}`} />
            </Link>
            <div className="p-4 flex flex-col flex-1">
                <div className="flex flex-1 flex-col">

                    <Link
                        to={`/detail/landmark/${data._id}`}>
                        <h5 className="mb-[2px] text-xl font-semibold line-clamp-1  text-primary ">
                            {data?.name}
                        </h5>
                    </Link>

                    <p className="mb-3 text-[14px] leading-5 font-normal text-[#888888] line-clamp-2">
                        {data?.address}
                    </p>
                </div>
                <div className="flex flex-col flex-1 mb-4 justify-between   text-sm font-medium text-black rounded-lg ">
                    <div className=" text-sm mb-auto font-normal  line-clamp-3">
                        {data?.name + '-' + data?.address}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
