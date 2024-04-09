import React,{useState} from "react";
import Header from "./Components/Layout/Header";
import Meals from './Components/Meals/Meals'
import Cart from "./Components/Cart/Cart";
function App() {

  const [cartIsShown,setCartIsShown]=useState(false);

  const hideCartHandler=()=>{
    setCartIsShown(false)
  }
  const showCartHandler=()=>{
    setCartIsShown(true)
  }

  return (<React.Fragment>
    {cartIsShown&&<Cart   onCloseCart={hideCartHandler}></Cart>}
    <Header onShowCart={showCartHandler}></Header>
    <Meals></Meals>
    <div>
      <h2>Let's get started!</h2>
    </div>
    </React.Fragment>
  );
}

export default App;
