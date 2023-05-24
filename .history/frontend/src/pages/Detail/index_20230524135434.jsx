import { Col, Dropdown, Popconfirm, Row, Select } from 'antd';
import { ArrowCircleRight2, Call, Clock, CloseCircle, Location, ProfileCircle, SearchNormal1 } from 'iconsax-react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import Card from '../../components/Card';
import Carousel from '../../components/Carousel';
import { InputGroup } from '../../components/InputGroup';
import Logo from '../../components/Logo';
import { CardData } from '../../data/CardData';
import { HistoryData } from '../../data/HistoryData';
import { LocationData } from '../../data/LocationData';
import { VillageData } from '../../data/VillageData';
import Banner from '../../../public/images/banner.png'
import Comment from './Comment/Comment';
import { Archive, Layer, Airplane} from 'iconsax-react';
import Gallery from './Gallery/Gallery';
import SliderImage from './Gallery/SliderImage';
const Detail = ({position = "Long An"}) => {
    let [zoom, setZoom] = useState('false');
    
    const [tabActive, setTabActive] = useState(1)

    const handleChangeTab = (e) => {
        if (e.target.innerText === 'Danh lam thắng cảnh') {
            setTabActive(1)
        }
        if (e.target.innerText === 'Di tích lịch sử') {
            setTabActive(2)
        }
        if (e.target.innerText === 'Làng nghề truyến thống') {
            setTabActive(3)
        }
    }

    return (
        // container
        <div className="flex flex-col align-center justify-center relative">
        {
            zoom == 'false' ?
            <>
            <div className="flex justify-between gap-14  w-[90%] mt-14">
                {/* Main */}
                <div className="w-[75%]">
                    <div>  
                        <div className="text-[28px] leading-[36px] text-[#141716] font-semibold mb-6">  Tổng quan </div>
                        <div className="text-[16px] leading-[24px] text-[#141716] mb-6 flex flex-col gap-6">
                            <div>    
                                Nằm ở vị trí tiếp giáp với Thành phố Hồ Chí Minh và thuộc khu vực đồng bằng sông Cửu Long, Long An đã trở thành cửa ngõ quan trọng để giao thương kinh tế cho các tỉnh miền Tây. Trước đây, vùng đất này từng là địa bàn quan trọng của vương quốc Phù Nam - Chân Lạp, thuộc Gia Định.
                            </div>
                            <div>
                                Với vị trí thuận lợi như thế, dần dần các địa điểm du lịch Long An cũng được đến gần hơn với nhiều du khách. Đặc biệt là không khí bình yên dân dã đậm chất miền Tây ở ngay kế bên Sài Gòn này đã trở thành nơi xả stress cuối tuần thú vị cho dân Sài thành.
                            </div>
                            <div>
                                Bên cạnh đó, Long An còn mang nhiều điểm đặc sắc trong văn hóa thông qua các lễ hội như lễ Kỳ Yên, lễ cầu mưa, lễ tống phong,... Nếu may mắn đến được vào thời điểm này, bạn sẽ được hòa vào không khí sôi động từ các trò chơi dân gian như đua thuyền, kéo co, đánh vật vô cùng đặc sắc.
                            </div>
                        </div>
                    </div>
                    <div>  
                        <div className="text-[28px] leading-[36px] text-[#141716] font-semibold mb-6">  Những điều thú vị </div>
                        <div className="text-[16px] leading-[24px] text-[#141716] mb-6 flex flex-col gap-6">
                            <div>    
                                Đến Long An, du khách sẽ được chiêm ngưỡng vẻ đẹp của một vùng quê thanh bình, cùng hòa mình vào không khí sôi nổi của lễ hội, thả hồn theo từng cung bậc cảm xúc của những làn điệu đờn ca tài tử hay trải nghiệm du lịch sinh thái. Tháng giêng là mùa lễ hội và có các lễ hội đặc sắc tại Long An như Lễ hội Làm Chay ở huyện Châu Thành và Lễ Vía bà Ngũ Hành ở huyện Cần Giuộc. Lễ hội Làm Chay diễn ra vào ngày 15 và 16 tháng Giêng, có ý nghĩa tưởng nhớ tiền nhân và cầu siêu cho vong linh liệt sĩ. Lễ Vía bà Ngũ Hành diễn ra từ ngày 18 đến 21 tháng Giêng và là dịp để người dân thể hiện ước vọng về cuộc sống no đủ và mùa màng bội thu.
                            </div>
                            <div className="flex align-center justify-center ">
                                <div className="w-[465px] ">
                                    <img src={Banner} className="w-full h-full object-cover"></img>
                                </div>
                            </div>
                            <div>
                                Ngoài ra, Long An còn có các điểm du lịch sinh thái thú vị như Khu du lịch sinh thái Làng nổi Tân Lập với khu rừng tràm nguyên sinh và Khu Bảo tồn và Phát triển dược liệu Đồng Tháp Mười, nơi du khách có thể khám phá về hệ thực vật và cây dược liệu. Còn có những điểm đến khác như Làng cổ Phước Lộc Thọ, Khu đô thị, thương mại, dịch vụ Cát Tường Phú Sinh và Khu Bảo tồn đất ngập nước Láng Sen. Ghé thăm Long An sẽ giúp du khách hiểu thêm về vùng đất Trung dũng kiên cường, toàn dân đánh giặc.
                            </div>
                        </div>
                    </div>
                    <div> 
                        <div className="text-[28px] leading-[36px] text-[#141716] font-semibold mb-6">  Đánh giá </div>
                        <Comment pos = {position}>
                        </Comment>
                    </div>
                </div>
                {/* Sidebar */}
                <div className="w-[30%] max-w-[361px]">
                    <Button iconPosition={"left"} type={"primary"} onClick={() => {}} iconLeft={<Archive variant='Bold'></Archive>} style={{
                        borderRadius: "8px",
                        width:"100%",
                        display:"flex",
                        justifyContet:"center",
                        alignItem:"center",
                        paddingTop:"12px",
                        paddingBottom:"12px"
                    }} > Lưu địa điểm </Button>

                    <div className="mt-6 p-4 shadow-md rounded-md">
                        <div className="text-[20px] leading-[28px] text-[#141716] font-semibold mb-4">Thông tin chung </div>
                        <div className="flex flex-col gap-2">
                            <div className="flex gap-4">
                                <Layer size="20" color="#D02F3D" variant="Bold"/>
                                <p>Diện tích: 4.494,70km2</p>
                            </div>
                            <div className="flex gap-4">
                                <Airplane size="20" color="#D02F3D" variant="Bold"/>
                                <p>Khách du lịch: 650.000 người</p>
                            </div>
                            <div className="flex gap-4">
                                <Location size="20" color="#D02F3D" variant="Bold"/>
                                <p>Địa danh tham quan: 22 chỗ</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 p-4 shadow-md rounded-md">
                        <div className="text-[20px] leading-[28px] text-[#141716] font-semibold mb-4">Các hình ảnh liên quan </div>
                        <Gallery onZoom = {() => {
                        console.log(zoom)
                        setZoom('true')}}></Gallery>
                    </div>
                </div>
            </div>
            <div>
                <div className='px-[92px] mt-[56px] mb-[120px] bg-white'>
                    <h1 className='text-[28px] leading-[36px] text-[#141716] font-semibold'>Địa điểm được quan tâm</h1>
                    <div className='w-fit flex mt-[24px] mb-6' style={{ borderBottom: '1.5px solid #C2C2C2' }}>
                        <div onClick={(e) => handleChangeTab(e)} className={`cursor-pointer pb-2 mb-[-1px] text-xl ${tabActive === 1 ? 'border-b-[1.5px] border-b-p1 font-semibold ' : 'text-third'}`} >Danh lam thắng cảnh</div>
                        <div onClick={(e) => handleChangeTab(e)} className={`mx-9 cursor-pointer pb-2 mb-[-1px] text-xl ${tabActive === 2 ? 'border-b-[1.5px] border-b-p1 font-semibold ' : 'text-third'}`}>Di tích lịch sử</div>
                        <div onClick={(e) => handleChangeTab(e)} className={`cursor-pointer pb-2 mb-[-1px] text-xl ${tabActive === 3 ? 'border-b-[1.5px] border-b-p1 font-semibold ' : 'text-third'}`}>Làng nghề truyến thống</div>
                    </div>
                    <div className='overflow-hidden'>
                        <Carousel
                            margin={32}
                            datas={tabActive === 1 ? CardData : tabActive === 2 ? HistoryData : VillageData}

                            items={5}
                            renderItem={item => {
                                return (
                                    <Card data={item} widthImage={300} heightImage={257} />
                                );
                            }}
                        />
                    </div>
                </div>
            </div>
            </>
            : <SliderImage onChangeZoom={() => setZoom('false')}></SliderImage>
            }
        </div>
    );
};

export default Detail;