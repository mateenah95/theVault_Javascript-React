import React from 'react';

import Header from './Header';
import Search from './Search';
import Body from './Body';

import './App.css'

class App extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      loading: false,
      certificates: []
    }
  }

  componentWillMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => {
      this.setState({
        certificates: [...data]
      });
    });

    setTimeout(()=>console.log(this.state), 3000);
  }

  render(){
    return(
      <div className='app-container'>
        <Header text={'The Header'} />
        <Search />
        <Body certs={this.state.certificates}/>
        <Header text={'The Footer'} />
      </div>
    )
  }
}

export default App;