import React, {useState} from 'react';
import { Star1 } from 'iconsax-react';
const Star = ({ selected = false, onSelect = f => f }) => (
    <Star1 size="16" color={selected ? "#C2C2C2" : "#F0BD0A""#C2C2C2"} variant="Bold" onClick={onSelect} />
    );

const createArray = length => [...Array(length)];
const StarRating = ({totalStars = 5}) => {
    const [selectedStars, setSelectedStars] = useState(0)
    return (
        <div className="flex">
            {createArray(totalStars).map((n,i) => (
                <Star
                    key={i}
                    selected={selectedStars > i}
                    onSelect={() => setSelectedStars(i+1)}
                ></Star>
            ))}
        </div>
    );
};

export default StarRating;