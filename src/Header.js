import React from 'react';
import './Header.css'

class Header extends React.Component{
  render(){
    return (
      <div className='header-container'>
        <h1>{this.props.text}</h1>
      </div>
    )
  }
}

export default Header;