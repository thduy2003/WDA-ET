import React, {useState} from 'react';
import { Star1 } from 'iconsax-react';
const StarRating = () => {
    const [pickedStar, setPickedStar] = useState(0)
    return (
        <div className="flex">
            {
                [...Array(5)].map((n,i)=> {
                    <Star1
                        key={i}
                        size="24"
                        color="#F0BD0A"
                        variery="Bold"
                    >
                    </Star1>
                })
            }
        </div>
    );
};

export default StarRating;