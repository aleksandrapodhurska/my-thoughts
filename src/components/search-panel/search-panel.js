import React from 'react';
import './search-panel.css';

const SearchPanel = ({setKeyword}) => {
    
    return(
        <input
            className='form-control search-input shadow-sm'
            type='text'
            placeholder='type here to search'
            onChange={e => setKeyword(e.target.value)}
        />
    )
}

export default SearchPanel;