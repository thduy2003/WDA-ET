import React from 'react';
import { CommentData } from '../../../data/CommentData';
import StarRating from '../StarRating/StarRating';
import { ProfileCircle } from 'iconsax-react'
import CommentList from './CommentList';
const Comment = ({pos}) => {
    
    let CommentDataList = CommentData
    return (
        <div>
            <div>
                <StarRating></StarRating>
                <div className="flex gap-4 px-2 py-4">
                <ProfileCircle
                    size="36"
                    color="#141716"
                    />
                <input type="text" placeholder="Viết đánh giá của bạn" className="w-full h-[100px] bg-[#F1F1F1] rounded-lg">
                </input>
                </div>
            </div>
           <CommentList list={CommentDataList}></CommentList>
        </div>
    );
};

export default Comment;