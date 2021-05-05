import React from 'react';
import PostListItem from '../post-list-item/post-list-item';

import './post-list.css';

const PostList = ({posts, setPosts}) => {
    return(
        <ul className='app-list list-group'>
           <PostListItem posts={posts} setPosts={setPosts}/>
        </ul>
    )
}

export default PostList;

