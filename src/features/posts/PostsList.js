import { useSelector } from "react-redux";
import { selectAllPosts } from './postsSlice'
import React from 'react'

export default function PostsList() {
    const posts = useSelector(selectAllPosts)

    const renderedPosts = posts.map( post => (
        <div key={post.id} className='container border w-100 my-2 rounded'>
            <h4>{post.title}</h4>
            <p>{post.content.substring(0, 100)}</p>
        </div>
    ))

    return (
        <div className='container border w-75 mt-4'>
            <h2>Posts</h2>
            {renderedPosts}
        </div>
    )
};
