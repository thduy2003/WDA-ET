import React from 'react';
import { Star1 } from 'iconsax-react'
const TotalStar = ({ dataComment }) => {
    return (
        <div>
            <div className="flex gap-4 items-center ">
                <div> <span className="text-[28px] leading-[36px] text-[#141716] font-semibold mb-6">{Number(dataComment?.rating_average) ?? 5}</span>/5</div>
                <div className="flex">
                    <Star1
                        size="32"
                        color="#F0BD0A"
                        variant='Bold'
                    />
                    <Star1
                        size="32"
                        color="#F0BD0A"
                        variant='Bold'
                    />
                    <Star1
                        size="32"
                        color="#F0BD0A"
                        variant='Bold'
                    />
                    <Star1
                        size="32"
                        color="#F0BD0A"
                        variant='Bold'
                    />
                    <Star1
                        size="32"
                        color="#F0BD0A"
                        variant='Bulk'
                    />
                </div>
                <div> ({dataComment?.comments?.length ?? 10} đánh giá) </div>
            </div>
        </div>
    );
};

export default TotalStar;