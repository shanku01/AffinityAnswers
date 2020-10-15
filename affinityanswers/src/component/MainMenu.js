import React,{Component} from 'react';
import './App.css';

class MainMenu extends Component{

  render(){
  let list=this.props.data;
  return (
    <div className="main">
    {list.map(item => (
    	<div class="card">
  <img src={item.img} alt="Denim Jeans" />
  <p>{item.name}</p>
  <p><button onClick={this.props.addtoCart.bind(this,item.name,item)}>Add to Cart</button></p>
  </div>
    ))}
    </div>
  );
}
}
export default MainMenu;