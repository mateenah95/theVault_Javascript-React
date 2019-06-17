import React from 'react';

import Header from './Header';
import Search from './Search';
import Body from './Body';

import './App.css'

class App extends React.Component{
  constructor(props){
    super(props);
    this.updateKey = this.updateKey.bind(this);
    this.updateOutput = this.updateOutput.bind(this);

    this.state = {
      key: '',
      certificates: [],
      certificatesToShow: []
    }
  }

  componentWillMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => {
      this.setState({
        certificates: [...data],
        certificatesToShow: [...data]
      });
    });
  }

  updateOutput(){
    let len = this.state.certificates.length;
    let newShowList = [];

    if(this.state.key === ''){
      this.setState(prevState=>{
        return {
          certificatesToShow: this.state.certificates
        }
      });
    }

    let i;
    for(i=0;i<len;i++){
      if(this.state.certificates[i].name.toLowerCase().includes(this.state.key.toLowerCase())){
        newShowList.push(this.state.certificates[i]);
      }
    }

    this.setState(prevState => {
      return {
        certificatesToShow: [...newShowList]
      }
    });

  }

  updateKey(e){
    let newVal = e.target.value;
    this.setState(prevState => {
        return {
            key: newVal
        }
    });
  }

  render(){
    return(
      <div className='app-container card'>
        <Header text={'The Vault'} />
        <Search updateKey={this.updateKey} updateOutput={this.updateOutput}/>
        <Body certs={this.state.certificatesToShow}/>
        <Header />
      </div>
    )
  }
}

export default App;