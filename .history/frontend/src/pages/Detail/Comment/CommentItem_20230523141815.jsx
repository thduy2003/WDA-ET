import React from 'react';
import { ProfileCircle } from 'iconsax-react'
import { Star1 } from 'iconsax-react'
const CommentItem = ({data}) => {
    return (
        <div className="flex gap-3 px-2 py-4">
            <div className="">
                <img src={data.avatar}></img>
            </div>
            <div className="w-full h-[100px] px-6 py-4 flex justify-between rounded-xl border-[1px] border-[#EAEAEA] border-solid bg-white">
                <div className="">
                    <div className="text-[20px] leading-[36px] text-[#141716] font-semibold ">{data.name}</div>
                    <div>{data.content}</div>
                    <div className='flex'>
                        {
                            [...Array(data.star)].map((n,i)=> <Star1
                                key={i}
                                size="16"
                                color="#F0BD0A"
                                variant='Bold'
                            />)
                        }
                        {
                            [...Array(5-Number(data.star))].map((n,i)=> <Star1
                                key={i}
                                size="16"
                                color="#C2C2C2"
                                variant='Bold'
                            />)
                        }
                    </div>
                </div>
                <div className="">{data.date}</div>
            </div>
        </div>
    );
};

export default CommentItem;