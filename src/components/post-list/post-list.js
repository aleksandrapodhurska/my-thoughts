import React from 'react';
import PostListItem from '../post-list-item/post-list-item';

import './post-list.css';

const PostList = ({posts, setPosts, handleDelete, onImportant, onLike, searchedPosts, filtredPosts}) => {
    return(
        <ul className='app-list list-group'>
           <PostListItem posts={posts} setPosts={setPosts} handleDelete={handleDelete} onImportant={onImportant} onLike={onLike} searchedPosts={searchedPosts} filtredPosts={filtredPosts}/>
        </ul>
    )
}

export default PostList;

