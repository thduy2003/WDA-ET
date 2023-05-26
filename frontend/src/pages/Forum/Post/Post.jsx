import React, {useState} from 'react';
import { More, Like1, Message2 } from 'iconsax-react';
const Post = ({data, showComment=f=>f}) => {
    const [liked, setLiked] = useState(false);
    const [more, setMore] = useState(false)
    return (
        <div className="p-4 shadow-md rounded-[8px]">
            <div className="flex justify-between items-center mb-3">
                <div className="flex gap-3">
                    <div>
                        <img src={data.userAvatar}/>
                    </div>
                    <div className="flex flex-col gap-0">
                        <div className="text-[#141716] font-semibold text-[20px] mb-2"> {data.userName}</div>
                        <div className="text-[#888888] text-[12px] leading-[0]"> {data.time}</div>
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
                {   more == true ? "" :
                    <span className="text-[#D02F3D] cursor-pointer" onClick={() => setMore(true)}>Xem thêm</span>
                }
            </div>
            <div className="mb-3">
                <img src={data.image} className="rounded" />
            </div>
            <div className="flex justify-between py-3 px-[80.5px] border-t border-gray-200 border-solid">
                <div className="flex gap-2 items-center cursor-pointer" onClick={()=> setLiked(liked => !liked)}>
                    <Like1
                        size="20"
                        color={`${liked == false ?"#888888" : "#D02F3D"}`}
                        variant={`${liked == false ?"" : "Bold"}`}
                        />
                    <p className={`text-[#888888] ${liked == false ?"text-[#888888]" : "text-[#D02F3D]"}`}> Yêu thích </p>
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