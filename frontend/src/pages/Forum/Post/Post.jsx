import React, { useState } from 'react';
import { More, Like1, Message2 } from 'iconsax-react';
import { serverPublic } from '../../../utils';
const Post = ({ data, showComment = f => f }) => {
    const [liked, setLiked] = useState(false);
    const [more, setMore] = useState(false)
    return (
        <div className="p-4 shadow-md rounded-[8px]">
            <div className="flex justify-between items-center mb-3">
                <div className="flex gap-3">
                    <div>
                        <img className='w-[50px] h-[50px] rounded-full' src={`https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/User_icon-cp.svg/1200px-User_icon-cp.svg.png`} />
                    </div>
                    <div className="flex flex-col gap-0">
                        <div className="text-[#141716] font-semibold text-[20px] mb-2"> {data.name}</div>
                        <div className="text-[#888888] text-[12px] leading-[0]"> {data.date_post}</div>
                    </div>
                </div>
                <div>
                    <More
                        size="24"
                        color="black"
                    />
                </div>
            </div>
            <div className="mb-3">
                <p className={`${more == true ? "" : "line-clamp-3"}`}>{data.content}</p>
                {more == true ? "" :
                    <span className="text-[#D02F3D] cursor-pointer" onClick={() => setMore(true)}>Xem thêm</span>
                }
            </div>
            <div className="mb-3">
                <img src={`${serverPublic}posts/${data.image}`} className="rounded" />
            </div>
            <div className="flex justify-between py-3 px-[80.5px] border-t border-gray-200 border-solid">
                <div className="flex gap-2 items-center cursor-pointer" onClick={() => setLiked(liked => !liked)}>
                    <Like1
                        size="20"
                        color={`${liked == false ? "#888888" : "#D02F3D"}`}
                        variant={`${liked == false ? "" : "Bold"}`}
                    />
                    <p className={`text-[#888888] ${liked == false ? "text-[#888888]" : "text-[#D02F3D]"}`}> Yêu thích </p>
                </div>
                <div className="flex gap-2 items-center cursor-pointer" onClick={showComment}>
                    <Message2
                        size="20"
                        color="#888888"
                    />
                    <p className="text-[#888888] text-[14px]"> Bình Luận </p>
                </div>
            </div>
        </div>
    );
};

export default Post;