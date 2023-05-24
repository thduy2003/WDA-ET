import React, { useEffect, useState } from 'react';
import { getProvince } from '../../api/ProvinceAPI';

const ManageLandMark = () => {
    const [dataDetail, setDataDetail] = useState()
    const handleFetch = async () => {

        const result = await getProvince()
        setDataDetail(result.data)

    }
    useEffect(() => {
        handleFetch()

    }, [])
    return (
        <div>

        </div>
    );
};

export default ManageLandMark;