import React, {useState} from 'react';
import { CommentData } from '../../../data/CommentData';
import StarRating from '../StarRating/StarRating';
import { ProfileCircle } from 'iconsax-react'
import { ArrowLeft2 } from 'iconsax-react'
import { ArrowRight2 } from 'iconsax-react'
import CommentList from './CommentList';
import Button from '../../../components/Button';
const Comment = ({pos}) => {
    const [page, setPage] = useState(1)
    let CommentDataList = []
    p
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
                <Button type={"outline-red"} size={"small"} 
                style={{
                color:"",
                }}><ArrowLeft2 size="20"  color="#FF8A65"></ArrowLeft2></Button>
                <Button type={"primary"} size={"small"} style={{
                }}>1</Button>
                <Button type={"outline-red"} size={"small"} style={{
                }} onClick={setPage(2)}>2</Button>
                <Button type={"outline-red"} size={"small"} style={{
                }}><ArrowRight2 size="20"  color="#FF8A65"></ArrowRight2></Button>
           </div>
        </div>
    );
};

export default Comment;