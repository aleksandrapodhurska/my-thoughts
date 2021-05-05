import React from 'react';
import './post-add-form.css';

const PostAddForm = (props) => {
    return(
        <form
        onSubmit={props.handleAdding}
        className='bottom-panel d-flex'>
            <textarea
                className='new-post-label form-control'
                name='addPost'
                ref={props.inputRef}
                type='text'
                rows="1"
                placeholder='Enter your thoughts here'/>
            <button type='submit' className='btn btn-outline-secondary'>Add</button>
        </form>
    )
}


export default PostAddForm;
