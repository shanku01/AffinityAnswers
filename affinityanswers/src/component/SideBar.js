import React,{Component} from 'react';
import './App.css';

class SideBar extends Component{
  render(){
  let list=this.props.data; 
  const items = []
  for (const x in list) {
    items.push(<a className="box" onClick={this.props.hdata.bind(this,x)} key={x}>{x}</a>)
  }
  return (
    <div className="sidenav">
    	  {items}
    </div>
  );
}
}
export default SideBar;