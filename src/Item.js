import React from 'react';
import './Item.css'

class Item extends React.Component{
    constructor(props){
        super(props);
        this.alertClick = this.alertClick.bind(this);
    }

    alertClick(e){
        alert(`Clicked: ${this.props.cert.name}`);
    }

    render(){
        return(
            <div className='item_container'>
                <h2>ID#: {this.props.cert.id}</h2>
                <h2>Name: {this.props.cert.name}</h2>
                <h3>Email: {this.props.cert.email}</h3>
                <button className='open_button' onClick={this.alertClick}>Open</button>
            </div>
        )
    }
}

export default Item;