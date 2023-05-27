import React from 'react';
import { useSelector } from 'react-redux';
import { format } from 'timeago.js'
const CommentItem = ({ data }) => {
    const { user } = useSelector((state) => state.authReducer.authData)
    return (
        <div className="flex gap-3">
            <div className="w-[30px] h-[30px] rounded-full">
                <img className='w-[30px] h-[30px] rounded-full' src='https://www.computerhope.com/jargon/g/guest-user.png'></img>
            </div>
            <div className="w-full py-4 px-6 flex flex-col gap-2 border border-solid border-[#EAEAEA] rounded-[8px]">
                <div className="flex justify-between items-center">
                    <div className="text-[#141716] font-semibold text-[20px]">{data?.name ?? user.name}</div>
                    <div className="text-[#141716] font-semibold text-[14px]">{format(data.date_post)}</div>
                </div>
                <p> {data.content}</p>
            </div>
        </div>
    );
};

export default CommentItem;