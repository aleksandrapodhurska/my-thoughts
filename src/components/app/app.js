import React, {useState, useRef} from 'react';
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
            like: true
        }
    ]);

    const inputRef = useRef();
    const handleAdding = (e) => {
        e.preventDefault();
        const label = e.target.addPost.value;
        if (!label) return;
        const newPost = {
            id: uuidv4(),
            label,
            important: false,
            like: false
        };
        setPosts([...posts, newPost]);
        inputRef.current.value = '';
    }

    const handleDelete = (id) => {
        setPosts((posts => {
            return posts.filter((item) => item.id !== id);
        }));
    }

    const onImportant = (id) => {
        setPosts(posts.map((item) => (item.id === id) ? {...item, important: !item.important} : item));
    }

    const onLike = (id) => {
        setPosts(posts.map((item) => (item.id === id) ? {...item, like: !item.like} : item));
    }

    return(
        <div className='app'>
            <Header/>
            <div className='search-panel d-flex'>
                <SearchPanel/>
                <PostFilter/>
            </div>
            <PostList posts={posts} setPosts={setPosts} handleDelete={handleDelete} onImportant={onImportant} onLike={onLike}/>
            <PostAddForm handleAdding={handleAdding} inputRef={inputRef}/>
        </div>
    )
}

export default App;