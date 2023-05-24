import React from 'react';
import { ProfileCircle } from 'iconsax-react'
const CommentItem = ({data}) => {
    return (
        <div className="flex">
            <div className="">
                <ProfileCircle
                        size="36"
                        color="#141716"
                />
            </div>
            <div className="w-full h-[100px] flex rounded-xl border-[1px] border-[#EAEAEA] border-solid bg-white">

            </div>
        </div>
    );
};

export default CommentItem;