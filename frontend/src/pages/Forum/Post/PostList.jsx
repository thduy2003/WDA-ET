import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getTimelinePosts } from '../../../actions/PostAction';
import { PostData } from '../../../data/PostData';
import Post from './Post';
const PostList = ({ showComment = f => f, getPostId = f => f }) => {
    const dispatch = useDispatch()
    const params = useParams()
    const { user } = useSelector((state) => state.authReducer.authData)
    let { posts, loading } = useSelector((state) => state.postReducer)
    useEffect(() => {
        const fetchPosts = async () => {
            await dispatch(getTimelinePosts(user._id))
        }
        fetchPosts()
    }, [])
    if (!posts) return "no posts"
    if (params.id) posts = posts.filter((post) => post.userId === params.id)
    return (
        <div className="flex flex-col gap-6 mt-6">
            {posts.map((n, i) => <Post data={n} getPostId={getPostId} showComment={showComment} key={i}></Post>)}
        </div>
    );
};

export default PostList;