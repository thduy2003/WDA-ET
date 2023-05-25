import { Table } from 'antd';
import React, { useEffect, useState } from 'react';
import { getProvince } from '../../api/ProvinceAPI';
import { columns } from './render';

const ManageProvince = () => {
    const [dataDetail, setDataDetail] = useState()
    const handleFetch = async () => {

        const result = await getProvince()
        setDataDetail(result.data)

    }
    useEffect(() => {
        handleFetch()

    }, [])

    return (
        <div className='bg-[#f1f1f1] w-full'>
            <div className='bg-white rounded-lg p-6 w-full mt-4'>
                <h1>Danh sách tỉnh</h1>
                <Table
                    columns={columns()}
                    scroll={{ y: 240 }}
                    dataSource={dataDetail}
                />
            </div>
        </div>

    );
};

export default ManageProvince;