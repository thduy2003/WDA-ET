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

const Detail = () => {
    return (
        // container
        <div className="flex align-center justify-center">
            <div className="flex bg-gray-200 w-[90%] mt-14">
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
                            <div className="">
                                
                            </div>
                            <div>
                                Bên cạnh đó, Long An còn mang nhiều điểm đặc sắc trong văn hóa thông qua các lễ hội như lễ Kỳ Yên, lễ cầu mưa, lễ tống phong,... Nếu may mắn đến được vào thời điểm này, bạn sẽ được hòa vào không khí sôi động từ các trò chơi dân gian như đua thuyền, kéo co, đánh vật vô cùng đặc sắc.
                            </div>
                        </div>
                    </div>
                </div>
                {/* Sidebar */}
                <div className="w-[30%]">

                </div>
            </div>
        </div>
    );
};

export default Detail;