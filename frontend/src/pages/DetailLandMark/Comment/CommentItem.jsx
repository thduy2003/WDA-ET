import React from 'react';
import { ProfileCircle } from 'iconsax-react'
import { Star1 } from 'iconsax-react'
const CommentItem = ({ data }) => {
    return (
        <div className="flex gap-3 px-2 py-4">
            <div className="">
                <img src={''}></img>
            </div>
            <div className="w-full px-6 py-4 flex justify-between rounded-xl border-[1px] border-[#EAEAEA] border-solid bg-white">
                <div className="">
                    <div className="text-[20px] leading-[28px] text-[#141716] font-semibold mb-2 ">{data?.name}</div>
                    <div className="mb-4">{data.content}</div>
                    <div className='flex gap-1'>
                        {
                            [...Array(data.rating)].map((n, i) => <Star1
                                key={i}
                                size="16"
                                color="#F0BD0A"
                                variant='Bold'
                            />)
                        }
                        {
                            [...Array(5 - Number(data.rating))].map((n, i) => <Star1
                                key={i}
                                size="16"
                                color="#C2C2C2"
                                variant='Bold'
                            />)
                        }
                        <div className="ml-3"></div>
                    </div>
                </div>
                <div className="text-[#141716] font-semibold"></div>
            </div>
        </div>
    );
};

export default CommentItem;