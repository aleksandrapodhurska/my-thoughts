import React from 'react';
import './app-header.css';

const Header = ({postsTotal, postsLiked}) => {
    return(
        <div className='app-header d-flex align-items-center'>
            <h1>My thoughts</h1>
            <div className='subtitle'>
                <h5>{postsTotal} thougts</h5>
                <h5>{postsLiked} liked</h5>
            </div>
        </div>
    )
}

export default Header;  