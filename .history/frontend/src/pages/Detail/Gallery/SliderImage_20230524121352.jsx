import React, {useState} from 'react';
import { RelatedImageData } from '../../../data/RelatedImageData';
const SliderImage = () => {
    let [index, setIndex] = useState(1)
    return (
        <div className="w-full h-screen bg-black absolute flex justify-center items-center">
            <div className="flex flex-col items-center">
                <div className="w-[800px] h-[300px]">
                    <img className="w-full h-full object-cover" src={RelatedImageData[1].source}></img>
                </div>
                <div className="flex">
                    {RelatedImageData.map((n,i) => <div key={i} onClick={useState()}> 
                        <img className="w-[100px] h-[80px]" src={RelatedImageData[i].source}></img>
                    </div>)}
                </div>
            </div>
        </div>
    );
};

export default SliderImage;