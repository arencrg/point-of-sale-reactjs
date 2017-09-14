import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class OneItem extends Component {
  constructor(props) {
    super(props);
    this.quantity = {quantity:0};
    this.add = this.add.bind(this);
    this.minus = this.minus.bind(this);
} 

add(n,q,p){
    this.setState({quantity: this.state.quantity + 1});
    var orderss = {name:n, quantity: q, price: p};
    this.setState({orders: this.state.orders.concat(orderss)});
}

minus(){
    this.setState({quantity: this.state.quantity - 1});
}

    render(){
      return(
        <div>
          
          <button onClick={this.add}>+</button>
          <button onClick={this.minus}>-</button>
        </div>
      );
    }
  }


class CheckOut extends Component {

  render(){
    var ordersz = this.props.ordersz.map(function(item){
      return(

        <tr>
            <td>{item.name}</td> &nbsp; &nbsp;
            <td>{item.quantity}</td> &nbsp; &nbsp;
            <td>{item.price}</td> &nbsp; &nbsp;
        </tr>   
      );
    });

    return(
    <div>
      <input type="text" placeholder="Search"  style = {{width: 390}}/>
      <br/>
      <br/>
        <div className="selected">
        Orders
        <tbody>
        <tr>
          <th>Item</th> &nbsp; &nbsp;
          <th>Quantity</th> &nbsp; &nbsp;
          <th>Price</th> &nbsp; &nbsp;
          <OneItem/>
        </tr>
        
      </tbody>

        </div>
        <br/>
        Discount:
        <br/>
        Subtotal:
        <br/>
        Total:
    </div>

    );
  }
}



class ItemForm extends Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);

  }

  submit(e) {
    e.preventDefault();
     var product = {
      name: this.refs.name.value, 
      quantity: this.refs.quantity.value, 
      price: parseInt(this.refs.price.value)
    };
    this.props.handleCreate(product);
    alert(product.name + " has been added");
    this.refs.name.value="";
    this.refs.quantity.value="";
    this.refs.price.value="";

  }

  
  render() {
    return(

      <form onSubmit={this.submit}>
        <input type="text" placeholder="Type Item" ref="name" style = {{width: 300}}/><br/>
        <input type="text" placeholder="Type quantity" ref="quantity" style = {{width: 300}}/><br/>
        <input type="text" placeholder="Type price" ref="price" style = {{width: 300}}/>
        <br/>
        <button>Add to Inventory</button>

      </form>



    )
  }
}




class Item extends Component {
constructor(props) {
  super(props);
  this.state={ 
    items: [
    {name:"Vitamin A", quantity: 12, price: 10},
    {name:"Vitamin B", quantity: 15, price: 19},
    {name:"Vitamin C", quantity: 17, price: 17},
    {name:"Vitamin C", quantity: 17, price: 17}],orders:[]
    };
    this.createProduct = this.createProduct.bind(this);
  }
 
 createProduct(product) {
    this.setState({
      items: this.state.items.concat(product)
    });
  }


  render() {
    var component = this;
    var item_array = this.state.items.map(function(items){
      return(

        <tr>

            <td>{items.name}</td> &nbsp; &nbsp;
            <td>{items.quantity}</td> &nbsp; &nbsp;
            <td>{items.price}</td> &nbsp; &nbsp;
            <td><button onClick={component.add}>+</button></td>
            <td><button onClick={component.minus}>-</button></td>
        </tr>   
      );
    });

    return  (
    <div>  
     <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
       <ItemForm handleCreate={this.createProduct}/>
       <div className="list">
       <tbody>
        <tr>
          <th>Item</th> &nbsp; &nbsp;
          <th>Quantity</th> &nbsp; &nbsp;
          <th>Price</th> &nbsp; &nbsp;
          <th>Buy</th> &nbsp; &nbsp;

        </tr>
        {item_array}
      </tbody>
      </div>
     </div>
     <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
        <CheckOut ordersz={this.state.orders}/>  
     </div>
    </div>

    );
  }
}

export default Item;