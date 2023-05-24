import React, {useState} from 'react';
import { RelatedImageData } from '../../../data/RelatedImageData';
const Gallery = () => {
    let [zoom, setZoom] = useState('false');
    return (
    <>
        <div className="grid grid-cols-3 gap-1 relative">
            {
                RelatedImageData.map((n,i)=> i<6 ? <div key={i} onClick={()=> useState(false)}> 
                    <img src={n.source} className={`w-full h-full object-cover rounded-md cursor-pointer ${i==5 ?`opacity-40` : ""}`}></img>
                </div> : "")
            }
                <p className="absolute bottom-6 right-10 text-[20px] leading-[28px] text-[#141716] font-semibold ">+6</p>
        </div>
        
    </>
    );
};

export default Gallery;