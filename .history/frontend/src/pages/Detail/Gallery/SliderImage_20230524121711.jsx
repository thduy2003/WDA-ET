import React, {useState} from 'react';
import { RelatedImageData } from '../../../data/RelatedImageData';
const SliderImage = () => {
    let [index, setIndex] = useState(1)
    return (
        <div className="w-full h-screen bg-black absolute flex justify-center items-center">
            <div className="flex flex-col items-center gap-5">
                <div className="w-[1000px] h-[500px]">
                    <img className="w-full h-full object-cover" src={RelatedImageData[index].source}></img>
                </div>
                <div className="flex">
                    {RelatedImageData.map((n,i) => <div key={i} onClick={()=>setIndex(i)} className="cursor-pointer opacity-30"> 
                        <img className="w-[100px] h-[80px]" src={RelatedImageData[i].source}></img>
                    </div>)}
                </div>
            </div>
        </div>
    );
};

export default SliderImage;