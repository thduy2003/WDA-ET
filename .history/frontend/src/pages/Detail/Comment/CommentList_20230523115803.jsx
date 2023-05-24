import React from 'react';

const CommentList = ({list}) => {
    return (
        <div>
            {list.map(() => <Com)}
        </div>
    );
};

export default CommentList;