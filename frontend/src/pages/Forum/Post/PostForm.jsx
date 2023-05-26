import React,{useState} from 'react';
import { Profile2User, ProfileCircle } from 'iconsax-react';
import Button from '../../../components/Button'
import { Global, ArrowDown2, Happyemoji, Gallery, Send2, Lock1} from 'iconsax-react';
const PostForm = () => {
    const [changePri, setChangePri] = useState("off");
    const [pri, setPri] = useState("Công khai")
    console.log(pri, changePri)
    function handleClickOn (e, content) {
        e.stopPropagation();
        setChangePri("off")
        setPri(content);
    }
    
    return (
        <div className="mt-16 z-10 absolute">
            <div className="flex flex-col gap-3 p-9 shadow-lg rounded-[8px] bg-white w-[811px] translate-x-[45%]">
                <p className="text-[#141716] font-semibold text-[28px]"> Đăng bài </p>
                <div>
                    <div className="flex justify-between mb-4">
                        <div className="flex gap-3 items-center">
                            <ProfileCircle
                                size="48"
                                color="black"
                                variant="Bold"
                            />
                            <p className="text-[#141716] font-semibold text-[20px]">Phan Duy Trọng</p>
                        </div>
                        <div className="flex w-[143px] h-[36px]  justify-between items-center px-2 py-3 border border-solid border-[#D02F3D] rounded-[4px] cursor-pointer relative" onClick={() => setChangePri("on")} >
                                { pri === "Công khai"
                                ? <Global size="20" color="#D02F3D" variant="Bold" />
                                : pri === "Chỉ bạn bè" 
                                ? <Profile2User size="20" color="#D02F3D" variant="Bold" />
                                : <Lock1 size="20" color="#D02F3D" variant="Bold" />
                                }
                        <p className="text-[14px] font-[500] text-[#D02F3D]"> {pri} </p>
                        <ArrowDown2
                            size="20"
                            color="#D02F3D"
                            variant="Bold"
                            />
                        {
                            changePri === "off"
                            ?""
                            : <div className="absolute p-[10px] bg-white w-[153px] top-[120%] left-0 rounded-[4px] shadow-2xl">
                                <div className="flex p-2 gap-2 hover:bg-[#F1F1F1] rounded-[4px]" onClick={(e) => handleClickOn(e,"Công khai")}>
                                    <Global
                                    size="20"
                                    color= {`${pri === "Công khai" ? '#D02F3D': '#C2C2C2'}`}
                                    variant="Bold"
                                    />
                                    <p className={`text-[${pri === "Công khai" ? '#D02F3D': '#C2C2C2'}]`}> Công khai </p>
                                </div>
                                <div className={`flex p-2 gap-2 hover:bg-[#F1F1F1] rounded-[4px] `} onClick={(e) => handleClickOn(e,"Chỉ bạn bè")}>
                                    <Profile2User
                                    size="20"
                                    color={`${pri === "Chỉ bạn bè" ? '#D02F3D': '#C2C2C2'}`}
                                    variant="Bold"
                                    />
                                    <p className={`text-[${pri === "Chỉ bạn bè" ? '#D02F3D': '#C2C2C2'}]`}> Chỉ bạn bè </p>
                                </div>
                                <div className={`flex p-2 gap-2 hover:bg-[#F1F1F1] rounded-[4px] `} onClick={(e) => handleClickOn(e,"Chỉ mình tôi")}>
                                    <Lock1
                                    size="20"
                                    color={`${pri === "Chỉ mình tôi" ? '#D02F3D': '#C2C2C2'}`}
                                    variant="Bold"
                                    />
                                    <p className={`text-[${pri === "Chỉ mình tôi" ? '#D02F3D': '#C2C2C2'}]`}> Chỉ mình tôi </p>
                                </div>
                             </div>
                        }
                        </div>
                    </div> 
                    <div className='flex flex-col bg-[#EAEAEA] w-full rounded-[8px] p-4 cursor-pointer'> 
                        <input type="text" placeholder="Viết bài đăng của bạn" className='outline-none h-[180px] flex items-start justify-start bg-[#EAEAEA]'/>
                        <div className="flex justify-between items-center pt-4 border-t-2 border-solid border-[#C2C2C2]">
                            <div className="flex gap-2">
                                <Happyemoji
                                    size="24"
                                    color="#C2C2C2"
                                    />
                                <Gallery
                                    size="24"
                                    color="#C2C2C2"
                                    />
                            </div>
                            <Button type={"primary"} iconPosition={"left"} iconLeft={<Send2 size="20" color="white" variant='Bold'></Send2>} size="small" style={{color:"white"}} >
                                Đăng bài
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostForm;