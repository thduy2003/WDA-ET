import React, {useState} from 'react';
import { RelatedImageData } from '../../../data/RelatedImageData';
import { ArrowRight2, ArrowLeft2 } from 'iconsax-react';
const SliderImage = ({onChangeZoom = f => f}) => {
    const [index, setIndex] = useState(1)
    console.log(index)
    const ChangeIndex = (dir) => {
        dir == "next" ? setIndex(index+1) : setIndex(index-1)
    }
    return (
        <div className="w-full h-screen bg-black absolute flex justify-center items-center">
            <div className="flex flex-col items-center gap-5">
            <div className="text-[20px] leading-[28px] text-white font-semibold mb-4"> Các hình ảnh liên quan </div>
                <div className="w-[900px] h-[540px]">
                    <img className="w-full h-full object-cover" src={RelatedImageData[index].source}></img>
                </div>
                <div className="flex gap-3">
                    {RelatedImageData.map((n,i) => <div key={i} onClick={()=>setIndex(i)} className={`cursor-pointer ${i==index ? 'opacity-100' :'opacity-30'}`}> 
                        <img className="w-[100px] h-[80px]" src={RelatedImageData[i].source}></img>
                    </div>)}
                </div>
            </div>
            <div className="absolute top-10 right-10 cursor-pointer" onClick={onChangeZoom}>
                <img src="../../../../public/images/X.png"></img>
            </div>
            <div className="absolute top-100 right-[230px] cursor-pointer bg-white rounded-[50%]" onClick={() => ChangeIndex("next")}>
            <ArrowRight2
                size="40"
                color="black"
                />
            </div>
            <div className="absolute top-100 left-[230px] cursor-pointer bg-white rounded-[50%]" onClick={() => ChangeIndex("pre")}>
            <ArrowLeft2
                size="40"
                color="black"
                />
            </div>
        </div>
    );
};

export default SliderImage;