import React, {useState} from 'react';
import {v4 as uuidv4} from 'uuid';
import Header from '../header/app-header';
import SearchPanel from '../search-panel/search-panel';
import PostFilter from '../post-list-filter/post-list-filter';
import PostList from '../post-list/post-list';
import PostAddForm from '../post-add-form/post-add-form';


import './app.css';

const App = () => {
    const [posts, setPosts] = useState([
        {
            id: uuidv4(),
            label: 'What do you think?',
            important: false,
            like: false
        }
        ,
        {
            id: uuidv4(),
            label: 'Wanna coffee?',
            important: false,
            like: false
        },
        {
            id: uuidv4(),
            label: 'Just another text',
            important: false,
            like: false
        }
    ]);

    return(
        <div className='app'>
            <Header/>
            <div className='search-panel d-flex'>
                <SearchPanel/>
                <PostFilter/>
            </div>
            <PostList posts={posts} setPosts={setPosts}/>
            <PostAddForm posts={posts} setPosts={setPosts}/>
        </div>
    )
}

export default App;