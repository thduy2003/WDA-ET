import React, {useState} from 'react';
import { Star1 } from 'iconsax-react';
const Star = ({ selected = false, onSelect = f => f }) => (
    <Star1 size="16" color={selected ? "#C2C2C2" : "#F0BD0A"} variant="Bold" onClick={onSelect} />
    );
const StarRating = ({totalStar = 5}) => {
    const [selectedStars, setSelectedStars] = useState(0)
    return (
        <>
{createArray(totalStars).map((n, i) => (
<Star
key={i}
selected={selectedStars > i}
onSelect={() => setSelectedStars(i + 1)}
/>
))}
<p>
{selectedStars} of {totalStars} stars
</p>
</>
    );
};

export default StarRating;