import React from 'react';
import { FilterTick, ProfileCircle, Send2} from 'iconsax-react';
import { PostCommentData } from '../../../data/PostCommentData';
import CommentItem from './CommentItem';
const CommentList = () => {
    return (
        <div className="mt-5 z-10 absolute">
            <div className="flex flex-col gap-4 p-9 shadow-lg rounded-[8px] bg-white w-[811px] translate-x-[45%]">
                <div className="flex justify-between items-center">
                    <p className="text-[#141716] font-semibold text-[28px]"> Bình luận </p>
                    <div className="flex gap-2">
                        <FilterTick
                            size="20"
                            color="#D02F3D"
                            variant="Bold"
                            />
                        <div className="text-[#D02F3D]"> Mới nhất </div>
                    </div>
                </div>
               <div className="flex flex-col gap-4">
                    {
                        PostCommentData.map((n,i)=><CommentItem data={n} key={i}></CommentItem>)
                    }
               </div>
               <div className="flex gap-3">
                    <div>
                        <ProfileCircle size={"28"} variant='Bold' />
                    </div>
                    <div className="flex px-4 py-6 bg-[#EAEAEA] rounded-[8px] w-full items-center">
                        <input type="text" placeholder="Viết bình luận vào đây" className="bg-[#EAEAEA] outline-none w-full"></input>
                        <div className="cursor-pointer" onClick={() => {}}>
                            <Send2 size="19" color="#888888" variant='Bold'></Send2>
                        </div>
                    </div>
               </div>
            </div>
        </div>
    );
};

export default CommentList;