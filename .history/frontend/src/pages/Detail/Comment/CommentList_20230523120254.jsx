import React from 'react';
import CommentItem from './CommentItem';
import { ProfileCircle } from 'iconsax-react'

const CommentList = ({list}) => {
    return (
        <div>
           {list.map((n,id) => <CommentItem key={id} data={n}></CommentItem>)}
        </div>
    );
};

export default CommentList;