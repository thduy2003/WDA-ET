import React, {useState} from 'react';
import { Star1 } from 'iconsax-react';
const StarRating = () => {
    const [pickedStar, setPickedStar] = useState(0)
    return (
        <div className='flex gap-1'>
                        {
                            [...Array(5)].map((n,i)=> <Star1
                                key={i}
                                size="16"
                                color="#F0BD0A"
                                variant='Bold'
                            />)
                        }
                        {
                            [...Array(5-Number(data.star))].map((n,i)=> <Star1
                                key={i}
                                size="16"
                                color="#C2C2C2"
                                variant='Bold'
                            />)
                        }
                        <div className="ml-3">{data.general}</div>
                    </div>
    );
};

export default StarRating;