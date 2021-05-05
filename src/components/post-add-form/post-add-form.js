import React from 'react';
import './post-add-form.css';

const PostAddForm = () => {

    return(
        <form className='bottom-panel d-flex'>
            <input
                className='new-post-label form-control'
                type='text'
                placeholder='Enter your thoughts here'/>
            <button type='submit' className='btn btn-outline-secondary'>Add</button>
        </form>
    )
}

export default PostAddForm;
