import React from 'react';
import Header from '../header/app-header';
import SearchPanel from '../search-panel/search-panel';
import PostFilter from '../post-list-filter/post-list-filter';
import PostList from '../post-list/post-list';
import PostAddForm from '../post-add-form/post-add-form';

import './app.css';

const App = () => {
    return(
        <div className='app'>
            <Header/>
            <div className='search-panel d-flex'>
                <SearchPanel/>
                <PostFilter/>
            </div>
            <PostList/>
            <PostAddForm/>
        </div>
    )
}

export default App;