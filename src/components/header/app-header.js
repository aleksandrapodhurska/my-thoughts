import React from 'react';
import './app-header.css';

const Header = () => {
    return(
        <div className='app-header d-flex align-items-center'>
            <h1>My thoughts</h1>
            <div className='subtitle'>
                <h5>5 thougts</h5>
                <h5>3 liked</h5>
            </div>
        </div>
    )
}

export default Header;  