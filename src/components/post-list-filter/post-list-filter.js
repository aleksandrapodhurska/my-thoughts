import React from 'react';

const PostFilter = ({setFilter}) => {
    return(
        <div className='btn-group'>
            <button
                onClick={() => setFilter('like')}
                className='btn btn-outline-info'
                >Liked</button>
            <button
                onClick={() => setFilter('all')}
                className='btn btn-outline-secondary'>All</button>
        </div>
    )
}

export default PostFilter;