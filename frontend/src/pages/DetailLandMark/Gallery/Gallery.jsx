import React, { useState } from 'react';
import { RelatedImageData } from '../../../data/RelatedImageData';

const Gallery = ({ onZoom = f => f, imagesData }) => {
    return (
        <>
            <div className="grid grid-cols-3 gap-1 relative">
                {
                    imagesData.map((n, i) => i < 6 ? <div key={i} onClick={onZoom}>
                        <img src={`http://127.0.0.1:6789/public/images/landmarks/${n}`} className={`w-full h-full object-cover rounded-md cursor-pointer ${i == 5 ? `opacity-40` : ""}`}></img>
                    </div> : "")
                }
                <p className="absolute bottom-6 right-10 text-[20px] leading-[28px] text-[#141716] font-semibold ">+{imagesData.length - 6 > 0 ? imagesData.length - 6 : ''}</p>
            </div>
        </>
    );
};

export default Gallery;