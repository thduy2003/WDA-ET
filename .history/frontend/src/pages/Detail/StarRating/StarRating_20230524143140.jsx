import React, {useState} from 'react';
import { Star1 } from 'iconsax-react';
const StarRating = () => {
    const [pickedStar, setPickedStar] = useState(0)
    return (
        <div>
            {
                Array(5).map((n,i)=> {
                    <Star1
                })
            }
        </div>
    );
};

export default StarRating;