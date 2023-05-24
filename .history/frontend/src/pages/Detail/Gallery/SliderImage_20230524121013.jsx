import React, {useState} from 'react';
import { RelatedImageData } from '../../../data/RelatedImageData';
const SliderImage = () => {
    let [index, setIndex] = useState(1)
    return (
        <div className="w-full h-screen bg-black absolute flex justify-center items-center">
            <div className="">
                <div className="w-[1000px] h-[800px]">
                    <img className="w-full h-full object-cover" src={RelatedImageDataơ}></img>
                </div>
                <div className="flex">
                    
                </div>
            </div>
        </div>
    );
};

export default SliderImage;