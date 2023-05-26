import React from 'react';
import User from './User';
import { ForumUserData } from '../../../data/ForumUserData';
const UserList = () => {
    return (
        <div className="flex flex-col gap-4">
            {ForumUserData.map((n,i)=> <User data={n} key={i}></User>)}
        </div>
    );
};

export default UserList;