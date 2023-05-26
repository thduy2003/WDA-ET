import React from 'react';
import { PostData } from '../../../data/PostData';
import Post from './Post';
const PostList = ({showComment = f => f}) => {
    return (
        <div className="flex flex-col gap-6 mt-6">
            {PostData.map((n,i) => <Post data={n} showComment={showComment} key={i}></Post>)}
        </div>
    );
};

export default PostList;