import React,{Component} from 'react';
import './component/App.css';
import Navbar from "./component/Navbar.js"
import Sidebar from "./component/SideBar.js"
import MainMenu from "./component/MainMenu.js"
import Cart from "./component/Cart.js"
class App extends Component{
  constructor(props) {  
        super(props);  
        this.state = {  
            open: false,
            data:{
              catagory1:[
                {
                  img:"link1",
                  name:'product1'
                },
                {
                  img:"link1",
                  name:'product2'
                },
                {
                  img:"link1",
                  name:'product3'
                },
                {
                  img:"link1",
                  name:'product4'
                },
                {
                  img:"link1",
                  name:'product5'
                },
                {
                  img:"link1",
                  name:'product6'
                },
                {
                  img:"link1",
                  name:'product1'
                },
                {
                  img:"link1",
                  name:'product1'
                }
              ],
              catagory2:[
                {
                  img:"link1",
                  name:'product1'
                },
                {
                  img:"link1",
                  name:'product2'
                },
                {
                  img:"link1",
                  name:'product3'
                },
                {
                  img:"link1",
                  name:'product4'
                },
                {
                  img:"link1",
                  name:'product5'
                },
                {
                  img:"link1",
                  name:'product6'
                },
                {
                  img:"link1",
                  name:'product7'
                },
                {
                  img:"link1",
                  name:'product8'
                }
              ],
              catagory3:[
                {
                  img:"link1",
                  name:'product1'
                },
                {
                  img:"link1",
                  name:'product2'
                },
                {
                  img:"link1",
                  name:'product3'
                },
                {
                  img:"link1",
                  name:'product4'
                },
                {
                  img:"link1",
                  name:'product5'
                },
                {
                  img:"link1",
                  name:'product6'
                },
                {
                  img:"link1",
                  name:'product7'
                },
                {
                  img:"link1",
                  name:'product8'
                }
              ]
            },
            cart:[],
            maindata:[
                {
                  img:"link1",
                  name:'product1'
                },
                {
                  img:"link1",
                  name:'product2'
                },
                {
                  img:"link1",
                  name:'product3'
                },
                {
                  img:"link1",
                  name:'product4'
                },
                {
                  img:"link1",
                  name:'product5'
                },
                {
                  img:"link1",
                  name:'product6'
                },
                {
                  img:"link1",
                  name:'product7'
                },
                {
                  img:"link1",
                  name:'product8'
                }
              ]};  
        this.togglebutton = this.togglebutton.bind(this);
        this.mainfunction=this.mainfunction.bind(this);  
    }  
    togglebutton() {  
        const { open } = this.state;  
        this.setState({  
            open: !open,  
        });  
    }
    mainfunction(x){
      this.setState({
        maindata:this.state.data[x]
      });
      
    }
    addtoCart(x,y){
      const mycart =this.state.cart;
      mycart.push(y);
      this.setState({
        cart:mycart
      });
      console.log(this.state.cart);
    }  
  render(){
  const { open } = this.state;
  return (
    <div>
    <Navbar onclick={this.togglebutton}/>
    <Sidebar data={this.state.data} hdata={this.mainfunction}/>
    <MainMenu data={this.state.maindata} addtoCart={this.addtoCart.bind(this)}/>
    {open && ( <Cart data={this.state.cart}/> )}  
    </div>
  );
}
}
export default App;
