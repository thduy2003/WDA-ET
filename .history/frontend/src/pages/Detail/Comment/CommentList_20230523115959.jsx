import React from 'react';
import CommentItem from './CommentItem';


const CommentList = ({list}) => {
    return (
        <div>
           {list.map((n,id) => <CommentItem key={id} data={n}></CommentItem>)}
        </div>
    );
};

export default CommentList;