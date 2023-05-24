import React, {useState} from 'react';
import { Star1 } from 'iconsax-react';
const Star = ({ selected = false, onSelect = f => f }) => (
    <Star1 size="16" color={selected ? "#C2C2C2" : "#F0BD0A"} variant="Bold" onClick={onSelect} />
    );
const StarRating = ({totalStar = 5}) => {
    const [selectedStars, setSelectedStars] = useState(0)
    return (
        <div className='flex gap-1'>
            {
                [...Array(pickedStar)].map((n,i)=> <Star1
                    key={i}
                    size="16"
                    color="#F0BD0A"
                    variant='Bold'
                    
                    onclick={()=>setPickedStar(i)}
                />)
            }
            {
                [...Array(5-pickedStar)].map((n,i)=> <Star1
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