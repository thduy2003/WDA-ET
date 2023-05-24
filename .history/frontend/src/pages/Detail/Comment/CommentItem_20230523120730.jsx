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
            <div className="w-full ">

            </div>
        </div>
    );
};

export default CommentItem;