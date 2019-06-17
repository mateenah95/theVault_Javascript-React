import React from 'react';
import './Header.css'

class Header extends React.Component{
  render(){
    if(this.props.text){
      return (
        <div className='header-container bg-dark'>
          <h1>{this.props.text}</h1>
        </div>
      )
    }
    else{
      return (
        <div className='header-container bg-dark'>
          <h3>By: Mateen Ahmed</h3>
          <h5><em><a href="http://github.com/mateenah95">http://github.com/mateenah95</a></em></h5>
        </div>
      )
    }
  }
}

export default Header;