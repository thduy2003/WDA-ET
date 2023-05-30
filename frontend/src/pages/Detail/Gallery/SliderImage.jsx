import React, { useState } from 'react';
import { RelatedImageData } from '../../../data/RelatedImageData';
import { ArrowRight2, ArrowLeft2 } from 'iconsax-react';
const SliderImage = ({ onChangeZoom = f => f, imagesData }) => {
    const [index, setIndex] = useState(0)

    const ChangeIndex = (dir) => {
        dir == "next" ? setIndex(index + 1) : setIndex(index - 1)
    }
    return (
        <div className="w-full h-screen bg-black relative flex justify-center items-center">
            <div className="flex flex-col items-center gap-5">
                <div className="text-[20px] leading-[28px] text-white font-semibold mb-4"> Các hình ảnh liên quan </div>
                <div className="w-[900px] h-[540px]">
                    <img className="w-full h-full object-cover" src={`http://127.0.0.1:6789/public/images/provinces/${imagesData[index]}`}></img>
                </div>
                <div className="flex gap-3">
                    {imagesData.map((n, i) => <div key={i} onClick={() => setIndex(i)} className={`cursor-pointer ${i == index ? 'opacity-100' : 'opacity-30'}`}>
                        <img className="w-[100px] h-[80px]" src={`http://127.0.0.1:6789/public/images/provinces/${imagesData[i]}`}></img>
                    </div>)}
                </div>
            </div>
            <div className="absolute top-9 right-11 cursor-pointer" onClick={onChangeZoom}>
                <img src="../../../../public/images/X.png"></img>
            </div>
            {
                index !== imagesData.length - 1 ?
                    <div className="absolute top-100 right-[230px] cursor-pointer bg-white rounded-[50%] p-2" onClick={() => ChangeIndex("next")}>
                        <ArrowRight2
                            size="20"
                            color="black"
                        />
                    </div> : ""
            }
            {
                index !== 0 ?
                    <div className="absolute top-100 left-[230px] cursor-pointer bg-white rounded-[50%] p-2" onClick={() => ChangeIndex("pre")}>
                        <ArrowLeft2
                            size="20"
                            color="black"
                        />
                    </div> : ""
            }
        </div>
    );
};

export default SliderImage;