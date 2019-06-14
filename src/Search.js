import React from 'react';

import './Search.css'

class Search extends React.Component{
    render(){
        return(
            <div className='search-container'>
                <input type='text' className='search-input'></input>
                <input type='submit' className='search-button'></input>
            </div>
        )
    }
}

export default Search;