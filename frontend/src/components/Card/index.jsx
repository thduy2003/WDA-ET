import React, { useEffect } from 'react';



import { Popover } from 'antd';

import SaveIcon from '../Icons/SaveIcon';

const Card = props => {
    const { data, widthImage, heightImage } = props;


    const classNameImage = `rounded-t-lg w-full max-w-[${widthImage}px] h-[${heightImage}px] flex-shrink-0 object-cover`;
    const classCard = `min-w-[${widthImage}px] flex flex-col  bg-white border border-gray-200 rounded-xl relative hover:shadow-lg hover:shadow-gray-100`;

    return (
        <div
            className={classCard}
            style={{ minWidth: `${widthImage}px`, maxWidth: `${widthImage}px`, boxShadow: '0px 2px 8px 2px rgba(0, 0, 0, 0.04)' }}>
            <div className="cursor-pointer absolute w-[36px] h-[36px] rounded-[4px] flex items-center justify-center bg-primary top-[3.8%] right-[3.8%]">
                <SaveIcon />
            </div>

            <a
                href={`/`}>
                <img className={classNameImage} style={{ width: widthImage, height: heightImage }} src={data.image} />
            </a>
            <div className="p-4 flex flex-col flex-1">
                <div className="flex flex-1 flex-col">

                    <a
                        href={`/`}>
                        <h5 className="mb-[2px] text-xl font-semibold line-clamp-1  text-primary ">
                            {data.title}
                        </h5>
                    </a>

                    <p className="mb-3 text-[14px] leading-5 font-normal text-[#888888] ">
                        {data.place}
                    </p>
                </div>
                <div className="flex flex-col flex-1 mb-4 justify-between   text-sm font-medium text-black rounded-lg ">
                    <div className=" text-sm mb-auto font-normal  line-clamp-3">
                        {data.desc}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
