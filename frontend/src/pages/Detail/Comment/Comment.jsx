import React, { useEffect, useState } from 'react';
import { CommentData } from '../../../data/CommentData';
import { ProfileCircle } from 'iconsax-react'
import { ArrowLeft2 } from 'iconsax-react'
import { ArrowRight2, Send2 } from 'iconsax-react'
import CommentList from './CommentList';
import Button from '../../../components/Button';
import StarRating from '../StarRating/StarRating';
import TotalStar from '../StarRating/TotalStar';
import { useSelector } from 'react-redux';
import { getAllCommentsProvince, postCommentProvince } from '../../../api/commentAPI';
const Comment = ({ pos, provinceId }) => {
    const [page, setPage] = useState(1)
    const [inputComment, setInputComment] = useState()
    const user = useSelector((state) => state.authReducer.authData)
    const [countStar, setCountStar] = useState(0)
    const [dataComment, setDataComment] = useState([])
    const onChangeInput = (e) => {
        setInputComment(e.target.value)
    }

    let CommentDataList = CommentData.slice(0, 5)
    page == 1 ? CommentDataList = CommentData.slice(0, 5) : CommentDataList = CommentData.slice(5, 10)

    const onSelectedStar = (stars) => {

        setCountStar(stars)
    }


    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await getAllCommentsProvince(provinceId)

                setDataComment(result.data)
            } catch (error) {
                console.log(error)
            }
        }
        if (provinceId) {
            fetchData()
        }

    }, [provinceId])

    return (
        <div>
            <div>
                <TotalStar dataComment={dataComment}></TotalStar>
                <div className="flex gap-4 px-2 py-4">
                    <ProfileCircle
                        size="36"
                        color="#141716"
                    />
                    <div className="w-full h-[130px] rounded-xl border-[1px] border-[#EAEAEA] border-solid bg-white px-2 py-3 flex flex-col gap-3">
                        <input value={inputComment} onChange={onChangeInput} type="text" placeholder="Viết đánh giá của bạn" className="outline-0 mb-[20px]" />
                        <div className="flex justify-between items-center border-t-[1px] border-[#EAEAEA] border-solid pt-2">
                            <div className=" flex items-center gap-2">
                                <p className="text-[#888888]"> Đánh giá: </p>
                                <StarRating onSelectedStar={onSelectedStar}></StarRating>
                            </div>
                            <div className='cursor-pointer' onClick={async () => {
                                if (!user) {
                                    alert("Bạn cần phải đăng nhập trước khi bình luận")
                                } else {

                                    try {
                                        const result = await postCommentProvince({ province_id: provinceId, author_id: user.user._id, rating: countStar, content: inputComment })
                                        console.log(result)
                                        if (result) {
                                            setInputComment('')
                                            setCountStar(0)
                                            alert('Bình luận thành công')
                                            await getAllCommentsProvince(provinceId)
                                        }
                                    } catch (error) {
                                        console.log(error)
                                    }
                                }
                            }}>
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
            <CommentList list={dataComment.comments ?? []}></CommentList>
            <div className="flex justify-center items-center gap-2">
                <Button type={"outline-red"} size={"small"} ><ArrowLeft2 size="20" color="#FF8A65" onClick={page => page == 2 ? setPage(1) : setPage(1)}></ArrowLeft2></Button>

                <Button type={page == 1 ? "primary" : "outline-red"} size={"small"} onClick={() => setPage(1)} >1</Button>

                <Button type={page == 2 ? "primary" : "outline-red"} size={"small"} onClick={() => setPage(2)} >2</Button>

                <Button type={"outline-red"} size={"small"} onClick={page => page == 1 ? setPage(2) : setPage(2)}><ArrowRight2 size="20" color="#FF8A65"></ArrowRight2></Button>
            </div>
        </div>
    );
};

export default Comment;