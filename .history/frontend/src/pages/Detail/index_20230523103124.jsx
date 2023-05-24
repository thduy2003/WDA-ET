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
                        <div className="text-[16px] leading-[24px] text-[#141716] mb-6">
                            
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