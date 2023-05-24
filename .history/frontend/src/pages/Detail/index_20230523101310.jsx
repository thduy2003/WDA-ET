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
                    <div className=""> Tổng quan </div>
                    <div className="">Nằm ở vị trí tiếp giáp với Thành phố Hồ Chí Minh và thuộc khu vực đồng bằng sông Cửu Long, Long An đã trở thành cửa ngõ quan trọng để giao thương kinh tế cho các tỉnh miền Tây. Trước đây, vùng đất này từng là địa bàn quan trọng của vương quốc Phù Nam - Chân Lạp, thuộc Gia Định. 
                    Với vị trí thuận lợi như thế, dần dần các địa điểm du lịch Long An cũng được đến gần hơn với nhiều du khách. Đặc biệt là không khí bình yên dân dã đậm chất miền Tây ở ngay kế bên Sài Gòn này đã trở thành nơi xả stress cuối tuần thú vị cho dân Sài thành. 
                    Bên cạnh đó, Long An còn mang nhiều điểm đặc sắc trong văn hóa thông qua các lễ hội như lễ Kỳ Yên, lễ cầu mưa, lễ tống phong,... Nếu may mắn đến được vào thời điểm này, bạn sẽ được hòa vào không khí sôi động từ các trò chơi dân gian như đua thuyền, kéo co, đánh vật vô cùng đặc sắc.</div>
                    <   /div>
                    </div>
                {/* Sidebar */}
                <div className="w-[30%]">

                </div>
            </div>
        </div>
    );
};

export default Detail;