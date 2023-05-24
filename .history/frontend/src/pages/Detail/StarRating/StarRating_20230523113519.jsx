import React from 'react';
import { Star1 } from 'iconsax-react'
const StarRating = () => {
    return (
        <div>
            <div className="flex ">
                <div> <span className="text-[28px] leading-[36px] text-[#141716] font-semibold mb-6">4.5</span>/5</div>
                <Star1
                    size="32"
                    color="#FF8A65"
                    variant='bold'
                />
            </div>
        </div>
    );
};

export default StarRating;