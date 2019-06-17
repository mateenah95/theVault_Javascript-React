import React from 'react';

import './Search.css'

class Search extends React.Component{
    render(){
        return(
            <div className='search-container'>
                <h2>Filter By:</h2>
                <div class="input-group mb-3">
                    <input type="text" className="form-control search-input" placeholder="Search here..." autofocus onChange={this.props.updateKey} />
                </div>
                <button className='search-button btn btn-dark' onClick={this.props.updateOutput}>Search</button>
            </div>
        )
    }
}

export default Search;