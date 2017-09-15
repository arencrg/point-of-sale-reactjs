import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class CheckOut extends Component {
  constructor(props) {
    super(props);
    this.state = {quantity:0};
    this.add = this.add.bind(this);
    this.remove = this.remove.bind(this);
    this.show = this.show.bind(this);
} 

add(){
  if (this.props.quantity !== 0){
    this.setState({quantity: this.state.quantity + 1});
    this.props.handleTotal(this.props.price);
    this.props.handleQuantity(this.props.name, -1, this.props.price);
  }
}

remove(){
    if (this.state.quantity !== 0){
      this.setState({quantity: this.state.quantity - 1});
      this.props.handleTotal(-this.props.price);
      this.props.handleQuantity(this.props.name, 1, -this.props.price);
    }
  }

show(){
    this.props.handleShow(this.props.name);
  }

  render(){
    return(
    <div>
      
      <br/>
      <br/>
        <div className="selected">
        Orders
        <tbody>
        <tr>
          <th>Item</th> &nbsp; &nbsp;
          <th>Quantity</th> &nbsp; &nbsp;
          <th>Price</th> &nbsp; &nbsp;
        </tr>
        <tr>
          <td> {this.props.name} </td>
          <td> {this.props.quantity} </td>
          <td> {this.props.price} </td>
        </tr>
        
      </tbody>

        </div>
        
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
  this.state={total: 0, 
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
        <CheckOut/>  
     </div>
    </div>

    );
  }
}

export default Item;