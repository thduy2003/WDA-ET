import { Space } from 'antd';
import React from 'react';
export const columns = (handleDelete, showModal) => {
    return [
        {
            title: "Tên tỉnh",
            dataIndex: "name",
            key: "name",
        },
        {
            title: "Diện tích (km2)",
            dataIndex: "area",
            key: "area",
        },
        {
            title: "Khách du lịch (người)",
            dataIndex: "num_traveler",
            key: "num_traveler",
        },
        {
            title: "Số lượng địa danh",
            key: "place_num",
            dataIndex: "place_num",
        },
        {
            title: "Action",
            key: "action",
            render: (_, record) => (
                <Space size='middle'>
                    <button >Edit</button>
                    <button>Delete</button>
                </Space>
            ),
        },
    ];
};
