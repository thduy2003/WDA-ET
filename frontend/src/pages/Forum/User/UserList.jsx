import React from 'react';
import { useSelector } from 'react-redux';
import User from './User';

const UserList = ({ allUsers }) => {


    if (!allUsers) return <span>Chưa có user nào</span>

    return (
        <div className="flex flex-col gap-4 max-sm:max-h-[300px] overflow-y-auto">
            {allUsers.map((n, i) => <User data={n} key={i}></User>)}
        </div>
    );
};

export default UserList;