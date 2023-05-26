import React, {useState} from 'react';

const User = ({data}) => {
    const [follow, setFollow] = useState(data.follow)
    console.log(follow)
    return (
        <div className="flex justify-between items-center">
            <div className="flex gap-4">
                <div className="flex gap-4">
                    <div className=''>
                        <img src={data.avatar}></img>
                    </div>
                    <div className="flex flex-col">
                        <div className="text-[#141716] font-semibold text-[20px]">{data.userName}</div>
                        <div className="text-[#888888] text-[12px]">{data.role}</div>
                    </div>
                </div>
            </div>
            {
                follow === 'no' 
                ? 
                <div className= "py-2 px-3 text-[#D02F3D] text-[14px] font-semibold border border-[#D02F3D] rounded-[4px] cursor-pointer" onClick={() => setFollow("yes")}>
                    Theo dõi
                </div> 
                :
                <div className= "py-2 px-3 text-black text-[14px] bg-[#F1F1F1] rounded-[4px] font-semibold ">
                    Đã theo dõi
                </div> 
            }
        </div>
    );
};

export default User;