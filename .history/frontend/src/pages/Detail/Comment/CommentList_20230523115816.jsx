import React from 'react';
import CommentItem from './CommentItem';

const CommentList = ({list}) => {
    return (
        <div>
            {list.map(() => <CommentItem)}
        </div>
    );
};

export default CommentList;