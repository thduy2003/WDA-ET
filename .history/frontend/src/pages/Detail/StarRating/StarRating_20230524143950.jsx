import React, {useState} from 'react';
import { Star1 } from 'iconsax-react';
const StarRating = () => {
    const [pickedStar, setPickedStar] = useState(3)
    return (
        <div className='flex gap-1'>
            {
                [...Array()].map((n,i)=> <Star1
                    key={i}
                    size="16"
                    color="#F0BD0A"
                    variant='Bold'
                />)
            }
            {
                [...Array(5)].map((n,i)=> <Star1
                    key={i}
                    size="16"
                    color="#C2C2C2"
                    variant='Bold'
                />)
            }
        </div>
    );
};

export default StarRating;