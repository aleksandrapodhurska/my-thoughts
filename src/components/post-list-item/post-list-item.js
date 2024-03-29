import React from 'react';
import './post-list-item.css';
import star from './free-icon-stars-488577.png';
import bin from './trash-bin.png'
import heart from './favourite.svg'

const PostListItem = ({posts, setPosts, handleDelete, onImportant, onLike, searchedPosts, filtredPosts}) => {
    return(
        <div>
            {searchedPosts.map((post) => (
                <li className={`
                app-list-item list-group-item d-flex justify-content-between
                ${post.important ? " important" : ""} 
                ${post.like ? " like" : ""}`}
                key={post.id}
                onDoubleClick={() => onLike(post.id)}
                // data-bs-toggle="tooltip" data-bs-placement="top"
                title="Doubleclick to like or unlike"
                >
                <span className='app-list-item-label'>{post.label}</span>
                <div className='d-flex justify-content-center align-items-center'>
                    <span className='fa-heart'>
                        <img src={heart} alt='like' className='btn-img heart'/>
                    </span>
                    <button 
                        onClick={() => onImportant(post.id)}
                        className={'btn-star'}
                        >
                        <img src={star} alt='important mark' className='btn-img'/>
                    </button>
                    <button 
                        onClick={() => handleDelete(post.id)} className='btn-trash'>
                        <img src={bin} alt='delete' className='btn-img'/>
                    </button>
                </div>
                
            </li>
            ))}
        </div>
            

    )
}

export default PostListItem;