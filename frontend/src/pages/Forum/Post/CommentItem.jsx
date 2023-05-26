import React from 'react';

const CommentItem = ({data}) => {
    return (
        <div className="flex gap-3">
            <div className="">
                <img src={data.avatar}></img>
            </div>
            <div className="w-full py-4 px-6 flex flex-col gap-2 border border-solid border-[#EAEAEA] rounded-[8px]">
                <div className="flex justify-between items-center">
                    <div className="text-[#141716] font-semibold text-[20px]">{data.name}</div>
                    <div className="text-[#141716] font-semibold text-[14px]">{data.date}</div>
                </div>
                <p> {data.content}</p>
            </div>
        </div>
    );
};

export default CommentItem;