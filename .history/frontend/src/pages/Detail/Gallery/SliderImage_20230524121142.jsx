import React, {useState} from 'react';
import { RelatedImageData } from '../../../data/RelatedImageData';
const SliderImage = () => {
    let [index, setIndex] = useState(1)
    return (
        <div className="w-full h-screen bg-black absolute flex justify-center items-center">
            <div className="">
                <div className="w-[800px] h-[300px]">
                    <img className="w-full h-full object-cover" src={RelatedImageData[1].source}></img>
                </div>
                <div className="flex">
                    {RelatedImageData.map((n,i) => <div key={i}> </div>)}
                </div>
            </div>
        </div>
    );
};

export default SliderImage;