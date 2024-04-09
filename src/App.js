import React,{useState} from "react";
import Header from "./Components/Layout/Header";
import Meals from './Components/Meals/Meals'
import Cart from "./Components/Cart/Cart";
import CartProvider from "./Store/CartProvide";
function App() {

  const [cartIsShown,setCartIsShown]=useState(false);

  const hideCartHandler=()=>{
    setCartIsShown(false)
  }
  const showCartHandler=()=>{
    setCartIsShown(true)
  }

  return (<CartProvider>
    {cartIsShown&&<Cart   onCloseCart={hideCartHandler}></Cart>}
    <Header onShowCart={showCartHandler}></Header>
    <Meals></Meals>
    <div>
      <h2>Let's get started!</h2>
    </div>
    </CartProvider>
  );
}

export default App;
