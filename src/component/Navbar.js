import React,{Component} from 'react';
import './App.css';
import profile from './res/profile.jpg'
class App extends Component{

  render(){
  return (
    <div className="navbar">
    <ul>
    <li className="nav"><a className="heading" href="#">BlaBla Cart</a></li>
    <li className="right">
    	<ul>
    	<li className="nav cart" style={{marginRight:'20px'}}><button className="btn" onClick={this.props.onclick}>CART</button></li>
    	<li className="nav" ><img src={profile} className="username"/></li>
    	<li className="nav" ><a href="#" >Username</a></li>
    	</ul>
    </li>
    </ul>
    </div>
  );
}
}
export default App;