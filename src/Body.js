import React from 'react';
import Item from './Item'

import './Body.css'

class Body extends React.Component{
    render(){
        if(this.props.certs.length === 0){
            return (
                <div className='body-container'>
                    <h1 className='body-title'>No Matching Certificates</h1>
                </div>
            )
        }
        else{
            return (
                <div className='body-container'>
                    <h1 className='body-title'>Users ({this.props.certs.length})</h1>
                    {this.props.certs.map((cert)=><Item cert={cert} />)}
                </div>
            )
        }
    }
}

export default Body;