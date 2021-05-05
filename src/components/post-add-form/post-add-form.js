import React, {useRef} from 'react';
import {v4 as uuidv4} from 'uuid';
import './post-add-form.css';

const PostAddForm = ({posts, setPosts}) => {
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
    return(
        <form
        onSubmit={handleAdding}
        className='bottom-panel d-flex'>
            <input
                className='new-post-label form-control'
                name='addPost'
                ref={inputRef}
                type='text'
                placeholder='Enter your thoughts here'/>
            <button type='submit' className='btn btn-outline-secondary'>Add</button>
        </form>
    )
}


export default PostAddForm;
