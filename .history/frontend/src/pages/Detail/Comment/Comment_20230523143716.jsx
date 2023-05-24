import React, {useState} from 'react';
import { CommentData } from '../../../data/CommentData';
import StarRating from '../StarRating/StarRating';
import { ProfileCircle } from 'iconsax-react'
import CommentList from './CommentList';
import Button from '../../../components/Button';
const Comment = ({pos}) => {
    const [Page, setPage] = useState(1)
    let CommentDataList = CommentData.slice(0,5)
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
           <div className="flex justify-center items-center gap-2">
                <Button type={"secondary"} style={{
                width:"20", 
                height:"20",
                border:"1px solid black"
                }}></Button>
                <Button children={"1"} type={"primary"} style={{
                width:"20", 
                height:"20",
                px
                border:"1px solid black"
                }}></Button>
                <Button type={"primary"} style={{
                width:"20", 
                height:"20",
                border:"1px solid black"
                }}></Button>
                <Button type={"secondary"} style={{
                width:"20", 
                height:"20",
                border:"1px solid black"
                }}></Button>
           </div>
        </div>
    );
};

export default Comment;