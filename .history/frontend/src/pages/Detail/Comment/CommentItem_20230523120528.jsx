import React from 'react';
import CommentList from './CommentList';
const CommentItem = ({data}) => {
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