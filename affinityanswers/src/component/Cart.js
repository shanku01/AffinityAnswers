import React,{Component} from 'react';
import './App.css';
class Cart extends Component{
  render(){
  let list=this.props.data;
  return (
    <div className="mycart">
    {list.map(item => (
    	<div class="card">
    	<img src={item.img} alt="a cart pic" />
    	<p>{item.name}</p>
    	<p><button>Remove</button></p>
    	</div>
    ))}
    </div>
  );
}
}
export default Cart;