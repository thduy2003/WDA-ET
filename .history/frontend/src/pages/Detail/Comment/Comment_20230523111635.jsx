import React from 'react';
import { CommentData } from '../../../data/CommentData';
const Comment = ({pos}) => {
    let CommentDataList = CommentData
    console.log (CommentDataList)
    return (
        <div>
            <StarRating>
                
            </StarRating>
        </div>
    );
};

export default Comment;