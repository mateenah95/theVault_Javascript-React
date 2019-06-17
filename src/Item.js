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
            <div class="card item_container">
                <div class="card-header bg-dark">
                    <h2>Name: {this.props.cert.name}</h2>
                </div>
                <div class="card-body">
                    <h5><em>Email: {this.props.cert.email}</em></h5>
                    <button className='open_button btn btn-dark' onClick={this.alertClick}>Open</button>
                </div>
                <div class="card-footer text-muted bg-dark">
                    <span className="remover">Remove</span>
                </div>
            </div>
        )
    }
}

export default Item;