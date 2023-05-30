import React, { useRef, useState } from 'react';
import { CloseCircle, Profile2User, ProfileCircle } from 'iconsax-react';
import Button from '../../../components/Button'
import { Global, ArrowDown2, Happyemoji, Gallery, Send2, Lock1 } from 'iconsax-react';
import { useDispatch, useSelector } from 'react-redux';

import { uploadPost } from '../../../actions/PostAction';
import { serverPublic } from '../../../utils';
const PostForm = ({ setModal }) => {
    const [image, setImage] = React.useState(null);

    const dispatch = useDispatch()
    const loading = useSelector(state => state.postReducer.uploading)
    const { user } = useSelector((state) => state.authReducer.authData)


    const [changePri, setChangePri] = useState("off");
    const [pri, setPri] = useState("Công khai")
    function handleClickOn(e, content) {
        e.stopPropagation();
        setChangePri("off")
        setPri(content);
    }

    const content = useRef(null)
    const imageRef = React.useRef(null)
    const onImageChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            let img = e.target.files[0]
            setImage(img)
        }
    }
    const reset = () => {
        setImage(null);
        content.current.value = ""
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (image && content.current.value) {
            const data = new FormData()
            data.append("author_id", user._id)
            data.append("content", content.current.value)
            data.append("image", image)


            try {
                await dispatch(uploadPost(data))
                setModal(false)
                alert('Đăng bài thành công')

            } catch (error) {
                console.log(error)
            }
        }


        reset()
    }
    return (
        <div className="mt-16 z-10 absolute">
            <div className="flex flex-col gap-3 p-9 shadow-lg rounded-[8px] bg-white md:w-[811px] md:translate-x-[45%]">
                <p className="text-[#141716] font-semibold text-[28px]"> Đăng bài </p>
                <div>
                    <div className="flex justify-between mb-4">
                        <div className="flex gap-3 items-center">
                            <img className='w-[48px] h-[48px] rounded-full' src={`${serverPublic}profile/${user?.avatar}`} alt="" />
                            <p className="text-[#141716] font-semibold text-[13px] max-sm:mr-2 md:text-[20px]">{user.name}</p>
                        </div>
                        <div className="flex w-[143px] h-[36px]  justify-between items-center px-2 py-3 border border-solid border-[#D02F3D] rounded-[4px] cursor-pointer relative" onClick={() => setChangePri("on")} >
                            {pri === "Công khai"
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
                                    ? ""
                                    : <div className="absolute p-[10px] bg-white w-[153px] top-[120%] left-0 rounded-[4px] shadow-2xl">
                                        <div className="flex p-2 gap-2 hover:bg-[#F1F1F1] rounded-[4px]" onClick={(e) => handleClickOn(e, "Công khai")}>
                                            <Global
                                                size="20"
                                                color={`${pri === "Công khai" ? '#D02F3D' : '#C2C2C2'}`}
                                                variant="Bold"
                                            />
                                            <p className={`text-[${pri === "Công khai" ? '#D02F3D' : '#C2C2C2'}]`}> Công khai </p>
                                        </div>
                                        <div className={`flex p-2 gap-2 hover:bg-[#F1F1F1] rounded-[4px] `} onClick={(e) => handleClickOn(e, "Chỉ bạn bè")}>
                                            <Profile2User
                                                size="20"
                                                color={`${pri === "Chỉ bạn bè" ? '#D02F3D' : '#C2C2C2'}`}
                                                variant="Bold"
                                            />
                                            <p className={`text-[${pri === "Chỉ bạn bè" ? '#D02F3D' : '#C2C2C2'}]`}> Chỉ bạn bè </p>
                                        </div>
                                        <div className={`flex p-2 gap-2 hover:bg-[#F1F1F1] rounded-[4px] `} onClick={(e) => handleClickOn(e, "Chỉ mình tôi")}>
                                            <Lock1
                                                size="20"
                                                color={`${pri === "Chỉ mình tôi" ? '#D02F3D' : '#C2C2C2'}`}
                                                variant="Bold"
                                            />
                                            <p className={`text-[${pri === "Chỉ mình tôi" ? '#D02F3D' : '#C2C2C2'}]`}> Chỉ mình tôi </p>
                                        </div>
                                    </div>

                            }

                        </div>

                    </div>
                    <div className='flex flex-col bg-[#EAEAEA] w-full rounded-[8px] p-4 cursor-pointer'>
                        <input ref={content} type="text" placeholder="Viết bài đăng của bạn" className='outline-none h-[180px] flex items-start justify-start bg-[#EAEAEA]' />
                        <div className="flex justify-between items-center pt-4 border-t-2 border-solid border-[#C2C2C2]">
                            <div className="flex gap-2">
                                <Happyemoji
                                    size="24"
                                    color="#C2C2C2"
                                />
                                <div className='cursor-pointer' onClick={() => imageRef.current.click()}>
                                    <Gallery
                                        size="24"
                                        color="#C2C2C2"
                                    />
                                    <div style={{ display: 'none' }}>
                                        <input type='file' name='myImage' ref={imageRef} onChange={onImageChange} />
                                    </div>
                                </div>
                            </div>
                            <Button onClick={handleSubmit} type={"primary"} iconPosition={"left"} iconLeft={<Send2 size="20" color="white" variant='Bold'></Send2>} size="small" style={{ color: "white" }} >
                                Đăng bài
                            </Button>
                        </div>
                        {image && <div className='preview-image relative '>
                            <div className='cursor-pointer absolute right-[1rem] top-[0.5rem] ' onClick={() => setImage(null)} >
                                <CloseCircle size="32" color="#d9e3f0" variant="Bold" />
                            </div>
                            <img className='w-full h-[250px] mt-3 object-cover rounded-[0.5rem]' src={URL.createObjectURL(image)} alt="" />
                        </div>}

                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostForm;