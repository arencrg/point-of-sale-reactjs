import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';





class Action extends Component {
  constructor(props) {
    super(props);
  this.quantity = {quantity:0};
  this.add = this.add.bind(this);
  this.minus = this.minus.bind(this);
  }

  add(){
    this.setState({quantity: this.state.quantity + 1});
  }

  minus(){
    this.setState({quantity: this.state.quantity - 1});
  }

  render() {
    return (

      <div>
      <button onClick={this.add}>+</button>
      <button onClick={this.minus}>-</button>
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
        <input type="text" placeholder="Type Item" ref="name"/><br/>
        <input type="text" placeholder="Type quantity" ref="quantity"/><br/>
        <input type="text" placeholder="Type price" ref="price"/>
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
    {name:"Vitamin D", quantity: 18, price: 13}]

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
            <td><Action/></td>
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
          <th>Action</th> &nbsp; &nbsp;
        </tr>
        {item_array}
      </tbody>
      </div>
     </div>
     <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
      <input type="text" placeholder="Search"/>
      <br/>
 
      
     </div>
    </div>

    );
  }
}

export default Item;