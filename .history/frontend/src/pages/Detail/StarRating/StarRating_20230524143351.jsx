import React, {useState} from 'react';
import { Star1 } from 'iconsax-react';
const StarRating = () => {
    const [pickedStar, setPickedStar] = useState(0)
    return (
        <div>
            {
                Array(5-pickedStar).map((n,i)=> {
                    <Star1
                        size="24"
                        color='#F0BD0A'
                        variery="Bold"
                    >
                    </Star1>
                })
            }
        </div>
    );
};

export default StarRating;