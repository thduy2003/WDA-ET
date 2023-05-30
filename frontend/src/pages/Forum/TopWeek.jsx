import React from 'react';



const TopWeek = ({ img, top, name, province, view }) => {

    return (
        <div className="rounded-[8px] border border-solid border-[#EAEAEA] overflow-hidden cursor-pointer hover:border-[#D02F3D]">
            <div className="h-[75px]">
                <img src={img} className="w-full h-full object-cover" />
            </div>
            <div className="flex p-4 gap-2  ">
                <div className="text-[#D02F3D] text-xl font-semibold ">#{top}</div>
                <div className="w-full">
                    <div className="text-[#141716] font-semibold text-[20px] mb-1">{name} </div>
                    <div className="text-[#888888] text-[12px] flex justify-between ">
                        <p className='mr-[5px]'>{province}</p>
                        <p className='whitespace-nowrap'>{view} Review</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopWeek;