import React from 'react';
import { ProfileCircle } from 'iconsax-react'
const CommentItem = ({data}) => {
    console.log(data)
    return (
        <div className="flex">
            <div className="">
                <ProfileCircle
                        size="36"
                        color="#141716"
                />

            </div>
        </div>
    );
};

export default CommentItem;