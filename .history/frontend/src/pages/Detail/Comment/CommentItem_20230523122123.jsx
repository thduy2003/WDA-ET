import React from 'react';
import { ProfileCircle } from 'iconsax-react'
import { Star1 } from 'iconsax-react'
const CommentItem = ({data}) => {
    return (
        <div className="flex gap-3 px-2 py-4">
            <div className="">
                <ProfileCircle
                        size="36"
                        color="#141716"
                />
            </div>
            <div className="w-full h-[100px] flex rounded-xl border-[1px] border-[#EAEAEA] border-solid bg-white">
                <div className="">
                    <div>{data.name}</div>
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

                            [...Array(data.star)].map((n,i)=> <Star1
                                key={i}
                                size="16"
                                color="#F0BD0A"
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