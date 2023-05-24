import React from 'react';
import { Star1 } from 'iconsax-react'
const StarRating = () => {
    return (
        <div>
            <div className="flex ">
                <div> <span className="text-[28px] leading-[36px] text-[#141716] font-semibold mb-6">4.5</span>/5</div>
                <div className=>   
                    <Star1
                        size="32"
                        color="#FF8A65"
                        variant='Bold'
                    />
                    <Star1
                        size="32"
                        color="#FF8A65"
                        variant='Bold'
                    />
                    <Star1
                        size="32"
                        color="#FF8A65"
                        variant='Bold'
                    />
                    <Star1
                        size="32"
                        color="#FF8A65"
                        variant='Bold'
                    />
                    <Star1
                        size="32"
                        color="#FF8A65"
                        variant='Bulk'
                    />
                </div>

            </div>
        </div>
    );
};

export default StarRating;