import React, {useState} from 'react';
import { CommentData } from '../../../data/CommentData';
import StarRating from '../StarRating/StarRating';
import { ProfileCircle } from 'iconsax-react'
import { ArrowLeft2 } from 'iconsax-react'
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
                <Button type={"primary"} size={"small"} 
                style={{
                border:"1px solid black"
                }}><ArrowLeft2 size="30"  color="#FF8A65"></ArrowLeft2></Button>
                <Button type={"primary"} size={"small"} style={{
                border:"1px solid black"
                }}>1</Button>
                <Button type={"primary"} size={"small"} style={{
                border:"1px solid black"
                }}>2</Button>
                <Button type={"primary"} size={"small"} style={{
                border:"1px solid black"
                }}></Button>
           </div>
        </div>
    );
};

export default Comment;