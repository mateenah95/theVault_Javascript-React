import React from 'react';

import './Search.css'

class Search extends React.Component{
    render(){
        return(
            <div className='search-container'>
                <h2>Filter By:</h2>
                <input type='text' placeholder='Search Here...' autoFocus onChange={this.props.updateKey} className='search-input'></input>
                <button className='search-button' onClick={this.props.updateOutput}>Search</button>
            </div>
        )
    }
}

export default Search;