import React from 'react';
import { CommentData } from '../../../data/CommentData';
import StarRating from '../StarRating/StarRating';
const Comment = ({pos}) => {
    let CommentDataList = CommentData
    console.log (CommentDataList)
    return (
        <div>
            <StarRating></StarRating>
            
        </div>
    );
};

export default Comment;