import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Item extends Component {
constructor(props) {
  super(props);
  this.state={ 
    items: [
    {name:"Vitamin A", quantity: 12, price: 10},
    {name:"Vitamin B", quantity: 15, price: 19},
    {name:"Vitamin C", quantity: 17, price: 17},
    {name:"Vitamin D", quantity: 18, price: 13}]

    };
    
  }


  render() {
    var component = this;
    var item_array = this.state.items.map(function(items){
      return(

        <tr>
            <td>{items.name}</td> &nbsp; &nbsp;
            <td>{items.quantity}</td> &nbsp; &nbsp;
            <td>{items.price}</td> &nbsp; &nbsp;
        </tr>
      );
    });

    return  (
    <div>  
     <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
       <tbody>
        <tr>
          <th>Item</th> &nbsp; &nbsp;
          <th>Quantity</th> &nbsp; &nbsp;
          <th>Price</th> &nbsp; &nbsp;
        </tr>
        {item_array}
      </tbody>
     </div>
     <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
      Checkout
      
     </div>
    </div>

    );
  }
}

export default Item;