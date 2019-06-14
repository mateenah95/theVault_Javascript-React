import React from 'react';

import './Body.css'

class Body extends React.Component{
    render(){
        return(
            <div className='body-container'>
                <h2>Body</h2>
                <p>{this.props.certs ? 'Green' : 'Red'}</p>
                {this.props.certs.map((cert)=>(
                    <div>
                        <h2>ID: {cert.id}</h2>
                        <h3>Name: {cert.name}</h3>
                    </div>
                ))}
            </div>
        )
    }
}

export default Body;