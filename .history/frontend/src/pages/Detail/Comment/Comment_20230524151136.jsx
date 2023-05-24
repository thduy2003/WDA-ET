import React, {useState} from 'react';
import { CommentData } from '../../../data/CommentData';
import { ProfileCircle } from 'iconsax-react'
import { ArrowLeft2 } from 'iconsax-react'
import { ArrowRight2, Send2 } from 'iconsax-react'
import CommentList from './CommentList';
import Button from '../../../components/Button';
import StarRating from '../StarRating/StarRating';
import TotalStar from '../StarRating/TotalStar';
const Comment = ({pos}) => {
    const [page, setPage] = useState(1)
    let CommentDataList = CommentData.slice(0,5)
    page == 1 ? CommentDataList = CommentData.slice(0,5) : CommentDataList = CommentData.slice(5,10) 
    return (
        <div>
            <div>
                <TotalStar></TotalStar>
                <div className="flex gap-4 px-2 py-4">
                <ProfileCircle
                    size="36"
                    color="#141716"
                    />
                <div className="w-full h-[130px] rounded-xl border-[1px] border-[#EAEAEA] border-solid bg-white px-2 py-3 flex flex-col gap-3">
                    <input type="text" placeholder="Viết đánh giá của bạn" className="outline-0 mb-[20px]" />
                    <div className="flex justify-between items-center border-t-[1px] border-[#EAEAEA] border-solid pt-2">
                        <div className=" flex items-center gap-2">
                            <p className="text-[#888888]"> Đánh giá: </p>
                            <StarRating></StarRating>
                        </div>
                        <div onClick={() =:}>
                            <Send2
                                size="24"
                                color="#D02F3D"
                                variant="Bold"
                                />
                        </div>
                    </div>
                </div>
                </div>
            </div>
           <CommentList list={CommentDataList}></CommentList>
           <div className="flex justify-center items-center gap-2">
                <Button type={"outline-red"} size={"small"} ><ArrowLeft2 size="20"  color="#FF8A65" onClick={page => page == 2 ? setPage(1) : setPage(1)}></ArrowLeft2></Button>

                <Button type={page == 1 ?"primary" : "outline-red"} size={"small"} onClick={() => setPage(1)} >1</Button>

                <Button type={page == 2 ?"primary" : "outline-red"} size={"small"} onClick={() => setPage(2)} >2</Button>

                <Button type={"outline-red"} size={"small"} onClick={page => page == 1 ? setPage(2) : setPage(2)}><ArrowRight2 size="20"  color="#FF8A65"></ArrowRight2></Button>
           </div>
        </div>
    );
};

export default Comment;